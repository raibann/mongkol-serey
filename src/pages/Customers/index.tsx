import { Button, InputAdornment, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, SearchNormal1 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import CustomerDetails from './CustomerDetails';
import CustomerForm, { CustomerInput } from './CustForm/CustomerForm';
import { useDebounce, useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import { CusLoading } from 'components/CusLoading';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import { changeBackground } from 'utils/validate-util';
import { LoadingButton } from '@mui/lab';
import CustTable from './components/CustomerTable';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function Customers() {
  /* State */
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | 'Details' | ''>(
    ''
  );
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<number>();

  /* Hooks */
  const methods = useForm<CustomerInput>();
  const { handleSubmit, setValue } = methods;
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();

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

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <PageHeader pageTitle='Customers'>
        <CusTextField
          fullWidth={isSmDown ? true : false}
          placeholder='Search...'
          size='small'
          sx={{ bgcolor: 'common.white', mr: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchNormal1 size={18} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={() => navigate(ROUTE_PATH.customers.createNewCustomer)}
          variant='contained'
          size='small'
          disableElevation
          sx={{
            color: 'common.white',
            minWidth: 0,
          }}
        >
          <Add />
        </Button>
      </PageHeader>

      <Container
        maxWidth={'xl'}
        sx={{
          height: [
            'calc(100vh - 138px)',
            'calc(100vh - 138px)',
            'calc(100vh - 85px)',
          ],
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CustTable />
      </Container>

      <ResponsiveDrawer
        open={!!openDrawer}
        onCloseDrawer={() => {}}
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
                  newCustomerRequest.run({
                    cusRequest: {
                      id: data.customerId || undefined,
                      facebook_name: data.facebook,
                      telegram_name: data.telegram,
                      customer_name: data.customerName,
                      house: data.houseNo,
                      province: data?.province || '',
                      district: data?.district || '',
                      commune: data?.commune || '',
                      contact_number: data.contact,
                      location: data.location,
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
                  <LoadingButton
                    type='submit'
                    variant='contained'
                    fullWidth
                    loading={newCustomerRequest.loading}
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
                  </LoadingButton>
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
        title={'Are you sure?'}
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
