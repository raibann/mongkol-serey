import {
  Paper,
  Stack,
  Grid,
  Typography,
  Button,
  alpha,
  useTheme,
  MenuItem,
  TextFieldProps,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { CusIconButton } from 'components/CusIconButton';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { Add, Trash } from 'iconsax-react';
import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import THEME_UTIL from 'utils/theme-util';

export interface IFormQuotation {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  event: string;
  location: string;
  total: number;
  quotationItems: QuotationItems[];
}
export interface QuotationItems {
  productName: string;
  qty: number;
  unit: string;
  price: number;
  subTotal: number;
  remark: string;
}

const PACKAGE_ITEM_GRID = 11 / 5;

const QuotationForm = () => {
  const theme = useTheme();

  // React Hook Form
  const { control } = useForm<IFormQuotation>({
    defaultValues: {
      quotationItems: [
        {
          productName: '',
          qty: 0,
          unit: '',
          price: 0,
          subTotal: 0,
          remark: '',
        },
      ],
    },
  });
  const quotationItemsFields = useFieldArray({
    name: 'quotationItems',
    control: control,
  });

  return (
    <>
      <SecondaryPageHeader title='Create New Quotation' />

      <Paper component={Stack} m={3} mt={0} p={2} alignItems='center'>
        <Grid container maxWidth='sm' spacing={2} alignItems='center'>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='firstName'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='First name'
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
              name='lastName'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Last name'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              control={control}
              name='phoneNumber'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Phone number'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              control={control}
              name='event'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Event'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              control={control}
              name='location'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Location'
                  size='small'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display='flex'
            alignItems='center'
            columnGap={2}
            mt={2}
          >
            <Typography>Packages</Typography>
            <Button
              onClick={() =>
                quotationItemsFields.append({
                  productName: '',
                  qty: 0,
                  unit: '',
                  price: 0,
                  subTotal: 0,
                  remark: '',
                })
              }
              size='small'
              variant='contained'
              disableElevation
              sx={{ minWidth: 0, color: 'common.white', p: 0.25 }}
            >
              <Add />
            </Button>
          </Grid>

          {quotationItemsFields.fields.map((e, i) => (
            <Grid container item spacing={1} key={e.id}>
              <Grid item xs={PACKAGE_ITEM_GRID + 0.75}>
                <Controller
                  control={control}
                  name={`quotationItems.${i}.productName`}
                  render={({ field, fieldState }) => (
                    <LabelTextField
                      size='small'
                      label={i === 0 ? 'Name' : undefined}
                      fieldState={fieldState}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={PACKAGE_ITEM_GRID - 0.75}>
                <Controller
                  control={control}
                  name={`quotationItems.${i}.qty`}
                  render={({ field, fieldState }) => (
                    <LabelTextField
                      size='small'
                      label={i === 0 ? 'Qty' : undefined}
                      fieldState={fieldState}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={PACKAGE_ITEM_GRID - 0.75}>
                <Controller
                  control={control}
                  name={`quotationItems.${i}.unit`}
                  render={({ field, fieldState }) => (
                    <LabelTextField
                      size='small'
                      label={i === 0 ? 'Unit' : undefined}
                      fieldState={fieldState}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={PACKAGE_ITEM_GRID}>
                <Controller
                  control={control}
                  name={`quotationItems.${i}.price`}
                  render={({ field, fieldState }) => (
                    <LabelTextField
                      size='small'
                      label={i === 0 ? 'Price' : undefined}
                      fieldState={fieldState}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={PACKAGE_ITEM_GRID + 0.75}>
                <Controller
                  control={control}
                  name={`quotationItems.${i}.remark`}
                  render={({ field, fieldState }) => (
                    <LabelTextField
                      size='small'
                      label={i === 0 ? 'Remark' : undefined}
                      fieldState={fieldState}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1} textAlign='end'>
                <Stack spacing={1}>
                  {i === 0 && (
                    <Typography fontSize={14} visibility='hidden'>
                      Action
                    </Typography>
                  )}
                  <CusIconButton
                    onClick={() => quotationItemsFields.remove(i)}
                    sx={{
                      width: 40,
                      height: 40,
                      boxShadow: 0,
                      background: alpha(theme.palette.error.main, 0.1),
                    }}
                  >
                    <Trash
                      size='20'
                      color={theme.palette.error.main}
                      variant='Bold'
                    />
                  </CusIconButton>
                </Stack>
              </Grid>
            </Grid>
          ))}

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
};

export default QuotationForm;
