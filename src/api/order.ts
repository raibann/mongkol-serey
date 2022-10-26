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
    const res: IOrder.IOrderRes = await HttpUtil.get(ROUTE_API.ordersList, {
      params: {
        page: page,
        status: status,
        search: search,
      },
    });
    return res;
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
};
export default ORDER_API;
