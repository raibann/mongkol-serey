import { Paper, Stack, Typography, Avatar, Grid } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import useRouter from 'hook/useRouter';

import { Add, Edit, InfoCircle } from 'iconsax-react';
import { ICustCard } from 'utils/cutomer-util';

const CustCard = ({
  handleOpenDrawer,
  customerCard,
  setSelectedData,
}: {
  handleOpenDrawer: (obj: 'Add' | 'Edit' | 'Details' | '') => void;
  customerCard: ICustCard[];
  setSelectedData: React.Dispatch<React.SetStateAction<ICustCard[]>>;
}) => {
  const router = useRouter();
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {customerCard.map((data, i) => (
          <Grid item xs={6} md={2} key={i}>
            <Paper sx={{ py: 2 }}>
              <Stack direction={'column'} alignItems='center' spacing={1.5}>
                <Avatar
                  src='/images/avatar.svg'
                  sx={{ width: 100, height: 'auto' }}
                />
                <Stack alignItems={'center'}>
                  <Typography variant='h6'>{data.customerName}</Typography>
                  <Typography
                    variant='caption'
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    Ordered: {data.ordered} times
                  </Typography>
                </Stack>
                <Stack direction={'row'} spacing={1.5}>
                  <CusIconButton
                    color='primary'
                    onClick={() => router.navigate('/orders')}
                  >
                    <Add variant='Outline' />
                  </CusIconButton>
                  <CusIconButton
                    color='info'
                    onClick={() => handleOpenDrawer('Edit')}
                  >
                    <Edit variant='Outline' />
                  </CusIconButton>
                  <CusIconButton
                    color='success'
                    onClick={(e) => {
                      handleOpenDrawer('Details');
                      if (e.target) {
                        let temp = customerCard.filter(
                          (el) => el.id === data.id
                        );
                        setSelectedData(temp);
                      } else {
                        setSelectedData(customerCard);
                      }
                    }}
                  >
                    <InfoCircle variant='Outline' />
                  </CusIconButton>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CustCard;
