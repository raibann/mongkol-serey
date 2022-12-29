import {
  Notification,
  MoneySend,
  Profile2User,
  Box,
  Chart,
  NoteFavorite,
  // LogoutCurve,
  // SecurityUser,
} from 'iconsax-react';
import React from 'react';
import { ROUTE_PATH } from './route-util';

type Navigation = {
  title: string;
  toUrl: string;
  icon: React.ReactNode;
  onClick?: () => void;
}[];

const navigationUtil: Navigation = [
  {
    title: 'Dashboard',
    toUrl: ROUTE_PATH.dashboard,
    icon: <Chart size='24' variant='Bold' />,
  },
  {
    title: 'Orders',
    toUrl: ROUTE_PATH.orders,
    icon: <NoteFavorite size='24' variant='Bold' />,
  },
  {
    title: 'Customers',
    toUrl: ROUTE_PATH.customers,
    icon: <Profile2User size='24' variant='Bold' />,
  },
  {
    title: 'Expense',
    toUrl: ROUTE_PATH.expense,
    icon: <MoneySend size='24' variant='Bold' />,
  },
  {
    title: 'Reminder',
    toUrl: ROUTE_PATH.reminder,
    icon: <Notification size='24' variant='Bold' />,
  },
  {
    title: 'Stocks',
    toUrl: ROUTE_PATH.stocks,
    icon: <Box size='24' variant='Bold' />,
  },
  // {
  //   title: 'Manage Users',
  // toUrl: ROUTE_PATH.manageusers,
  //   icon: <SecurityUser size='24' />,
  // },
];

export default navigationUtil;
