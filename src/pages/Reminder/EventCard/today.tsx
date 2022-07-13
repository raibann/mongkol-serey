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
import { CusIconButton } from 'components/CusIconButton';
import { Facebook, Gift, Call } from 'iconsax-react';
import { MdClose } from 'react-icons/md';
interface IEventToday {
  id: number;
  customerName: string;
  facebook: string;
  contacNumber: string;
  gift: number;
}
const EventTodayData: IEventToday[] = [
  {
    id: 1,
    customerName: 'Ma Raibann',
    facebook: 'Raibann Ma',
    contacNumber: '092123305',
    gift: 2,
  },
  {
    id: 2,
    customerName: 'Meas Soaminea',
    facebook: 'Meas Soaminea',
    contacNumber: '012914314',
    gift: 2,
  },
  {
    id: 3,
    customerName: 'Rem Brosna',
    facebook: 'Rem Brosna',
    contacNumber: '016919081',
    gift: 2,
  },
  {
    id: 4,
    customerName: 'Heom Ponlork',
    facebook: 'Dara Pl',
    contacNumber: '0967848534',
    gift: 2,
  },
  {
    id: 5,
    customerName: 'Unknow',
    facebook: 'Unknow',
    contacNumber: '012345678',
    gift: 2,
  },
  {
    id: 6,
    customerName: 'Unknow',
    facebook: 'Unknow',
    contacNumber: '012345678',
    gift: 7,
  },
  {
    id: 5,
    customerName: 'Unknow',
    facebook: 'Unknow',
    contacNumber: '012345678',
    gift: 2,
  },
];
const EventToday = () => {
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
        {EventTodayData.map((data) => (
          <Paper sx={{ width: 350, py: 1 }} key={data.id}>
            <Stack
              direction={'row'}
              alignItems='center'
              justifyContent={'flex-end'}
            >
              <CusIconButton color='primary' sx={{ boxShadow: 0 }}>
                <MdClose />
              </CusIconButton>
            </Stack>
            <Stack alignItems='center'>
              <Typography variant='h5' fontWeight={'blod'}>
                {data.customerName}
              </Typography>
              <Typography variant='subtitle2'>Happy anniversary</Typography>
            </Stack>
            <Stack
              direction={'row'}
              alignItems='center'
              justifyContent={'space-between'}
              px={2}
            >
              <Avatar
                src='/images/gift.svg'
                variant='square'
                sx={{ width: 126, height: 'auto' }}
              />
              <List dense={true}>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Facebook size='24' color='#FF8A65' />
                  </ListItemIcon>
                  <ListItemText>{data.facebook}</ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Call size='24' color='#FF8A65' />
                  </ListItemIcon>
                  <ListItemText>{data.contacNumber}</ListItemText>
                </ListItem>
                <ListItem disablePadding>
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

export default EventToday;
