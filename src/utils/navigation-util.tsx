import {
  Diagram,
  MenuBoard,
  Notification,
  MoneySend,
  Profile2User,
  Box,
  // LogoutCurve,
  // SecurityUser,
} from 'iconsax-react';
import React from 'react';
import { ROUTE_PATH } from './route-util';

type Navigation = {
  title: string;
  toUrl: string;
  icon: React.ReactNode;
}[];

const navigationUtil: Navigation = [
  {
    title: 'Dashboard',
    toUrl: ROUTE_PATH.dashboard,
    icon: <Diagram size='22' />,
  },
  {
    title: 'Orders',
    toUrl: ROUTE_PATH.orders,
    icon: <MenuBoard size='24' />,
  },
  {
    title: 'Customers',
    toUrl: ROUTE_PATH.customers,
    icon: <Profile2User size='24' />,
  },
  {
    title: 'Expense',
    toUrl: ROUTE_PATH.expense,
    icon: <MoneySend size='24' />,
  },
  {
    title: 'Reminder',
    toUrl: ROUTE_PATH.reminder,
    icon: <Notification size='24' />,
  },
  {
    title: 'Stocks',
    toUrl: ROUTE_PATH.stocks,
    icon: <Box size='24' />,
  },
  // {
  //   title: 'Manage Users',
  // toUrl: ROUTE_PATH.manageusers,
  //   icon: <SecurityUser size='24' />,
  // },
];

export default navigationUtil;
