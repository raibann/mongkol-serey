import { LoadingButton } from '@mui/lab';
import { Button, MenuItem, Stack } from '@mui/material';
import { useRequest } from 'ahooks';
import { STOCK_CATEGORY_API, STOCK_PRODUCT_API } from 'api/stock';
import TELEGRAM_API from 'api/telegram';
import LabelTextField from 'components/LabelTextField';
import UploadButton from 'components/UploadButton';
import { Controller, useForm } from 'react-hook-form';
import THEME_UTIL from 'utils/theme-util';

export type ProductFormInput = {
  id?: number;
  name: string;
  images: string;
  category: { id: number | '' };
};

const ProductForm = ({ onClose, id }: { id?: number; onClose: () => void }) => {
  const { control, handleSubmit, setValue, watch } = useForm<ProductFormInput>({
    defaultValues: {
      category: { id: '' },
      images: '',
      name: '',
    },
  });

  const onSubmit = (data: ProductFormInput) => {
    run(data);
  };

  // Requests
  const { run, loading } = useRequest(STOCK_PRODUCT_API.productAction, {
    manual: true,
    onError: () => console.log('error'),
    onSuccess: onClose,
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
  const { loading: loadingUnitDetail } = useRequest(
    () => STOCK_PRODUCT_API.productDetail({ id: id! }),
    {
      onSuccess: (res) => {
        setValue('id', res.id);
        setValue('name', res.name);
        setValue('images', res.images);
        setValue('category.id', res.category.id);
      },
      ready: !!id,
    }
  );
  const { loading: loadingCategoryList, data: dataCategoryList } = useRequest(
    () => STOCK_CATEGORY_API.categoryList({ search: '' })
  );

  return (
    <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>
      <UploadButton
        src={watch('images')}
        onChange={(dataUrl, file) => {
          setValue('images', dataUrl);
          runUpload(file);
        }}
      />
      <Controller
        control={control}
        name='name'
        rules={{
          required: { value: true, message: 'Field is required' },
        }}
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
        name='category.id'
        rules={{
          required: { value: true, message: 'Field is required' },
        }}
        render={({ field, fieldState }) => (
          <LabelTextField
            select
            size='small'
            label={`Category ${loadingCategoryList ? 'Loading...' : ''}`}
            disabled={loadingCategoryList}
            fieldState={fieldState}
            {...field}
            menutItems={dataCategoryList?.map((e) => (
              <MenuItem key={e.id} value={e.id}>
                {e.name}
              </MenuItem>
            ))}
          />
        )}
      />
      <Stack direction='row' spacing={2} pt={2}>
        <Button size='large' variant='outlined' sx={{ flex: 1 }}>
          Cancel
        </Button>
        <LoadingButton
          loading={loadingUnitDetail || loading || loadingUpload}
          type='submit'
          size='large'
          variant='contained'
          sx={{ flex: 1, background: THEME_UTIL.goldGradientMain }}
        >
          Save
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default ProductForm;
