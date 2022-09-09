import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const ORDER_API = {
  getOrdersList: async ({
    page,
    status,
    search,
  }: {
    page: string;
    status: string;
    search?: string;
  }) => {
    const res: IOrder.IOrderData = await HttpUtil.get(ROUTE_API.ordersList, {
      params: {
        page: page,
        status: status,
        search: search,
      },
    });
    return res;
  },
};
export default ORDER_API;
