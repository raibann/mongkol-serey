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
import UploadButton from 'components/UploadButton';
import { Add, Trash } from 'iconsax-react';
import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import THEME_UTIL from 'utils/theme-util';

type PrepareGroceryInput = {
  invoiceId: number | '';
  location: string;
  date: string;
  groceries: {
    name: string;
    quantity: number;
    unit: string;
  }[];
};

const PrepareGroceryForm = () => {
  const theme = useTheme();

  // React Hook Form
  const { control } = useForm<PrepareGroceryInput>({
    defaultValues: {
      invoiceId: '',
      groceries: [{ name: '', quantity: 0, unit: '' }],
    },
  });
  const groceriesFields = useFieldArray({
    name: 'groceries',
    control: control,
  });

  return (
    <>
      <SecondaryPageHeader title='Prepare Grocery' />

      <Paper component={Stack} m={3} mt={0} p={2} alignItems='center'>
        <Grid container maxWidth='sm' spacing={2} alignItems='center'>
          <Grid item xs={12}>
            <Controller
              control={control}
              name='invoiceId'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Invoice ID'
                  size='small'
                  select
                  SelectProps={{
                    displayEmpty: true,
                  }}
                  menutItems={[
                    <MenuItem key='' value=''>
                      Choose...
                    </MenuItem>,
                    <MenuItem key='1023' value='1023'>
                      1023
                    </MenuItem>,
                    <MenuItem key='1223' value='1223'>
                      1223
                    </MenuItem>,
                    <MenuItem key='1045' value='1045'>
                      1045
                    </MenuItem>,
                  ]}
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='location'
              render={({ field, fieldState }) => (
                <LabelTextField
                  label='Event location'
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
              render={({ field: { onChange, value, ...rest }, fieldState }) => (
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
                    onChange={(val) => onChange(val)}
                    value={value}
                    {...rest}
                  />
                </LocalizationProvider>
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
            <Typography>Groceries</Typography>
            <Button
              onClick={() =>
                groceriesFields.append({
                  name: '',
                  quantity: 0,
                  unit: '',
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

          {groceriesFields.fields.map((e, i) => (
            <React.Fragment key={e.id}>
              <Grid item xs={11 / 3}>
                <Controller
                  control={control}
                  name={`groceries.${i}.name`}
                  render={({ field, fieldState }) => (
                    <LabelTextField
                      size='small'
                      label='Name'
                      fieldState={fieldState}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={11 / 3}>
                <Controller
                  control={control}
                  name={`groceries.${i}.quantity`}
                  render={({ field, fieldState }) => (
                    <LabelTextField
                      size='small'
                      label='Quantity'
                      fieldState={fieldState}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={11 / 3}>
                <Controller
                  control={control}
                  name={`groceries.${i}.unit`}
                  render={({ field, fieldState }) => (
                    <LabelTextField
                      size='small'
                      label='Unit'
                      fieldState={fieldState}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1} textAlign='end'>
                <Stack spacing={1}>
                  <Typography fontSize={14} visibility='hidden'>
                    Action
                  </Typography>
                  <CusIconButton
                    onClick={() => groceriesFields.remove(i)}
                    sx={{
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
            </React.Fragment>
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

export default PrepareGroceryForm;
