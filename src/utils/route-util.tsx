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
    createOrder: '/orders/create-order',
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
  },
  inventories: {
    root: '/inventories',
    units: '/inventories/units',
    categories: '/inventories/categories',
    addInventory: '/inventories/add-new-inventory',
    editInventory: '/inventories/edit-inventory/:id',
    inventoryReport: '/inventories/reports',
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
    roles: '/users/roles',
    createNewRole: '/users/create-new-role',
    updateRole: '/users/update-role/:id',
  },
  setting: {
    root: '/setting',
    updateExchangeRate: '/setting/update-exchange-rate',
    customizePayment: '/setting/customze-payment',
  },
};

/* Route Path API */
export const ROUTE_API = {
  // Auth
  login: '/api/auth/v1/login',
  refreshToken: '/api/auth/v1/refresh-token',

  // Orders
  ordersList: '/api/orders/v1/list',
  orderAction: '/api/orders/v1/action',
  deleteOrder: '/api/orders/v1/delete/:id',
  menuList: '/api/v2/menu_list',
  categoryList: '/api/v2/category',

  // Customer
  customersList: '/api/customer/v1/list',
  customerDetails: '/api/customer/v1/:id',
  addCustomer: '/api/customer/v1/action',
  updateCustomer: '/api/customer/v1/:id',
  deletCustomer: '/api/customer/v1/delete/:id',

  // Supplier
  suppliersList: '/api/suppliers/v1/list',
  suppliersDetails: '/api/suppliers/v1/:id',
  updateSupplier: '/api/suppliers/v1/:id',
  deleteSupplier: '/api/suppliers/v1/delete/:id',
  addNewSupplier: '/api/suppliers/v1/action',

  // Expense
  expensesList: '/api/expense/v1/orders',
  addExpense: '/api/expense/v1/:id',

  // Notification
  remindersList: '/api/reminder/v1/orders',

  // Dashboard
  charts: '/api/dashboard/v1/charts',
  totals: '/api/dashboard/v1/orders',

  // Inventory
  stockList: '/api/stock/v1/list',
  stockReportList: '/api/stockReport/v1/list',
  stockDetail: '/api/stock/v1/:id',
  createStock: '/api/stock/v1/action',
  updateStock: '/api/stock/v1/:id',
  deleteStock: '/api/stock/v1/delete/:id',
  //
  unitList: '/api/unit/v1/list',
  unitDetail: '/api/unit/v1/:id',
  createUnit: '/api/unit/v1/action',
  updateUnit: '/api/unit/v1/:id',
  deleteUnit: '/api/unit/v1/delete/:id',
  //
  productList: '/api/product/v1/list',
  productDetail: '/api/product/v1/:id',
  createProduct: '/api/product/v1/action',
  updateProduct: '/api/product/v1/:id',
  deleteProduct: '/api/product/v1/delete/:id',
  //
  stockCategoryList: '/api/category/v1/list',
  stockCategoryDetail: '/api/category/v1/:id',
  stockCreateCategory: '/api/category/v1/action',
  stockUpdateCategory: '/api/category/v1/:id',
  stockDeleteCategory: '/api/unit/v1/delete/:id',

  // User
  userList: '/api/auth/v1/users',
  addNewUser: '/api/auth/v1/user/save',
  updateUser: '/api/auth/v1/user/update/:id',
  deleteUser: '/api/auth/v1/user/delete/:id',
  saveRole: '/api/auth/v1/role/save',
  addRoleToUser: '/api/auth/v1/role/adduser',

  // geography
  province: '/api/geography/v1/provinces',
  district: '/api/geography/v1/districts/:id',
  commune: '/api/geography/v1/communes/:id',

  // menu
  listMenus: '/api/menus/v1/list',

  // food
  listFoods: '/api/foods/v1/list',
};
