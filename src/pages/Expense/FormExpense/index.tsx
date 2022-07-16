import { Stack, Autocomplete, alpha, InputAdornment } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { DollarCircle, Trash } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
export const paidBy = [
  'ACLEDA Bank',
  'ABA Bank',
  'WING Bank',
  'BAKONG',
  'CANADIA Bank',
  'SATHAPANA Bank',
  'WOORI WON Bank',
  'TRUE MONEY ',
  'AMK',
  'PRASAC',
  'PHILLIP Bank',
  'PRINCE Bank',
  'HATTHA Bank',
  'CP Bank',
  'VATTANAC Bank',
  'JTRUST ROYAL Bank',
  'FTB Bank',
  'PPC Bank',
  'CHIP MONG Bank',
  'MOHANOKOR',
  'SBI LY HOUR Bank',
  'MAY Bank',
  'eMoney Agent',
  'Pi Pay',
  'Cash',
];
const listTitle = [
  'កម្លាំងចុងភៅ',
  'ថ្លៃជួលសម្ភារៈ',
  'ឡានដឹក',
  'ហ្គាស',
  'សាច់ជ្រូក',
  'សាច់ទា',
  'សាច់គោ',
  'សាច់មាន់',
  'គ្រឿងសមុទ្រ',
  'សាច់ពពែ',
  'ត្រីឆ្ដោរ',
  'ត្រីឆ្ដុង',
  'ត្រីតុកែ',
  'ត្រីសុងហឺ',
  'ជ្រូកខ្វៃ',
  'ទាខ្វៃ',
  'បន្លែ',
  'ប្រហិតបាក់សៀប ជើងទា',
  'ចាហួយ',
  'រោងកម្មវិធី',
  'កម្រាលព្រំ',
  'ក្ដាពិស',
  'អំពូល កង្ហារ',
  'អំពូល គ្រីសស្ទាល់',
  'ម៉ាស៊ីនភ្លើង',
  'ចាប់ក្រណាត់មុខរោង',
  'សេវាពិធីការ',
  'នំបុ័ង',
  'ឆាខ្វៃ សណ្ដែក',
  'បង្អែម',
  'ត្រីឆ្អើរ',
  'ពងត្រី',
  'ទឹកកកអនាម័យ',
  'អង្ករ',
];
export interface IAddExpenseInput {
  expenseRowData: {
    id: number;
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
  return (
    <>
      <Stack direction={'row'} spacing={2} alignItems='flex-end'>
        <Controller
          control={control}
          name={`expenseRowData.${index}.title`}
          defaultValue=''
          render={({ field: { onChange, ...rest } }) => {
            return (
              <LabelTextField label='Tittle'>
                <Autocomplete
                  freeSolo
                  disableClearable
                  openOnFocus
                  onInputChange={(e, value) => {
                    setValue(`expenseRowData.${index}.title`, value);
                  }}
                  {...rest}
                  renderInput={(params) => (
                    <StyledOutlinedTextField
                      {...params}
                      placeholder='Tittle'
                      size='small'
                    />
                  )}
                  options={listTitle.map((data, i) => data)}
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
