import Layout from 'layout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { useAuthContext } from 'context/AuthContext';
import { CusBackDrop } from 'components/CusLoading';
const Login = lazy(() => import('pages/Login'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Orders = lazy(() => import('pages/Orders'));
const Expense = lazy(() => import('pages/Expense'));
const Stocks = lazy(() => import('pages/Stocks'));
const Customer = lazy(() => import('pages/Customer'));
const Reminder = lazy(() => import('pages/Reminder'));
const Users = lazy(() => import('pages/Users'));

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
            <Suspense fallback={<CusBackDrop open={true} />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.orders}
          element={
            <Suspense fallback={<CusBackDrop open={true} />}>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.stocks}
          element={
            <Suspense fallback={<CusBackDrop open={true} />}>
              <Stocks />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.reminder}
          element={
            <Suspense fallback={<CusBackDrop open={true} />}>
              <Reminder />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.customers}
          element={
            <Suspense fallback={<CusBackDrop open={true} />}>
              <Customer />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.expense}
          element={
            <Suspense fallback={<CusBackDrop open={true} />}>
              <Expense />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.manageusers}
          element={
            <Suspense fallback={<CusBackDrop open={true} />}>
              <Users />
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
            <Suspense fallback={<CusBackDrop open={true} />}>
              <Login />
            </Suspense>
          )
        }
      />
    </Routes>
  );
}
