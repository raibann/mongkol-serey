import {
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Typography,
} from '@mui/material';
import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { InventoryInput } from '..';
import LabelTextField from 'components/LabelTextField';
import { CusIconButton } from 'components/CusIconButton';
import { Add } from 'iconsax-react';

const InventoryLeftInput = () => {
  const { control } = useFormContext<InventoryInput>();
  const pricingFields = useFieldArray<InventoryInput>({ name: 'pricing' });

  return (
    <Grid
      container
      maxWidth='sm'
      width='100%'
      spacing={2}
      alignSelf='center'
      minHeight={700}
    >
      <Grid item xs={6}>
        <Controller
          control={control}
          name='category'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Category'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='product'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Product name'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='supplier'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Supplier'
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
      <Grid
        item
        xs={12}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography fontWeight='bold'>Additional</Typography>
        <Controller
          control={control}
          name='addStock'
          render={({ field: { value, ...rest } }) => (
            <FormControlLabel
              label='Add Stock'
              labelPlacement='start'
              checked={value}
              control={<Checkbox size='small' color='primary' />}
              {...rest}
            />
          )}
        />
      </Grid>
      <Grid item xs={9}>
        <Controller
          control={control}
          name='quantity'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              type='number'
              label='Quantity in stock'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={3}>
        <Controller
          control={control}
          name='unit'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              select
              label='Unit'
              fieldState={fieldState}
              menutItems={[
                <MenuItem value='ដប'>ដប</MenuItem>,
                <MenuItem value='កំប៉ុង'>កំប៉ុង</MenuItem>,
              ]}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={9}>
        <Controller
          control={control}
          name='price'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              type='number'
              label='Cost'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={3}>
        <Controller
          control={control}
          name='currency'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              select
              label='Currency'
              fieldState={fieldState}
              menutItems={[
                <MenuItem value='riel'>Riel</MenuItem>,
                <MenuItem value='dollar'>Dollar</MenuItem>,
              ]}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} display='flex' alignItems='center'>
        <Typography fontWeight='bold' mr={2}>
          Pricing
        </Typography>
        <CusIconButton
          color='primary'
          size='small'
          onClick={() =>
            pricingFields.append({
              qty: 0,
              cost: 0,
              unit: 'ដប',
              currency: 'dollar',
            })
          }
        >
          <Add />
        </CusIconButton>
      </Grid>
      {pricingFields.fields.map((e, i) => (
        <Grid item container key={e.id} spacing={2}>
          <Grid item xs={3}>
            <Controller
              control={control}
              name={`pricing.${i}.unit`}
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  select
                  label='Unit'
                  fieldState={fieldState}
                  menutItems={[
                    <MenuItem value='ដប'>ដប</MenuItem>,
                    <MenuItem value='កំប៉ុង'>កំប៉ុង</MenuItem>,
                  ]}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name={`pricing.${i}.qty`}
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
          <Grid item xs={3}>
            <Controller
              control={control}
              name={`pricing.${i}.cost`}
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  label='Cost'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name={`pricing.${i}.currency`}
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  select
                  label='Currency'
                  fieldState={fieldState}
                  menutItems={[
                    <MenuItem value='riel'>Riel</MenuItem>,
                    <MenuItem value='dollar'>Dollar</MenuItem>,
                  ]}
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default InventoryLeftInput;
