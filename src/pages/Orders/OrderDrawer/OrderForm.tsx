import { IconButton, Stack, Typography } from '@mui/material';
import OrderAccordion from 'pages/Orders/OrderDrawer/OrderAccordion';
import { CloseSquare } from 'iconsax-react';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CustomerForm, {
  CustomerInput,
} from 'pages/Customer/CustomerDrawer/CustomerForm';

const OrderForm = () => {
  const methods = useForm<CustomerInput>();

  const [expand, setExpand] = useState(1);
  const handleChangeExpand =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpand(isExpanded ? panel : 0);
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
        <IconButton color='error'>
          <CloseSquare size={26} />
        </IconButton>
      </Stack>
      <FormProvider {...methods}>
        <form>
          <OrderAccordion
            title='Customer Info'
            expanded={expand === 1}
            onChange={handleChangeExpand(1)}
          >
            <CustomerForm />
          </OrderAccordion>
        </form>
      </FormProvider>
    </>
  );
};

export default OrderForm;
