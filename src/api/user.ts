import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const USER_API = {
  getUserList: async () => {
    const res: IAuth.User[] = await HttpUtil.get(ROUTE_API.userList);
    return res;
  },
};
export default USER_API;
