import { AppBar, Avatar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { useDrawerContext } from 'context/DrawerContext';
import useResponsive from 'hook/useResponsive';
import { HiMenuAlt4 } from 'react-icons/hi';

export default function Navbar() {
  const { collapse, setCollapse, setOpenDrawer, openDrawer } =
    useDrawerContext();
  const { isMdDown } = useResponsive();

  return (
    <AppBar
      position='sticky'
      sx={{
        borderRadius: 0,
        zIndex: (theme) => theme.zIndex.drawer - 1,
        boxShadow: (theme) => theme.shadows[1],
        background: (theme) => theme.palette.common.white,
      }}
    >
      <Toolbar>
        <CusIconButton
          onClick={() => {
            setOpenDrawer(!openDrawer);
            isMdDown ? setCollapse(collapse) : setCollapse(!collapse);
          }}
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          <HiMenuAlt4 />
        </CusIconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Typography fontWeight={'bold'}>Admin</Typography>
          <Avatar
            alt='Remy Sharp'
            sx={{ width: 40, height: 40 }}
            src='/static/images/avatar/2.jpg'
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
