import { LoadingButton } from '@mui/lab';
import { Paper, Container, Stack, Button, MenuItem } from '@mui/material';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import { useForm, Controller } from 'react-hook-form';
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
  /* Hooks */
  const { control, handleSubmit } = useForm<INewSuplierInput>();

  /* Methods */
  const onSubmit = (data: INewSuplierInput) => {
    console.log(data);
  };
  return (
    <>
      <SecondaryPageHeader title='Create New Supplier' />
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
                loading={false}
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
};

export default NewSupplierForm;
