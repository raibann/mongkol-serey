import { Grid, Paper, Stack } from '@mui/material';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { FormProvider, useForm } from 'react-hook-form';
import InvoiceInfo from './components/InvoiceInfo';

export interface IOrderForm {
  orderId?: number;
  eventType: string;
  eventLocation: string;
  eventDate: Date | null;
  bookingDate: Date | null;
  deposit: number;
  depositText: string;
  paidBy: string;
  quantity: number;
  discount: number;
  listMenu: IlistMenu[];
}

interface IlistMenu {
  id: number | undefined;
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
  const methods = useForm<IOrderForm>();

  return (
    <>
      <SecondaryPageHeader title='Create New Order' />

      <form>
        <FormProvider {...methods}>
          <Grid container p={3} pt={0} spacing={3}>
            <Grid item xs={7}>
              <Stack component={Paper} p={2}>
                <InvoiceInfo />
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <Stack component={Paper} p={2}>
                Packages
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </form>
    </>
  );
};

export default OrderForm;
