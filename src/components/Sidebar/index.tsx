import { Drawer } from '@mui/material';
import theme from 'theme/theme';
import DrawerContent from './DrawerContent';

const Sidebar = ({ drawerWidth }: { drawerWidth: string }) => {
  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            border: 'none',
            background: theme.palette.common.white,
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Sidebar;
