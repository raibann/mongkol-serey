import { AppBar, Toolbar } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { SidebarRight } from 'iconsax-react';
import React from 'react';

export default function Navbar({ drawerWidth }: { drawerWidth: string }) {
  return (
    <AppBar
      position='fixed'
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 0,
        width: `calc(100vw - ${drawerWidth})`,
        borderRadius: 0,
        background: (theme) => theme.palette.common.white,
      }}
    >
      <Toolbar>
        <CusIconButton>
          <SidebarRight size='24' />
          <SidebarRight
            size='24'
            style={{
              transform: 'perspective(1px) translateX(0%) rotateY(-180deg)',
            }}
          />
        </CusIconButton>
      </Toolbar>
    </AppBar>
  );
}
