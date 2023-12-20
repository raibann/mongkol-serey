import { LoadingButton } from '@mui/lab';
import { Button, MenuItem, Stack } from '@mui/material';
import { useRequest } from 'ahooks';
import { STOCK_CATEGORY_API } from 'api/stock';
import LabelTextField from 'components/LabelTextField';
import { Controller, useForm } from 'react-hook-form';
import { EnumStockType, StockTypeDescription } from 'utils/data-util';
import THEME_UTIL from 'utils/theme-util';

type CategoryFormInput = {
  id?: number;
  name: string;
  groupType: string;
};

const CategoryForm = ({
  onClose,
  id,
}: {
  id?: number;
  onClose: () => void;
}) => {
  const { control, handleSubmit, setValue } = useForm<CategoryFormInput>({
    defaultValues: {
      name: '',
      groupType: EnumStockType.STOCK,
    },
  });

  const onSubmit = (data: CategoryFormInput) => {
    run(data);
  };

  // Requests
  const { run, loading } = useRequest(STOCK_CATEGORY_API.categoryAction, {
    manual: true,
    onError: () => console.log('error'),
    onSuccess: onClose,
  });
  const { loading: loadingCategoryDetail } = useRequest(
    () => STOCK_CATEGORY_API.categoryDetail({ id: id! }),
    {
      onSuccess: (res) => {
        setValue('id', res.id);
        setValue('name', res.name);
        setValue('groupType', res.groupType);
      },
      ready: !!id,
    }
  );

  return (
    <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='name'
        render={({ field, fieldState }) => (
          <LabelTextField
            size='small'
            label='Category name'
            fieldState={fieldState}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name='groupType'
        render={({ field, fieldState }) => (
          <LabelTextField
            size='small'
            label='Stock type'
            select
            fieldState={fieldState}
            {...field}
            menutItems={[
              <MenuItem value={EnumStockType.STOCK} key={EnumStockType.STOCK}>
                {StockTypeDescription[EnumStockType.STOCK]}
              </MenuItem>,
              <MenuItem
                value={EnumStockType.NON_STOCK}
                key={EnumStockType.NON_STOCK}
              >
                {StockTypeDescription[EnumStockType.NON_STOCK]}
              </MenuItem>,
            ]}
          />
        )}
      />

      <Stack direction='row' spacing={2} pt={2}>
        <Button
          onClick={onClose}
          size='large'
          variant='outlined'
          sx={{ flex: 1 }}
        >
          Cancel
        </Button>
        <LoadingButton
          type='submit'
          loading={loadingCategoryDetail || loading}
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

export default CategoryForm;
