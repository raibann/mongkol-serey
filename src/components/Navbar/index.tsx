import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Link,
  LinkProps,
  // Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { useDrawerContext } from 'context/DrawerContext';
import useResponsive from 'hook/useResponsive';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function LinkRouter(props: { to: string; replace?: boolean } & LinkProps) {
  return <Link {...props} component={RouterLink as any} />;
}

export default function Navbar() {
  /* Context */
  const { collapse, setCollapse, setOpenDrawer, openDrawer } =
    useDrawerContext();

  /* Hooks */
  const { isMdDown } = useResponsive();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

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
        <Breadcrumbs maxItems={3} aria-label='breadcrumb' sx={{ px: 2 }}>
          <LinkRouter underline='hover' color='inherit' to={'/'}>
            Home
          </LinkRouter>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            return (
              <LinkRouter
                underline='hover'
                color='inherit'
                to={to}
                replace={true}
                key={index}
                textTransform='capitalize'
              >
                {value.replaceAll('-', ' ')}
              </LinkRouter>
            );
          })}
        </Breadcrumbs>
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
