import { Paper, Stack, Typography, Avatar, Grid } from '@mui/material';
import { Facebook, Gift, Call } from 'iconsax-react';
import theme from 'theme/theme';
import { eventToday } from 'utils/reminder-util';

const EventToday = () => {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {eventToday.map((data, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper sx={{ p: 2 }}>
              <Stack alignItems='center'>
                <Typography variant='h5' fontWeight={'blod'} noWrap>
                  {data.customerName}
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                  Happy anniversary
                </Typography>
              </Stack>
              <Grid container columnSpacing={2} rowSpacing={0}>
                <Grid item xs={6}>
                  <Avatar
                    src='/images/gift.svg'
                    variant='square'
                    sx={{ height: 'auto', width: 'auto' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Stack
                    sx={{ height: '100%' }}
                    justifyContent='flex-end'
                    spacing={1}
                  >
                    <Stack direction={'row'} spacing={1}>
                      <Facebook size='16' color={theme.palette.primary.main} />
                      <Typography variant='subtitle2' noWrap>
                        {data.facebook}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Call size='16' color={theme.palette.primary.main} />
                      <Typography variant='subtitle2' noWrap>
                        {data.contacNumber}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Gift size='16' color={theme.palette.primary.main} />
                      <Typography variant='subtitle2' noWrap>
                        {data.gift}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default EventToday;
