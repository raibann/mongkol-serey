import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Typography,
} from '@mui/material';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { InventoryInput } from '..';
import LabelTextField from 'components/LabelTextField';
import { CusIconButton } from 'components/CusIconButton';
import { Add } from 'iconsax-react';
import { useRequest } from 'ahooks';
import { STOCK_CATEGORY_API, STOCK_UNIT_API } from 'api/stock';
import SUPPLIER_API from 'api/supplier';
import { EnumCustomerType, paidBy, paidByColor } from 'utils/data-util';

const InventoryLeftInput = () => {
  const { control, watch } = useFormContext<InventoryInput>();
  const pricingFields = useFieldArray<InventoryInput>({ name: 'pricing' });

  // Requests
  const { data: dataUnitList, loading: loadingUnitList } = useRequest(() =>
    STOCK_UNIT_API.unitList({ search: '' })
  );
  const { loading: loadingCategoryList, data: dataCategoryList } = useRequest(
    () => STOCK_CATEGORY_API.categoryList({ search: '' })
  );
  const { data: dataSuppliersList, loading: loadingSuppliersList } = useRequest(
    () =>
      SUPPLIER_API.getSupplierList({
        search: '',
        page: 0,
        size: 1000,
        type: EnumCustomerType.CUSTOMER,
      })
  );

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
              select
              size='small'
              label='Category'
              disabled={loadingCategoryList}
              fieldState={fieldState}
              {...field}
              menutItems={dataCategoryList?.map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  {e.name}
                </MenuItem>
              ))}
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
          name='suppliers.id'
          render={({ field, fieldState }) => (
            <LabelTextField
              select
              size='small'
              label='Supplier'
              fieldState={fieldState}
              {...field}
              menutItems={dataSuppliersList?.data.map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  {e.firstName} {e.lastName}
                </MenuItem>
              ))}
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
              select
              size='small'
              label='Payment method'
              InputProps={{
                sx: { color: paidByColor[watch('paidBy')], fontWeight: 'bold' },
              }}
              fieldState={fieldState}
              {...field}
              menutItems={paidBy.map((e) => (
                <MenuItem key={e} value={e}>
                  {e}
                </MenuItem>
              ))}
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
      <Grid item xs={6}>
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
              disabled={loadingUnitList}
              fieldState={fieldState}
              menutItems={dataUnitList?.map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  {e.name}
                </MenuItem>
              ))}
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
                <MenuItem value='1'>Dollar</MenuItem>,
                <MenuItem value='2'>Riel</MenuItem>,
              ]}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='priceUsd'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              type='number'
              label='Cost Dollar'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='priceKh'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              type='number'
              label='Cost Riel'
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} display='flex' alignItems='center'>
        <Typography fontWeight='bold' mr={2}>
          Pricing
        </Typography>
        <Button
          onClick={() =>
            pricingFields.append({
              qty: 0,
              cost: 0,
              unit: 'ដប',
              currency: 'dollar',
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
