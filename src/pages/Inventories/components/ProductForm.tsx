import { Button, Stack } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import UploadButton from 'components/UploadButton';
import { Controller, useForm } from 'react-hook-form';
import THEME_UTIL from 'utils/theme-util';

type ProductFormInput = {
  name: string;
  category: string;
  description: string;
};

const ProductForm = () => {
  const { control, handleSubmit } = useForm<ProductFormInput>();

  const onSubmit = (data: ProductFormInput) => {
    console.log(data);
  };

  return (
    <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>
      <UploadButton />
      <Controller
        control={control}
        name='name'
        render={({ field, fieldState }) => (
          <LabelTextField
            size='small'
            label='Product name'
            fieldState={fieldState}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='category'
        render={({ field, fieldState }) => (
          <LabelTextField
            size='small'
            label='Category'
            fieldState={fieldState}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='description'
        render={({ field, fieldState }) => (
          <LabelTextField
            size='small'
            label='Type'
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

export default ProductForm;
