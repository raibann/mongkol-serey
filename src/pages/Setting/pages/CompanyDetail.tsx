import { LoadingButton } from '@mui/lab';
import { Grid, Stack } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import UploadButton from 'components/UploadButton';
import { Controller, useForm } from 'react-hook-form';
import THEME_UTIL from 'utils/theme-util';

export type CompanyDetailForm = {
  logo: string;
  khName: string;
  enName: string;
  phone: string;
  location: string;
  ownerName: string;
  title: string;
  gender: string;
  idCard: string;
  st: string;
  house: string;
  province: string;
  district: string;
  commune: string;
  address: string;
  policies: string;
};

const CompanyDetail = () => {
  const methods = useForm<CompanyDetailForm>();
  const { control, handleSubmit } = methods;

  const onSubmit = (data: CompanyDetailForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack width='100%' maxWidth='sm' spacing={2}>
        <UploadButton label='Company Logo' />

        <Grid container spacing={2} width='100%'>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='khName'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Khmer name'
                  placeholder='Company Khmer name'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='enName'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='English name'
                  placeholder='Company English name'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='phone'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Phone number'
                  placeholder='Ex: 0987655443 | 0987655443'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='location'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Location'
                  placeholder='Company location'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='ownerName'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Owner name'
                  placeholder='Owner name'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='title'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Title'
                  placeholder='Ms, Mrs, Mr'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='gender'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Gender'
                  placeholder='Female, Male'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='idCard'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='ID card'
                  placeholder='ID card number'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='st'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Street'
                  placeholder='Street no.'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='house'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='House'
                  placeholder='House no.'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='province'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Province'
                  placeholder='Province name'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='district'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='District'
                  placeholder='District name'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='commune'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Commune'
                  placeholder='Commune name'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='address'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Address location'
                  placeholder='ឧ. បុរីសុវណ្ណារី វីឡាគម្រោង 3'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name='policies'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Company policies'
                  placeholder='Company policies'
                  multiline
                  rows={10}
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} pb={10} display='flex' justifyContent='flex-end'>
            <LoadingButton
              loading={false}
              variant='contained'
              sx={{
                py: 1.5,
                width: '50%',
                borderRadius: 2.5,
                alignSelf: 'flex-end',
                background: THEME_UTIL.goldGradientMain,
              }}
            >
              Save
            </LoadingButton>
          </Grid>
        </Grid>
      </Stack>
    </form>
  );
};

export default CompanyDetail;
