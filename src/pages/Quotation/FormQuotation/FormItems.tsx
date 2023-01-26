import { alpha, Autocomplete, Grid, InputAdornment } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
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
}: {
  data: ListProduct;
  index: number;
  handleDelete: (id: number) => void;
}) {
  const { control, setValue, watch } = useFormContext<IFormQuotation>();
  const qtyValue = watch(`list.${index}.qty`);
  const price = watch(`list.${index}.price`);
  let subTotal = +qtyValue * +price;

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
          // rules={{
          //   required: true,
          // }}
          render={({ field, fieldState: { error } }) => (
            <StyledOutlinedTextField
              placeholder='Product Name'
              size='small'
              error={Boolean(error)}
              {...field}
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
            <StyledOutlinedTextField
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
                  <StyledOutlinedTextField
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
            <StyledOutlinedTextField
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
            <StyledOutlinedTextField
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
