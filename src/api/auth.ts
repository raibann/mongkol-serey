import { ROUTE_API } from 'utils/route-util';
import HttpUtil from 'utils/http-util';
const AUTH_API = {
  login: async (data: FormData) => {
    const res: IAuth.IAuthRespone = await HttpUtil.post('', data, {
      params: { API: ROUTE_API.login },
    });
    return res;
  },
};
export default AUTH_API;
