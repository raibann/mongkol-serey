import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Pagination,
  Stack,
  Typography,
  Paper,
} from '@mui/material';
import { Container } from '@mui/system';
import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, BoxRemove, SearchNormal1 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import theme from 'theme/theme';
import CustCard from './CustCard';
import CustomerDetails from './CustomerDetails';
import CustomerForm, { CustomerInput } from './CustForm/CustomerForm';
import { useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import { CusLoading } from 'components/CusLoading';

export default function Customers() {
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | 'Details' | ''>(
    ''
  );
  const [page, setPage] = useState(1);
  const methods = useForm<CustomerInput>();
  const { handleSubmit } = methods;
  const { isSmDown } = useResponsive();
  // handle add and edit stock
  const handleOpenDrawer = (obj: 'Add' | 'Edit' | 'Details' | '') => {
    setOpenDrawer(obj);
  };
  const { isMdDown } = useResponsive();

  // fecth data
  const {
    data: custList,
    loading: isLoadingCustList,
    run: fetchCustList,
  } = useRequest(CUSTOMER_API.getCustomerList, {
    manual: true,
  });
  const {
    data: custDetails,
    loading: isLoadingCustDetails,
    run: fetchCustDetails,
  } = useRequest(CUSTOMER_API.getCustomerDetails, { manual: true });
  const newCustomerRequest = useRequest(CUSTOMER_API.postNewCustomer, {
    manual: true,
  });
  useEffect(() => {
    fetchCustList({ page: page - 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // console.log('page', page);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <>
      <PageHeader pageTitle={'Customers'}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={isSmDown ? 'flex-start' : 'flex-end'}
          spacing={2}
          sx={{ mt: [2, 2, 0] }}
        >
          <Button
            variant='contained'
            startIcon={<Add />}
            sx={{
              color: theme.palette.common.white,
              boxShadow: theme.shadows[1],
              borderRadius: 2,
              height: 40,
              width: ['70%', 'auto', 'auto'],
            }}
            onClick={() => handleOpenDrawer('Add')}
          >
            {isMdDown ? 'New' : 'Add New'}
          </Button>
          <CusTextField
            placeholder='Search...'
            size='small'
            // fullWidth={isSmDown}
            sx={{ width: ['100%', '80%', 'auto'] }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchNormal1 size='20' color={theme.palette.primary.main} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </PageHeader>
      <Container
        maxWidth={'xl'}
        sx={{
          height: [
            'calc(100vh - 130px)',
            'calc(100vh - 130px)',
            'calc(100vh - 74px)',
          ],
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {isLoadingCustList ? (
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
              height: [
                'calc( 100vh - 130px)',
                'calc( 100vh - 130px)',
                'calc( 100vh - 74px)',
              ],
            }}
          >
            <CusLoading />
          </Stack>
        ) : custList && custList.data.length === 0 ? (
          <Stack
            direction={'column'}
            alignItems={'center'}
            justifyContent='center'
            sx={{
              height: [
                'calc( 100vh - 130px)',
                'calc( 100vh - 130px)',
                'calc( 100vh - 74px)',
              ],
            }}
          >
            <BoxRemove size='80' color={theme.palette.primary.main} />
            <Typography variant='h6'>No data</Typography>
          </Stack>
        ) : (
          <Box sx={{ overflow: 'auto', height: '100%' }}>
            <Grid container rowSpacing={4} columnSpacing={2} sx={{ mb: 10 }}>
              <CustCard
                {...{
                  handleOpenDrawer,
                  custList,
                  fetchCustDetails,
                }}
              />
            </Grid>
          </Box>
        )}
        <Stack
          alignItems='center'
          width='100%'
          sx={{
            position: 'absolute',
            bottom: 12,
            zIndex: (theme) => theme.zIndex.appBar,
          }}
        >
          <Paper
            sx={{
              p: 1.5,
              borderRadius: '50vh',
              boxShadow: (theme) => theme.shadows[2],
              bgcolor: (theme) => theme.palette.common.white,
            }}
          >
            <Pagination count={10} page={page} onChange={handleChangePage} />
          </Paper>
        </Stack>
      </Container>
      <ResponsiveDrawer
        open={!!openDrawer}
        onCloseDrawer={() => {
          // setOpenDrawer('');
        }}
        anchor={'right'}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          py={3}
          px={3}
          sx={{
            zIndex: (theme) => theme.zIndex.appBar,
            position: 'sticky',
            top: 0,
            bgcolor: (theme) => theme.palette.common.white,
          }}
        >
          <Typography variant='h5' color='secondary.main' fontWeight='bold'>
            {openDrawer === 'Add' && 'Add New Customer'}
            {openDrawer === 'Edit' && 'Edit Details'}
            {openDrawer === 'Details' && 'Details'}
          </Typography>
          <CusIconButton
            color='error'
            onClick={() => {
              handleOpenDrawer('');
            }}
          >
            <MdClose />
          </CusIconButton>
        </Stack>
        {openDrawer === 'Add' && (
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit((data) => {
                newCustomerRequest.run({
                  cusRequest: {
                    facebook_name: data.facebook,
                    telegram_name: data.telegram,
                    customer_name: data.customerName,
                    house: data.houseNo,
                    commune:
                      (data.commune as Commune.ICommune)?.full_name_km ||
                      data.commune.toString(),
                    contact_number: data.contact,
                    district:
                      (data.district as District.IDistrict)?.full_name_km ||
                      data.district.toString(),
                    location: data.location,
                    province:
                      (data.province as Province.IProvince)?.full_name_km ||
                      data.province.toString(),
                    street: data.stNo,
                  },
                });
              })}
            >
              <CustomerForm />
              <Stack direction={'row'} spacing={4} sx={{ px: 3, py: 4, mt: 4 }}>
                <Button
                  onClick={() => {
                    handleOpenDrawer('');
                  }}
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    textTransform: 'capitalize',
                    boxShadow: 1,
                    color: (theme) => theme.palette.common.white,
                    background: (theme) => theme.palette.error.main,
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    textTransform: 'capitalize',
                    boxShadow: 1,
                    color: (theme) => theme.palette.common.white,
                  }}
                >
                  Save
                </Button>
              </Stack>
            </form>
          </FormProvider>
        )}
        {openDrawer === 'Edit' && (
          <FormProvider {...methods}>
            <form>
              <CustomerForm />
              <Stack direction={'row'} spacing={4} sx={{ px: 3, py: 6 }}>
                <Button
                  onClick={() => {
                    handleOpenDrawer('');
                  }}
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    textTransform: 'capitalize',
                    boxShadow: 1,
                    color: (theme) => theme.palette.common.white,
                    background: (theme) => theme.palette.error.main,
                    '&:hover': {
                      background: (theme) => theme.palette.error.main,
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    textTransform: 'capitalize',
                    boxShadow: 1,
                    color: (theme) => theme.palette.common.white,
                    '&:hover': {
                      background: (theme) => theme.palette.primary.main,
                    },
                  }}
                >
                  Save
                </Button>
              </Stack>
            </form>
          </FormProvider>
        )}
        {openDrawer === 'Details' && (
          <CustomerDetails {...{ custDetails, isLoadingCustDetails }} />
        )}
      </ResponsiveDrawer>
    </>
  );
}
