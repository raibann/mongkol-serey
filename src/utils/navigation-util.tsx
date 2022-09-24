import {
  Diagram,
  MenuBoard,
  LogoutCurve,
  Notification,
  SecurityUser,
  MoneySend,
  Profile2User,
  Box,
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
    toUrl: 'customers',
    icon: <Profile2User size='24' />,
  },
  {
    title: 'Expense',
    toUrl: 'expense',
    icon: <MoneySend size='24' />,
  },
  {
    title: 'Reminder',
    toUrl: 'reminder',
    icon: <Notification size='24' />,
  },
  {
    title: 'Stocks',
    toUrl: 'stocks',
    icon: <Box size='24' />,
  },
  {
    title: 'Manage Users',
    toUrl: 'manage-users',
    icon: <SecurityUser size='24' />,
  },
  {
    title: 'Exit',
    toUrl: 'login',
    icon: <LogoutCurve size='24' />,
  },
];

export default navigationUtil;
