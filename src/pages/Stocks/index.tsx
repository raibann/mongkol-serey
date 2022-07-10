import {
  Button,
  Drawer,
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
} from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { Add, SearchNormal1 } from 'iconsax-react';
import { OrderTableHead, OrderTableBody } from 'pages/Orders/OrderTable';
import { useState } from 'react';
import theme from 'theme/theme';
import AddStock from './AddStock';
// import EditStock from './EditStock';

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
const ORDER_DATA: IOrderData[] = [
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

const Stocks = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <PageHeader pageTitle='Stocks' />
      <Paper
        elevation={1}
        sx={{
          mx: 2,
          borderRadius: 4,
          minHeight: '92.5%',
          maxWidth: '100%',
          overflow: 'hidden',
          px: 2,
          position: 'relative',
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          py={2}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ width: '100%' }}
          >
            <Button
              variant='contained'
              startIcon={<Add />}
              sx={{
                color: theme.palette.common.white,
                boxShadow: theme.shadows[1],
                borderRadius: 2,
              }}
              onClick={openDrawer}
            >
              Add New
            </Button>
            <CusTextField
              placeholder='Search...'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <SearchNormal1
                      size='20'
                      color={theme.palette.primary.main}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>
        <Table>
          <OrderTableHead />

          <TableBody>
            {ORDER_DATA.map((order) => {
              return (
                <OrderTableBody
                  key={order.id}
                  id={order.id}
                  name={order.name}
                  social={order.social}
                  bookingDate={order.bookingDate}
                  deposit={order.deposit}
                  eventDate={order.eventDate}
                  eventLocation={order.eventLocation}
                  paidBy={order.paidBy}
                  quantity={order.quantity}
                />
              );
            })}
          </TableBody>
        </Table>
        <Pagination
          count={10}
          shape='rounded'
          sx={{ position: 'absolute', bottom: 5 }}
        />
      </Paper>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor={'right'}
        PaperProps={{ sx: { borderRadius: 0, width: '50vw' } }}
      >
        <AddStock {...{ setOpen }} />
        {/* <EditStock {...{ setOpen }} /> */}
      </Drawer>
    </>
  );
};

export default Stocks;
