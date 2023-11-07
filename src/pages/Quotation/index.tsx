import { Box, Button, Grid, Paper, Stack } from '@mui/material';
import PageHeader from 'components/PageHeader';
import React, { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormQuotation from './FormQuotation';
import QuotationInvoice from 'components/ComToPrint/QuotationInvoice';
import { ArrowLeft2, Printer, Share } from 'iconsax-react';
import { pageStyle } from 'utils/validate-util';
import ReactToPrint from 'react-to-print';
import useRouter from 'hook/useRouter';
import useResponsive from 'hook/useResponsive';

// import useResponsive from 'hook/useResponsive';

export interface IFormQuotation {
  customerName: string;
  phoneNumber: string;
  event: string;
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
  const { isSmDown } = useResponsive();

  const methods = useForm<IFormQuotation>();
  return (
    <>
      <PageHeader pageTitle='Quotation' />
      <Paper
        elevation={1}
        className='hide-scrollbar'
        sx={{ mx: 2, height: 'calc(100vh - 90px)', overflow: 'auto' }}
      >
        <Grid container>
          <Grid item md={6} sm={12} sx={{ pl: 4, pr: 2 }}>
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
                Back
              </Button>
              <Stack direction={'row'} spacing={2}>
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
                  Generate
                </Button>
              </Stack>
            </Stack>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit((data) => setQuotData(data))}
                id='hook-form'
                className='hide-scrollbar'
                style={{
                  height: 'calc(100vh - 198px)',
                  overflow: 'auto',
                }}
              >
                <FormQuotation {...{ listItem, setListItem }} />
              </form>
            </FormProvider>
          </Grid>
          {!isSmDown && (
            <Grid item md={6} sm={12}>
              <Box
                className='hide-scrollbar'
                sx={{
                  transform: 'scale(0.9)',
                  height: 'calc(100vh - 90px)',
                  overflow: 'auto',
                }}
              >
                <QuotationInvoice ref={compToPrint} quotData={quotData} />
              </Box>
            </Grid>
          )}
        </Grid>
      </Paper>
    </>
  );
}
