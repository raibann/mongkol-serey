import { LoadingButton } from '@mui/lab';
import { Paper, Container, Stack, Button, MenuItem } from '@mui/material';
import { useRequest } from 'ahooks';
import SUPPLIER_API from 'api/supplier';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import useGeography from 'hook/useGeography';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { EnumGenderType, EnumSocialType } from 'utils/data-util';
import { ROUTE_PATH } from 'utils/route-util';
import FormSkeleton from '../../../components/CusSkeleton/FormSkeleton';
import useError from 'hook/useError';
import TELEGRAM_API from 'api/telegram';
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
  images: string;
}

const NewSupplierForm = () => {
  // State

  /* Hooks */
  const { errorState, setErorrState } = useError();
  const { control, handleSubmit, setValue, resetField, getValues, watch } =
    useForm<INewSuplierInput>();
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
  const navigate = useNavigate();
  const params = useParams();
  const paramId = params && params.id;

  // Request APIs

  // --- check error
  useEffect(() => {
    if (errorGeo) {
      setErorrState(errorGeo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorGeo]);

  // --- fecth details
  const { loading: isLoadingDetails } = useRequest(
    async () =>
      await SUPPLIER_API.getSupplierDetails({
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
        const social = data.data.telegram || data.data.facebook;
        const socialType = data.data.telegram
          ? EnumSocialType.TG
          : EnumSocialType.FB;

        // Set to form
        setValue('firstName', data.data.firstName);
        setValue('lastName', data.data.lastName);
        setValue('gender', data.data.gender || EnumGenderType.OTHER);
        setValue('phoneNumber', data.data.phoneNumber);
        setValue('street', data.data.street);
        setValue('house', data.data.house);
        setValue('province', data.data.province);
        setValue('district', data.data.district);
        setValue('commune', data.data.commune);
        setValue('payment', data.data.defaultPayment);
        setValue('socialType', socialType);
        setValue('social', social || '');
        setValue('images', data.data.image || '');
      },
    }
  );

  // --- create
  const { loading: isLoadingCreate, run: fecthCreate } = useRequest(
    SUPPLIER_API.postNewSupplier,
    {
      manual: true,
      onError: (e: Error) =>
        setErorrState({
          error: true,
          message: e.message,
        }),
      onSuccess: (data) => data && navigate(ROUTE_PATH.suppliers.root),
    }
  );

  // --- update
  const { loading: isLoadingUpdate, run: fetchUpdate } = useRequest(
    SUPPLIER_API.updateSupplier,
    {
      manual: true,
      onError: (e: Error) =>
        setErorrState({
          error: true,
          message: e.message,
        }),
      onSuccess: () => {
        navigate(ROUTE_PATH.suppliers.root);
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
  const onSubmit = (data: INewSuplierInput) => {
    const telegram = data.socialType === EnumSocialType.TG ? data.social : '';
    const facebook = data.socialType === EnumSocialType.FB ? data.social : '';
    if (params.id) {
      fetchUpdate({
        id: params.id,
        payload: {
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
          phoneNumber: data.phoneNumber,
          defaultPayment: data.payment,
          district: data.district,
          house: data.house,
          province: `${data.province}`,
          street: data.street,
          commune: data.commune,
          facebook: facebook,
          telegram: telegram,
          others: '',
          images: '',
        },
      });
    } else {
      fecthCreate({
        payload: {
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
          phoneNumber: data.phoneNumber,
          defaultPayment: data.payment,
          district: data.district,
          house: data.house,
          province: `${data.province}`,
          street: data.street,
          commune: data.commune,
          facebook: facebook,
          telegram: telegram,
          others: '',
          images: '',
        },
      });
    }
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
                    name='firstName'
                    rules={{
                      required: {
                        value: true,
                        message: 'Field is required',
                      },
                    }}
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
                    rules={{
                      required: {
                        value: true,
                        message: 'Field is required',
                      },
                    }}
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
                    defaultValue={''}
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
                            <MenuItem value='ABA'>ABA</MenuItem>
                            <MenuItem value='ACLEDA'>ACLEDA</MenuItem>
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
                    loading={
                      isLoadingCreate || isLoadingUpdate || loadingUpload
                    }
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
