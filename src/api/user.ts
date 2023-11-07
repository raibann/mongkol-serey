import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const USER_API = {
  getUserList: async () => {
    const res: IAuth.User[] = await HttpUtil.get(ROUTE_API.userList);
    return res;
  },
  saveUser: async (data: IAuth.User) => {
    const { id, ...rest } = data;
    const res: any = await (!id
      ? HttpUtil.post(
          ROUTE_API.addNewUser,

          rest
        )
      : HttpUtil.put(ROUTE_API.updateUser.replace(':id', `${id}`), rest));
    return res;
  },
  deleteUser: async (id: number) => {
    const res: any = await HttpUtil.delete(
      ROUTE_API.deleteUser.replace(':id', `${id}`)
    );
    return res;
  },
  addRoleToUser: async (data: { username: string; roleName: string }) => {
    const res: any = await HttpUtil.post(ROUTE_API.addRoleToUser, data);
    return res;
  },
};
export default USER_API;
