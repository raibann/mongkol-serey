import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import useResponsive from 'hook/useResponsive';
import theme from 'theme/theme';
import { Stack, Autocomplete, alpha, InputAdornment } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { DollarCircle, Trash } from 'iconsax-react';
import { validatePatterns } from 'utils/validate-util';
import { CusIconButton } from 'components/CusIconButton';
import { paidBy } from 'utils/data-util';
import { IAddExpenseInput } from '../ExpenseDialogs';

function FormExpense({
  index,
  onRemove,
  defaultTitle,
}: {
  index: number;
  onRemove: () => void;
  defaultTitle: string;
}) {
  const { control, setValue } = useFormContext<IAddExpenseInput>();
  const { isSmDown } = useResponsive();

  return (
    <>
      <Stack direction={isSmDown ? 'column' : 'row'} spacing={2}>
        <Controller
          control={control}
          name={`expenseRowData.${index}.title`}
          rules={{ required: { value: true, message: 'Title is required' } }}
          defaultValue={defaultTitle}
          render={({ field, fieldState: { error } }) => {
            return (
              <StyledOutlinedTextField
                placeholder='Title'
                size='small'
                error={Boolean(error)}
                helperText={error?.message}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name={`expenseRowData.${index}.totalPrice`}
          defaultValue={0}
          rules={{
            required: { value: true, message: 'Total price is required' },
            pattern: {
              value: validatePatterns.numberOnly,
              message: 'Price is number only',
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <StyledOutlinedTextField
                placeholder='Total price'
                size='small'
                error={Boolean(error)}
                helperText={error?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <DollarCircle
                        size='16'
                        color={theme.palette.primary.main}
                      />
                    </InputAdornment>
                  ),
                }}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name={`expenseRowData.${index}.paidBy`}
          defaultValue=''
          render={({ field: { onChange, ...rest } }) => {
            return (
              <Autocomplete
                freeSolo
                disableClearable
                openOnFocus
                fullWidth
                {...rest}
                onInputChange={(_, value) => {
                  setValue(`expenseRowData.${index}.paidBy`, value);
                }}
                renderInput={(params) => (
                  <StyledOutlinedTextField
                    {...params}
                    placeholder='Paid by'
                    size='small'
                  />
                )}
                options={paidBy.map((data) => data)}
              />
            );
          }}
        />
        <Controller
          control={control}
          name={`expenseRowData.${index}.other`}
          defaultValue=''
          render={({ field }) => {
            return (
              <StyledOutlinedTextField
                placeholder='Other'
                {...field}
                size='small'
              />
            );
          }}
        />
        <CusIconButton
          onClick={onRemove}
          sx={{
            background: (theme) => theme.palette.error.main,
            color: (theme) => theme.palette.common.white,
            '&:hover': {
              background: (theme) => alpha(theme.palette.error.main, 0.8),
            },
          }}
        >
          <Trash size='24' />
        </CusIconButton>
      </Stack>
    </>
  );
}
export default FormExpense;
