import Axios from 'axios';
import { getPersistedState } from './persist-util';
// import { getPersistedState } from './persist-util';

const HttpUtil = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// // Add a request interceptor
HttpUtil.interceptors.request.use(async (config) => {
  const persistedState =
    getPersistedState(process.env.REACT_APP_PERSIST_AUTH) || {};

  const token = persistedState?.token;
  config.headers = {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNaW5lYSIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cHM6Ly9tb25na29sLXNlcmV5LWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9hcGkvbG9naW4iLCJleHAiOjE2NjcyOTUwNjl9.Q28gFWACFG-foIOqzp4mYSgUvExuXLt8lmQyjHp9Wuc',
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
