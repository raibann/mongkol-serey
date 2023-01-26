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
import { ArrowLeft2, LogoutCurve } from 'iconsax-react';
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
  const { openDrawer, setOpenDrawer, collapse, setCollapse } =
    useDrawerContext();
  const { reminderList } = useReminderContext();
  const { logout } = useAuthContext();

  return (
    <>
      <Avatar
        variant='square'
        src={'/images/mongkol_serey_logo_1000.png'}
        alt='logo'
        imgProps={{
          sx: {
            objectFit: 'contain',
          },
        }}
        sx={{
          mx: 'auto',
          width: collapse ? 0 : 200,
          height: collapse ? 0 : 200,
        }}
      />
      <List
        sx={{
          height: `calc(100vh - ${collapse ? '0px' : '200px'})`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {navigationUtil.map((nav) => {
          return (
            <ListItem key={nav.title} sx={{ py: 0.5 }}>
              <ListItemButton
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                }}
                onClick={() => {
                  navigate(`${nav.toUrl}`);
                  openDrawer && setOpenDrawer(false);
                }}
              >
                {location.pathname.includes(nav.toUrl) && (
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
                    minWidth: collapse ? 0 : undefined,
                    zIndex: 2,
                    color: location.pathname.includes(nav.toUrl)
                      ? theme.palette.secondary.main
                      : theme.palette.primary.main,
                  }}
                >
                  {nav.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    !collapse && (
                      <Stack direction={'row'} justifyContent='space-between'>
                        <Typography
                          color={theme.palette.secondary.light}
                          fontWeight={'medium'}
                        >
                          {nav.title}
                        </Typography>
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
                    )
                  }
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: location.pathname.includes(nav.toUrl)
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
                minWidth: collapse ? 0 : undefined,
                zIndex: 2,
                color: theme.palette.primary.main,
              }}
            >
              <LogoutCurve
                size='24'
                variant='Bold'
                style={{ position: 'relative', left: -2 }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                !collapse && (
                  <Typography
                    fontWeight={'medium'}
                    color={theme.palette.secondary.light}
                  >
                    Exit
                  </Typography>
                )
              }
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

        <Box flexGrow={1} />

        <ListItem sx={{ py: 0.5 }}>
          <ListItemButton
            sx={{
              position: 'relative',
              borderRadius: 2,
            }}
            onClick={() => setCollapse(!collapse)}
          >
            <ListItemIcon
              sx={{
                minWidth: collapse ? 0 : undefined,
                zIndex: 2,
                color: theme.palette.primary.main,
              }}
            >
              <ArrowLeft2
                size='24'
                variant='Bulk'
                style={{ rotate: collapse ? '180deg' : '0deg' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                !collapse && (
                  <Typography
                    fontWeight={'medium'}
                    color={theme.palette.secondary.light}
                  >
                    Collapse
                  </Typography>
                )
              }
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
