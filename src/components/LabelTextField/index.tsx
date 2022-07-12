import { Stack, Typography } from '@mui/material';
import React from 'react';

const LabelTextField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <Stack spacing={1} width='100%'>
      <Typography fontSize={14}>{label}</Typography>
      {children}
    </Stack>
  );
};

export default LabelTextField;
