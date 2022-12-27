import Layout from 'layout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { useAuthContext } from 'context/AuthContext';
const Login = lazy(() => import('pages/Login'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Orders = lazy(() => import('pages/Orders'));
const Expense = lazy(() => import('pages/Expense'));
const Stocks = lazy(() => import('pages/Stocks'));
const Customer = lazy(() => import('pages/Customer'));
const Reminder = lazy(() => import('pages/Reminder'));
const Quotation = lazy(() => import('pages/Quotation'));

export default function AllRoutes() {
  const { authState } = useAuthContext();
  return (
    <Routes>
      <Route
        path={ROUTE_PATH.root}
        element={
          !authState.authed ? <Layout /> : <Navigate to={ROUTE_PATH.login} />
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
          path={ROUTE_PATH.orders}
          element={
            <Suspense>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.stocks}
          element={
            <Suspense>
              <Stocks />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.reminder}
          element={
            <Suspense>
              <Reminder />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.customers}
          element={
            <Suspense>
              <Customer />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.expense}
          element={
            <Suspense>
              <Expense />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.quotation}
          element={
            <Suspense>
              <Quotation />
            </Suspense>
          }
        />
        {/* <Route
          path={ROUTE_PATH.manageusers}
          element={
            <Suspense >
              <Users />
            </Suspense>
          }
        /> */}

        <Route
          path={ROUTE_PATH.root}
          element={<Navigate to={ROUTE_PATH.dashboard} />}
        />
        <Route path='*' element={<Navigate to={ROUTE_PATH.dashboard} />} />
      </Route>
      <Route
        path={ROUTE_PATH.login}
        element={
          !authState.authed ? (
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
