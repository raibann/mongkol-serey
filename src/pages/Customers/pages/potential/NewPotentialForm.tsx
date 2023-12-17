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

interface INewPotentialInput {
  id?: string | number;
  customerName: string;
  location: string;
  phoneNumber: string;
  gender: string;
  social: string;
  socialType: string;
  note: string;
  images: string;
}

export default function NewPotential() {
  // State
  const [errorAlert, setErrorAlert] = useState(false);

  /* Hooks */
  const { control, handleSubmit, setValue, reset, watch } =
    useForm<INewPotentialInput>();
  const navigate = useNavigate();
  const params = useParams();

  // Request APIs
  const {
    loading: isLoadingCreate,
    run: fecthData,
    error: errorCreate,
  } = useRequest(CUSTOMER_API.postNewCustomer, {
    manual: true,
    onSuccess: (data) =>
      data && navigate(ROUTE_PATH.customers.potentialCustomers),
  });

  const {
    loading: isLoadingUpdate,
    error: errorUpdate,
    run: fetchUpdate,
  } = useRequest(CUSTOMER_API.updateCustomer, {
    manual: true,
    onSuccess: () => {
      navigate(ROUTE_PATH.customers.potentialCustomers);
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
      setValue('socialType', socialType);
      setValue('social', social);
      setValue('images', data.customer.images);
    },
  });

  // Effect;
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
  const onSubmit = (data: INewPotentialInput) => {
    // console.log(data);
    const telegram = data.socialType === EnumSocialType.TG ? data.social : '';
    const facebook = data.socialType === EnumSocialType.FB ? data.social : '';
    if (params.id) {
      fetchUpdate({
        id: params.id,
        cusRequest: {
          customer_name: data.customerName,
          facebook_name: facebook,
          telegram_name: telegram,
          gender: data.gender,
          contact_number: data.phoneNumber,
          customerType: EnumCustomerType.POTENTIAL_CUSTOMER,
          location: data.location,
          remarks: data.note,
          images: data.images,
          commune: '',
          district: '',
          house: '',
          province: '',
          street: '',
        },
      });
    } else {
      fecthData({
        cusRequest: {
          customer_name: data.customerName,
          facebook_name: facebook,
          telegram_name: telegram,
          contact_number: data.phoneNumber,
          gender: data.gender,
          customerType: EnumCustomerType.POTENTIAL_CUSTOMER,
          location: data.location,
          remarks: data.note,
          images: data.images,
          commune: '',
          district: '',
          house: '',
          province: '',
          street: '',
        },
      });
    }
  };

  const onReset = () => {
    reset({
      customerName: '',
      location: '',
      phoneNumber: '',
      gender: EnumGenderType.OTHER,
      social: '',
      socialType: EnumSocialType.TG,
      note: '',
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
        title={params.id ? 'Update Potential' : 'Create New Potential'}
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
          <Stack mx='auto' mb={2}>
            <UploadButton
              src={watch('images')}
              onChange={(dataUrl, file) => {
                runUpload(file);
                setValue('images', dataUrl);
              }}
            />
          </Stack>

          <Stack direction={'column'} spacing={2}>
            {isLoadingDetails ? (
              <>
                {Array(4)
                  .fill('')
                  .map((_, i) => (
                    <Stack direction={'row'} spacing={2} key={i}>
                      <Skeleton
                        variant='text'
                        animation='wave'
                        sx={{ fontSize: '1rem', width: '50%', height: '50px' }}
                      />
                      <Skeleton
                        variant='text'
                        animation='wave'
                        sx={{ fontSize: '1rem', width: '50%', height: '50px' }}
                      />
                    </Stack>
                  ))}
              </>
            ) : (
              <>
                <Stack direction={'row'} spacing={2}>
                  <Controller
                    defaultValue=''
                    control={control}
                    name='customerName'
                    rules={{
                      required: {
                        value: true,
                        message: 'Feild is required',
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
                        message: 'Feild is required',
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
                            defaultValue={'Male'}
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
                          return (
                            <CusTextField fullWidth size='small' {...field} />
                          );
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
