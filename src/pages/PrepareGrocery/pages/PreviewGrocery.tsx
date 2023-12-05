import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import React from 'react';
import PreviewGroceryTable from '../components/PreviewGroceryTable';
import A4Layput from 'components/PrintLayout/A4Layput';
import { Box } from '@mui/material';

export default function PreviewGrocery() {
  return (
    <>
      <SecondaryPageHeader title='Preview Grocery' />
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <A4Layput>
          <PreviewGroceryTable />
        </A4Layput>
      </Box>
    </>
  );
}
