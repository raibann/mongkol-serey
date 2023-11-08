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
  children:
    | {
        title: string;
        toUrl: string;
        onClick?: () => void;
      }[];
  icon: React.ReactNode;
  selectedIcon: React.ReactNode;
  onClick?: () => void;
}[];

const navigationUtil: Navigation = [
  {
    title: 'Dashboard',
    toUrl: ROUTE_PATH.dashboard,
    icon: <Chart size='24' />,
    selectedIcon: <Chart size='24' variant='Bold' />,
    children: [],
  },
  {
    title: 'Orders',
    toUrl: ROUTE_PATH.orders.root,
    icon: <NoteFavorite size='24' />,
    selectedIcon: <NoteFavorite size='24' variant='Bold' />,
    children: [
      {
        title: 'Quotations',
        toUrl: ROUTE_PATH.orders.quotations,
      },
      {
        title: 'Payments',
        toUrl: ROUTE_PATH.orders.payments,
      },
    ],
  },
  {
    title: 'Expenses',
    toUrl: ROUTE_PATH.expenses.root,
    icon: <MoneySend size='24' />,
    selectedIcon: <MoneySend size='24' variant='Bold' />,
    children: [],
  },
  {
    title: 'Customers',
    toUrl: ROUTE_PATH.customers.root,
    icon: <Profile2User size='24' />,
    selectedIcon: <Profile2User size='24' variant='Bold' />,

    children: [
      {
        title: 'Potentials',
        toUrl: ROUTE_PATH.customers.potentialCustomers,
      },
    ],
  },

  {
    title: 'Notifications',
    toUrl: ROUTE_PATH.notification.root,
    icon: <Notification size='24' />,
    selectedIcon: <Notification size='24' variant='Bold' />,
    children: [
      {
        title: 'Anniversaries',
        toUrl: ROUTE_PATH.notification.anniversary,
      },
      {
        title: 'Upcomings',
        toUrl: ROUTE_PATH.notification.upcomings,
      },
    ],
  },
  {
    title: 'Menus',
    toUrl: ROUTE_PATH.menus.root,
    icon: <Category size='24' />,
    selectedIcon: <Category size='24' variant='Bold' />,
    children: [],
  },
  {
    title: 'Prepare Grocery',
    toUrl: ROUTE_PATH.prepareGrocery.root,
    icon: <MenuBoard size='24' />,
    selectedIcon: <MenuBoard size='24' variant='Bold' />,
    children: [],
  },
  {
    title: 'Inventories',
    toUrl: ROUTE_PATH.inventories.root,
    icon: <Box size='24' />,
    selectedIcon: <Box size='24' variant='Bold' />,
    children: [
      {
        title: 'Units',
        toUrl: ROUTE_PATH.inventories.units,
      },
      {
        title: 'Categories',
        toUrl: ROUTE_PATH.inventories.categories,
      },
      {
        title: 'Reports',
        toUrl: ROUTE_PATH.inventories.inventoryReport,
      },
    ],
  },
  {
    title: 'Suppliers',
    toUrl: ROUTE_PATH.suppliers.root,
    icon: <TruckTick size='24' />,
    selectedIcon: <TruckTick size='24' variant='Bold' />,
    children: [],
  },
  {
    title: 'Users',
    toUrl: ROUTE_PATH.users.root,
    icon: <UserSquare size='24' />,
    selectedIcon: <UserSquare size='24' variant='Bold' />,
    children: [
      {
        title: 'Departments',
        toUrl: ROUTE_PATH.users.departments,
      },
    ],
  },
  {
    title: 'Setting',
    toUrl: ROUTE_PATH.setting.root,
    icon: <Setting3 size='24' />,
    selectedIcon: <Setting3 size='24' variant='Bold' />,
    children: [],
  },
];

export default navigationUtil;
