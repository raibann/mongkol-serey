import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
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
      <Container sx={{ mb: 4 }}>
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
        <Grid
          container
          sx={{
            background: (theme) => theme.palette.background.paper,
            mt: 2,
            borderRadius: 4,
            boxShadow: (theme) => theme.shadows[2],
          }}
        >
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Avatar
                    sx={{
                      background: (theme) => theme.palette.common.white,
                      boxShadow: theme.shadows[3],
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
                      boxShadow: theme.shadows[3],
                    }}
                  >
                    <Send2 size='24' color={'#229ED9'} variant='Bold' />
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary={data.telegram} secondary={'Telegram'} />
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
                      boxShadow: theme.shadows[3],
                    }}
                  >
                    <Call
                      size='24'
                      color={theme.palette.success.main}
                      variant='Bold'
                    />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={data.contact}
                  secondary={'Phone number'}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Avatar
                    sx={{
                      background: (theme) => theme.palette.common.white,
                      boxShadow: theme.shadows[3],
                      position: 'relative',
                      top: -20,
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
        </Grid>
        <Grid
          container
          sx={{
            background: (theme) => theme.palette.background.paper,
            mt: 2,
            borderRadius: 4,
            boxShadow: (theme) => theme.shadows[2],
          }}
        >
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Avatar
                    sx={{
                      background: (theme) => theme.palette.common.white,
                      boxShadow: theme.shadows[3],
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
                      boxShadow: theme.shadows[3],
                    }}
                  >
                    <BagTimer
                      size='24'
                      color={theme.palette.info.main}
                      variant='Bold'
                    />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary='Last Ordered'
                  secondary={data.lastOrder}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListItem>
              <ListItemIcon>
                <Avatar
                  sx={{
                    background: (theme) => theme.palette.common.white,
                    boxShadow: theme.shadows[3],
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
                    boxShadow: theme.shadows[3],
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
