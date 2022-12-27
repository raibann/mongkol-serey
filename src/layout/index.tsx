import { Box } from '@mui/material';
import { useDrawerContext } from 'context/DrawerContext';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import theme from 'theme/theme';
const Sidebar = lazy(() => import('components/Sidebar'));

export default function Home() {
  const { collapse } = useDrawerContext();
  const drawerWidth = !collapse ? '20vw' : '88px';
  return (
    <>
      <Sidebar {...{ drawerWidth }} />
      <Box
        component='main'
        id='main'
        flexGrow={1}
        sx={{
          background: theme.palette.background.paper,
          ml: { xs: 0, md: `${drawerWidth}` },
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
