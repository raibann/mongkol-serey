import {
  Diagram,
  EmptyWalletAdd,
  LogoutCurve,
  MessageFavorite,
  MessageQuestion,
  Note,
  Profile2User,
  ShopAdd,
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
    icon: <EmptyWalletAdd size='24' />,
  },
  {
    title: 'Expense',
    toUrl: 'expense',
    icon: <Note size='24' />,
  },
  {
    title: 'Stocks',
    toUrl: 'stocks',
    icon: <ShopAdd size='24' />,
  },
  {
    title: 'Customers',
    toUrl: 'customers',
    icon: <Profile2User size='24' />,
  },
  {
    title: 'Reminder',
    toUrl: 'reminder',
    icon: <MessageFavorite size='24' />,
  },
  {
    title: 'Help Center',
    toUrl: 'help-center',
    icon: <MessageQuestion size='24' />,
  },
  {
    title: 'Exit',
    toUrl: 'login',
    icon: <LogoutCurve size='24' />,
  },
];

export default navigationUtil;
