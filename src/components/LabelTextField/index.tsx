import { Stack, TextFieldProps, Typography } from '@mui/material';
import CusTextField from 'components/CusTextField';
import React from 'react';
import { ControllerFieldState } from 'react-hook-form';

const LabelTextField = React.forwardRef<
  HTMLDivElement,
  {
    label?: string;
    children?: React.ReactNode;
    menutItems?: React.ReactNode[];
    fieldState?: ControllerFieldState;
  } & TextFieldProps
>((props, ref) => {
  const { label, children, fieldState, menutItems, ...rest } = props;

  return (
    <Stack spacing={label ? 1 : 0} width='100%'>
      {label && <Typography fontSize={14}>{label}</Typography>}
      {children ?? (
        <CusTextField
          {...rest}
          ref={ref}
          children={menutItems}
          error={Boolean(fieldState?.error)}
          helperText={fieldState?.error?.message}
        />
      )}
    </Stack>
  );
});

export default LabelTextField;
