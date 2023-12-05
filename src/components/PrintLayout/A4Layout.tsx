import { Box } from '@mui/material';
import React, { ReactNode, forwardRef } from 'react';

const A4Layout = forwardRef(({ children }: { children: ReactNode }, ref) => {
  return (
    <Box
      ref={ref}
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
});
export default A4Layout;
