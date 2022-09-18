import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Drawer,
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  ToggleButtonGroup,
  Typography,
  Box,
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
import { Add, BoxRemove, SearchNormal1 } from 'iconsax-react';
import { bookingInvoice, finalInvoice } from 'utils/print-util';
import { CusLoading } from 'components/CusLoading';

const Orders = () => {
  const [ToggleValue, setToggleValue] = useState('pending');
  const [orderDetail, setOrderDetail] = useState<IOrder.Order>();
  const [newOrder, setNewOrder] = useState(false);
  const [page, setPage] = React.useState(1);
  const [searchData, setSearchData] = useState('');

  const { isMdDown } = useResponsive();

  // useRequests
  const {
    data: orderList,
    run: fetchOrderList,
    loading: isLoadingOrderList,
    refresh: refreshGetOrderList,
  } = useRequest(ORDER_API.getOrdersList, {
    manual: true,
  });
  const { run: searchOrderList } = useRequest(fetchOrderList, {
    manual: true,
    debounceInterval: 500,
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

    fetchOrderList({
      page: `${page - 1}`,
      status: ToggleValue,
      search: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ToggleValue, page, searchData]);

  // Methods
  const handleCloseOrderDialog = () => {
    setNewOrder(false);
    setOrderDetail(undefined);
  };
  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const bookingInvoiceRef = useRef(null);
  const finalInvoiceRef = useRef(null);

  return (
    <>
      <PageHeader pageTitle='Orders' />
      <Paper
        elevation={1}
        sx={{
          position: 'relative',
          mx: 2,
          borderRadius: 4,
          height: 'calc(100vh - 100px)',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems='center'
          p={2}
          rowGap={2}
        >
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
            sx={{
              width: { xs: '100%', md: '30%' },
            }}
          >
            <CusToggleButton value='pending'>Pending</CusToggleButton>
            <CusToggleButton value='complete'>Completed</CusToggleButton>
            <CusToggleButton value='all'>All</CusToggleButton>
          </ToggleButtonGroup>

          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
          >
            <CusTextField
              placeholder='Search...'
              size='small'
              onChange={(e) => setSearchData(e.currentTarget.value)}
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
            />

            <Button
              variant='contained'
              startIcon={<Add />}
              sx={{
                color: theme.palette.common.white,
                boxShadow: theme.shadows[1],
                borderRadius: 2,
              }}
              onClick={() => setNewOrder(true)}
            >
              {isMdDown ? 'New' : 'Add New'}
            </Button>
          </Stack>
        </Stack>
        <TableContainer
          sx={{
            height: 'calc(100% - 48px - 56px)',
            overflow: 'auto',
            px: 2,
            pb: { xs: 15, md: 10, lg: 5 },
          }}
        >
          {isLoadingOrderList ? (
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
                  <OrderTableBody
                    data={orderList.data}
                    componentRef={bookingInvoiceRef}
                    enablePrint
                    onEditClick={(i) => setOrderDetail(orderList.data[i])}
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
                No Order...
              </Typography>
            </Stack>
          )}
        </TableContainer>
        <Box sx={{ display: 'none' }}>
          <BookingInvoice
            ref={bookingInvoiceRef}
            customerInfo={bookingInvoice.customerInfo}
            orderInfo={bookingInvoice.orderInfo}
          />
          <FinalInvoice
            ref={finalInvoiceRef}
            customerInfo={finalInvoice.customerInfo}
            orderInfo={finalInvoice.orderInfo}
          />
        </Box>

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

      {/* <ResponsiveDialog
        open={openPhotoDialog}
        onCloseDialog={() => setOpenPhotoDialog(false)}
        size='sm'
      >
        <PhotoDialogContent />
      </ResponsiveDialog> */}
    </>
  );
};

export default Orders;
