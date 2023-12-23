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
import SUPPLIER_API from 'api/supplier';
import ErrorDialog from 'components/CusDialog/ErrorDialog';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import useGeography from 'hook/useGeography';
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
  const { control, handleSubmit, setValue, resetField, getValues } =
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
  } = useGeography();
  const navigate = useNavigate();
  const params = useParams();

  // Request APIs

  // --- fecth details
  const {
    run: fetchDetails,
    loading: isLoadingDetails,
    error: errorDetails,
    cancel: cancelFetchDetails,
  } = useRequest(SUPPLIER_API.getSupplierDetails, {
    manual: false,
    onSuccess: (data) => {
      const getProvinceId = provinces?.find(
        (p) => p.name === data.data.province
      );

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
      // set to geo hooks
      setProvinceId(`${getProvinceId?.id}`);
    },
  });

  const {
    loading: isLoadingCreate,
    error: errorCreate,
    run: fecthCreate,
  } = useRequest(SUPPLIER_API.postNewSupplier, {
    manual: true,
    onSuccess: (data) => data && navigate(ROUTE_PATH.suppliers.root),
  });

  const {
    loading: isLoadingUpdate,
    error: errorUpdate,
    run: fetchUpdate,
  } = useRequest(SUPPLIER_API.updateSupplier, {
    manual: true,
    onSuccess: () => {
      navigate(ROUTE_PATH.suppliers.root);
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

  useEffect(() => {
    if (districts) {
      const getDistrictId = districts?.find(
        (d) => d.name === getValues('district')
      );

      if (getDistrictId) {
        setDistrictId(`${getDistrictId?.id}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [districts]);

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
