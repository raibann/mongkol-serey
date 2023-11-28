import { LoadingButton } from '@mui/lab';
import { Paper, Container, Stack, MenuItem, Button } from '@mui/material';
import { useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  EnumCustomerType,
  EnumGenderType,
  EnumSocialType,
} from 'utils/data-util';
import { ROUTE_PATH } from 'utils/route-util';

interface INewCustomerInput {
  id?: string | number;
  customerName: string;
  phoneNumber: string;
  gender: string;
  street: string;
  house: string;
  province: string;
  district: string;
  commune: string;
  payment: string;
  social: string;
  socialType: string;
  location: string;
  image?: string;
}
export default function NewCustomerForm() {
  // State
  const [errorAlert, setErrorAlert] = useState(false);

  /* Hooks */
  const { control, handleSubmit } = useForm<INewCustomerInput>();
  const navigate = useNavigate();

  // Request APIs
  const {
    loading: isLoading,
    run: fecthData,
    error: errorFetch,
  } = useRequest(CUSTOMER_API.postNewCustomer, {
    manual: true,
    onSuccess: (data) => data && navigate(ROUTE_PATH.customers.root),
  });

  // Effect;
  useEffect(() => {
    if (errorFetch) {
      setErrorAlert(!errorAlert);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorFetch]);

  /* Methods */
  const onSubmit = (data: INewCustomerInput) => {
    const telegram = data.socialType === EnumSocialType.TG ? data.social : '';
    const facebook = data.socialType === EnumSocialType.FB ? data.social : '';
    // console.log(data);
    fecthData({
      cusRequest: {
        customer_name: data.customerName,
        facebook_name: facebook,
        telegram_name: telegram,
        contact_number: data.phoneNumber,
        house: data.house,
        street: data.street,
        commune: data.commune,
        district: data.district,
        province: data.province,
        location: data.location,
        customerType: EnumCustomerType.CUSTOMER,
        image: data.image,
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
      <SecondaryPageHeader title='Create New Customer' />
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
              <UploadButton />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <Controller
                defaultValue=''
                control={control}
                name='customerName'
                rules={{
                  required: {
                    value: true,
                    message: 'Field is required',
                  },
                }}
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
                rules={{
                  required: {
                    value: true,
                    message: 'Field is required',
                  },
                }}
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
                defaultValue={EnumGenderType.OTHER}
                control={control}
                name='gender'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField label='Gender'>
                      <CusTextField
                        select
                        SelectProps={{
                          displayEmpty: true,
                        }}
                        size='small'
                        helperText={fieldState.error?.message}
                        {...field}
                      >
                        <MenuItem value={EnumGenderType.OTHER}>Other</MenuItem>
                        <MenuItem value={EnumGenderType.MALE}>Male</MenuItem>
                        <MenuItem value={EnumGenderType.FEMALE}>
                          Female
                        </MenuItem>
                      </CusTextField>
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <Controller
                defaultValue=''
                control={control}
                name='street'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='Street'
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
                name='house'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='House'
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
                name='province'
                rules={{
                  required: {
                    value: true,
                    message: 'Field is required',
                  },
                }}
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='Province'
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
                name='district'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='District'
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
                name='commune'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='Commune'
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
                name='payment'
                render={({ field, fieldState }) => {
                  return (
                    <LabelTextField
                      label='Default Payment'
                      fieldState={fieldState}
                    >
                      <CusTextField
                        select
                        defaultValue={''}
                        SelectProps={{
                          displayEmpty: true,
                        }}
                        size='small'
                        {...field}
                      >
                        <MenuItem value='Aba'>ABA</MenuItem>
                        <MenuItem value='Acleda'>ACLEDA</MenuItem>
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
                          defaultValue={EnumSocialType.TG}
                          SelectProps={{
                            displayEmpty: true,
                          }}
                          size='small'
                          sx={{ width: '40%' }}
                          {...field}
                        >
                          <MenuItem value={EnumSocialType.FB}>
                            Facebook
                          </MenuItem>
                          <MenuItem value={EnumSocialType.TG}>
                            Telegram
                          </MenuItem>
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
