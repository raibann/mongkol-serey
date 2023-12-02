import { LoadingButton } from '@mui/lab';
import {
  Paper,
  Container,
  Stack,
  Button,
  MenuItem,
  Skeleton,
} from '@mui/material';
import { useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { EnumGenderType, EnumSocialType } from 'utils/data-util';
import { ROUTE_PATH } from 'utils/route-util';
interface INewSuplierInput {
  id?: string | number;
  firstName: string;
  lastName: string;
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
}

const NewSupplierForm = () => {
  // State
  const [errorAlert, setErrorAlert] = useState(false);

  /* Hooks */
  const { control, handleSubmit, setValue } = useForm<INewSuplierInput>();
  const navigate = useNavigate();
  const params = useParams();

  // Request APIs
  const {
    loading: isLoadingCreate,
    run: fecthCreate,
    error: errorCreate,
  } = useRequest(CUSTOMER_API.postNewCustomer, {
    manual: true,
    onSuccess: (data) => data && navigate(ROUTE_PATH.customers.root),
  });

  const {
    loading: isLoadingUpdate,
    error: errorUpdate,
    run: fetchUpdate,
  } = useRequest(CUSTOMER_API.updateCustomer, {
    manual: true,
    onSuccess: () => {
      navigate(ROUTE_PATH.customers.root);
    },
  });
  const {
    run: fetchDetails,
    loading: isLoadingDetails,
    error: errorDetails,
    cancel: cancelFetchDetails,
  } = useRequest(CUSTOMER_API.getCustomerDetails, {
    manual: false,
    onSuccess: (data) => {
      const social = data.customer.telegram_name || data.customer.facebook_name;
      const socialType = data.customer.telegram_name
        ? EnumSocialType.TG
        : EnumSocialType.FB;
      setValue('firstName', data.customer.customer_name);
      setValue('lastName', data.customer.location);
      setValue('gender', data.customer.gender || EnumGenderType.OTHER);
      setValue('phoneNumber', data.customer.contact_number);
      setValue('street', data.customer.street);
      setValue('house', data.customer.house);
      setValue('province', data.customer.province);
      setValue('district', data.customer.district);
      setValue('commune', data.customer.commune);
      setValue('payment', data.customer.payment || '');
      setValue('socialType', socialType);
      setValue('social', social);
    },
  });
  // Effect
  useEffect(() => {
    if (errorCreate || errorDetails || errorUpdate) {
      setErrorAlert(!errorAlert);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorCreate, errorDetails, errorUpdate]);

  useEffect(() => {
    if (params.id) {
      fetchDetails({ id: +params.id });
    } else {
      cancelFetchDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  /* Methods */
  const onSubmit = (data: INewSuplierInput) => {
    console.log(data);
  };
  return (
    <>
      <ErrorDialog
        open={errorAlert}
        onCloseDialog={() => {
          setErrorAlert(!errorAlert);
        }}
        errorTitle='Failed Authentication'
        errorMessage={'Something went wrong!'}
      />
      <SecondaryPageHeader
        title={params.id ? 'Update Supplier' : 'Create New Supplier'}
      />
      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
      >
        <Container
          maxWidth='sm'
          component='form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={'column'} spacing={2}>
            {isLoadingDetails ? (
              <>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Skeleton variant='circular' width={80} height={80} />
                </Stack>
                {Array(4)
                  .fill('')
                  .map((_, i) => (
                    <Stack direction={'row'} spacing={2} key={i}>
                      <Skeleton
                        animation='wave'
                        variant='text'
                        sx={{ fontSize: '1rem', width: '50%', height: '50px' }}
                      />
                      <Skeleton
                        animation='wave'
                        variant='text'
                        sx={{ fontSize: '1rem', width: '50%', height: '50px' }}
                      />
                    </Stack>
                  ))}
              </>
            ) : (
              <>
                <Stack direction={'row'} spacing={2}>
                  <UploadButton />
                </Stack>
                <Stack direction={'row'} spacing={2}>
                  <Controller
                    defaultValue=''
                    control={control}
                    name='firstName'
                    render={({ field, fieldState }) => {
                      return (
                        <LabelTextField
                          label='Frist Name'
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
                    name='lastName'
                    render={({ field, fieldState }) => {
                      return (
                        <LabelTextField
                          label='Last Name'
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
                        <LabelTextField label='Gender'>
                          <CusTextField
                            select
                            defaultValue={EnumGenderType.OTHER}
                            SelectProps={{
                              displayEmpty: true,
                            }}
                            size='small'
                            helperText={fieldState.error?.message}
                            {...field}
                          >
                            <MenuItem value={EnumGenderType.OTHER}>
                              Other
                            </MenuItem>
                            <MenuItem value={EnumGenderType.MALE}>
                              Male
                            </MenuItem>
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
                        name='district'
                        render={({ field }) => {
                          return (
                            <CusTextField fullWidth size='small' {...field} />
                          );
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
                    loading={isLoadingCreate || isLoadingUpdate}
                    type='submit'
                    variant='contained'
                    fullWidth
                  >
                    Save
                  </LoadingButton>
                </Stack>
              </>
            )}
          </Stack>
        </Container>
      </Paper>
    </>
  );
};

export default NewSupplierForm;
