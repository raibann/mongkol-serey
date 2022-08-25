import Layout from 'layout';
import Dashboard from 'pages/Dashboard';
import Orders from 'pages/Orders';
import Stocks from 'pages/Stocks';
import Reminder from 'pages/Reminder';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import Customer from 'pages/Customer';
import Expense from 'pages/Expense';
import Users from 'pages/Users';
import { useAuthContext } from 'context/AuthContext';
const Login = lazy(() => import('pages/Login'));
// const Home = lazy(() => import('pages/Home'));
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
          path={ROUTE_PATH.manageusers}
          element={
            <Suspense>
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
            <Suspense>
              <Login />
            </Suspense>
          )
        }
      />
    </Routes>
  );
}
