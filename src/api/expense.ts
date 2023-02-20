import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const EXPENSE_API = {
  getExpense: async ({
    status,
    search,
    page,
    size,
    dateType,
    endDate,
    eventType,
    startDate,
  }: {
    page: number;
    status: string;
    search?: string;
    size?: number;
    startDate?: string;
    endDate?: string;
    eventType?: string;
    dateType?: string;
  }) => {
    const res: IExpense.IExpenseRes = await HttpUtil.get(
      ROUTE_API.expensesList,
      {
        params: {
          status: status,
          search: search,
          page: page || 0,
          size: size || 10,
          startDate: startDate,
          endDate: endDate,
          eventType: eventType,
          dateType: dateType,
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
