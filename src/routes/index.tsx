import Layout from 'layout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { useAuthContext } from 'context/AuthContext';
import FinalInvoice from 'pages/Orders/pages/FinalInvoice';

// Parent Page

// --login --
const Login = lazy(() => import('pages/Login'));

// -- dashboard --
const Dashboard = lazy(() => import('pages/Dashboard'));

// -- order --
const Orders = lazy(() => import('pages/Orders'));
const Quotation = lazy(() => import('pages/Orders/pages/Quotations'));
const Payments = lazy(() => import('pages/Orders/pages/Payments'));
const QuotationForm = lazy(() => import('pages/Orders/pages/QuotationForm'));
const UpdatePayments = lazy(() => import('pages/Orders/pages/UpdatePayments'));
const PreviewQuotation = lazy(
  () => import('pages/Orders/pages/PreviewQuotation')
);
const OrderForm = lazy(() => import('pages/Orders/pages/OrderForm'));

// -- expense --
const Expense = lazy(() => import('pages/Expenses'));
const UpdateExpenseForm = lazy(
  () => import('pages/Expenses/pages/UpdateExpenseForm')
);

// -- customer --
const Customer = lazy(() => import('pages/Customers'));
const Potentials = lazy(() => import('pages/Customers/pages/potential'));
const NewCustomerForm = lazy(
  () => import('pages/Customers/pages/NewCustomerForm')
);
const NewPotentialForm = lazy(
  () => import('pages/Customers/pages/potential/NewPotentialForm')
);

// -- notification --
const Notifications = lazy(() => import('pages/Notifications'));

// -- menu --
const Menus = lazy(() => import('pages/Menus'));
const MenuForm = lazy(() => import('pages/Menus/pages/MenuPackageForm'));
const FoodMenuForm = lazy(() => import('pages/Menus/pages/FoodMenuForm'));
const FoodMenus = lazy(() => import('pages/Menus/pages/FoodMenus'));

// -- preparegrocery --
const PrepareGrocery = lazy(() => import('pages/PrepareGrocery'));
const PrepareGroceryForm = lazy(
  () => import('pages/PrepareGrocery/pages/PrepareGroceryForm')
);

// -- inventeries --
const Inventories = lazy(() => import('pages/Inventories'));
const InventoryUnit = lazy(() => import('pages/Inventories/pages/Units'));
const InventoryCategory = lazy(
  () => import('pages/Inventories/pages/Categories')
);
const InventoryReport = lazy(() => import('pages/Inventories/pages/Reports'));
const InventoryForm = lazy(
  () => import('pages/Inventories/pages/InventoryForm')
);

// -- suppliers --
const Suppliers = lazy(() => import('pages/Suppliers'));
const NewSupplierForm = lazy(
  () => import('pages/Suppliers/pages/NewSupplierForm')
);

// -- users --
const Users = lazy(() => import('pages/Users'));
const Roles = lazy(() => import('pages/Users/pages/Roles'));
const NewRoleForm = lazy(() => import('pages/Users/pages/Roles/NewRoleForm'));
const NewUserForm = lazy(() => import('pages/Users/pages/NewUserForm'));

// -- setting --
const Setting = lazy(() => import('pages/Setting'));

// Children Page

