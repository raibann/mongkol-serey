import { Diagram } from 'iconsax-react';
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
    icon: <Diagram size='20' />,
  },
  {
    title: 'Dashboard',
    toUrl: '/dashboard',
    icon: <Diagram size='20' />,
  },
  {
    title: 'Dashboard',
    toUrl: '/dashboard',
    icon: <Diagram size='20' />,
  },
  {
    title: 'Dashboard',
    toUrl: '/dashboard',
    icon: <Diagram size='20' />,
  },
];

export default navigationUtil;
