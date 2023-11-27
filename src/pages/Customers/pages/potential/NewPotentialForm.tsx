import { LoadingButton } from '@mui/lab';
import { Paper, Container, Stack, MenuItem, Button } from '@mui/material';
import { useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EnumCustomerType, EnumSocialType } from 'utils/data-util';
import { ROUTE_PATH } from 'utils/route-util';

interface INewPotentialInput {
  id?: string | number;
  customerName: string;
  location: string;
  phoneNumber: string;
  gender: string;
  social: string;
  socialType: string;
  note: string;
}

export default function NewPotential() {
  // State
  const [errorAlert, setErrorAlert] = useState(false);

  /* Hooks */
  const { control, handleSubmit } = useForm<INewPotentialInput>();
  const navigate = useNavigate();

  // Request APIs
  const {
    loading: isLoading,
    run: fecthData,
    error: errorFetch,
  } = useRequest(CUSTOMER_API.postNewCustomer, {
    manual: true,
    onSuccess: (data) =>
      data && navigate(ROUTE_PATH.customers.potentialCustomers),
  });

  // Effect;
  useEffect(() => {
    if (errorFetch) {
      setErrorAlert(!errorAlert);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorFetch]);

  /* Methods */
  const onSubmit = (data: INewPotentialInput) => {
    // console.log(data);
    const telegram = data.socialType === EnumSocialType.TG ? data.social : '';
    const facebook = data.socialType === EnumSocialType.FB ? data.social : '';
    // console.log(data);
    fecthData({
      cusRequest: {
        customer_name: data.customerName,
        facebook_name: facebook,
        telegram_name: telegram,
        contact_number: data.phoneNumber,
        customerType: EnumCustomerType.POTENTIAL_CUSTOMER,
        location: data.location,
        remarks: data.note,
        commune: '',
        district: '',
        house: '',
        province: '',
        street: '',
      },
    });
  };
  return (
    <>
      <ErrorDialog
        open={errorAlert}
        onCloseDialog={() => {
          setErrorAlert(!errorAlert);
        }}
        errorTitle='Failed Authentication'
        errorMessage={errorFetch?.message || 'Something went wrong!'}
      />
      <SecondaryPageHeader title='Create New Potential' />
      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
      >
        <Container
          maxWidth='sm'
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={'column'} spacing={2}>
            <Stack direction={'row'} spacing={2}>
              <Controller
                defaultValue=''
                control={control}
                name='customerName'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='Customer Name'
                      size='small'
                      fieldState={fieldState}
                      {...field}
                    />
                  );
                }}
              />
              <Controller
                defaultValue=''
                control={control}
                name='location'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='Location'
                      size='small'
                      fieldState={fieldState}
                      {...field}
                    />
                  );
                }}
              />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <Controller
                defaultValue=''
                control={control}
                name='phoneNumber'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='Phone Number'
                      size='small'
                      fieldState={fieldState}
                      {...field}
                    />
                  );
                }}
              />
              <Controller
                defaultValue=''
                control={control}
                name='gender'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField label='Gender' fieldState={fieldState}>
                      <CusTextField
                        select
                        defaultValue={'Male'}
                        SelectProps={{
                          displayEmpty: true,
                        }}
                        size='small'
                        {...field}
                      >
                        <MenuItem value='Male'>Male</MenuItem>
                        <MenuItem value='Female'>Female</MenuItem>
                      </CusTextField>
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={'row'}>
              <LabelTextField label='Social Media' size='small'>
                <Stack direction={'row'} spacing={1}>
                  <Controller
                    defaultValue='TG'
                    control={control}
                    name='socialType'
                    render={({ field }) => {
                      return (
                        <CusTextField
                          select
                          defaultValue={''}
                          SelectProps={{
                            displayEmpty: true,
                          }}
                          size='small'
                          sx={{ width: '40%' }}
                          {...field}
                        >
                          <MenuItem value='FB'>Facebook</MenuItem>
                          <MenuItem value='TG'>Telegram</MenuItem>
                        </CusTextField>
                      );
                    }}
                  />
                  <Controller
                    defaultValue=''
                    control={control}
                    name='social'
                    render={({ field }) => {
                      return <CusTextField fullWidth size='small' {...field} />;
                    }}
                  />
                </Stack>
              </LabelTextField>
            </Stack>
            <Controller
              defaultValue=''
              control={control}
              name='note'
              render={({ field, fieldState }) => {
                return (
                  <LabelTextField
                    label='Note...'
                    size='small'
                    fieldState={fieldState}
                    {...field}
                  />
                );
              }}
            />
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              spacing={2}
              py={2}
            >
              <Button variant='outlined' fullWidth>
                Reset
              </Button>
              <LoadingButton
                loading={isLoading}
                type='submit'
                variant='contained'
                fullWidth
              >
                Save
              </LoadingButton>
            </Stack>
          </Stack>
        </Container>
      </Paper>
    </>
  );
}
