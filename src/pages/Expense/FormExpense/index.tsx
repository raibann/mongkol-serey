import { Stack, Autocomplete, alpha, InputAdornment } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import useResponsive from 'hook/useResponsive';
import { DollarCircle, Trash } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
import { paidBy } from 'utils/expense-util';

export interface IAddExpenseInput {
  expenseRowData: {
    id: number | string;
    title: string;
    totalPrice: string | number;
    paidBy: string;
    other: string;
  }[];
}
export default function FormExpense({
  index,
  onRemove,
}: {
  index: number;
  onRemove: () => void;
}) {
  const { control, setValue } = useFormContext<IAddExpenseInput>();
  const { isMdDown } = useResponsive();
  return (
    <>
      <Stack
        direction={isMdDown ? 'column' : 'row'}
        spacing={2}
        alignItems={isMdDown ? 'flex-start' : 'flex-end'}
      >
        <Controller
          control={control}
          name={`expenseRowData.${index}.title`}
          defaultValue=''
          render={({ field }) => {
            return (
              <LabelTextField label='Title'>
                <StyledOutlinedTextField
                  placeholder='Title'
                  {...field}
                  size='small'
                />
              </LabelTextField>
            );
          }}
        />
        <Controller
          control={control}
          name={`expenseRowData.${index}.totalPrice`}
          defaultValue=''
          render={({ field }) => {
            return (
              <LabelTextField label='Total Price'>
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
              </LabelTextField>
            );
          }}
        />
        <Controller
          control={control}
          name={`expenseRowData.${index}.paidBy`}
          defaultValue=''
          render={({ field: { onChange, ...rest } }) => {
            return (
              <LabelTextField label='Paid By'>
                <Autocomplete
                  freeSolo
                  disableClearable
                  openOnFocus
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
                  options={paidBy.map((data, i) => data)}
                />
              </LabelTextField>
            );
          }}
        />
        <Controller
          control={control}
          name={`expenseRowData.${index}.other`}
          defaultValue=''
          render={({ field }) => {
            return (
              <LabelTextField label='Other'>
                <StyledOutlinedTextField
                  placeholder='Other'
                  {...field}
                  size='small'
                />
              </LabelTextField>
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
