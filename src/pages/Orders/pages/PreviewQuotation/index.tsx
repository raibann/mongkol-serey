import { Box, Container, Paper } from '@mui/material';
import QuotationInvoice from 'components/ComToPrint/QuotationInvoice';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import React from 'react';

const PreviewQuotation = () => {
  return (
    <>
      <SecondaryPageHeader title='Preview' />

      <Container maxWidth='md'>
        <Paper
          component={Box}
          py={8}
          px={10}
          sx={{
            aspectRatio: '2480 / 3508',
          }}
        >
          <QuotationInvoice />
        </Paper>
      </Container>
    </>
  );
};

export default PreviewQuotation;
