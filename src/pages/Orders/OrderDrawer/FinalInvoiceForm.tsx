import { Box, IconButton, Stack } from '@mui/material';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import { Trash } from 'iconsax-react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';

export type FinalInvoiceInput = {
  finalInvoice: {
    id: number;
    fTitle: string;
    fQty: number | '';
    fUnit: string;
    fPrice: number | '';
  }[];
};

const FinalInvoiceForm = ({
  index,
  onRemoveFinalInvoice,
}: {
  index: number;
  onRemoveFinalInvoice: () => void;
}) => {
  const { control } = useFormContext<FinalInvoiceInput>();

  return (
    <>
      <Stack spacing={1} py={3} position='relative' direction='row'>
        <Controller
          control={control}
          name={`finalInvoice.${index}.fTitle`}
          defaultValue=''
          render={({ field }) => {
            return (
              <LabelTextField label='Title'>
                <StyledOutlinedTextField
                  size='small'
                  placeholder='Title'
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
          render={({ field }) => {
            return (
              <LabelTextField label='Quantity'>
                <StyledOutlinedTextField
                  size='small'
                  placeholder='Quantity'
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
          render={({ field }) => {
            return (
              <LabelTextField label='Unit'>
                <StyledOutlinedTextField
                  size='small'
                  placeholder='Unit'
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
          render={({ field }) => {
            return (
              <LabelTextField label='Price'>
                <StyledOutlinedTextField
                  size='small'
                  placeholder='Price'
                  {...field}
                />
              </LabelTextField>
            );
          }}
        />
        <Box
          sx={{
            alignSelf: 'flex-end',
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
