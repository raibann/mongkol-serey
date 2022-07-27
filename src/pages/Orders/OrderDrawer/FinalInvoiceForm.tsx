import { Box, IconButton, Stack } from '@mui/material';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { Trash } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';

export type FinalInvoiceInput = {
  finalInvoice: IFinalInvoice[];
};

export interface IFinalInvoice {
  id: number;
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
              <LabelTextField label='Title'>
                <StyledOutlinedTextField
                  size='small'
                  placeholder='Title'
                  error={Boolean(error)}
                  helperText={error?.message}
                  {...field}
                />
              </LabelTextField>
            );
          }}
        />
        <Controller
          control={control}
          name={`finalInvoice.${index}.fQty`}
          defaultValue=''
          rules={{
            required: { value: true, message: 'Quantity is Required' },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <LabelTextField label='Quantity'>
                <StyledOutlinedTextField
                  size='small'
                  placeholder='Quantity'
                  error={Boolean(error)}
                  helperText={error?.message}
                  {...field}
                />
              </LabelTextField>
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
              <LabelTextField label='Unit'>
                <StyledOutlinedTextField
                  size='small'
                  placeholder='Unit'
                  error={Boolean(error)}
                  helperText={error?.message}
                  {...field}
                />
              </LabelTextField>
            );
          }}
        />
        <Controller
          control={control}
          name={`finalInvoice.${index}.fPrice`}
          defaultValue=''
          rules={{
            required: { value: true, message: 'Price is Required' },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <LabelTextField label='Price'>
                <StyledOutlinedTextField
                  size='small'
                  placeholder='Price'
                  error={Boolean(error)}
                  helperText={error?.message}
                  {...field}
                />
              </LabelTextField>
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
