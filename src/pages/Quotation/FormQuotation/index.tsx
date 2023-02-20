import { Grid, Button, InputAdornment } from '@mui/material';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import LabelTextField from 'components/LabelTextField';
import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IFormQuotation, ListProduct } from '..';
import FormItems from './FormItems';
import useResponsive from 'hook/useResponsive';
import { useRequest } from 'ahooks';
import ORDER_API from 'api/order';

export default function FormQuotation({
  listItem,
  setListItem,
}: {
  setListItem: React.Dispatch<React.SetStateAction<ListProduct[]>>;
  listItem: ListProduct[];
}) {
  // ah0oks
  const menuListReq = useRequest(ORDER_API.getCategoryAndMenu);

  const { control, watch, setValue } = useFormContext<IFormQuotation>();
  const handleDelete = (id: number) => {
    let temp = listItem.filter((e, index) => {
      return index !== id;
    });
    setListItem(temp);
  };

  // generate total
  let getList = watch('list') || [];
  let sum = getList.reduce((accumulator, object) => {
    return accumulator + object.subTotal;
  }, 0);
  useEffect(() => {
    setValue('total', sum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sum]);

  const { isSmDown } = useResponsive();
  return (
    <>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={3}
        sx={{
          '& .MuiGrid-item': {
            display: 'flex',
            alignItems: 'center',
            columnGap: 2,
          },
        }}
      >
        <Grid item xs={6}>
          <LabelTextField label={isSmDown ? '' : 'Customer Name'}>
            <Controller
              control={control}
              name={'customerName'}
              defaultValue={''}
              render={({ field, fieldState: { error } }) => (
                <StyledOutlinedTextField
                  placeholder='Customer Name'
                  size='small'
                  error={Boolean(error)}
                  {...field}
                />
              )}
            />
          </LabelTextField>
        </Grid>
        <Grid item xs={6}>
          <LabelTextField label={isSmDown ? '' : 'Phone Number'}>
            <Controller
              control={control}
              name={'phoneNumber'}
              defaultValue={''}
              render={({ field, fieldState: { error } }) => (
                <StyledOutlinedTextField
                  placeholder='Phone Number'
                  size='small'
                  error={Boolean(error)}
                  {...field}
                />
              )}
            />
          </LabelTextField>
        </Grid>
        <Grid item xs={6}>
          <LabelTextField label={isSmDown ? '' : 'Title'}>
            <Controller
              control={control}
              name={'event'}
              defaultValue={''}
              render={({ field, fieldState: { error } }) => (
                <StyledOutlinedTextField
                  placeholder='Title'
                  size='small'
                  error={Boolean(error)}
                  {...field}
                />
              )}
            />
          </LabelTextField>
        </Grid>
        <Grid item xs={6}>
          <LabelTextField label={isSmDown ? '' : 'Location'}>
            <Controller
              control={control}
              name={'location'}
              defaultValue={''}
              render={({ field, fieldState: { error } }) => (
                <StyledOutlinedTextField
                  placeholder='Location'
                  size='small'
                  error={Boolean(error)}
                  {...field}
                />
              )}
            />
          </LabelTextField>
        </Grid>
        {!isSmDown && listItem.length !== 0 && (
          <>
            <Grid item xs={3}>
              Name
            </Grid>
            <Grid item xs={2}>
              Qty
            </Grid>
            <Grid item xs={2}>
              Unit
            </Grid>
            <Grid item xs={2}>
              Price
            </Grid>
            <Grid item xs={3}>
              SubTotal
            </Grid>
          </>
        )}

        {listItem.map((data, index) => (
          <FormItems
            {...{ data, index, handleDelete, menuListReq }}
            key={index}
          />
        ))}
        <Grid item xs={12}>
          <LabelTextField label='Total'>
            <Controller
              control={control}
              name={'total'}
              defaultValue={0}
              render={({ field }) => (
                <StyledOutlinedTextField
                  placeholder='Total'
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
          </LabelTextField>
        </Grid>
        <Grid item xs={12} mt={2} sx={{ position: 'relative' }}>
          <Button
            variant='contained'
            color='secondary'
            fullWidth
            onClick={() => {
              setListItem((pre) => {
                if (pre) {
                  return [
                    ...pre,
                    {
                      productName: '',
                      price: '',
                      qty: '',
                      unit: '',
                      subTotal: 0,
                    },
                  ];
                } else {
                  return [
                    {
                      productName: '',
                      price: '',
                      qty: '',
                      unit: '',
                      subTotal: 0,
                    },
                  ];
                }
              });
            }}
            sx={{
              borderRadius: 2,
              textTransform: 'capitalize',
            }}
          >
            Add More
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
