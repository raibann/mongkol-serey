import { Box } from '@mui/material';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box component='main' flexGrow={1}>
        <Outlet />
      </Box>
    </>
  );
}
