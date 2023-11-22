import Layout from 'layout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { useAuthContext } from 'context/AuthContext';

// Parent Page
const Login = lazy(() => import('pages/Login'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Orders = lazy(() => import('pages/Orders'));
const Expense = lazy(() => import('pages/Expenses'));
const Customer = lazy(() => import('pages/Customers'));
const Notifications = lazy(() => import('pages/Notifications'));
const Menus = lazy(() => import('pages/Menus'));
const PrepareGrocery = lazy(() => import('pages/PrepareGrocery'));
const Inventories = lazy(() => import('pages/Inventories'));
const Suppliers = lazy(() => import('pages/Suppliers'));
const Users = lazy(() => import('pages/Users'));
const Setting = lazy(() => import('pages/Setting'));

// Children Page
const Quotation = lazy(() => import('pages/Orders/Quotations'));
const Payments = lazy(() => import('pages/Orders/Payments'));
const Potentials = lazy(() => import('pages/Customers/pages/potential'));
const InventoryUnit = lazy(() => import('pages/Inventories/pages/Units'));
const InventoryCategory = lazy(
  () => import('pages/Inventories/pages/Categories')
);
const InventoryReport = lazy(() => import('pages/Inventories/pages/Reports'));
const Departments = lazy(() => import('pages/Users/pages/Departments'));
const NewDepartmentForm = lazy(
  () => import('pages/Users/pages/Departments/NewDepartmentForm')
);
const MenuForm = lazy(() => import('pages/Menus/pages/MenuPackageForm'));
const NewUserForm = lazy(() => import('pages/Users/pages/NewUserForm'));
const NewSupplierForm = lazy(
  () => import('pages/Suppliers/pages/NewSupplierForm')
);
const NewCustomerForm = lazy(() => import('pages/Customers/pages/NewCustomer'));
const NewPotentialForm = lazy(
  () => import('pages/Customers/pages/potential/NewPotentialForm')
);
const UpdateExpenseForm = lazy(
  () => import('pages/Expenses/pages/UpdateExpenseForm')
);

const InventoryForm = lazy(
  () => import('pages/Inventories/pages/InventoryForm')
);
const FoodMenuForm = lazy(() => import('pages/Menus/pages/FoodMenuForm'));
const FoodMenus = lazy(() => import('pages/Menus/pages/FoodMenus'));
const PrepareGroceryForm = lazy(
  () => import('pages/PrepareGrocery/pages/PrepareGroceryForm')
);

export default function AllRoutes() {
  const { authState } = useAuthContext();
  /* Allow to use without api */
  authState.authed = true;

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
          path={ROUTE_PATH.users.departments}
          element={
            <Suspense>
              <Departments />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.users.createNewDepartment}
          element={
            <Suspense>
              <NewDepartmentForm />
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
