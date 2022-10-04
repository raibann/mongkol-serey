import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';
const AUTH_API = {
  postLogin: async (data: IAuth.IAuthBody) => {
    const res: IAuth.ILoginResponse = await HttpUtil.post(
      ROUTE_API.login,
      data
    );
    return res;
  },
  refreshToken: async (token: string) => {
    const res: IAuth.ILoginResponse = await HttpUtil.get(
      ROUTE_API.refreshToken,
      {
        headers: {
          'content-type': 'application/json',
          accept: '*/*',
          Authorization: token,
        },
      }
    );
    return res;
  },
};
export default AUTH_API;
