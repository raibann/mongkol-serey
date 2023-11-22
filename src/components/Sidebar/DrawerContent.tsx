import {
  Avatar,
  Badge,
  Box,
  Collapse,
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { ArrowDown2, ArrowRight2, Component, LogoutCurve } from 'iconsax-react';
import { useDrawerContext } from 'context/DrawerContext';
import { motion } from 'framer-motion';
import { useAuthContext } from 'context/AuthContext';
import useRouter, { ROUTE_PATH } from 'hook/useRouter';
import navigationUtil from 'utils/navigation-util';
import THEME_UTIL from 'utils/theme-util';
import React, { useState } from 'react';
import { CusIconButton } from 'components/CusIconButton';

const DrawerContent = () => {
  const { location, navigate } = useRouter();
  const { openDrawer, setOpenDrawer, collapse } = useDrawerContext();
  const { logout } = useAuthContext();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [collapseMenu, setCollapseMenu] = useState(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
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
          width: collapse ? 68 : 180,
          height: collapse ? 68 : 180,
        }}
      />
      <List
        sx={{
          height: collapse ? `calc(100vh - 60px)` : '100%',
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
                  px: 2,
                }}
                secondaryAction={
                  !collapse &&
                  nav.children.length > 0 &&
                  (location.pathname.includes(nav.toUrl) ? (
                    <CusIconButton
                      sx={{ boxShadow: 0, background: 'transparent' }}
                      onClick={() => {
                        setCollapseMenu(!collapseMenu);
                      }}
                    >
                      <ArrowDown2
                        size='16'
                        style={{
                          zIndex: 2,
                        }}
                        color={theme.palette.secondary.main}
                      />
                    </CusIconButton>
                  ) : (
                    <CusIconButton
                      sx={{ boxShadow: 0, background: 'transparent' }}
                    >
                      <ArrowRight2 size='16' />
                    </CusIconButton>
                  ))
                }
              >
                <ListItemButton
                  sx={{
                    position: 'relative',
                    borderRadius: 2.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onMouseEnter={handlePopoverClose}
                  onClick={(e) => {
                    navigate(`${nav.toUrl}`);
                    openDrawer && setOpenDrawer(false);
                    handlePopoverOpen(e);
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
                          variant='body2'
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
                </ListItemButton>
              </ListItem>
              {collapse &&
                nav.children.length > 0 &&
                location.pathname.includes(nav.toUrl) && (
                  <Popper
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    placement={'right'}
                    transition
                    sx={{
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                      pl: 2,
                      '&> .css-1a2qywp-MuiPaper-root': {
                        boxShadow: theme.shadows[0],
                        borderRadius: 2.5,
                      },
                    }}
                    disablePortal={false}
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper
                          sx={{
                            height: 'auto',
                            border: `1px solid ${theme.palette.primary.main}`,
                            transition: 'border-color 2s ease-in-out',
                          }}
                        >
                          <List component='div' disablePadding>
                            {nav.children.map((child, index) => {
                              return (
                                <ListItem key={index} disablePadding>
                                  <ListItemButton
                                    sx={{
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
                                      handlePopoverClose();
                                    }}
                                  >
                                    <ListItemText
                                      primary={child.title}
                                      primaryTypographyProps={{
                                        color: location.pathname.includes(
                                          child.toUrl
                                        )
                                          ? theme.palette.primary.main
                                          : theme.palette.secondary.main,
                                        fontWeight: location.pathname.includes(
                                          child.toUrl
                                        )
                                          ? 'bold'
                                          : 'medium',
                                        fontSize: 14,
                                      }}
                                    />
                                  </ListItemButton>
                                </ListItem>
                              );
                            })}
                          </List>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                )}

              {!collapse &&
                nav.children.length > 0 &&
                location.pathname.includes(nav.toUrl) &&
                collapseMenu && (
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
                                  size='12'
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
                                  fontSize: 14,
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

        {/* Logout Button */}
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
      </List>
    </>
  );
};

export default DrawerContent;
