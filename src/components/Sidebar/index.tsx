import { Drawer } from '@mui/material';
import useResponsive from 'hook/useResponsive';
import theme from 'theme/theme';
import DrawerContent from './DrawerContent';

const Sidebar = ({ drawerWidth }: { drawerWidth: string }) => {
  const { isMdDown } = useResponsive();
  return (
    <>
      <Drawer
        variant={isMdDown ? 'temporary' : 'permanent'}
        open={false}
        anchor='left'
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100vw', sm: '40vw', md: drawerWidth },
            border: 'none',
            background: theme.palette.common.white,
            borderRadius: 0,
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Sidebar;
