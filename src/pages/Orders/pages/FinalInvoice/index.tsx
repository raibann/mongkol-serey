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

export interface IFinalInvoice {
  id?: number;
  title: string;
  qty: number | '';
  unit: string;
  price: number | '';
  remark: string;
}

const PACKAGE_ITEM_GRID = 11 / 5;

const FinalInvoice = () => {
  const theme = useTheme();

  // React Hook Form
  const { control } = useForm<{ finalInvoice: IFinalInvoice[] }>({
    defaultValues: {
      finalInvoice: [
        {
          title: '',
          qty: 0,
          unit: '',
          price: 0,
          remark: '',
        },
      ],
    },
  });
  const finalInvoiceFields = useFieldArray({
    control,
    name: 'finalInvoice',
  });

  return (
    <>
      <SecondaryPageHeader
        title='Final Invoice'
        endComponent={
          <Button
            startIcon={<Add />}
            onClick={() =>
              finalInvoiceFields.append({
                id: undefined,
                title: '',
                qty: 0,
                unit: '',
                price: 0,
                remark: '',
              })
            }
            size='small'
            variant='contained'
            disableElevation
            sx={{ color: 'common.white' }}
          >
            Add Invoice Item
          </Button>
        }
      />

      <Paper component={Stack} m={3} mt={0} p={2} alignItems='center'>
        <Grid container maxWidth='sm' spacing={2} alignItems='center'>
          {finalInvoiceFields.fields.map((e, i) => (
            <Grid container item spacing={1} key={e.id}>
              <Grid item xs={PACKAGE_ITEM_GRID + 0.75}>
                <Controller
                  control={control}
                  name={`finalInvoice.${i}.title`}
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
              <Grid item xs={PACKAGE_ITEM_GRID - 0.5}>
                <Controller
                  control={control}
                  name={`finalInvoice.${i}.qty`}
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
              <Grid item xs={PACKAGE_ITEM_GRID - 0.5}>
                <Controller
                  control={control}
                  name={`finalInvoice.${i}.unit`}
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
              <Grid item xs={PACKAGE_ITEM_GRID - 0.5}>
                <Controller
                  control={control}
                  name={`finalInvoice.${i}.price`}
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
                  name={`finalInvoice.${i}.remark`}
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
                    onClick={() => finalInvoiceFields.remove(i)}
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

export default FinalInvoice;
