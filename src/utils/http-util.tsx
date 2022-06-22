import Axios from 'axios';
import { getPersistedState } from './persist-util';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// // Add a request interceptor
axios.interceptors.request.use(async (config) => {
  const persistedState =
    getPersistedState(process.env.REACT_APP_PERSIST_AUTH) || {};

  const token = persistedState?.token;
  config.headers = {
    Token: token,
    'Client-Language': 'EN',
    'Client-Bundle': 'com.bongtk.bloc',
    'Client-Ver': '2.0',
    'Client-Os': 'BMWEB',
    'Content-Type': 'application/json',
    'Client-API': 'biz',
    Accept: '*/*',
  };

  // console.log('token', token);

  return config;
});

// Add a response interceptor
axios.interceptors.response.use(
  // console.log('interceptors:', err);
  async function (res) {
    if (+res?.data?.error !== 0) {
      return Promise.reject(res.data);
    }
    return res.data;
  },
  function (err) {
    const res = err.response?.data;
    if (!res) {
      return Promise.reject(err);
    }
    return Promise.reject(res);
  }
);

export default axios;
