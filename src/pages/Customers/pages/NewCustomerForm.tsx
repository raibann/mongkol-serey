import { LoadingButton } from '@mui/lab';
import { Paper, Container, Stack, MenuItem, Button } from '@mui/material';
import { useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import TELEGRAM_API from 'api/telegram';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import FormSkeleton from 'components/CusSkeleton/FormSkeleton';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import useError from 'hook/useError';
import useGeography from 'hook/useGeography';
import { useEffect } from 'react';
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
  /* Hooks */
  const { errorState, setErorrState } = useError();
  const navigate = useNavigate();
  const params = useParams();
  const paramId = params && params.id;

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    getValues,
    resetField,
  } = useForm<INewCustomerInput>();
  const {
    provinces,
    districts,
    communes,
    setDistrictId,
    setProvinceId,
    communeLoading,
    districtLoading,
    provinceLoading,
    errorGeo,
  } = useGeography({
    disName: getValues('district'),
    proName: getValues('province'),
  });

  // Request APIs
  // --- check error
  useEffect(() => {
    if (errorGeo) {
      setErorrState(errorGeo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorGeo]);

  // --- fetch details
  const { loading: isLoadingDetails } = useRequest(
    async () =>
      await CUSTOMER_API.getCustomerDetails({
        id: (paramId && +paramId) || undefined,
      }),
    {
      manual: false,
      ready: paramId !== undefined,
      refreshDeps: [paramId],
      onError: (e: Error) =>
        setErorrState({
          error: true,
          message: e.message,
        }),
      onSuccess: (data) => {
        const social =
          data.customer.telegram_name || data.customer.facebook_name;
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
        setValue('payment', data.customer.defaultPayment || '');
        setValue('socialType', socialType);
        setValue('social', social);
        setValue('images', data.customer.images);
      },
    }
  );

  // --- fecth create
  const { loading: isLoadingCreate, run: fecthCreate } = useRequest(
    CUSTOMER_API.postNewCustomer,
    {
      manual: true,
      onError: (e: Error) =>
        setErorrState({
          error: true,
          message: e.message,
        }),
      onSuccess: (data) => data && navigate(ROUTE_PATH.customers.root),
    }
  );

  // --- fecth update
  const { loading: isLoadingUpdate, run: fetchUpdate } = useRequest(
    CUSTOMER_API.updateCustomer,
    {
      manual: true,
      onError: (e: Error) =>
        setErorrState({
          error: true,
          message: e.message,
        }),
      onSuccess: () => {
        navigate(ROUTE_PATH.customers.root);
      },
    }
  );

  // --- upload
  const { run: runUpload, loading: loadingUpload } = useRequest(
    TELEGRAM_API.uploadFile,
    {
      manual: true,
      onError: (e: Error) =>
        setErorrState({
          error: true,
          message: e.message,
        }),
      onSuccess: (res) => {
        setValue('images', res.path);
      },
    }
  );

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
          defaultPayment: data.payment,
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
          defaultPayment: data.payment,
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
        open={errorState.error}
        onCloseDialog={() => {
          setErorrState({
            error: !errorState.error,
            message: '',
          });
        }}
        errorMessage={errorState.message}
      />
      <SecondaryPageHeader
        title={paramId ? 'Update Customer' : 'Create New Customer'}
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
              <FormSkeleton />
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
                        <LabelTextField label='Province'>
                          <CusTextField
                            select
                            SelectProps={{
                              displayEmpty: true,
                            }}
                            size='small'
                            helperText={fieldState.error?.message}
                            {...field}
                          >
                            <MenuItem value={''}>
                              {provinceLoading
                                ? 'Loading...'
                                : 'Select Provicne'}
                            </MenuItem>

                            {!provinceLoading &&
                              provinces?.map((p) => (
                                <MenuItem
                                  value={p.name}
                                  key={p.name}
                                  onClick={() => {
                                    setProvinceId(`${p.id}`);
                                    resetField('district');
                                    resetField('commune');
                                  }}
                                >
                                  {p.name}
                                </MenuItem>
                              ))}
                          </CusTextField>
                        </LabelTextField>
                      );
                    }}
                  />
                  <Controller
                    defaultValue=''
                    control={control}
                    name='district'
                    render={({ field, fieldState }) => {
                      return (
                        <LabelTextField label='District'>
                          <CusTextField
                            select
                            SelectProps={{
                              displayEmpty: true,
                            }}
                            size='small'
                            helperText={fieldState.error?.message}
                            {...field}
                          >
                            <MenuItem value={''}>
                              {districtLoading
                                ? 'Loading...'
                                : 'Select District'}
                            </MenuItem>
                            {!districtLoading &&
                              districts?.map((d) => (
                                <MenuItem
                                  value={d.name}
                                  key={d.name}
                                  onClick={() => {
                                    setDistrictId(`${d.id}`);
                                    resetField('commune');
                                  }}
                                >
                                  {d.name}
                                </MenuItem>
                              ))}
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
                    name='commune'
                    render={({ field, fieldState }) => {
                      return (
                        <LabelTextField label='Commune'>
                          <CusTextField
                            select
                            SelectProps={{
                              displayEmpty: true,
                            }}
                            size='small'
                            helperText={fieldState.error?.message}
                            {...field}
                          >
                            <MenuItem value={''}>
                              {communeLoading ? 'Loading...' : 'Select Commune'}
                            </MenuItem>
                            {!communeLoading &&
                              communes?.map((d) => (
                                <MenuItem value={d.name} key={d.name}>
                                  {d.name}
                                </MenuItem>
                              ))}
                          </CusTextField>
                        </LabelTextField>
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
