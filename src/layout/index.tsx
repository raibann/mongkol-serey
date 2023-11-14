import { Paper, Box } from '@mui/material';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <Box component={Paper} display='flex'>
      <Sidebar />
      <Paper
        component='main'
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          height: '100vh',
          overflow: 'auto',
          borderRadius: 0,
        }}
      >
        <Navbar />
        <Outlet />
      </Paper>
    </Box>
  );
}
