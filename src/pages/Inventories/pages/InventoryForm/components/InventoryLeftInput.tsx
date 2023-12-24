import { Grid, MenuItem } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { InventoryInput } from '..';
import LabelTextField from 'components/LabelTextField';
import { useRequest } from 'ahooks';
import { STOCK_CATEGORY_API, STOCK_UNIT_API } from 'api/stock';
import SUPPLIER_API from 'api/supplier';
import { EnumCustomerType, paidBy, paidByColor } from 'utils/data-util';
import { useSearchParams } from 'react-router-dom';

const InventoryLeftInput = () => {
  // Hooks
  const [params] = useSearchParams();

  // Variables
  const addStockId = params.get('stockId');

  // React Hook Form
  const { control, watch } = useFormContext<InventoryInput>();

  // Requests
  const { data: dataUnitList, loading: loadingUnitList } = useRequest(
    () => STOCK_UNIT_API.unitList({ search: '' }),
    { ready: !addStockId }
  );
  const { loading: loadingCategoryList, data: dataCategoryList } = useRequest(
    () => STOCK_CATEGORY_API.categoryList({ search: '' })
  );
  const { data: dataSuppliersList, loading: loadingSuppliersList } = useRequest(
    () =>
      SUPPLIER_API.getSupplierList({
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
              select={!!dataCategoryList}
              size='small'
              label='Category'
              disabled={loadingCategoryList || !!addStockId}
              fieldState={fieldState}
              {...field}
              menutItems={
                dataCategoryList && [
                  <MenuItem key='-1' value='' disabled></MenuItem>,
                  ...dataCategoryList.map((e) => (
                    <MenuItem key={e.id} value={e.id}>
                      {e.name}
                    </MenuItem>
                  )),
                ]
              }
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name='product.name'
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              label='Product name'
              disabled={!!addStockId}
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
              select={!!dataSuppliersList}
              size='small'
              label='Supplier'
              fieldState={fieldState}
              disabled={loadingSuppliersList}
              {...field}
              menutItems={
                dataSuppliersList && [
                  <MenuItem key='-1' value='' disabled></MenuItem>,
                  ...dataSuppliersList.data.map((e) => (
                    <MenuItem key={e.id} value={e.id}>
                      {e.firstName} {e.lastName}
                    </MenuItem>
                  )),
                ]
              }
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
              menutItems={[
                <MenuItem key='-1' value='' disabled></MenuItem>,
                ...paidBy.map((e) => (
                  <MenuItem key={e} value={e}>
                    {e}
                  </MenuItem>
                )),
              ]}
            />
          )}
        />
      </Grid>
      {/* <Grid
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
      </Grid> */}
      <Grid item xs={9}>
        <Controller
          control={control}
          name='defaultUnitQty'
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
          name={!addStockId ? 'unit.id' : 'unit.name'}
          render={({ field, fieldState }) => (
            <LabelTextField
              size='small'
              select={!addStockId && !!dataUnitList}
              label='Unit'
              disabled={loadingUnitList || !!addStockId}
              fieldState={fieldState}
              menutItems={
                dataUnitList && [
                  <MenuItem key='-1' value='' disabled></MenuItem>,
                  ...dataUnitList.map((e) => (
                    <MenuItem key={e.id} value={e.id}>
                      {e.name}
                    </MenuItem>
                  )),
                ]
              }
              {...field}
            />
          )}
        />
      </Grid>
      {!addStockId && (
        <>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='unitPrice'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  type='number'
                  label='Unit price'
                  fieldState={fieldState}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name='currency.id'
              render={({ field, fieldState }) => (
                <LabelTextField
                  size='small'
                  select
                  label='Currency'
                  fieldState={fieldState}
                  menutItems={[
                    <MenuItem value={1}>Riel</MenuItem>,
                    <MenuItem value={2}>Dollar</MenuItem>,
                  ]}
                  {...field}
                />
              )}
            />
          </Grid>
        </>
      )}
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
      {/* <Grid item xs={12} display='flex' alignItems='center'>
        <Typography fontWeight='bold' mr={2}>
          Pricing
        </Typography>
        <Button
          onClick={() =>
            pricingFields.append({
              qty: 0,
              cost: 0,
              unit: '',
              currency: 1,
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
                    <MenuItem value={1}>Riel</MenuItem>,
                    <MenuItem value={2}>Dollar</MenuItem>,
                  ]}
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
      ))} */}
    </Grid>
  );
};

export default InventoryLeftInput;
