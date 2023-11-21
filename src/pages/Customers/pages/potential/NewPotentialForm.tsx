import { LoadingButton } from '@mui/lab';
import { Paper, Container, Stack, MenuItem, Button } from '@mui/material';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { Controller, useForm } from 'react-hook-form';

interface INewPotentialInput {
  id?: string | number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  social: string;
  socialType: string;
  note: string;
}

export default function NewPotential() {
  /* Hooks */
  const { control, handleSubmit } = useForm<INewPotentialInput>();

  /* Methods */
  const onSubmit = (data: INewPotentialInput) => {
    console.log(data);
  };
  return (
    <>
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
}
