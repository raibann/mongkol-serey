import { Box, Toolbar } from '@mui/material';
import Navbar from 'components/Navbar';
import { useDrawerContext } from 'context/DrawerContext';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import theme from 'theme/theme';
const Sidebar = lazy(() => import('components/Sidebar'));

export default function Home() {
  const { collapse } = useDrawerContext();
  const drawerWidth = !collapse ? '17vw' : '88px';
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar {...{ drawerWidth }} />
        <Navbar {...{ drawerWidth }} />
        <Box
          component='main'
          id='main'
          flexGrow={1}
          sx={{
            background: theme.palette.background.paper,
            ml: { xs: 0, md: '25vw', lg: `${drawerWidth}` },
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
