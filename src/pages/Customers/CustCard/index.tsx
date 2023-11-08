import { Paper, Stack, Typography, Avatar, Grid, Tooltip } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Edit, InfoCircle, Trash } from 'iconsax-react';

const CustCard = ({
  handleOpenDrawer,
  custList,
  fetchCustDetails,
  setConfirmDelete,
  changeBackground,
}: {
  handleOpenDrawer: (obj: 'Add' | 'Edit' | 'Details' | '') => void;
  custList: ICustomer.ICustomerRespone | undefined;
  fetchCustDetails: (params_0: { id: number }) => void;
  setConfirmDelete: React.Dispatch<React.SetStateAction<number | undefined>>;
  changeBackground: (name?: string) => string;
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
                  background: changeBackground(data.customer_name),
                  color: (theme) => theme.palette.common.white,
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
                <Tooltip title='Edit' arrow>
                  <CusIconButton
                    color='info'
                    onClick={() => {
                      handleOpenDrawer('Edit');
                      fetchCustDetails({ id: data.id || 0 });
                    }}
                  >
                    <Edit variant='Outline' />
                  </CusIconButton>
                </Tooltip>
                <Tooltip title='Details' arrow>
                  <CusIconButton
                    color='success'
                    onClick={() => {
                      handleOpenDrawer('Details');
                      fetchCustDetails({ id: data.id || 0 });
                    }}
                  >
                    <InfoCircle variant='Outline' />
                  </CusIconButton>
                </Tooltip>
                <Tooltip title='Delete' arrow>
                  <CusIconButton
                    color='error'
                    onClick={() => {
                      setConfirmDelete(data.id);
                    }}
                  >
                    <Trash variant='Outline' />
                  </CusIconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default CustCard;
