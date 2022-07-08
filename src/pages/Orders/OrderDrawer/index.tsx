import { Divider, IconButton, Stack, Typography } from '@mui/material';
import { CloseSquare } from 'iconsax-react';
import { FormProvider, useForm } from 'react-hook-form';
import CustomerForm, {
  CustomerInput,
} from 'pages/Customer/CustomerDrawer/CustomerForm';

export interface IOrderForm {
  id: string;
  eventType: string;
  eventLocation: string;
  eventDate: Date | null;
  deposit: number | '';
  depositText: string;
  paidBy: string;
  quantity: string;
  unitPrice: string;
  listMenu: {
    title: string;
    quantity: string;
    unit: string;
    price: number | '';
  }[];
}

const OrderDrawer = () => {
  const methods = useForm<CustomerInput>();

  return (
    <>
      <Stack
        p={3}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant='h4' color='secondary.main' fontWeight='bold'>
          New Order
        </Typography>
        <IconButton color='error'>
          <CloseSquare size={26} />
        </IconButton>
      </Stack>
      <FormProvider {...methods}>
        <form>
          <Divider sx={{ p: 3 }}>Customer Info</Divider>

          <CustomerForm />

          <Divider sx={{ p: 3, pt: 8 }}>Order Info</Divider>
        </form>
      </FormProvider>
    </>
  );
};

export default OrderDrawer;
