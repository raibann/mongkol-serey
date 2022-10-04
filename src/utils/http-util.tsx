import Axios from 'axios';
import { getPersistedState } from './persist-util';

const HttpUtil = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// // Add a request interceptor
HttpUtil.interceptors.request.use(async (config) => {
  const persistedState =
    getPersistedState(process.env.REACT_APP_PERSIST_AUTH) || {};

  const token = persistedState?.accessToken;
  config.headers = {
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
    accept: '*/*',
  };
  return config;
});
// Add a response interceptor
HttpUtil.interceptors.response.use(
  async function (res) {
    if (+res?.data?.error !== 0) {
      return Promise.resolve(res.data);
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

export default HttpUtil;
