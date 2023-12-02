import { Grid } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import { Controller, useFormContext } from 'react-hook-form';
import { IOrderForm } from '..';

const InvoiceInfo = () => {
  const { control } = useFormContext<IOrderForm>();

  return (
    <Grid container maxWidth='sm' width='100%' spacing={2} alignSelf='center'>
      <Grid item xs={12}>
        <Controller
          control={control}
          name='eventType'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Event type'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='bookingDate'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Booking date'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='eventDate'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Event date'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name='eventLocation'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Event location'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='deposit'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              type='number'
              label='Deposit amount'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='depositText'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Amount in Khmer'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='paidBy'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Payment method'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='discount'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Discount'
              type='number'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default InvoiceInfo;
