import { Paper, Stack, Typography, Avatar, Grid } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Edit, InfoCircle, Trash } from 'iconsax-react';
import THEME_UTIL from 'utils/theme-util';
const CustCard = ({
  handleOpenDrawer,
  custList,
  fetchCustDetails,
  setConfirmDelete,
}: {
  handleOpenDrawer: (obj: 'Add' | 'Edit' | 'Details' | '') => void;
  custList: ICustomer.ICustomerRespone | undefined;
  fetchCustDetails: (params_0: { id: number }) => void;
  setConfirmDelete: React.Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  return (
    <>
      {custList?.data.map((data, i) => (
        <Grid item xs={6} md={3} key={i}>
          <Paper sx={{ p: 2 }}>
            <Stack direction={'column'} alignItems='center' spacing={1.5}>
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  background: THEME_UTIL.goldGradientMain,
                  color: (theme) => theme.palette.secondary.main,
                  textTransform: 'uppercase',
                  fontSize: 24,
                }}
              >
                {data.customer_name.charAt(0)}
              </Avatar>
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
                <Typography
                  variant='subtitle1'
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: 150,
                    textAlign: 'center',
                  }}
                >
                  {data.contact_number}
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <CusIconButton
                  color='info'
                  onClick={() => {
                    handleOpenDrawer('Edit');
                    fetchCustDetails({ id: data.id || 0 });
                  }}
                >
                  <Edit variant='Outline' />
                </CusIconButton>
                <CusIconButton
                  color='success'
                  onClick={() => {
                    handleOpenDrawer('Details');
                    fetchCustDetails({ id: data.id || 0 });
                  }}
                >
                  <InfoCircle variant='Outline' />
                </CusIconButton>
                <CusIconButton
                  color='error'
                  onClick={() => {
                    setConfirmDelete(data.id);
                  }}
                >
                  <Trash variant='Outline' />
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
