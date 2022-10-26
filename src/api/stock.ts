import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const STOCK_API = {
  getStockList: async ({ search }: { search?: string }) => {
    const res: IStock.IStockRespone = await HttpUtil.get(ROUTE_API.stockList, {
      params: {
        search: search,
      },
    });
    return res;
  },
  addStock: async ({ stockReq }: { stockReq: IStock.IStockRequest }) => {
    const res: IStock.IStockRequest = await HttpUtil.post(
      ROUTE_API.addStock,
      stockReq
    );
    return res;
  },
  deleteStock: async ({ id }: { id: number }) => {
    const res: IStock.IStockDetails = await HttpUtil.delete(
      ROUTE_API.deleteStock.replace(':id', `${id}`)
    );
    return res;
  },
};
export default STOCK_API;
