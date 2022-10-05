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
import { BoxRemove, SearchNormal1, UserAdd } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import theme from 'theme/theme';
import CustCard from './CustCard';
import CustomerDetails from './CustomerDetails';
import CustomerForm, { CustomerInput } from './CustForm/CustomerForm';
import { useDebounce, useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import { CusLoading } from 'components/CusLoading';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import { changeBackground } from 'utils/validate-util';

export default function Customers() {
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | 'Details' | ''>(
    ''
  );
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<number>();
  const methods = useForm<CustomerInput>();
  const { handleSubmit, setValue } = methods;
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
    refresh: refreshCustList,
  } = useRequest(CUSTOMER_API.getCustomerList, {
    manual: true,
  });
  const {
    data: custDetails,
    loading: isLoadingCustDetails,
    run: fetchCustDetails,
  } = useRequest(CUSTOMER_API.getCustomerDetails, {
    manual: true,
    onSuccess: (data) => {
      if (openDrawer === 'Edit') {
        setValue('customerId', data.customer.id);
        setValue('facebook', `${data.customer.facebook_name}`);
        setValue('telegram', `${data.customer.telegram_name}`);
        setValue('customerName', `${data.customer.customer_name}`);
        setValue('contact', `${data.customer.contact_number}`);
        setValue('houseNo', `${data.customer.house}`);
        setValue('stNo', `${data.customer.street}`);
        setValue('province', `${data.customer.province}`);
        setValue('district', `${data.customer.district}`);
        setValue('commune', `${data.customer.commune}`);
        setValue('location', `${data.customer.location}`);
      }
    },
  });
  const debouncedValue = useDebounce(searchData, { wait: 500 });
  // actions customer
  const newCustomerRequest = useRequest(CUSTOMER_API.postNewCustomer, {
    manual: true,
    onSuccess: () => {
      setOpenDrawer('');
      refreshCustList();
    },
  });
  const deleteCustomerReq = useRequest(CUSTOMER_API.deleteCustomer, {
    manual: true,
    onSuccess: () => {
      refreshCustList();
      setConfirmDelete(undefined);
    },
  });

  // fetch page
  useEffect(() => {
    fetchCustList({ page: page - 1, search: debouncedValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, debouncedValue]);

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
            startIcon={<UserAdd />}
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
            onChange={(e) => setSearchData(e.currentTarget.value)}
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
            'calc(100vh - 85px)',
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
              height: ['calc( 100vh - 130px)', 'calc( 100vh - 130px)', '100%'],
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
            <BoxRemove size='80' color={theme.palette.error.main} />
            <Typography variant='h6' color='error'>
              No customer
            </Typography>
          </Stack>
        ) : (
          <Box sx={{ overflow: 'auto', height: '100%' }}>
            <Grid container rowSpacing={4} columnSpacing={2} sx={{ mb: 10 }}>
              <CustCard
                {...{
                  handleOpenDrawer,
                  custList,
                  fetchCustDetails,
                  setConfirmDelete,
                  changeBackground,
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
            mx: 'auto',
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
            <Pagination
              count={custList?.totalPage}
              page={page}
              onChange={handleChangePage}
            />
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
            {openDrawer === 'Edit' && 'Edit Customer Details'}
            {openDrawer === 'Details' && 'Customer Details'}
          </Typography>
          <CusIconButton
            color='error'
            onClick={() => {
              handleOpenDrawer('');
              methods.clearErrors();
              setValue('facebook', '');
              setValue('telegram', '');
              setValue('customerName', '');
              setValue('contact', '');
              setValue('houseNo', '');
              setValue('stNo', '');
              setValue('province', '');
              setValue('district', '');
              setValue('commune', '');
              setValue('location', '');
            }}
          >
            <MdClose />
          </CusIconButton>
        </Stack>
        {openDrawer !== '' &&
          openDrawer !== 'Details' &&
          (isLoadingCustDetails ? (
            <Stack
              alignItems={'center'}
              sx={{ height: 'calc(100vh - 88px)' }}
              justifyContent='center'
            >
              <CusLoading />
            </Stack>
          ) : (
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                  newCustomerRequest.run({
                    cusRequest: {
                      id: data.customerId || undefined,
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
                <Stack direction={'row'} spacing={4} sx={{ px: 3, py: 6 }}>
                  <Button
                    onClick={() => {
                      handleOpenDrawer('');
                      methods.clearErrors();
                      setValue('facebook', '');
                      setValue('telegram', '');
                      setValue('customerName', '');
                      setValue('contact', '');
                      setValue('houseNo', '');
                      setValue('stNo', '');
                      setValue('province', '');
                      setValue('district', '');
                      setValue('commune', '');
                      setValue('location', '');
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
          ))}
        {openDrawer === 'Details' && (
          <CustomerDetails
            {...{ custDetails, isLoadingCustDetails, changeBackground }}
          />
        )}
      </ResponsiveDrawer>
      <ConfirmDialogSlide
        open={confirmDelete !== undefined}
        maxWidth='xs'
        title={'Are you sure to delete?'}
        cancel={() => {
          setConfirmDelete(undefined);
        }}
        confirm={() => {
          deleteCustomerReq.run({
            id: confirmDelete || 0,
          });
        }}
        loading={deleteCustomerReq.loading}
      />
    </>
  );
}
