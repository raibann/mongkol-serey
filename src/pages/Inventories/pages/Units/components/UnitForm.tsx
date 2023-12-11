import { LoadingButton } from '@mui/lab';
import { Button, Stack } from '@mui/material';
import { useRequest } from 'ahooks';
import { STOCK_UNIT_API } from 'api/stock';
import LabelTextField from 'components/LabelTextField';
import { Controller, useForm } from 'react-hook-form';
import THEME_UTIL from 'utils/theme-util';

type UnitFormInput = {
  id?: number;
  name: string;
  description?: string;
};

const UnitForm = ({ onClose, id }: { id?: number; onClose: () => void }) => {
  // React Hook Form
  const { control, handleSubmit, setValue } = useForm<UnitFormInput>({
    defaultValues: { description: '', name: '' },
  });

  const onSubmit = (data: UnitFormInput) => {
    run(data);
  };

  // Requests
  const { run, loading } = useRequest(STOCK_UNIT_API.unitAction, {
    manual: true,
    onError: () => console.log('error'),
    onSuccess: onClose,
  });
  const { loading: loadingUnitDetail } = useRequest(
    () => STOCK_UNIT_API.unitDetail({ id: id! }),
    {
      onSuccess: (res) => {
        setValue('id', res.id);
        setValue('name', res.name);
        setValue('description', res.description);
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
            label='Unit name'
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
            label='Description'
            fieldState={fieldState}
            {...field}
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
          loading={loadingUnitDetail || loading}
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

export default UnitForm;
