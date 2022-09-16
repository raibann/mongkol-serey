import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const EXPENSE_API = {
  getExpense: async ({
    status,
    search,
    page,
    size,
  }: {
    status: string;
    search: string;
    page: number;
    size?: number;
  }) => {
    const res: IExpense.IExpenseRes = await HttpUtil.get(
      ROUTE_API.expensesList,
      {
        params: {
          status: status,
          search: search,
          page: page || 0,
          size: size || 10,
        },
      }
    );
    return res;
  },
  addExpense: async (orderId: number, data: IExpense.IAddExpenseReq[]) => {
    const res: IExpense.IExpenseRes = await HttpUtil.post(
      ROUTE_API.addExpense.replace(':id', orderId.toString()),
      data
    );
    return res;
  },
};
export default EXPENSE_API;
