import { Drawer } from '@mui/material';
import { useDrawerContext } from 'context/DrawerContext';
import useResponsive from 'hook/useResponsive';
import DrawerContent from './DrawerContent';

const Sidebar = () => {
  const { isMdDown } = useResponsive();
  const { openDrawer, collapse } = useDrawerContext();

  return (
    <>
      <Drawer
        variant={isMdDown ? 'temporary' : 'permanent'}
        open={openDrawer}
        anchor='left'
        sx={{
          width: collapse ? '88px' : '300px',
          '& .MuiDrawer-paper': {
            width: collapse ? '88px' : '300px',
            border: 'none',
            background: (theme) => theme.palette.common.white,
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
