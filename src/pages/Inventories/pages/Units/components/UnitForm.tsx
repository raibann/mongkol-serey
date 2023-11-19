import { Button, Stack } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import { Controller, useForm } from 'react-hook-form';
import THEME_UTIL from 'utils/theme-util';

type UnitFormInput = {
  name: string;
  slug: string;
  description: string;
};

const UnitForm = () => {
  const { control, handleSubmit } = useForm<UnitFormInput>();

  const onSubmit = (data: UnitFormInput) => {
    console.log(data);
  };

  return (
    <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='name'
        render={({ field, fieldState }) => (
          <LabelTextField
            label='Unit name'
            fieldState={fieldState}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name='slug'
        render={({ field, fieldState }) => (
          <LabelTextField label='Slug' fieldState={fieldState} {...field} />
        )}
      />

      <Controller
        control={control}
        name='description'
        render={({ field, fieldState }) => (
          <LabelTextField
            label='Description'
            fieldState={fieldState}
            {...field}
          />
        )}
      />

      <Stack direction='row' spacing={2} pt={2}>
        <Button size='large' variant='outlined' sx={{ flex: 1 }}>
          Cancel
        </Button>
        <Button
          size='large'
          variant='contained'
          sx={{ flex: 1, background: THEME_UTIL.goldGradientMain }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default UnitForm;
