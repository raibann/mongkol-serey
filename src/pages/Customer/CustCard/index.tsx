import { Paper, Stack, Typography, Avatar, Box } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Add, Edit, InfoCircle } from 'iconsax-react';
interface ICustCard {
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
  address: {
    houseNo: number;
    streetNo: number;
  };
}
const CustCardData: ICustCard[] = [];
const CustCard = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: 2.5,
          columnGap: 6.5,
        }}
      >
        {CustCardData.map((data) => (
          <Paper sx={{ width: 200, py: 2 }} key={data.id}>
            <Stack direction={'column'} alignItems='center' spacing={1.5}>
              <Avatar
                src='/images/avatar.svg'
                variant='square'
                sx={{ width: 100, height: 'auto' }}
              />
              <Stack>
                <Typography variant='h6' textAlign={'center'}>
                  {data.customerName}
                </Typography>
                <Typography
                  variant='caption'
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  Ordered: {data.ordered} times
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <CusIconButton color='primary'>
                  <Add variant='Outline' />
                </CusIconButton>
                <CusIconButton color='info'>
                  <Edit variant='Outline' />
                </CusIconButton>
                <CusIconButton color='success'>
                  <InfoCircle variant='Outline' />
                </CusIconButton>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default CustCard;
