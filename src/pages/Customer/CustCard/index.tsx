import { Paper, Stack, Typography, Avatar, Grid } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import useRouter from 'hook/useRouter';
import { Add, Edit, InfoCircle } from 'iconsax-react';
const CustCard = ({
  handleOpenDrawer,
  custList,
  fetchCustDetails,
}: {
  handleOpenDrawer: (obj: 'Add' | 'Edit' | 'Details' | '') => void;
  custList: ICustomer.ICustomerRespone | undefined;
  fetchCustDetails: (params_0: { id: number }) => void;
}) => {
  const router = useRouter();

  return (
    <>
      {custList?.data.map((data, i) => (
        <Grid item xs={6} md={3} key={i}>
          <Paper sx={{ py: 2 }}>
            <Stack direction={'column'} alignItems='center' spacing={1.5}>
              <Avatar
                src='/images/girlavatar.png'
                sx={{ width: 100, height: 'auto' }}
              />
              <Stack alignItems={'center'}>
                <Typography
                  variant='h6'
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: 150,
                    textAlign: 'center',
                  }}
                >
                  {data.customer_name}
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
                    fetchCustDetails({ id: data.id || 0 });
                  }}
                >
                  <InfoCircle variant='Outline' />
                </CusIconButton>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default CustCard;
