declare namespace IExpense {
  interface IExpenseRes {
    data: IOrder.Order[];
    totalItem: number;
    totalPage: number;
    message: string;
    status: number;
  }

  interface IAddExpenseReq {
    id?: number;
    expense_on: string;
    paidBy: string;
    price: number;
    note: string;
  }
}
