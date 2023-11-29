import {
  Paper,
  Stack,
  Grid,
  Typography,
  Button,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import { Add, Trash } from 'iconsax-react';
import { Controller, useForm } from 'react-hook-form';
import THEME_UTIL from 'utils/theme-util';

export interface IUpdatePayment {
  invoiceId: string;
  date: string;
  paid: number;
  paymentKhr: string;
  paymentDollar: string;
  khr: number;
  dollar: number;
  exchangeRate: number;
  remark: string;
}

const PACKAGE_ITEM_GRID = 11 / 5;

export default function UpdatePayments() {
  const theme = useTheme();

  // React Hook Form
  const { control } = useForm<IUpdatePayment>({
    defaultValues: {},
  });

  return (
    <>
      <SecondaryPageHeader title='Update Payment' />

      <Paper component={Stack} m={3} mt={0} p={2} alignItems='center'>
        <Grid container maxWidth='sm' spacing={2} alignItems='center'>
          <Grid item xs={6}>
            <UploadButton label='Deposit Photo' />
          </Grid>
          <Grid item xs={6}>
            <UploadButton label='Payment Photo' />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='invoiceId'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Invoice ID'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='date'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Date'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='paid'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Paid'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='exchangeRate'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Rate'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name='paymentDollar'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Payment method'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={9}>
            <Controller
              control={control}
              name='dollar'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Payment ( $ )'
                  size='small'
                  type='number'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name='paymentKhr'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Payment method'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={9}>
            <Controller
              control={control}
              name='dollar'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Payment ( ៛ )'
                  size='small'
                  type='number'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name='remark'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Remark'
                  size='small'
                  multiline
                  minRows={5}
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Button
              size='large'
              variant='outlined'
              sx={{ width: '100%', mt: 2 }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              size='large'
              variant='contained'
              sx={{
                mt: 2,
                width: '100%',
                background: THEME_UTIL.goldGradientMain,
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
