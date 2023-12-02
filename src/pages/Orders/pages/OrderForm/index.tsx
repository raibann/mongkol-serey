import { Box, Grid, Paper, Stack } from '@mui/material';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { FormProvider, useForm } from 'react-hook-form';
import InvoiceInfo from './components/InvoiceInfo';
import InvoicePackage from './components/InvoicePackage';

export interface IOrderForm {
  orderId?: number;
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
          menuItem: [],
        },
      ],
    },
  });

  return (
    <>
      <SecondaryPageHeader
        title='Create New Order'
        endComponent={<Box id='order-form-endcomponent' />}
      />

      <form>
        <FormProvider {...methods}>
          <Grid container p={3} pt={0} spacing={3}>
            <Grid item xs={6}>
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
