import Layout from 'layout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { useAuthContext } from 'context/AuthContext';

/* Parent Page */
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
/* Children Page */
const Quotation = lazy(() => import('pages/Orders/Quotation'));

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
        <Route
          path={ROUTE_PATH.dashboard}
          element={
            <Suspense>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders.root}
          element={
            <Suspense>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.inventories.root}
          element={
            <Suspense>
              <Inventories />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.notification}
          element={
            <Suspense>
              <Notifications />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.customers.root}
          element={
            <Suspense>
              <Customer />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.expenses.root}
          element={
            <Suspense>
              <Expense />
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
          path={ROUTE_PATH.users.root}
          element={
            <Suspense>
              <Users />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.menus.root}
          element={
            <Suspense>
              <Menus />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.prepareGrocery.root}
          element={
            <Suspense>
              <PrepareGrocery />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.suppliers.root}
          element={
            <Suspense>
              <Suppliers />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.setting.root}
          element={
            <Suspense>
              <Setting />
            </Suspense>
          }
        />

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
