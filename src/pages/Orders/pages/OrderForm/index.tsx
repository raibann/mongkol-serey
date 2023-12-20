import { Box, Grid, Paper, Stack } from '@mui/material';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { FormProvider, useForm } from 'react-hook-form';
import InvoiceInfo from './components/InvoiceInfo';
import InvoicePackage from './components/InvoicePackage';
import SelectCustomer from './components/SelectCustomer';

// const handleStockOut = () => {
//   let stockOut = 30;

//   const stock = [24, 22];

//   stock.forEach((e) => {
//     if (e > 0) {
//       if (e < stockOut) {
//         e.setQuantity(0);
//         stockOut = stockOut - e;
//       } else {
//         e - stockOut;
//       }
//     }
//   });
// };

export interface IOrderForm {
  id?: number;
  eventType: string;
  eventLocation: string;
  eventDate: string | null;
  bookingDate: string | null;
  deposit: number;
  depositText: string;
  paidBy: string;
  quantity: number;
  discount: number;
  listMenu: IlistMenu[];
  customer?: ICustomer.Customer;
}

interface IlistMenu {
  id?: number;
  title: string;
  quantity: number;
  unitPrice: number;
  unit: string;
  price: number;
  menuItem: {
    id?: number;
    title: string;
  }[];
}

const OrderForm = () => {
  // react-hooks-form
  const methods = useForm<IOrderForm>({
    defaultValues: {
      eventDate: null,
      listMenu: [
        {
          title: '',
          unit: '',
          price: 0,
          quantity: 0,
          unitPrice: 0,
          menuItem: [{ title: '' }],
        },
      ],
    },
  });

  return (
    <>
      <SecondaryPageHeader
        title='Create New Order'
        sticky
        endComponent={<Box id='order-form-endcomponent' />}
        appBarSx={{ bgcolor: 'background.paper' }}
      />

      <form>
        <FormProvider {...methods}>
          <Grid container p={3} pt={0} spacing={3}>
            <Grid item xs={6}>
              <Stack component={Paper} p={2} mb={2}>
                <SelectCustomer />
              </Stack>
              <Stack component={Paper} p={2}>
                <InvoiceInfo />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <InvoicePackage />
            </Grid>
          </Grid>
        </FormProvider>
      </form>
    </>
  );
};

export default OrderForm;
