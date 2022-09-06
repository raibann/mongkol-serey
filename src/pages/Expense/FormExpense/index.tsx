import { Stack, Autocomplete, alpha, InputAdornment } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import useResponsive from 'hook/useResponsive';
import { DollarCircle, Trash } from 'iconsax-react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
import { paidBy } from 'utils/expense-util';

export interface IAddExpenseInput {
  expenseRowData: IExpenseRow[];
}
export interface IExpenseRow {
  id: number | string;
  title: string;
  totalPrice: string | number;
  paidBy: string;
  other: string;
}
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
  console.log('index', index);
  return (
    <>
      <Stack direction={isSmDown ? 'column' : 'row'} spacing={2}>
        <Controller
          control={control}
          name={`expenseRowData.${index}.title`}
          defaultValue={defaultTitle}
          render={({ field }) => {
            return (
              <StyledOutlinedTextField
                placeholder='Title'
                {...field}
                size='small'
              />
            );
          }}
        />
        <Controller
          control={control}
          name={`expenseRowData.${index}.totalPrice`}
          defaultValue=''
          render={({ field }) => {
            return (
              <StyledOutlinedTextField
                placeholder='Total price'
                {...field}
                size='small'
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
                onInputChange={(e, value) => {
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
export default React.memo(FormExpense);
