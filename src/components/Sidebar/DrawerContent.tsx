import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { LogoutCurve } from 'iconsax-react';
import { useDrawerContext } from 'context/DrawerContext';
import { useReminderContext } from 'context/ReminderContext';
import { motion } from 'framer-motion';
import { useAuthContext } from 'context/AuthContext';
import theme from 'theme/theme';
import useRouter, { ROUTE_PATH } from 'hook/useRouter';
import navigationUtil from 'utils/navigation-util';
import THEME_UTIL from 'utils/theme-util';

const DrawerContent = () => {
  const { location, navigate } = useRouter();
  const { openDrawer, setOpenDrawer } = useDrawerContext();
  const { reminderList } = useReminderContext();
  const { logout } = useAuthContext();

  return (
    <>
      <Avatar
        variant='square'
        src={'images/mongkol_serey_logo_1000.png'}
        alt='logo'
        imgProps={{
          sx: {
            objectFit: 'contain',
          },
        }}
        sx={{
          mx: 'auto',
          width: 200,
          height: 200,
        }}
      />
      <List>
        {navigationUtil.map((nav) => {
          return (
            <ListItem key={nav.title} sx={{ py: 0.5 }}>
              <ListItemButton
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                }}
                onClick={() => {
                  navigate(`/${nav.toUrl}`);
                  openDrawer && setOpenDrawer(false);
                }}
              >
                {location.pathname === `/${nav.toUrl}` && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: THEME_UTIL.goldGradientMain,
                      zIndex: 0,
                      borderRadius: 2,
                    }}
                    component={motion.div}
                    layoutId='selectedNav'
                  />
                )}
                <ListItemIcon
                  sx={{
                    zIndex: 2,
                    color: theme.palette.secondary.main,
                  }}
                >
                  {nav.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Stack direction={'row'} justifyContent='space-between'>
                      <Typography>{nav.title}</Typography>
                      {nav.toUrl === ROUTE_PATH.reminder && reminderList && (
                        <Box
                          sx={{
                            bgcolor: theme.palette.error.main,
                            color: theme.palette.common.white,
                            px: 1,
                            borderRadius: 1,
                          }}
                        >
                          {reminderList?.length}
                        </Box>
                      )}
                    </Stack>
                  }
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color:
                      location.pathname === `/${nav.toUrl}`
                        ? 'common.white'
                        : 'secondary.main',
                  }}
                  sx={{
                    zIndex: 1,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem sx={{ py: 0.5 }}>
          <ListItemButton
            sx={{
              position: 'relative',
              borderRadius: 2,
            }}
            onClick={() => {
              logout();
              openDrawer && setOpenDrawer(false);
            }}
          >
            <ListItemIcon
              sx={{
                zIndex: 2,
                color: theme.palette.secondary.main,
              }}
            >
              <LogoutCurve size='24' />
            </ListItemIcon>
            <ListItemText
              primary={<Typography>Exit</Typography>}
              primaryTypographyProps={{
                fontWeight: 500,
                color: 'secondary.main',
              }}
              sx={{
                zIndex: 1,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default DrawerContent;
