import { alpha, Autocomplete, Grid, InputAdornment } from '@mui/material';
import { Result } from 'ahooks/lib/useRequest/src/types';
import { CusIconButton } from 'components/CusIconButton';
import CusOutlineInput from 'components/CusTextField/CusOutlineInput';
import { Trash } from 'iconsax-react';
import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { unitList } from 'utils/data-util';
// import { validatePatterns } from 'utils/validate-util';
import { IFormQuotation, ListProduct } from '..';

export default function FormItems({
  data,
  index,
  handleDelete,
  menuListReq,
}: {
  data: ListProduct;
  index: number;
  handleDelete: (id: number) => void;
  menuListReq: Result<
    {
      resMenu: IMenuList.IMenuItem[];
      resCategory: IMenuList.IMenuCategory[];
    },
    []
  >;
}) {
  const { control, setValue, watch } = useFormContext<IFormQuotation>();
  const qtyValue = watch(`list.${index}.qty`);
  const price = watch(`list.${index}.price`);
  let subTotal = +qtyValue * +price;
  const { resCategory } = menuListReq.data || {};

  useEffect(() => {
    if (isNaN(subTotal)) {
      setValue(`list.${index}.subTotal`, 0);
    } else {
      setValue(`list.${index}.subTotal`, subTotal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subTotal]);

  return (
    <>
      <Grid item xs={6} sm={3}>
        <Controller
          control={control}
          name={`list.${index}.productName`}
          defaultValue={data.productName}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Autocomplete
              componentsProps={{
                paper: {
                  sx: {
                    minWidth: 250,
                  },
                },
              }}
              freeSolo
              disableClearable
              openOnFocus
              loading={menuListReq.loading}
              loadingText='Loading...'
              size='small'
              sx={{ width: '100%' }}
              onInputChange={(e, value) => {
                setValue(`list.${index}.productName`, value);
              }}
              {...rest}
              renderInput={(params) => (
                <CusOutlineInput
                  label='Category'
                  error={Boolean(error)}
                  helperText={error?.message}
                  {...params}
                />
              )}
              options={resCategory?.map((data) => data.title) || []}
            />
          )}
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <Controller
          control={control}
          name={`list.${index}.qty`}
          // rules={{
          //   required: true,
          //   pattern: {
          //     value: validatePatterns.numberOnly,
          //     message: 'Required only number',
          //   },
          // }}
          defaultValue={data.qty}
          render={({ field, fieldState: { error } }) => (
            <CusOutlineInput
              size='small'
              placeholder='Qty'
              error={Boolean(error)}
              helperText={error?.message}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <Controller
          control={control}
          name={`list.${index}.unit`}
          defaultValue={data.unit}
          // rules={{
          //   required: true,
          // }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => {
            return (
              <Autocomplete
                freeSolo
                disableClearable
                openOnFocus
                fullWidth
                size='small'
                id='qty'
                onInputChange={(e, value) => {
                  setValue(`list.${index}.unit`, value);
                }}
                renderInput={(params) => (
                  <CusOutlineInput
                    {...params}
                    error={Boolean(error)}
                    helperText={error?.message}
                    placeholder='Unit'
                  />
                )}
                options={unitList}
                {...rest}
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <Controller
          control={control}
          name={`list.${index}.price`}
          defaultValue={data.price}
          // rules={{
          //   required: true,
          //   pattern: {
          //     value: validatePatterns.numberOnly,
          //     message: 'Required only number',
          //   },
          // }}
          render={({ field, fieldState: { error } }) => (
            <CusOutlineInput
              placeholder='Price'
              error={Boolean(error)}
              helperText={error?.message}
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>$</InputAdornment>
                ),
              }}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name={`list.${index}.subTotal`}
          defaultValue={data.subTotal}
          render={({ field }) => (
            <CusOutlineInput
              placeholder='Subtotal'
              size='small'
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position='start'>$</InputAdornment>
                ),
              }}
              {...field}
            />
          )}
        />
        <CusIconButton
          onClick={() => handleDelete(index)}
          sx={{
            background: (theme) => theme.palette.error.main,
            color: (theme) => theme.palette.common.white,
            '&:hover': {
              background: (theme) => alpha(theme.palette.error.main, 0.8),
            },
          }}
        >
          <Trash size='24' />
        </CusIconButton>
      </Grid>
    </>
  );
}
