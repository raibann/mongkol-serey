export const ROUTE_PATH = {
  root: '/',
  dashboard: 'dashboard',
  orders: 'orders',
  login: 'login',
  stocks: 'stocks',
  error: 'pagenotfound',
  reminder: 'reminder',
  customers: 'customers',
  expense: 'expense',
  manageusers: 'manage-users',
};
export const ROUTE_API = {
  login: '/api/login',

  ordersList: '/api/orders/v1/list',
  addOrder: '/api/orders/v1/action',

  customersList: '/api/customer/v1/list',
  customerDetails: '/api/customer/v1/:id',
  addCustomer: '/api/customer/v1/action',

  expensesList: '/api/expense/v1/orders',

  remindersList: '/api/reminder/v1/orders',

  charts: '/api/dashboard/v1/charts',
  totals: '/api/dashboard/v1/orders',
};
