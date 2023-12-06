import {
  Box,
  Button,
  Grid,
  Paper,
  Portal,
  Stack,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import LabelTextField from 'components/LabelTextField';
import { Add, Trash } from 'iconsax-react';
import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import theme from 'theme/theme';
import { IOrderForm } from '..';
import PackageItem from './PackageItem';

const PACKAGE_ITEM_GRID = 12 / 5;

const InvoicePackage = () => {
  const theme = useTheme();

  const { control } = useFormContext<IOrderForm>();
  const listMenuFields = useFieldArray({
    control,
    name: 'listMenu',
  });

  return (
    <>
      <Portal
        container={() => document.getElementById('order-form-endcomponent')}
      >
        <Button
          startIcon={<Add />}
          onClick={() =>
            listMenuFields.append({
              id: undefined,
              title: '',
              unit: '',
              price: 0,
              quantity: 0,
              unitPrice: 0,
              menuItem: [{ title: '' }],
            })
          }
          variant='contained'
          size='small'
          sx={{ color: 'common.white' }}
        >
          Add package
        </Button>
      </Portal>

      {listMenuFields.fields.map((e, i) => (
        <Paper key={e.id} sx={{ p: 2, mb: 2 }}>
          <Grid container rowSpacing={2} columnSpacing={1}>
            <Grid item xs={12} display='flex' alignItems='center'>
              <Typography variant='subtitle1' fontWeight='bold'>
                Package {i + 1}
              </Typography>
              <Box flexGrow={1} />
              <Box id={`append-item-button-${i}`} />
              <Button
                variant='text'
                size='small'
                color='error'
                sx={{ textTransform: 'none' }}
                onClick={() => listMenuFields.remove(i)}
              >
                Remove
              </Button>
            </Grid>
            <Grid item xs={PACKAGE_ITEM_GRID}>
              <Controller
                control={control}
                name={`listMenu.${i}.title`}
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
            <Grid item xs={PACKAGE_ITEM_GRID}>
              <Controller
                control={control}
                name={`listMenu.${i}.quantity`}
                render={({ field, fieldState }) => (
                  <LabelTextField
                    size='small'
                    label={'Qty'}
                    fieldState={fieldState}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={PACKAGE_ITEM_GRID}>
              <Controller
                control={control}
                name={`listMenu.${i}.unit`}
                render={({ field, fieldState }) => (
                  <LabelTextField
                    size='small'
                    label={'Unit'}
                    fieldState={fieldState}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={PACKAGE_ITEM_GRID}>
              <Controller
                control={control}
                name={`listMenu.${i}.unitPrice`}
                render={({ field, fieldState }) => (
                  <LabelTextField
                    size='small'
                    label={'Price'}
                    fieldState={fieldState}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={PACKAGE_ITEM_GRID}>
              <Controller
                control={control}
                name={`listMenu.${i}.price`}
                render={({ field, fieldState }) => (
                  <LabelTextField
                    size='small'
                    label={'Total'}
                    fieldState={fieldState}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <PackageItem index={i} />
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
};

export default InvoicePackage;
