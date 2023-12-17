import React, { useCallback, useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Divider,
  Drawer,
  InputAdornment,
  Stack,
} from '@mui/material';
import theme from 'theme/theme';
import BookingInvoice from 'components/ComToPrint/BookingInvoice';
import FinalInvoice from 'components/ComToPrint/FinalInvoice';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import OrderDrawer from './OrderDrawer';
import ORDER_API from 'api/order';
import OrderTableBody from './components/OrderTableBody';
import { Add, ArrowLeft2, Filter, Printer, SearchNormal1 } from 'iconsax-react';
import ReactToPrint from 'react-to-print';
import { useSearchParams } from 'react-router-dom';
import { useDebounce, useRequest } from 'ahooks';
import useRouter, { ROUTE_PATH } from 'hook/useRouter';

import { useForm } from 'react-hook-form';
import CusTable from 'components/CusTable';
import CusTextField from 'components/CusTextField';
import { CusLoading } from 'components/CusLoading';
import ErrorResponse from 'components/ResponseUIs/ErrorResponse';
import EmptyResponse from 'components/ResponseUIs/EmptyResponse';

interface IFilterSearch {
  eventType: string;
  type: string;
  from: string | null;
  to: string | null;
}

const Orders = () => {
  // Variables and Hooks
  const { isMdDown, isSmDown } = useResponsive();
  const [searchParams, setSearchParams] = useSearchParams();
  const bookingInvoiceRef = useRef(null);
  const finalInvoiceRef = useRef(null);
  const { navigate } = useRouter();
  const orderId = searchParams.get('id');

  // States
  const [orderStatus, setOrderStatus] = useState('pending');
  const [orderDetail, setOrderDetail] = useState<IOrder.Order>();
  const [newOrder, setNewOrder] = useState(false);
  const [printer, setPrinter] = useState<IOrder.Order>();
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState('');
  const [FilterEl, setFilterEl] = useState<HTMLButtonElement | null>(null);

  // React Hook Form
  const { handleSubmit, control, clearErrors, setValue } =
    useForm<IFilterSearch>();

  // useRequests
  const debounceSearch = useDebounce(searchData, { wait: 500 });
  const {
    data: orderList,
    loading: loadingOrderList,
    error: errorOrderList,
    refresh: refreshGetOrderList,
  } = useRequest(() =>
    ORDER_API.getOrdersList({
      page: `${page - 1}`,
      status: orderStatus,
      search: debounceSearch,
    })
  );

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
    (i: number) => setPrinter(orderList![i]),
    [orderList]
  );

  return (
    <>
      <PageHeader pageTitle='Orders'>
        <CusTextField
          onChange={(e) => setSearchData(e.target.value)}
          placeholder='Search...'
          size='small'
          sx={{ bgcolor: 'common.white' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchNormal1 size={18} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant='contained'
          size='small'
          disableElevation
          sx={{
            color: 'common.white',
            minWidth: 40,
            height: 40,
            width: 40,
            mx: 2,
          }}
        >
          <Filter variant='Bold' />
        </Button>
        <Button
          onClick={() => navigate(ROUTE_PATH.orders.createOrder)}
          variant='contained'
          size='small'
          disableElevation
          sx={{
            color: 'common.white',
            minWidth: 40,
            height: 40,
            width: 40,
          }}
        >
          <Add />
        </Button>
      </PageHeader>

      <Container maxWidth='xl'>
        {loadingOrderList ? (
          <Stack height='80vh' alignItems='center' justifyContent='center'>
            <CusLoading />
          </Stack>
        ) : errorOrderList ? (
          <ErrorResponse height='80vh' />
        ) : orderList && orderList.length > 0 ? (
          <CusTable
            headers={[
              'ID',
              'Customer',
              'Date',
              'Quantity',
              'Location',
              'Deposit',
              'Status',
              '',
            ]}
            body={orderList.map((e, i) => (
              <OrderTableBody
                key={e.id}
                item={e}
                onPrintClick={() => onPrintClick(i)}
                onEditClick={() => navigate(ROUTE_PATH.orders.updateFinal)}
              />
            ))}
          />
        ) : (
          <EmptyResponse height='80vh' />
        )}
      </Container>

      <Drawer
        open={newOrder || orderDetail !== undefined}
        anchor={'right'}
        PaperProps={{
          sx: { borderRadius: 0, width: { xs: '100vw', md: '70vw' } },
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
                  documentTitle={`${
                    printer?.customer?.customer_name || 'Default'
                  }-Booking-Invoice`}
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
                    documentTitle={`${printer?.customer?.customer_name}-Final-Invoice`}
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
                documentTitle={`${
                  printer?.customer?.customer_name || 'Default'
                }-Booking-Invoice`}
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
                  documentTitle={`${printer?.customer?.customer_name}-Final-Invoice`}
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

const pageStyle = `@page {
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

/* <Popover
  id='filter-order'
  open={!!anchorEl}
  anchorEl={anchorEl}
  onClose={() => setAnchorEl(null)}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  PaperProps={{
    sx: {
      p: 2,
    },
  }}
>
  <form onSubmit={handleSubmit(handleSubmitFilter)}>
    <Stack direction={'column'} spacing={2}>
      <Controller
        control={control}
        name='eventType'
        defaultValue=''
        render={({ field, fieldState: { error } }) => (
          <CusTextField
            select
            defaultValue={''}
            SelectProps={{
              displayEmpty: true,
            }}
            fullWidth
            placeholder='Event Type'
            size='small'
            error={Boolean(error)}
            {...field}
          >
            <MenuItem value=''>All Event Type</MenuItem>
            {eventList.map((d, i) => (
              <MenuItem key={i} value={d}>
                {d}
              </MenuItem>
            ))}
          </CusTextField>
        )}
      />
      <Controller
        control={control}
        name='type'
        defaultValue='event'
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <RadioGroup row {...field}>
            <FormControlLabel value='event' control={<Radio />} label='Event' />
            <FormControlLabel
              value='booking'
              control={<Radio />}
              label='Booking'
            />
          </RadioGroup>
        )}
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          control={control}
          name='from'
          defaultValue={null}
          rules={{
            required: true,
          }}
          render={({ field, fieldState: { error } }) => (
            <LabelTextField label='From'>
              <DatePicker
                openTo='day'
                views={['year', 'month', 'day']}
                renderInput={(params) => (
                  <CusTextField
                    size='small'
                    error={Boolean(error)}
                    {...params}
                  />
                )}
                onChange={(date) => {
                  field.onChange(date);
                }}
                value={field.value}
              />
            </LabelTextField>
          )}
        />
        <Controller
          control={control}
          name='to'
          defaultValue={null}
          rules={{
            required: true,
          }}
          render={({ field, fieldState: { error } }) => (
            <LabelTextField label='To'>
              <DatePicker
                openTo='day'
                views={['year', 'month', 'day']}
                renderInput={(params) => (
                  <CusTextField
                    size='small'
                    error={Boolean(error)}
                    {...params}
                  />
                )}
                onChange={(date) => {
                  field.onChange(date);
                }}
                value={field.value}
              />
            </LabelTextField>
          )}
        />
      </LocalizationProvider>
      <Stack direction='row' spacing={2}>
        <Button
          variant='contained'
          type='submit'
          sx={{
            color: theme.palette.common.white,
            boxShadow: theme.shadows[1],
            borderRadius: 2,
            textTransform: 'none',
            height: 40,
            position: 'relative',
            overflow: 'hidden',
            zIndex: 2,
            flexGrow: 1,
          }}
          startIcon={<TickCircle variant='Bold' size={16} />}
        >
          Confirm
        </Button>
        <IconButton color='primary'>
          <FilterRemove />
        </IconButton>
      </Stack>
    </Stack>
  </form>
</Popover>; */
