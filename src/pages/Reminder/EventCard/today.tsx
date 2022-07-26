import { Paper, Stack, Typography, Avatar, Box } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Facebook, Gift, Call } from 'iconsax-react';
import { MdClose } from 'react-icons/md';
import theme from 'theme/theme';
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
    id: 7,
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
          rowGap: 4.5,
          columnGap: 4.5,
        }}
      >
        {EventTodayData.map((data) => (
          <Paper sx={{ width: 300, py: 1, px: 2 }} key={data.id}>
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
              <Typography variant='subtitle2' gutterBottom>
                Happy anniversary
              </Typography>
            </Stack>
            <Stack
              direction={'row'}
              alignItems='center'
              justifyContent={'space-evenly'}
            >
              <Avatar
                src='/images/gift.svg'
                variant='square'
                sx={{ width: 126, height: 'auto' }}
              />
              <Stack justifyContent={'center'} direction='column'>
                <Stack direction={'row'} spacing={1}>
                  <Typography>
                    <Facebook size='20' color={theme.palette.primary.main} />
                  </Typography>
                  <Typography variant='caption'>{data.facebook}</Typography>
                </Stack>
                <Stack direction={'row'} spacing={1}>
                  <Typography>
                    <Call size='20' color={theme.palette.primary.main} />
                  </Typography>
                  <Typography variant='caption'>{data.contacNumber}</Typography>
                </Stack>
                <Stack direction={'row'} spacing={1}>
                  <Typography>
                    <Gift size='20' color={theme.palette.primary.main} />
                  </Typography>
                  <Typography variant='caption'>{data.gift}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default EventToday;
