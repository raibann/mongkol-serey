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
  House,
  NotificationFavorite,
  Send2,
} from 'iconsax-react';
import theme from 'theme/theme';
import { ICustCard } from 'utils/cutomer-util';

export default function CustomerDetails({ data }: { data: ICustCard }) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Stack alignItems={'center'}>
            <Avatar
              src='/images/avatar.svg'
              sx={{ width: 100, height: 'auto' }}
            />
            <Typography variant='h6'>Customer Name</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar
                  sx={{
                    background: (theme) => theme.palette.common.white,
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <Facebook size='24' color={'#4267B2'} variant='Bold' />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={data.facebook} secondary={'Facebook'} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Avatar
                  sx={{
                    background: (theme) => theme.palette.common.white,
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <Send2 size='24' color={'#229ED9'} variant='Bold' />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={data.telegram} secondary={'Telegram'} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Avatar
                  sx={{
                    background: (theme) => theme.palette.common.white,
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <Call
                    size='24'
                    color={theme.palette.success.main}
                    variant='Bold'
                  />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={data.contact} secondary={'Phone number'} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Avatar
                  sx={{
                    background: (theme) => theme.palette.common.white,
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <House
                    size='24'
                    color={theme.palette.primary.main}
                    variant='Bold'
                  />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={`House No : ${data.houseNo}, street : ${data.stNo}, ${data.location}
               ${data.province}, ${data.district}, ${data.commune}`}
                secondary={'Address'}
              />
            </ListItem>
          </List>
        </Grid>
        {/* right */}
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar
                  sx={{
                    background: (theme) => theme.palette.common.white,
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <BagTick2
                    size='24'
                    color={theme.palette.success.main}
                    variant='Bold'
                  />
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
                  <BagTimer
                    size='24'
                    color={theme.palette.info.main}
                    variant='Bold'
                  />
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
                    variant='Bold'
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
                  <Gift
                    size='24'
                    color={theme.palette.primary.main}
                    variant='Bold'
                  />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary='Gifts' secondary={data.gift} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
