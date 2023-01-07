import { Box, IconButton, Stack } from '@mui/material';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import { Trash } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
import { validatePatterns } from 'utils/validate-util';

export type FinalInvoiceInput = {
  finalInvoice: IFinalInvoice[];
};

export interface IFinalInvoice {
  id?: number;
  fTitle: string;
  fQty: number | '';
  fUnit: string;
  fPrice: number | '';
}

const FinalInvoiceForm = ({
  index,
  onRemoveFinalInvoice,
}: {
  index: number;
  onRemoveFinalInvoice: () => void;
}) => {
  const {
    control,
    formState: {
      errors: { finalInvoice },
    },
  } = useFormContext<FinalInvoiceInput>();

  return (
    <>
      <Stack
        spacing={1}
        pt={2}
        position='relative'
        direction='row'
        alignItems={finalInvoice ? 'center' : 'flex-end'}
      >
        <Controller
          control={control}
          name={`finalInvoice.${index}.fTitle`}
          defaultValue=''
          rules={{
            required: { value: true, message: 'Title is Required' },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <StyledOutlinedTextField
                size='small'
                placeholder='Title'
                error={Boolean(error)}
                helperText={error?.message}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name={`finalInvoice.${index}.fQty`}
          defaultValue=''
          rules={{
            required: { value: true, message: 'Quantity is Required' },
            pattern: {
              value: validatePatterns.numberOnly,
              message: 'Quantity should be number only',
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <StyledOutlinedTextField
                type='number'
                size='small'
                placeholder='Quantity'
                error={Boolean(error)}
                helperText={error?.message}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name={`finalInvoice.${index}.fUnit`}
          defaultValue=''
          rules={{
            required: { value: true, message: 'Unit is Required' },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <StyledOutlinedTextField
                size='small'
                placeholder='Unit'
                error={Boolean(error)}
                helperText={error?.message}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name={`finalInvoice.${index}.fPrice`}
          defaultValue=''
          rules={{
            required: { value: true, message: 'Price is Required' },
            pattern: {
              value: validatePatterns.numberOnly,
              message: 'Price should be number only',
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <StyledOutlinedTextField
                size='small'
                type='number'
                placeholder='Price'
                error={Boolean(error)}
                helperText={error?.message}
                {...field}
              />
            );
          }}
        />
        <Box
          sx={{
            background: theme.palette.error.main,
            borderRadius: 2,
          }}
        >
          <IconButton
            onClick={onRemoveFinalInvoice}
            sx={{
              color: theme.palette.common.white,
            }}
          >
            <Trash />
          </IconButton>
        </Box>
      </Stack>
    </>
  );
};

export default FinalInvoiceForm;
