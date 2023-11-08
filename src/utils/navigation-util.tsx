import {
  Notification,
  MoneySend,
  Profile2User,
  Chart,
  NoteFavorite,
  Box,
  MenuBoard,
  Category,
  TruckTick,
  UserSquare,
  Setting3,
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
    icon: <Chart size='24' />,
  },
  {
    title: 'Orders',
    toUrl: ROUTE_PATH.orders.root,
    icon: <NoteFavorite size='24' />,
  },
  {
    title: 'Expenses',
    toUrl: ROUTE_PATH.expenses.root,
    icon: <MoneySend size='24' />,
  },
  {
    title: 'Customers',
    toUrl: ROUTE_PATH.customers.root,
    icon: <Profile2User size='24' />,
  },

  {
    title: 'Notifications',
    toUrl: ROUTE_PATH.notification,
    icon: <Notification size='24' />,
  },
  {
    title: 'Menus',
    toUrl: ROUTE_PATH.menus.root,
    icon: <Category size='24' />,
  },
  {
    title: 'Prepare Grocery',
    toUrl: ROUTE_PATH.prepareGrocery.root,
    icon: <MenuBoard size='24' />,
  },
  {
    title: 'Inventories',
    toUrl: ROUTE_PATH.inventories.root,
    icon: <Box size='24' />,
  },
  {
    title: 'Suppliers',
    toUrl: ROUTE_PATH.suppliers.root,
    icon: <TruckTick size='24' />,
  },
  {
    title: 'Users',
    toUrl: ROUTE_PATH.users.root,
    icon: <UserSquare size='24' />,
  },
  {
    title: 'Setting',
    toUrl: ROUTE_PATH.setting.root,
    icon: <Setting3 size='24' />,
  },
];

export default navigationUtil;
