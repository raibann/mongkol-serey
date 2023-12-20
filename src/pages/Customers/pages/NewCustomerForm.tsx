import { LoadingButton } from '@mui/lab';
import {
  Paper,
  Container,
  Stack,
  MenuItem,
  Button,
  Skeleton,
} from '@mui/material';
import { useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import TELEGRAM_API from 'api/telegram';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  EnumCustomerType,
  EnumGenderType,
  EnumSocialType,
} from 'utils/data-util';
import { ROUTE_PATH } from 'utils/route-util';
import THEME_UTIL from 'utils/theme-util';

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
  images?: string;
}
export default function NewCustomerForm() {
  // State
  const [errorAlert, setErrorAlert] = useState(false);

  /* Hooks */
  const { control, handleSubmit, setValue, reset, watch } =
    useForm<INewCustomerInput>();
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

  const { run: runUpload, loading: loadingUpload } = useRequest(
    TELEGRAM_API.uploadFile,
    {
      manual: true,
      onError: () => console.log('error'),
      onSuccess: (res) => {
        setValue('images', res.path);
      },
    }
  );

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
      setValue('customerName', data.customer.customer_name);
      setValue('location', data.customer.location);
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
  const onSubmit = (data: INewCustomerInput) => {
    const telegram = data.socialType === EnumSocialType.TG ? data.social : '';
    const facebook = data.socialType === EnumSocialType.FB ? data.social : '';

    if (params.id) {
      fetchUpdate({
        id: params.id,
        cusRequest: {
          customer_name: data.customerName,
          facebook_name: facebook,
          telegram_name: telegram,
          contact_number: data.phoneNumber,
          gender: data.gender,
          house: data.house,
          street: data.street,
          commune: data.commune,
          district: data.district,
          province: data.province,
          location: data.location,
          customerType: EnumCustomerType.CUSTOMER,
          images: data.images,
        },
      });
    } else {
      // console.log(data);
      fecthCreate({
        cusRequest: {
          customer_name: data.customerName,
          facebook_name: facebook,
          telegram_name: telegram,
          contact_number: data.phoneNumber,
          gender: data.gender,
          house: data.house,
          street: data.street,
          commune: data.commune,
          district: data.district,
          province: data.province,
          location: data.location,
          customerType: EnumCustomerType.CUSTOMER,
          images: data.images,
        },
      });
    }
  };

  const onReset = () => {
    reset({
      customerName: '',
      phoneNumber: '',
      gender: EnumGenderType.OTHER,
      street: '',
      house: '',
      province: '',
      district: '',
      commune: '',
      payment: '',
      social: '',
      socialType: EnumSocialType.TG,
      location: '',
      images: '',
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
        errorMessage={'Something went wrong!'}
      />
      <SecondaryPageHeader
        title={params.id ? 'Update Customer' : 'Create New Customer'}
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
          component={'form'}
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
                  <UploadButton
                    src={watch('images')}
                    onChange={(dataUrl, file) => {
                      runUpload(file);
                      setValue('images', dataUrl);
                    }}
                  />
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
                  <Button
                    size='large'
                    variant='outlined'
                    fullWidth
                    onClick={onReset}
                  >
                    Reset
                  </Button>
                  <LoadingButton
                    size='large'
                    loading={
                      isLoadingCreate || isLoadingUpdate || loadingUpload
                    }
                    type='submit'
                    variant='contained'
                    fullWidth
                    sx={{ background: THEME_UTIL.goldGradientMain }}
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
}
