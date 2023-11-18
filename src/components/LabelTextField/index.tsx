import { Stack, TextFieldProps, Typography } from '@mui/material';
import CusTextField from 'components/CusTextField';
import React from 'react';
import { ControllerFieldState } from 'react-hook-form';

const LabelTextField = ({
  label,
  children,
  fieldState,
  menutItems,
  ...rest
}: {
  label: string;
  children?: React.ReactNode;
  menutItems?: React.ReactNode[];
  fieldState?: ControllerFieldState;
} & TextFieldProps) => {
  return (
    <Stack spacing={1} width='100%'>
      <Typography fontSize={14}>{label}</Typography>
      {children ?? (
        <CusTextField
          {...rest}
          children={menutItems}
          error={Boolean(fieldState?.error)}
          helperText={fieldState?.error?.message}
        />
      )}
    </Stack>
  );
};

export default LabelTextField;
