import { Drawer, DrawerProps } from '@mui/material';
import React from 'react';
interface IDrawer extends DrawerProps {
  onCloseDrawer: () => void;
  children: React.ReactNode;
}
export default function ResponsiveDrawer(props: IDrawer) {
  const { open, onCloseDrawer, children, ...rest } = props;
  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={onCloseDrawer}
      PaperProps={{
        sx: { borderRadius: 0, width: ['100vw', '100vw', '50vw'] },
      }}
      {...rest}
    >
      {children}
    </Drawer>
  );
}
