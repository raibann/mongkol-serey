import { Paper, Stack, Typography, Avatar, Box, Grid } from '@mui/material';
import { Facebook, Gift, Call, Send2 } from 'iconsax-react';
import theme from 'theme/theme';
interface IUpcomingEvent {
  id: number;
  profile: string;
  upComing: string;
  ordered: number;
  lastOrder: string;
  customerName: string;
  facebook: string;
  telegram: string;
  contacNumber: string;
  gift: number;
}
const UpcomingEventData: IUpcomingEvent[] = [
  {
    id: 1,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 2,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 3,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 4,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 5,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 6,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
];
const UpcomingEvent = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: 3,
          columnGap: 3,
        }}
      >
        {UpcomingEventData.map((data) => (
          <Paper sx={{ width: 310, py: 2, px: 1 }} key={data.id}>
            <Grid container>
              <Grid item xs={6}>
                <Stack alignItems={'center'}>
                  <Avatar
                    src='/images/avatar.svg'
                    variant='square'
                    sx={{ width: 70, height: 'auto' }}
                  />
                  <Stack>
                    <Typography variant='h6'>{data.customerName}</Typography>
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
                <Stack justifyContent={'center'} spacing={2}>
                  <Stack direction={'row'} spacing={1}>
                    <Typography variant='body1' fontWeight={'medium'}>
                      Upcoming
                    </Typography>
                    <Typography
                      variant='body1'
                      fontWeight={'medium'}
                      color={'error'}
                    >
                      {data.upComing}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Typography>
                        <Facebook
                          size='20'
                          color={theme.palette.primary.main}
                        />
                      </Typography>
                      <Typography variant='caption'>{data.facebook}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Typography>
                        <Send2 size='20' color={theme.palette.primary.main} />
                      </Typography>
                      <Typography variant='caption'>{data.telegram}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Typography>
                        <Call size='20' color={theme.palette.primary.main} />
                      </Typography>
                      <Typography variant='caption'>
                        {data.contacNumber}
                      </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                      <Typography>
                        <Gift size='20' color={theme.palette.primary.main} />
                      </Typography>
                      <Typography variant='caption'>{data.gift}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default UpcomingEvent;
