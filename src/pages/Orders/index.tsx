import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Drawer,
  Grid,
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import theme from 'theme/theme';
import BookingInvoice from 'components/ComToPrint/BookingInvoice';
import FinalInvoice from 'components/ComToPrint/FinalInvoice';
import CusTextField from 'components/CusTextField';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import OrderDrawer from './OrderDrawer';
import useRequest from '@ahooksjs/use-request';
import ORDER_API from 'api/order';
import OrderTableBody, { OrderTableHead } from './OrderTable';
import {
  Add,
  ArrowLeft2,
  BoxRemove,
  Printer,
  SearchNormal1,
} from 'iconsax-react';
import { CusLoading } from 'components/CusLoading';
import ReactToPrint from 'react-to-print';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Orders = () => {
  // States
  const [ToggleValue, setToggleValue] = useState('pending');
  const [orderDetail, setOrderDetail] = useState<IOrder.Order>();
  const [newOrder, setNewOrder] = useState(false);
  const [loadingChangingState, setLoadingChangingState] = useState(false);
  const [printer, setPrinter] = useState<IOrder.Order>();
  const [page, setPage] = React.useState(1);
  const [searchData, setSearchData] = useState('');
  const { isMdDown, isSmDown } = useResponsive();
  const [searchParams, setSearchParams] = useSearchParams();

  // Variables
  const orderId = searchParams.get('id');
  const bookingInvoiceRef = useRef(null);
  const finalInvoiceRef = useRef(null);

  // useRequests
  const {
    data: orderList,
    run: fetchOrderList,
    loading: isLoadingOrderList,
    refresh: refreshGetOrderList,
  } = useRequest(ORDER_API.getOrdersList, {
    manual: true,
    onSuccess: () => setLoadingChangingState(false),
    onError: () => setLoadingChangingState(false),
  });
  const { run: searchOrderList } = useRequest(fetchOrderList, {
    manual: true,
    debounceInterval: 500,
    onSuccess: (data) => {
      if (orderId) {
        const selectedOrder = data.data.find((e) => e.id === +orderId);
        setPrinter(selectedOrder);
      }
    },
  });

  // useEffects
  useEffect(() => {
    if (searchData !== '') {
      searchOrderList({
        page: `${page - 1}`,
        status: ToggleValue,
        search: searchData,
      });
      return;
    }

    setLoadingChangingState(true);
    fetchOrderList({
      page: `${page - 1}`,
      status: ToggleValue,
      search: '',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ToggleValue, page, searchData]);

  useEffect(() => {
    if (orderId) {
      setToggleValue('all');
      setSearchData(`#${orderId}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Methods
  const handleCloseOrderDialog = () => {
    setNewOrder(false);
    setOrderDetail(undefined);
  };
  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleCloseInvoicesDialog = () => {
    setPrinter(undefined);
    searchParams.delete('id');
    setSearchParams(searchParams);
  };
  const onPrintClick = useCallback(
    (i: number) => setPrinter(orderList!.data![i]),
    [orderList]
  );
  const onEditClick = useCallback(
    (i: number) => setOrderDetail(orderList!.data![i]),
    [orderList]
  );

  return (
    <>
      <PageHeader pageTitle='Orders' />
      <Paper
        elevation={1}
        sx={{
          position: 'relative',
          mx: 2,
          borderRadius: 3,
          height: 'calc(100vh - 100px)',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        <Grid container p={2} rowSpacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <ToggleButtonGroup
              value={ToggleValue}
              exclusive
              fullWidth
              size='small'
              onChange={(
                event: React.MouseEvent<HTMLElement, MouseEvent>,
                value: any
              ) => {
                if (value !== null) {
                  setToggleValue(value);
                  setPage(1);
                }
              }}
              // sx={{
              //   width: { xs: '100%', sm: '40%', md: '30%' },
              // }}
            >
              <CusToggleButton value='pending'>Pending</CusToggleButton>
              <CusToggleButton value='complete'>Completed</CusToggleButton>
              <CusToggleButton value='all'>All</CusToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container columnSpacing={2}>
              <Grid item xs={4} sm={6} md={8} lg={8} xl={10}>
                <Stack
                  direction={'row'}
                  spacing={2}
                  justifyContent={isMdDown ? 'flex-start' : 'flex-end'}
                >
                  <Button
                    variant='contained'
                    sx={{
                      color: theme.palette.common.white,
                      boxShadow: theme.shadows[1],
                      borderRadius: 2,
                      textTransform: 'none',
                      height: 40,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 2,
                    }}
                    startIcon={<Add variant='Bold' size={16} />}
                    onClick={() => setNewOrder(true)}
                  >
                    Order
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6} md={4} lg={4} xl={2}>
                <CusTextField
                  placeholder='Search...'
                  size='small'
                  value={searchData}
                  onChange={(e) => {
                    setSearchData(e.currentTarget.value);
                    setPage(1);
                  }}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      searchOrderList({
                        page: `${page - 1}`,
                        status: ToggleValue,
                        search: searchData,
                      });
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <SearchNormal1
                          size='20'
                          color={theme.palette.primary.main}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ float: 'right' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <TableContainer
          className='hide-scrollbar'
          sx={{
            height: 'calc(100% - 48px - 56px)',
            overflow: 'auto',
            pb: { xs: 15, md: 10, lg: 5 },
          }}
        >
          {isLoadingOrderList && loadingChangingState && !orderList ? (
            <Stack
              direction={'column'}
              alignItems={'center'}
              justifyContent='center'
              sx={{ height: '100%' }}
            >
              <CusLoading />
            </Stack>
          ) : orderList && orderList.data && orderList.data.length > 0 ? (
            <>
              <Table sx={{ minWidth: 1000 }}>
                <OrderTableHead />
                <TableBody>
                  <AnimatePresence exitBeforeEnter>
                    {isLoadingOrderList && (
                      <TableRow
                        component={motion.tr}
                        initial={{
                          scale: 0,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        exit={{
                          scale: 0,
                          opacity: 0,
                        }}
                        transition={{
                          delay: 0,
                          ease: 'easeInOut',
                        }}
                      >
                        <TableCell
                          colSpan={8}
                          height={480}
                          sx={{ textAlign: 'center' }}
                        >
                          <CusLoading />
                        </TableCell>
                      </TableRow>
                    )}
                  </AnimatePresence>
                  <OrderTableBody
                    data={isLoadingOrderList ? [] : orderList.data}
                    onPrintClick={onPrintClick}
                    onEditClick={onEditClick}
                  />
                </TableBody>
              </Table>
            </>
          ) : (
            <Stack
              direction={'column'}
              alignItems={'center'}
              justifyContent='center'
              spacing={1}
              sx={{ height: '100%' }}
            >
              <BoxRemove size='80' color={theme.palette.error.main} />
              <Typography variant='h6' color='error'>
                No Order Data
              </Typography>
            </Stack>
          )}
        </TableContainer>

        <Stack
          alignItems='center'
          width='100%'
          p={1}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            bgcolor: '#fff',
          }}
        >
          <Pagination
            count={orderList?.totalPage}
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </Paper>

      <Drawer
        open={newOrder || orderDetail !== undefined}
        anchor={'right'}
        PaperProps={{
          sx: { borderRadius: 0, width: { xs: '100vw', md: '50vw' } },
        }}
      >
        <OrderDrawer
          {...{ handleCloseOrderDialog, orderDetail }}
          onActionSuccess={() => {
            refreshGetOrderList();
            handleCloseOrderDialog();
          }}
        />
      </Drawer>

      <Dialog
        open={printer !== undefined}
        onClose={handleCloseInvoicesDialog}
        fullScreen
        PaperProps={{
          sx: {
            borderRadius: [3, 0, 3],
            width: 'auto',
            height: ['auto', '100vh', '95vh'],
          },
        }}
      >
        {!isSmDown && (
          <DialogTitle
            sx={{
              position: 'sticky',
              top: 0,
              boxShadow: (theme) => theme.shadows[2],
              zIndex: (theme) => theme.zIndex.drawer + 3,
              backgroundColor: '#fff',
            }}
          >
            <Stack
              direction={'row'}
              alignItems='center'
              justifyContent={'space-between'}
            >
              <Button
                variant='text'
                startIcon={<ArrowLeft2 />}
                onClick={handleCloseInvoicesDialog}
              >
                Back
              </Button>

              <Stack direction={'row'} spacing={2}>
                <ReactToPrint
                  pageStyle={pageStyle}
                  documentTitle='Booking-Invoice'
                  trigger={() => (
                    <Button
                      variant='contained'
                      color='info'
                      disableElevation
                      sx={{
                        color: '#fff',
                        boxShadow: theme.shadows[1],
                        borderRadius: theme.spacing(1),
                      }}
                      startIcon={<Printer />}
                    >
                      Booking
                    </Button>
                  )}
                  content={() => bookingInvoiceRef.current}
                />
                {printer?.finalInvoices && printer.finalInvoices.length > 0 && (
                  <ReactToPrint
                    pageStyle={pageStyle}
                    documentTitle='Final-Invoice'
                    trigger={() => (
                      <Button
                        variant='contained'
                        color='success'
                        disableElevation
                        sx={{
                          color: '#fff',
                          boxShadow: theme.shadows[1],
                          borderRadius: theme.spacing(1),
                        }}
                        startIcon={<Printer />}
                      >
                        Final Invoice
                      </Button>
                    )}
                    content={() => finalInvoiceRef.current}
                  />
                )}
              </Stack>
            </Stack>
          </DialogTitle>
        )}

        <Box
          sx={{
            scale: '0.8',
            transform: 'translateY(-100px)',
            display: isSmDown ? 'none' : 'block',
          }}
        >
          {printer && (
            <BookingInvoice ref={bookingInvoiceRef} order={printer} />
          )}
        </Box>

        {!isSmDown && <Divider sx={{ borderWidth: '5px' }} />}

        {printer?.finalInvoices && printer.finalInvoices.length > 0 && (
          <>
            <Box
              sx={{
                scale: '0.8',
                pt: '100px',
                pb: '100px',
                display: isSmDown ? 'none' : 'block',
              }}
            >
              <FinalInvoice ref={finalInvoiceRef} order={printer} />
            </Box>
          </>
        )}
        {/* for small screen */}
        {isSmDown && (
          <>
            <Stack
              direction={'row'}
              sx={{ height: '100%', p: 4 }}
              alignItems='center'
              justifyContent={'center'}
              spacing={2}
            >
              <ReactToPrint
                pageStyle={pageStyle}
                documentTitle='Booking-Invoice'
                trigger={() => (
                  <Button
                    variant='contained'
                    color='info'
                    disableElevation
                    sx={{
                      color: '#fff',
                      boxShadow: theme.shadows[1],
                      borderRadius: theme.spacing(1),
                    }}
                    startIcon={<Printer />}
                  >
                    Booking
                  </Button>
                )}
                content={() => bookingInvoiceRef.current}
              />
              {printer?.finalInvoices && printer.finalInvoices.length > 0 && (
                <ReactToPrint
                  pageStyle={pageStyle}
                  documentTitle='Final-Invoice'
                  trigger={() => (
                    <Button
                      variant='contained'
                      color='success'
                      disableElevation
                      sx={{
                        color: '#fff',
                        boxShadow: theme.shadows[1],
                        borderRadius: theme.spacing(1),
                      }}
                      startIcon={<Printer />}
                    >
                      Final Invoice
                    </Button>
                  )}
                  content={() => finalInvoiceRef.current}
                />
              )}
            </Stack>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Orders;

const pageStyle = ` @page {
  size: A4;
  margin:2.54cm;
}

@media all {
  .pagebreak {
    display: none;
  }
}

@media print {
  .pagebreak {
    page-break-before: always;
  }
}`;
