import { Box, Button, Paper, Stack } from '@mui/material';
import { Container } from '@mui/system';
import PageHeader from 'components/PageHeader';
import React, { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormQuotation from './FormQuotation';
import QuotationInvoice from 'components/ComToPrint/QuotationInvoice';
import { ArrowLeft2, Printer, Share } from 'iconsax-react';
import { pageStyle } from 'utils/validate-util';
import ReactToPrint from 'react-to-print';
import useRouter from 'hook/useRouter';

export interface IFormQuotation {
  title: string;
  location: string;
  list: ListProduct[];
  total: number;
}
export interface ListProduct {
  productName: string;
  qty: number | string;
  unit: string;
  price: number | string;
  subTotal: number;
}

export default function Quotation() {
  const [listItem, setListItem] = useState<ListProduct[]>([
    {
      productName: '',
      price: '',
      qty: '',
      unit: '',
      subTotal: 0,
    },
  ]);
  const [quotData, setQuotData] = useState<IFormQuotation>();
  // useRef
  const compToPrint = useRef(null);
  const { navigate } = useRouter();

  const methods = useForm<IFormQuotation>();
  return (
    <>
      <PageHeader pageTitle='Quotation' />
      <Paper
        elevation={1}
        sx={{ mx: 2, height: 'calc(100vh - 90px)', overflow: 'auto' }}
      >
        <Container maxWidth={'md'}>
          <Stack
            direction={'row'}
            alignItems='center'
            justifyContent={'space-between'}
            pt={2}
            pb={6}
          >
            <Button
              onClick={() => navigate(-1)}
              sx={{
                '&:hover': {
                  background: 'transparent',
                },
                color: (theme) => theme.palette.common.black,
                fontSize: (theme) => theme.typography.h6,
                textTransform: 'capitalize',
              }}
              startIcon={<ArrowLeft2 />}
            >
              {' '}
              Create Quotation{' '}
            </Button>
            <Stack direction={'row'} spacing={4}>
              {quotData && (
                <ReactToPrint
                  pageStyle={pageStyle}
                  documentTitle='Quotation'
                  trigger={() => (
                    <Button
                      variant='contained'
                      color='info'
                      sx={{
                        borderRadius: 1.5,
                        textTransform: 'capitalize',
                        color: (theme) => theme.palette.common.white,
                      }}
                      startIcon={<Printer size='24' />}
                    >
                      Print
                    </Button>
                  )}
                  content={() => compToPrint.current}
                />
              )}

              <Button
                variant='contained'
                sx={{
                  borderRadius: 1.5,
                  textTransform: 'capitalize',
                  color: (theme) => theme.palette.common.white,
                }}
                type='submit'
                color='primary'
                form='hook-form'
                startIcon={<Share size='24' />}
              >
                {quotData ? 'Generated' : 'Generate'}
              </Button>
            </Stack>
          </Stack>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit((data) => setQuotData(data))}
              id='hook-form'
            >
              <FormQuotation {...{ listItem, setListItem }} />
            </form>
          </FormProvider>
          <Box sx={{ display: 'none' }}>
            <QuotationInvoice ref={compToPrint} quotData={quotData} />
          </Box>
        </Container>
      </Paper>
    </>
  );
}
