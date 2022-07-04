import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import useRouter from 'hook/useRouter';
import theme from 'theme/theme';
import navigationUtil from 'utils/navigation-util';

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
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                  },
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      background: theme.palette.primary.main,
                    },
                  },
                }}
                selected={location.pathname === nav.toUrl}
                onClick={() => navigate(nav.toUrl)}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === nav.toUrl
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
                      location.pathname === nav.toUrl
                        ? 'common.white'
                        : 'secondary.main',
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
