declare namespace IExpense {
  interface IExpenseRes {
    data: IOrder.Order[];
    totalItem: number;
    totalPage: number;
    message: string;
    status: number;
  }

  interface IAddExpenseReq {
    expense_on: string;
    paidBy: string;
    quantity?: number;
    price: number;
    note: string;
  }
}
