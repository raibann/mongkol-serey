import Layout from 'layout';
import Dashboard from 'pages/Dashboard';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
const Login = lazy(() => import('pages/Login'));
const Home = lazy(() => import('pages/Home'));
export default function AllRoutes() {
  return (
    <Routes>
      <Route path={ROUTE_PATH.root} element={<Layout />}>
        <Route
          path={ROUTE_PATH.root}
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.dashboard}
          element={
            <Suspense>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path='*' element={<Home />} />
      </Route>
      <Route path={ROUTE_PATH.login} element={<Login />} />
    </Routes>
  );
}
