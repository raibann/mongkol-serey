import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const EXPENSE_API = {
  getExpense: async ({
    status,
    search,
  }: {
    status: string;
    search: string;
  }) => {
    const res: IExpense.IExpenseData = await HttpUtil.get(
      ROUTE_API.expensesList,
      {
        params: {
          status: status,
          search: search,
        },
      }
    );
    return res;
  },
};
export default EXPENSE_API;
