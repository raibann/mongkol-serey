export const ROUTE_PATH = {
  root: '/',
  dashboard: '/dashboard',
  orders: '/orders',
  login: '/login',
  stocks: '/stocks',
  error: '/pagenotfound',
  reminder: '/reminder',
  customers: '/customers',
  expense: '/expense',
  manageusers: '/manage-users',
  quotation: '/quotation',
};
export const ROUTE_API = {
  login: '/api/auth/v1/login',
  refreshToken: '/api/auth/v1/refresh-token',

  ordersList: '/api/orders/v1/list',
  orderAction: '/api/orders/v1/action',
  deleteOrder: '/api/orders/v1/delete/:id',

  customersList: '/api/customer/v1/list',
  customerDetails: '/api/customer/v1/:id',
  addCustomer: '/api/customer/v1/action',
  deletCustomer: '/api/customer/v1/delete/:id',

  expensesList: '/api/expense/v1/orders',
  addExpense: '/api/expense/v1/:id',

  remindersList: '/api/reminder/v1/orders',

  charts: '/api/dashboard/v1/charts',
  totals: '/api/dashboard/v1/orders',

  stockList: '/api/stock/v1/list',
  addStock: '/api/stock/v1/action',
  deleteStock: '/api/stock/v1/delete/:id',
};
