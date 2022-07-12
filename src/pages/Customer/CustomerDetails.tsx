import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import {
  BagTick2,
  BagTimer,
  Call,
  Facebook,
  Gift,
  Home3,
  NotificationFavorite,
  Send2,
} from 'iconsax-react';
import theme from 'theme/theme';
import { ICustCard } from '.';

export default function CustomerDetails({ data }: { data: ICustCard }) {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Stack alignItems={'center'}>
            <Avatar
              src='/images/avatar.svg'
              sx={{ width: 150, height: 'auto' }}
            />
            <Typography variant='h6'>Customer Name</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          {' '}
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemIcon>
                <Facebook size='24' color={theme.palette.primary.main} />
              </ListItemIcon>
              <ListItemText color={theme.palette.text.secondary}>
                {data.facebook}
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Send2 size='24' color={theme.palette.primary.main} />
              </ListItemIcon>
              <ListItemText color={theme.palette.text.secondary}>
                {data.telegram}
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Call size='24' color={theme.palette.primary.main} />
              </ListItemIcon>
              <ListItemText color={theme.palette.text.secondary}>
                {data.contact}
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ position: 'relative', top: 0 }}>
                <Home3 size='24' color={theme.palette.primary.main} />
              </ListItemIcon>
              <ListItemText
                primary='Address'
                secondary={`House No : ${data.houseNo}, street : ${data.stNo}, ${data.location}
               ${data.province}, ${data.district}, ${data.commune}`}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Stack>
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar
                sx={{
                  background: (theme) => theme.palette.common.white,
                  boxShadow: theme.shadows[1],
                }}
              >
                <BagTick2 size='24' color={theme.palette.success.main} />
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary='Ordered'
              secondary={`${data.ordered}times`}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar
                sx={{
                  background: (theme) => theme.palette.common.white,
                  boxShadow: theme.shadows[1],
                }}
              >
                <BagTimer size='24' color={theme.palette.info.main} />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary='Last Ordered' secondary={data.lastOrder} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar
                sx={{
                  background: (theme) => theme.palette.common.white,
                  boxShadow: theme.shadows[1],
                }}
              >
                <NotificationFavorite
                  size='24'
                  color={theme.palette.warning.main}
                />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary='Upcoming' secondary={data.upComing} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar
                sx={{
                  background: (theme) => theme.palette.common.white,
                  boxShadow: theme.shadows[1],
                }}
              >
                <Gift size='24' color={theme.palette.primary.main} />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary='Gifts' secondary={data.gift} />
          </ListItem>
        </List>
      </Stack>
    </>
  );
}
