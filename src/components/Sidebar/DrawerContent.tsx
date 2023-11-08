import {
  Avatar,
  Badge,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowUp2,
  Component,
  LogoutCurve,
} from 'iconsax-react';
import { useDrawerContext } from 'context/DrawerContext';
import { useReminderContext } from 'context/ReminderContext';
import { motion } from 'framer-motion';
import { useAuthContext } from 'context/AuthContext';
import useRouter, { ROUTE_PATH } from 'hook/useRouter';
import navigationUtil from 'utils/navigation-util';
import THEME_UTIL from 'utils/theme-util';
import React from 'react';

const DrawerContent = () => {
  const { location, navigate } = useRouter();
  const { openDrawer, setOpenDrawer, collapse, setCollapse } =
    useDrawerContext();
  const { reminderList } = useReminderContext();
  const { logout } = useAuthContext();
  const theme = useTheme();

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
          width: collapse ? 60 : 150,
          height: collapse ? 60 : 150,
        }}
      />
      <List
        sx={{
          height: collapse ? `calc(100vh -  200px)` : 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
        disablePadding
      >
        {navigationUtil.map((nav) => {
          return (
            <React.Fragment key={nav.title}>
              <ListItem
                sx={{
                  py: 0.5,
                  px: collapse ? 1 : 2,
                }}
              >
                <ListItemButton
                  sx={{
                    position: 'relative',
                    borderRadius: 2.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClick={() => {
                    navigate(`${nav.toUrl}`);
                    openDrawer && setOpenDrawer(false);
                  }}
                >
                  {location.pathname === nav.toUrl && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: THEME_UTIL.goldGradientMain,
                        zIndex: 0,
                        borderRadius: 2.5,
                      }}
                      component={motion.div}
                      layoutId='selectedNav'
                    />
                  )}
                  <ListItemIcon
                    sx={{
                      minWidth: collapse ? 0 : undefined,
                      zIndex: 2,
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {location.pathname.includes(nav.toUrl) ? (
                      nav.selectedIcon
                    ) : nav.toUrl === ROUTE_PATH.notification.root ? (
                      <Badge color='error' variant='dot' overlap='circular'>
                        {nav.icon}
                      </Badge>
                    ) : (
                      nav.icon
                    )}
                  </ListItemIcon>
                  <ListItemText
                    hidden={collapse ? true : false}
                    primary={
                      !collapse && (
                        <Typography
                          color={theme.palette.secondary.main}
                          fontWeight={
                            location.pathname.includes(nav.toUrl)
                              ? 'bold'
                              : 'regular'
                          }
                        >
                          {nav.title}
                        </Typography>
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
                  {nav.children.length > 0 &&
                    (location.pathname.includes(nav.toUrl) ? (
                      <ArrowUp2
                        size='18'
                        style={{
                          zIndex: 2,
                        }}
                        color={theme.palette.secondary.main}
                      />
                    ) : (
                      <ArrowDown2 size='18' />
                    ))}
                </ListItemButton>
              </ListItem>
              {!collapse &&
                nav.children.length > 0 &&
                location.pathname.includes(nav.toUrl) && (
                  <Collapse
                    in={location.pathname.includes(nav.toUrl)}
                    timeout='auto'
                    unmountOnExit
                  >
                    <List component='div' disablePadding>
                      {nav.children.map((child, index) => {
                        return (
                          <ListItem key={index} sx={{ py: 0 }}>
                            <ListItemButton
                              sx={{
                                pl: 4,
                                background: location.pathname.includes(
                                  child.toUrl
                                )
                                  ? alpha(theme.palette.primary.main, 0.1)
                                  : theme.palette.common.white,
                                borderRadius: 2.5,
                              }}
                              onClick={() => {
                                navigate(`${child.toUrl}`);
                                openDrawer && setOpenDrawer(false);
                              }}
                            >
                              <ListItemIcon sx={{ pl: 2 }}>
                                <Component
                                  size='14'
                                  variant='Bold'
                                  color={
                                    location.pathname.includes(child.toUrl)
                                      ? theme.palette.primary.main
                                      : theme.palette.secondary.main
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={child.title}
                                primaryTypographyProps={{
                                  color: location.pathname.includes(child.toUrl)
                                    ? theme.palette.primary.main
                                    : theme.palette.secondary.main,
                                  fontWeight: location.pathname.includes(
                                    child.toUrl
                                  )
                                    ? 'bold'
                                    : 'medium',
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
            </React.Fragment>
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
                color: theme.palette.error.main,
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
                    color={theme.palette.error.main}
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
