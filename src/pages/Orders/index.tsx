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
} from '@mui/material';
import { Box } from '@mui/system';
import BookingInvoice from 'components/ComToPrint/BookingInvoice';
import FinalInvoice from 'components/ComToPrint/FinalInvoice';
import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
import CusTextField from 'components/CusTextField';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, SearchNormal1 } from 'iconsax-react';
import React, { useRef, useState } from 'react';
import theme from 'theme/theme';
import { bookingInvoice, finalInvoice } from 'utils/print-util';
import OrderDrawer from './OrderDrawer';
import { OrderTableBody, OrderTableHead } from './OrderTable';
import PhotoDialogContent from './PhotoDialogContent';

interface IOrderData {
  id: number;
  name: string;
  social: string;
  eventDate: string;
  quantity: number;
  eventLocation: string;
  bookingDate: string;
  deposit: number;
  paidBy: string;
}
export const ORDER_DATA: IOrderData[] = [
  {
    id: 1,
    name: 'Meas Saominea',
    social: '@meassaominea',
    eventDate: '30-07-2022',
    quantity: 50,
    eventLocation: 'Phnom Penh',
    bookingDate: '06-07-2022',
    deposit: 300,
    paidBy: 'AMK',
  },
  {
    id: 2,
    name: 'Ma Raibann',
    social: '@raibann.rb',
    eventDate: '05-10-2022',
    quantity: 100,
    eventLocation: 'Phnom Penh',
    bookingDate: '20-07-2022',
    deposit: 2000,
    paidBy: 'ABA',
  },
  {
    id: 3,
    name: 'Rem Brosna',
    social: '@rem.brosna',
    eventDate: '25-12-2022',
    quantity: 70,
    eventLocation: 'Phnom Penh',
    bookingDate: '16-11-2022',
    deposit: 400,
    paidBy: 'Cash',
  },
  {
    id: 4,
    name: 'Meas Saominea',
    social: '@meassaominea',
    eventDate: '30-07-2022',
    quantity: 50,
    eventLocation: 'Phnom Penh',
    bookingDate: '06-07-2022',
    deposit: 300,
    paidBy: 'AMK',
  },
  {
    id: 5,
    name: 'Ma Raibann',
    social: '@raibann.rb',
    eventDate: '05-10-2022',
    quantity: 100,
    eventLocation: 'Phnom Penh',
    bookingDate: '20-07-2022',
    deposit: 2000,
    paidBy: 'ABA',
  },
  {
    id: 6,
    name: 'Rem Brosna',
    social: '@rem.brosna',
    eventDate: '25-12-2022',
    quantity: 70,
    eventLocation: 'Phnom Penh',
    bookingDate: '16-11-2022',
    deposit: 400,
    paidBy: 'Cash',
  },
  {
    id: 7,
    name: 'Meas Saominea',
    social: '@meassaominea',
    eventDate: '30-07-2022',
    quantity: 50,
    eventLocation: 'Phnom Penh',
    bookingDate: '06-07-2022',
    deposit: 300,
    paidBy: 'AMK',
  },
  {
    id: 8,
    name: 'Ma Raibann',
    social: '@raibann.rb',
    eventDate: '05-10-2022',
    quantity: 100,
    eventLocation: 'Phnom Penh',
    bookingDate: '20-07-2022',
    deposit: 2000,
    paidBy: 'ABA',
  },
  {
    id: 9,
    name: 'Rem Brosna',
    social: '@rem.brosna',
    eventDate: '25-12-2022',
    quantity: 70,
    eventLocation: 'Phnom Penh',
    bookingDate: '16-11-2022',
    deposit: 400,
    paidBy: 'Cash',
  },
  {
    id: 10,
    name: 'Meas Saominea',
    social: '@meassaominea',
    eventDate: '30-07-2022',
    quantity: 50,
    eventLocation: 'Phnom Penh',
    bookingDate: '06-07-2022',
    deposit: 300,
    paidBy: 'AMK',
  },
];

const Orders = () => {
  const [ToggleValue, setToggleValue] = useState('pending');
  const [orderDetail, setOrderDetail] = useState<IOrderData>();
  const [newOrder, setNewOrder] = useState(false);
  const [openPhotoDialog, setOpenPhotoDialog] = useState(false);

  const { isMdDown } = useResponsive();

  const handleCloseOrderDialog = () => {
    setNewOrder(false);
    setOrderDetail(undefined);
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
              }
            }}
            sx={{
              width: { xs: '100%', md: '30%' },
            }}
          >
            <CusToggleButton value='pending'>Pending</CusToggleButton>
            <CusToggleButton value='completed'>Completed</CusToggleButton>
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
            height: '100%',
            overflow: 'auto',
            px: 2,
            pb: { xs: 22, md: 15, lg: 0 },
          }}
        >
          <Table sx={{ minWidth: 935 }}>
            <OrderTableHead />

            <TableBody>
              {ORDER_DATA.map((order, i) => {
                return (
                  <OrderTableBody
                    key={i + 1}
                    id={i + 1}
                    name={order.name}
                    bookingDate={order.bookingDate}
                    deposit={order.deposit}
                    eventDate={order.eventDate}
                    paidBy={order.paidBy}
                    quantity={order.quantity}
                    onPhotoClick={() => setOpenPhotoDialog(true)}
                    // componentRef={finalInvoiceRef}
                    componentRef={bookingInvoiceRef}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* print invoice */}
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
          <Pagination count={10} />
        </Stack>
      </Paper>

      <Drawer
        open={newOrder || orderDetail !== undefined}
        anchor={'right'}
        PaperProps={{
          sx: { borderRadius: 0, width: { xs: '100vw', md: '50vw' } },
        }}
      >
        <OrderDrawer {...{ handleCloseOrderDialog }} />
      </Drawer>

      <ResponsiveDialog
        open={openPhotoDialog}
        onCloseDialog={() => setOpenPhotoDialog(false)}
        size='sm'
      >
        <PhotoDialogContent />
      </ResponsiveDialog>
    </>
  );
};

export default Orders;
