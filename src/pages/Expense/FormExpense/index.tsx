import { Stack, Button, Autocomplete, alpha } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { Add, Trash } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
import { IAddExpenseInput } from '..';
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

export default function FormExpense() {
  const { control, setValue } = useFormContext<IAddExpenseInput>();
  return (
    <>
      <Stack spacing={4}>
        <Stack direction={'row'} spacing={4} alignItems='flex-end'>
          <Controller
            control={control}
            name='title'
            defaultValue=''
            render={({ field: { onChange, ...rest } }) => {
              return (
                <LabelTextField label='Tittle'>
                  <Autocomplete
                    freeSolo
                    disableClearable
                    openOnFocus
                    onInputChange={(e, value) => {
                      setValue('title', value);
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
            name='totalPrice'
            defaultValue=''
            render={({ field }) => {
              return (
                <LabelTextField label='Total Price'>
                  <StyledOutlinedTextField
                    placeholder='Total price'
                    {...field}
                    size='small'
                  />
                </LabelTextField>
              );
            }}
          />
          <Controller
            control={control}
            name='paidBy'
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
                      setValue('paidBy', value);
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
            name='other'
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
        <Button
          variant='contained'
          startIcon={<Add />}
          fullWidth
          size='small'
          sx={{
            color: theme.palette.primary.main,
            boxShadow: theme.shadows[0],
            borderRadius: 2,
            border: `1px dashed ${theme.palette.primary.main}`,
            background: (theme) => alpha(theme.palette.primary.main, 0.2),
            '&:hover': {
              background: (theme) => alpha(theme.palette.primary.main, 0.2),
              boxShadow: theme.shadows[0],
            },
          }}
        >
          Add New
        </Button>
      </Stack>
    </>
  );
}
