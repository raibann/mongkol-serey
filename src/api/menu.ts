import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const MENU_API = {
  getListFoods: async () => {
    const res: IMenu.ResFoods[] = await HttpUtil.get(ROUTE_API.listFoods);
    return res;
  },

  getListMenu: async () => {
    const res: IMenu.ResMenus[] = await HttpUtil.get(ROUTE_API.listMenus);
    return res;
  },
};

export default MENU_API;
