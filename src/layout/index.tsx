import { Box } from '@mui/material';
import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router-dom';
import theme from 'theme/theme';

const drawerWidth = '20vw';

export default function Home() {
  return (
    <>
      <Sidebar {...{ drawerWidth }} />
      <Box
        component='main'
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
