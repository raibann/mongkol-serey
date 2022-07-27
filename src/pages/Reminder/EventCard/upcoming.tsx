import { Paper, Stack, Typography, Avatar, Grid } from '@mui/material';
import { Facebook, Gift, Call, Send2 } from 'iconsax-react';
import theme from 'theme/theme';
import { upcomingEvent } from 'utils/reminder-util';

const UpcomingEvent = () => {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {upcomingEvent.map((data, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Paper sx={{ p: 2 }}>
              <Grid container>
                <Grid item xs={6}>
                  <Stack direction={'column'} alignItems='center'>
                    <Avatar
                      src='/images/avatar.svg'
                      variant='square'
                      sx={{ width: 80, height: 'auto' }}
                    />
                    <Typography variant='h6'>{data.customerName}</Typography>
                    <Stack direction={'column'}>
                      <Typography
                        variant='caption'
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                      >
                        Ordered: {data.ordered}
                      </Typography>
                      <Typography
                        variant='caption'
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                      >
                        Last order: {data.lastOrder}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction={'row'} spacing={1}>
                    <Typography variant='subtitle2' fontWeight={'bold'}>
                      Upcoming
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      fontWeight={'medium'}
                      color={'error'}
                    >
                      {data.upComing}
                    </Typography>
                  </Stack>
                  <Stack sx={{ px: 1.5, mt: 1 }} spacing={1}>
                    <Stack direction={'row'} spacing={1}>
                      <Facebook size='16' color={theme.palette.primary.main} />
                      <Typography variant='subtitle2'>
                        {data.facebook}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Send2 size='16' color={theme.palette.primary.main} />
                      <Typography variant='subtitle2'>
                        {data.telegram}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Call size='16' color={theme.palette.primary.main} />
                      <Typography variant='subtitle2'>
                        {data.contacNumber}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Gift size='16' color={theme.palette.primary.main} />
                      <Typography variant='subtitle2'>{data.gift}</Typography>
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

export default UpcomingEvent;
