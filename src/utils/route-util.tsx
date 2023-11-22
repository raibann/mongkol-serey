/* Route Path */
export const ROUTE_PATH = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  error: '/page-not-found',
  notification: {
    root: '/notifications',
    anniversary: '/notifications/aniversaries',
    upcomings: '/notifications/upcoming',
  },
  orders: {
    root: '/orders',
    quotations: '/orders/quotations',
    payments: '/orders/customer-payments',
    createOrderExistingCustomer: '/orders/create-order-existing-customer',
    createOrderNewCustomer: '/orders/create-order-new-customer',
    updateBooking: '/orders/update-booking-invoice/:id',
    updateFinal: '/orders/update-final-invoice/:id',
    previewInvoice: '/orders/preview/:id',
    updatePayment: '/orders/update-payment/:id',
    createQuotation: '/orders/create-quotation',
    updateQuotation: '/orders/update-quotation/:id',
    previewQuotation: '/orders/preview-quotation/:id',
  },
  expenses: {
    root: '/expenses',
    updateExpense: '/expenses/update-expense/:id',
    previewExpense: '/expense/preview/:id',
  },
  customers: {
    root: '/customers',
    createNewCustomer: '/customers/create-new-customer',
    updateCustomer: '/customers/update-customer/:id',
    potentialCustomers: '/customers/potential-customers',
    createPotentialCustomer: '/customers/create-new-potential-customer',
    updatePotentialCustomer: '/customers/update-potential-customer/:id',
  },
  menus: {
    root: '/menus',
    food: '/menus/food-menus',
    createFood: '/menus/create-food-menus',
    updateFood: '/menus/update-food-menus/:id',
    createMenuPackage: '/menus/create-new-package',
    updateMenuPackage: '/menus/update-package/:id',
  },
  prepareGrocery: {
    root: '/prepare-groceries',
    createGrocery: '/prepare-grocery/create-new-list',
    updateGrocery: '/prepare-grocery/update-list/:id',
    previewGrocery: '/prepare-grocery/preview/:id',
  },
  inventories: {
    root: '/inventories',
    units: '/inventories/units',
    categories: '/inventories/categories',
    addInventory: '/inventories/add-new-inventory',
    editInventory: '/inventories/edit-inventory/:id',
    inventoryReport: '/inventories/reports',
    createNewProduct: '/inventories/create-new-product',
    updateProduct: '/inventories/update-product/:id',
    createNewUnit: '/inventories/create-new-unit',
    updateUnit: '/inventories/update-unit/:id',
    createNewCategory: '/inventories/create-new-category',
    updateCategory: '/inventories/update-category/:id',
  },

  suppliers: {
    root: '/suppliers',
    createNewSupplier: '/suppliers/create-new-supplier',
    updateSupplier: '/suppliers/update-supplier/:id',
  },
  users: {
    root: '/users',
    createNewUser: '/users/create-new-user',
    updateUser: '/users/update-user/:id',
    departments: '/users/departments',
    createNewDepartment: '/users/create-new-department',
    updateDepartment: '/users/update-department/:id',
  },
  setting: {
    root: '/setting',
    updateProfile: '/setting/update-profile/:id',
    updateCompanyProfile: '/setting/update-company-profile',
    updateExchangeRate: '/setting/update-exchange-rate',
  },
};

/* Route Path API */
export const ROUTE_API = {
  login: '/api/auth/v1/login',
  refreshToken: '/api/auth/v1/refresh-token',

  ordersList: '/api/orders/v1/list',
  orderAction: '/api/orders/v1/action',
  deleteOrder: '/api/orders/v1/delete/:id',
  menuList: '/api/v2/menu_list',
  categoryList: '/api/v2/category',

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

  userList: '/api/auth/v1/users',
  addNewUser: '/api/auth/v1/user/save',
  updateUser: '/api/auth/v1/user/update/:id',
  deleteUser: '/api/auth/v1/user/delete/:id',
  saveRole: '/api/auth/v1/role/save',
  addRoleToUser: '/api/auth/v1/role/adduser',
};
