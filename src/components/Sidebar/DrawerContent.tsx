import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import useRouter from 'hook/useRouter';
import theme from 'theme/theme';
import navigationUtil from 'utils/navigation-util';
import THEME_UTIL from 'utils/theme-util';

const DrawerContent = () => {
  const { location, navigate } = useRouter();

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
                onClick={() => navigate(`/${nav.toUrl}`)}
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
                    color:
                      location.pathname === `/${nav.toUrl}`
                        ? theme.palette.common.white
                        : theme.palette.secondary.main,
                  }}
                >
                  {nav.icon}
                </ListItemIcon>
                <ListItemText
                  primary={nav.title}
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
      </List>
    </>
  );
};

export default DrawerContent;
