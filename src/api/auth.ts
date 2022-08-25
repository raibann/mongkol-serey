import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';
const AUTH_API = {
  postLogin: async (data: IAuth.IAuthBody) => {
    const res: IAuth.IAuthResponse = await HttpUtil.post(
      ROUTE_API.login,
      data,
      {
        headers: {
          'content-type': 'application/json',
          accept: '*/*',
        },
      }
    );
    return res;
  },
};
export default AUTH_API;
