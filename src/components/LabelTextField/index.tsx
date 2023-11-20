import { Stack, TextFieldProps, Typography } from '@mui/material';
import CusTextField from 'components/CusTextField';
import React, { forwardRef } from 'react';
import { ControllerFieldState } from 'react-hook-form';

const LabelTextField = forwardRef(
  (
    {
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
    } & TextFieldProps,
    ref
  ) => {
    return (
      <Stack spacing={1} width='100%'>
        <Typography fontSize={14}>{label}</Typography>
        {children ?? (
          <CusTextField
            {...ref}
            {...rest}
            children={menutItems}
            error={Boolean(fieldState?.error)}
            helperText={fieldState?.error?.message}
          />
        )}
      </Stack>
    );
  }
);

export default LabelTextField;
