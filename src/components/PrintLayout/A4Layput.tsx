import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

export default function A4Layput({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        width: '210mm',
        // height: '297mm',
        background: (theme) => theme.palette.common.white,
        margin: 0,
        padding: '5mm',
        '@media print': {
          page: {
            size: 'A4',
            margin: 0,
          },
        },
      }}
    >
      {children}
    </Box>
  );
}
