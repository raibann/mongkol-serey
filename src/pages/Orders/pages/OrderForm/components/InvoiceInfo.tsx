import { Button, Grid, Stack, TextFieldProps, Typography } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import { Controller, useFormContext } from 'react-hook-form';
import { IOrderForm } from '..';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { eventList } from 'utils/data-util';

const InvoiceInfo = () => {
  const { control, setValue } = useFormContext<IOrderForm>();

  return (
    <Grid container maxWidth='sm' width='100%' spacing={2} alignSelf='center'>
      <Grid item xs={9}>
        <Stack spacing={1}>
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
          <Stack direction='row' spacing={1}>
            {eventList.map((e) => (
              <Button
                key={e}
                size='small'
                sx={{ height: 20, minWidth: 0, p: 0.5 }}
                onClick={() => setValue('eventType', e)}
              >
                <Typography
                  variant='caption'
                  textTransform='none'
                  whiteSpace='nowrap'
                  color='primary.dark'
                >
                  {e}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Controller
          control={control}
          name='quantity'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              type='number'
              label='Quantity'
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
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                renderInput={(props: TextFieldProps) => (
                  <LabelTextField
                    {...props}
                    fieldState={fieldState}
                    size='small'
                    label='Booking date'
                  />
                )}
                {...field}
              />
            </LocalizationProvider>
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='eventDate'
          render={({ field, fieldState }) => (
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                renderInput={(props: TextFieldProps) => (
                  <LabelTextField
                    {...props}
                    fieldState={fieldState}
                    size='small'
                    label='Event date'
                  />
                )}
                {...field}
              />
            </LocalizationProvider>
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
