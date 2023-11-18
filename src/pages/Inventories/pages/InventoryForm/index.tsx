import { Grid, Paper, Stack } from '@mui/material';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InventoryLeftInput from './components/InventoryLeftInput';
import InventoryRightInput from './components/InventoryRightInput';

export type InventoryInput = {
  category: string;
  productName: string;
  supplier: string;
  paymentMethod: string;
  addStock: boolean;
  quantity: number;
  unit: string;
  currency: string;
  cost: string;
  discount: number;
  expDate: string;
  pricing: {
    qty: number;
    unit: string;
    currency: string;
    cost: number;
  }[];
};

const InventoryForm = () => {
  const methods = useForm<InventoryInput>({
    defaultValues: {
      pricing: [
        {
          cost: 0,
          currency: 'dollar',
          qty: 0,
          unit: 'ដប',
        },
      ],
    },
  });

  return (
    <>
      <SecondaryPageHeader title='Add New Inventory' />

      <form>
        <FormProvider {...methods}>
          <Grid container p={3} pt={0} spacing={3}>
            <Grid item xs={8}>
              <Stack component={Paper} p={2}>
                <InventoryLeftInput />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack component={Paper} p={2}>
                <InventoryRightInput />
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </form>
    </>
  );
};

export default InventoryForm;
