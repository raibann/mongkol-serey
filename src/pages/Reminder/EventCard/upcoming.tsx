import {
  Paper,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import { Facebook, Gift, Call, Send2 } from 'iconsax-react';
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
          rowGap: 2.5,
          columnGap: 2.5,
        }}
      >
        {UpcomingEventData.map((data) => (
          <Paper sx={{ width: 350, py: 2 }} key={data.id}>
            <Stack
              direction={'row'}
              alignItems='center'
              justifyContent={'space-between'}
              px={2}
            >
              <Stack direction={'column'}>
                <Stack alignItems={'center'}>
                  <Avatar
                    src='/images/avatar.svg'
                    variant='square'
                    sx={{ width: 100, height: 'auto' }}
                  />
                </Stack>

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

              <List dense={true} disablePadding>
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
                <ListItem>
                  <ListItemIcon>
                    <Facebook size='24' color='#FF8A65' />
                  </ListItemIcon>
                  <ListItemText>{data.facebook}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Send2 size='24' color='#FF8A65' />
                  </ListItemIcon>
                  <ListItemText>{data.telegram}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Call size='24' color='#FF8A65' />
                  </ListItemIcon>
                  <ListItemText>{data.contacNumber}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Gift size='24' color='#FF8A65' />
                  </ListItemIcon>
                  <ListItemText> {data.gift}</ListItemText>
                </ListItem>
              </List>
            </Stack>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default UpcomingEvent;
