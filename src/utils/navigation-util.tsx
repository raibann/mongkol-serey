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

type Navigation = {
  title: string;
  toUrl: string;
  icon: React.ReactNode;
}[];

const navigationUtil: Navigation = [
  {
    title: 'Dashboard',
    toUrl: '/dashboard',
    icon: <Diagram size='22' />,
  },
  {
    title: 'Orders',
    toUrl: '/orders',
    icon: <EmptyWalletAdd size='24' />,
  },
  {
    title: 'Expense',
    toUrl: '/expense',
    icon: <Note size='24' />,
  },
  {
    title: 'Groceries',
    toUrl: '/groceries',
    icon: <ShopAdd size='24' />,
  },
  {
    title: 'Customers',
    toUrl: '/customers',
    icon: <Profile2User size='24' />,
  },
  {
    title: 'Reminder',
    toUrl: '/reminder',
    icon: <MessageFavorite size='24' />,
  },
  {
    title: 'Help Center',
    toUrl: '/help-center',
    icon: <MessageQuestion size='24' />,
  },
  {
    title: 'Exit',
    toUrl: '/home',
    icon: <LogoutCurve size='24' />,
  },
];

export default navigationUtil;
