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
          onClick={() =>
            listMenuFields.append({
              id: undefined,
              title: '',
              unit: '',
              price: 0,
              quantity: 0,
              unitPrice: 0,
              menuItem: [],
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
            {/* <Grid item xs={1} textAlign='end'>
              <Stack spacing={1}>
                {i === 0 && (
                  <Typography fontSize={14} visibility='hidden'>
                    Action
                  </Typography>
                )}
                <CusIconButton
                  onClick={() => listMenuFields.remove(i)}
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
            </Grid> */}
          </Grid>
        </Paper>
      ))}
    </>
  );
};

export default InvoicePackage;