// --- setings
const UpdateExchangeRate = lazy(
  () => import('pages/Setting/pages/ExchangeRate')
);
const CustomizePayment = lazy(
  () => import('pages/Setting/pages/CustomizePayment')
);
export default function AllRoutes() {
  const { authState } = useAuthContext();

  return (
    <Routes>
      <Route
        path={ROUTE_PATH.root}
        element={
          authState.authed ? <Layout /> : <Navigate to={ROUTE_PATH.login} />
        }
      >
        {/* Dashboard */}
        <Route
          path={ROUTE_PATH.dashboard}
          element={
            <Suspense>
              <Dashboard />
            </Suspense>
          }
        />

        {/* Orders */}
        <Route
          path={ROUTE_PATH.orders.root}
          element={
            <Suspense>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.createOrder}
          element={
            <Suspense>
              <OrderForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.updateBooking}
          element={
            <Suspense>
              <OrderForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.updateFinal}
          element={
            <Suspense>
              <FinalInvoice />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.createQuotation}
          element={
            <Suspense>
              <QuotationForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.updateQuotation}
          element={
            <Suspense>
              <QuotationForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.previewQuotation}
          element={
            <Suspense>
              <PreviewQuotation />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.quotations}
          element={
            <Suspense>
              <Quotation />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.payments}
          element={
            <Suspense>
              <Payments />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.updatePayment}
          element={
            <Suspense>
              <UpdatePayments />
            </Suspense>
          }
        />

        {/* Expenses */}
        <Route
          path={ROUTE_PATH.expenses.root}
          element={
            <Suspense>
              <Expense />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.expenses.updateExpense}
          element={
            <Suspense>
              <UpdateExpenseForm />
            </Suspense>
          }
        />
        {/* Customers */}
        <Route
          path={ROUTE_PATH.customers.root}
          element={
            <Suspense>
              <Customer />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.customers.createNewCustomer}
          element={
            <Suspense>
              <NewCustomerForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.customers.updateCustomer}
          element={
            <Suspense>
              <NewCustomerForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.customers.potentialCustomers}
          element={
            <Suspense>
              <Potentials />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.customers.createPotentialCustomer}
          element={
            <Suspense>
              <NewPotentialForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.customers.updatePotentialCustomer}
          element={
            <Suspense>
              <NewPotentialForm />
            </Suspense>
          }
        />

        {/* Notification */}
        <Route
          path={ROUTE_PATH.notification.root}
          element={
            <Suspense>
              <Notifications />
            </Suspense>
          }
        />

        {/* Menus */}
        <Route
          path={ROUTE_PATH.menus.root}
          element={
            <Suspense>
              <Menus />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.menus.createMenuPackage}
          element={
            <Suspense>
              <MenuForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.menus.updateMenuPackage}
          element={
            <Suspense>
              <MenuForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.menus.food}
          element={
            <Suspense>
              <FoodMenus />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.menus.createFood}
          element={
            <Suspense>
              <FoodMenuForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.menus.updateFood}
          element={
            <Suspense>
              <FoodMenuForm />
            </Suspense>
          }
        />

        {/* Prepare Grocery */}
        <Route
          path={ROUTE_PATH.prepareGrocery.root}
          element={
            <Suspense>
              <PrepareGrocery />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.prepareGrocery.createGrocery}
          element={
            <Suspense>
              <PrepareGroceryForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.prepareGrocery.updateGrocery}
          element={
            <Suspense>
              <PrepareGroceryForm />
            </Suspense>
          }
        />

        {/* Inventory */}
        <Route
          path={ROUTE_PATH.inventories.root}
          element={
            <Suspense>
              <Inventories />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.inventories.addInventory}
          element={
            <Suspense>
              <InventoryForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.inventories.editInventory}
          element={
            <Suspense>
              <InventoryForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.inventories.units}
          element={
            <Suspense>
              <InventoryUnit />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.inventories.categories}
          element={
            <Suspense>
              <InventoryCategory />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.inventories.inventoryReport}
          element={
            <Suspense>
              <InventoryReport />
            </Suspense>
          }
        />

        {/* Suppliers */}
        <Route
          path={ROUTE_PATH.suppliers.root}
          element={
            <Suspense>
              <Suppliers />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.suppliers.createNewSupplier}
          element={
            <Suspense>
              <NewSupplierForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.suppliers.updateSupplier}
          element={
            <Suspense>
              <NewSupplierForm />
            </Suspense>
          }
        />

        {/* Users */}
        <Route
          path={ROUTE_PATH.users.root}
          element={
            <Suspense>
              <Users />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.users.createNewUser}
          element={
            <Suspense>
              <NewUserForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.users.updateUser}
          element={
            <Suspense>
              <NewUserForm />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.users.roles}
          element={
            <Suspense>
              <Roles />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.users.createNewRole}
          element={
            <Suspense>
              <NewRoleForm />
            </Suspense>
          }
        />

        {/* Setting */}
        <Route
          path={ROUTE_PATH.setting.root}
          element={
            <Suspense>
              <Setting />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.setting.updateExchangeRate}
          element={
            <Suspense>
              <UpdateExchangeRate />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.setting.customizePayment}
          element={
            <Suspense>
              <CustomizePayment />
            </Suspense>
          }
        />

        {/* Root Page */}
        <Route
          path={ROUTE_PATH.root}
          element={<Navigate to={ROUTE_PATH.dashboard} />}
        />
        <Route path='*' element={<Navigate to={ROUTE_PATH.dashboard} />} />
      </Route>
      <Route
        path={ROUTE_PATH.login}
        element={
          authState.authed ? (
            <Navigate to={ROUTE_PATH.root} />
          ) : (
            <Suspense>
              <Login />
            </Suspense>
          )
        }
      />
    </Routes>
  );
}
