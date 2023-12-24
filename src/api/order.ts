import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const ORDER_API = {
  getOrdersList: async ({
    page,
    status,
    search,
    startDate,
    endDate,
    eventType,
    dateType,
  }: {
    page: string;
    status: string;
    search?: string;
    startDate?: string;
    endDate?: string;
    eventType?: string;
    dateType?: string;
  }) => {
    const res: IOrder.IOrderRes = await HttpUtil.get(ROUTE_API.ordersList, {
      params: {
        page: page,
        status: status,
        search: search,
        startDate: startDate,
        endDate: endDate,
        eventType: eventType,
        dateType: dateType,
      },
    });
    return res.response;
  },
  orderAction: async (
    req: IOrder.IOrderActionReq,
    customerId: number | undefined
  ) => {
    const res: IOrder.Order = await HttpUtil.post(ROUTE_API.orderAction, req, {
      params: { customerId: customerId },
    });
    return res;
  },
  deleteOrder: async (req: { orderId: string }) => {
    const res: any = await HttpUtil.delete(
      ROUTE_API.deleteOrder.replace(':id', req.orderId)
    );
    return res;
  },
  getCategoryAndMenu: async () => {
    const resMenu: IMenuList.IMenuItem[] = await HttpUtil.get(
      ROUTE_API.menuList
    );
    const resCategory: IMenuList.IMenuCategory[] = await HttpUtil.get(
      ROUTE_API.categoryList
    );

    return { resMenu, resCategory };
  },
};
export default ORDER_API;
