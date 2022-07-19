import { alpha, Button, Divider, Stack, Typography } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import CustomerForm, {
  CustomerInput,
} from 'pages/Customer/CustomerDrawer/CustomerForm';
import { CusIconButton } from 'components/CusIconButton';
import { MdClose } from 'react-icons/md';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import OrderItem from './OrderItem';
import { BsPlus } from 'react-icons/bs';
import FinalInvoiceForm, { FinalInvoiceInput } from './FinalInvoiceForm';
import { useEffect } from 'react';
import theme from 'theme/theme';

export interface IOrderForm {
  id: string;
  eventType: string;
  eventLocation: string;
  eventDate: Date | null;
  bookingDate: Date | null;
  deposit: number | '';
  depositText: string;
  paidBy: string;
  quantity: string;
  unitPrice: string;
  listMenu: {
    id: number;
    title: string;
    quantity: number | '';
    unit: string;
    price: number | '';
    menuItem: {
      id: number;
      title: string;
    }[];
  }[];
}

const OrderDrawer = () => {
  const methods = useForm<IOrderForm & CustomerInput & FinalInvoiceInput>();
  const { watch, setValue } = methods;
  const listOrder = watch('listMenu') || [];
  const finalInvoice = watch('finalInvoice') || [];

  useEffect(() => {
    setValue('finalInvoice', [
      {
        id: new Date().getTime(),
        fTitle: '',
        fQty: '',
        fPrice: '',
        fUnit: '',
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addListOrderHandler = () => {
    if (listOrder && listOrder.length > 0) {
      setValue('listMenu', [
        ...listOrder,
        {
          id: new Date().getTime(),
          title: '',
          price: '',
          quantity: '',
          unit: '',
          menuItem: [],
        },
      ]);
    } else {
      setValue('listMenu', [
        {
          id: new Date().getTime(),
          title: '',
          price: '',
          quantity: '',
          unit: '',
          menuItem: [],
        },
      ]);
    }
  };

  const deleteListOrderHandler = (id: number) => {
    const tmp = listOrder.filter((order) => {
      return order.id !== id;
    });
    setValue('listMenu', tmp);
  };

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
        <CusIconButton color='error'>
          <MdClose />
        </CusIconButton>
      </Stack>
      <FormProvider {...methods}>
        <form>
          <Divider sx={{ p: 3 }}>Customer Info</Divider>

          <CustomerForm />

          <Divider sx={{ p: 3, pt: 6 }}>Order Info</Divider>

          <Stack px={3} spacing={4}>
            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='id'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Invoice ID'>
                      <StyledOutlinedTextField
                        placeholder='Enter Invoice ID'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name='eventType'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Event Type'>
                      <StyledOutlinedTextField
                        placeholder='Enter Event Type'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='eventDate'
                defaultValue={null}
                render={({ field }) => {
                  return (
                    <LabelTextField label='Event Date'>
                      <StyledOutlinedTextField
                        placeholder='Enter Event Date'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name='bookingDate'
                defaultValue={null}
                render={({ field }) => {
                  return (
                    <LabelTextField label='Booking Date'>
                      <StyledOutlinedTextField
                        placeholder='Enter Booking Date'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='deposit'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Deposit'>
                      <StyledOutlinedTextField
                        placeholder='Enter Deposit'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name='depositText'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Amount in Khmr'>
                      <StyledOutlinedTextField
                        placeholder='Enter Amount in Khmr'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
            <Stack spacing={4} direction='row'>
              <Controller
                control={methods.control}
                name='eventLocation'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Event Location'>
                      <StyledOutlinedTextField
                        placeholder='Enter Event Location'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name='paidBy'
                defaultValue=''
                render={({ field }) => {
                  return (
                    <LabelTextField label='Paid By'>
                      <StyledOutlinedTextField
                        placeholder='Enter Paid By'
                        {...field}
                      />
                    </LabelTextField>
                  );
                }}
              />
            </Stack>
          </Stack>

          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              mx: 3,
              pt: 4,
              pb: 1,
            }}
          >
            <Typography fontWeight='bold'>LIST ORDERS</Typography>
            <Button
              color='info'
              startIcon={<BsPlus />}
              onClick={addListOrderHandler}
            >
              Add More
            </Button>
          </Stack>

          {listOrder && listOrder.length > 0 ? (
            listOrder?.map((order, i) => {
              return (
                <OrderItem
                  key={order.id}
                  index={i}
                  onRemoveOrder={() => deleteListOrderHandler(order.id)}
                />
              );
            })
          ) : (
            <Stack
              sx={{
                mx: 3,
              }}
            >
              <Typography
                color='error'
                width='100%'
                textAlign='center'
                mb={3}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                }}
              >
                {`No List Order... (Click Add More!)`}
              </Typography>
            </Stack>
          )}

          <Divider sx={{ m: 3 }}>Final Invoice</Divider>

          <Stack px={3}>
            {finalInvoice.map((invoice, i) => {
              return (
                <FinalInvoiceForm
                  key={invoice.id}
                  index={i}
                  onRemoveFinalInvoice={() => {
                    console.log(invoice.id);
                  }}
                />
              );
            })}
            <Button
              variant='outlined'
              onClick={() => console.log('Add Invoice')}
              sx={{
                py: 1,
                borderStyle: 'dashed',
                background: alpha(theme.palette.primary.light, 0.2),
              }}
            >
              Add More
            </Button>
          </Stack>

          <Stack height={200} />
        </form>
      </FormProvider>
    </>
  );
};

export default OrderDrawer;
