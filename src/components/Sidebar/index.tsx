import { Drawer } from '@mui/material';
import { useDrawerContext } from 'context/DrawerContext';
import useResponsive from 'hook/useResponsive';
import theme from 'theme/theme';
import DrawerContent from './DrawerContent';

const Sidebar = ({ drawerWidth }: { drawerWidth: string }) => {
  const { isMdDown } = useResponsive();
  const { openDrawer, collapse } = useDrawerContext();

  return (
    <>
      <Drawer
        variant={isMdDown ? 'temporary' : 'permanent'}
        open={openDrawer}
        anchor='left'
        sx={{
          '& .MuiDrawer-paper': {
            width: collapse
              ? 'auto'
              : { xs: '100vw', sm: '40vw', md: '25vw', lg: drawerWidth },
            border: 'none',
            background: theme.palette.common.white,
            borderRadius: 0,
            boxShadow: '5px 0px 10px  #15223214',
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Sidebar;
