import {
  Button,
  Drawer,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  ToggleButtonGroup,
} from '@mui/material';
import CusTextField from 'components/CusTextField';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import { Add, SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';
import theme from 'theme/theme';
import OrderDrawer from './OrderDrawer';
import { OrderTableBody, OrderTableHead } from './OrderTable';

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
];

const Orders = () => {
  const [ToggleValue, setToggleValue] = useState('pending');
  const [orderDetail, setOrderDetail] = useState<IOrderData>();
  const [newOrder, setNewOrder] = useState(false);

  const handleCloseOrderDialog = () => {
    setNewOrder(false);
    setOrderDetail(undefined);
  };

  return (
    <>
      <PageHeader pageTitle='Orders' />

      <Paper
        elevation={3}
        sx={{
          px: 2,
          mx: 2,
          borderRadius: 2,
          minHeight: '90%',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          py={2}
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
              width: '30%',
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
              Add New
            </Button>
          </Stack>
        </Stack>

        <TableContainer>
          <Table sx={{ minWidth: 935 }}>
            <OrderTableHead />

            <TableBody>
              {ORDER_DATA.map((order) => {
                return (
                  <OrderTableBody
                    key={order.id}
                    id={order.id}
                    name={order.name}
                    bookingDate={order.bookingDate}
                    deposit={order.deposit}
                    eventDate={order.eventDate}
                    paidBy={order.paidBy}
                    quantity={order.quantity}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Drawer
        open={newOrder || orderDetail !== undefined}
        anchor={'right'}
        PaperProps={{ sx: { borderRadius: 0, width: '50vw' } }}
      >
        <OrderDrawer {...{ handleCloseOrderDialog }} />
      </Drawer>
    </>
  );
};

export default Orders;
