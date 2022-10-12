import useRequest from '@ahooksjs/use-request';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material';
import { useDebounce } from 'ahooks';
import STOCK_API from 'api/stock';
import ConfirmDialogSlide from 'components/CusDialog/ConfirmDialog';
import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
import { CusLoading } from 'components/CusLoading';
import CusTextField from 'components/CusTextField';
import StyledOutlinedTextField from 'components/CusTextField/StyledOutlinedTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { BoxAdd, BoxRemove, SearchNormal1 } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import theme from 'theme/theme';
import { validatePatterns } from 'utils/validate-util';
import FormStock from './FormStock';
import { StockTableBody, StockTableHead } from './stockTable';
export interface IStockInput {
  note: string;
  productName: string;
  quantity: string;
  unit: string;
  shopName: string;
  paidBy: string;
  price: string;
  currency: string;
  usedStock: string;
}

const Stocks = () => {
  // State
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | ''>('');
  const [searchProduct, setSearchProduct] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<number>();
  const [useStock, setUseStock] = useState<IStock.IStockDetails | undefined>();
  const [openUseStock, setOpenStock] = useState(false);
  const [smsOverStock, setSmsOverStock] = useState('');
  const methods = useForm<IStockInput>();
  const { setValue, control, handleSubmit } = methods;
  console.log(smsOverStock);
  // fetch data
  const {
    data: stockList,
    run: fetchStockList,
    loading: isLoadingStockList,
    refresh: refreshStockList,
  } = useRequest(STOCK_API.getStockList, { manual: true });

  const addNewStock = useRequest(STOCK_API.addStock, {
    manual: true,
    onSuccess: () => {
      setOpenDrawer('');
      refreshStockList();
      setOpenStock(false);
      setSmsOverStock('');
    },
  });

  const deleteStock = useRequest(STOCK_API.deleteStock, {
    manual: true,
    onSuccess: () => {
      refreshStockList();
      setConfirmDelete(undefined);
    },
  });
  const debouncedValue = useDebounce(searchProduct, { wait: 500 });
  // search list
  useEffect(() => {
    fetchStockList({
      search: debouncedValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);
  useEffect(() => {
    if (openDrawer === 'Edit') {
      if (useStock) {
        setValue('productName', useStock.productName);
        setValue('price', useStock.price.toString());
        setValue('quantity', useStock.quantity.toString());
        setValue('currency', useStock.currency);
        setValue('unit', useStock.unit);
        setValue('shopName', useStock.shopName);
        setValue('paidBy', useStock.paidBy);
        setValue('note', useStock.note);
      }
    } else {
      setValue('productName', '');
      setValue('price', '');
      setValue('quantity', '');
      setValue('unit', '');
      setValue('shopName', '');
      setValue('paidBy', '');
      setValue('note', '');
      methods.clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDrawer, openUseStock, useStock]);
  // method
  const handleSubmitStock = (data: IStockInput) => {
    // console.log('data', data);
    addNewStock.run({
      stockReq: {
        id: useStock?.id || undefined,
        productName: data.productName,
        shopName: data.shopName,
        currency: data.currency,
        note: data.note,
        paidBy: data.paidBy,
        price: +data.price,
        quantity: +data.quantity,
        unit: data.unit,
        usedStock: 0,
      },
    });
  };
  const handleOpenDrawer = (obj: 'Add' | 'Edit' | '') => {
    setOpenDrawer(obj);
  };
  const { isMdDown } = useResponsive();

  return (
    <>
      <PageHeader pageTitle='Stocks' />
      <Paper
        elevation={1}
        sx={{
          mx: 2,
          borderRadius: 4,
          height: 'calc(100vh - 100px)',
          maxWidth: '100%',
          overflow: 'hidden',
          px: 2,
          position: 'relative',
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ width: '100%', py: 2 }}
          spacing={2}
        >
          <Button
            variant='contained'
            startIcon={<BoxAdd />}
            sx={{
              color: theme.palette.common.white,
              boxShadow: theme.shadows[1],
              borderRadius: 2,
              whiteSpace: 'nowrap',
              height: 40,
            }}
            onClick={() => handleOpenDrawer('Add')}
          >
            {isMdDown ? 'New' : 'Add New'}
          </Button>
          <CusTextField
            onChange={(e) => setSearchProduct(e.currentTarget.value)}
            placeholder='Search...'
            size='small'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchNormal1 size='20' color={theme.palette.primary.main} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <TableContainer
          sx={{
            height: '100%',
            overflow: 'auto',
            pb: { xs: 22, md: 15, lg: 0 },
          }}
        >
          {isLoadingStockList ? (
            <Stack
              direction={'column'}
              alignItems={'center'}
              justifyContent='center'
              sx={{ height: '100%' }}
            >
              <CusLoading />
            </Stack>
          ) : stockList && stockList.data.length === 0 ? (
            <Stack
              direction={'column'}
              alignItems={'center'}
              justifyContent='center'
              spacing={1}
              sx={{ height: '100%' }}
            >
              <BoxRemove size='80' color={theme.palette.error.main} />
              <Typography variant='h6' color='error'>
                No Stock...
              </Typography>
            </Stack>
          ) : (
            <Table
              stickyHeader
              sx={{
                '& thead tr th': {
                  background: (theme) => theme.palette.background.paper,
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                },
              }}
            >
              <StockTableHead />
              <TableBody>
                <StockTableBody
                  {...{
                    stockList,
                    handleOpenDrawer,
                    setConfirmDelete,
                    setUseStock,
                    setOpenStock,
                  }}
                />
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Paper>
      <ConfirmDialogSlide
        open={confirmDelete !== undefined}
        maxWidth='xs'
        title={'Are you sure to delete?'}
        cancel={() => {
          setConfirmDelete(undefined);
        }}
        confirm={() => {
          deleteStock.run({
            id: confirmDelete || 0,
          });
        }}
        loading={deleteStock.loading}
      />
      <FormProvider {...methods}>
        <ResponsiveDrawer open={!!openDrawer} onCloseDrawer={() => {}}>
          <FormStock
            {...{ handleOpenDrawer, openDrawer, methods, handleSubmitStock }}
          />
        </ResponsiveDrawer>
        <Dialog
          open={openUseStock}
          maxWidth={'xs'}
          onClose={() => {
            setOpenStock(false);
            setSmsOverStock('');
            setValue('usedStock', '');
          }}
        >
          <Stack alignItems={'center'} sx={{ p: 4 }} spacing={2}>
            <Typography variant='h5' fontWeight={'medium'}>
              Stocks Control
            </Typography>
            <Stack
              direction={'row'}
              alignItems='center'
              justifyContent={'space-between'}
              sx={{ width: '100%' }}
            >
              <Stack>
                <Typography>
                  Total : <b>{useStock?.quantity}</b> {useStock?.unit}
                </Typography>
                <Typography>
                  Used : <b>{useStock?.usedStock}</b> {useStock?.unit}
                </Typography>
              </Stack>
              <Stack>
                <Typography>
                  Current :{' '}
                  <b>
                    {(useStock?.quantity &&
                      useStock?.usedStock &&
                      useStock?.quantity - useStock?.usedStock) ||
                      useStock?.quantity}
                  </b>{' '}
                  {useStock?.unit}
                </Typography>
              </Stack>
            </Stack>
            <form>
              <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    name='usedStock'
                    defaultValue=''
                    rules={{
                      pattern: {
                        value: validatePatterns.numberOnly,
                        message: 'Required only number',
                      },
                    }}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Stack direction={'column'}>
                          <StyledOutlinedTextField
                            placeholder='Enter value'
                            error={Boolean(error) || !!smsOverStock}
                            {...field}
                          />
                          <Typography
                            color={'error'}
                            variant='caption'
                            sx={{
                              visibility:
                                error?.message || smsOverStock
                                  ? 'visible'
                                  : 'hidden',
                            }}
                          >
                            {error?.message || smsOverStock}
                          </Typography>
                        </Stack>
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <LoadingButton
                    loading={addNewStock.loading}
                    variant='contained'
                    fullWidth
                    sx={{
                      boxShadow: 0,
                      height: 56,
                      borderRadius: 2,
                    }}
                    onClick={handleSubmit((data) => {
                      if (
                        useStock &&
                        +data.usedStock + useStock.usedStock > useStock.quantity
                      ) {
                        if (useStock.quantity - useStock.usedStock === 0) {
                          setSmsOverStock('Empty stock');
                        } else {
                          setSmsOverStock('It over stocks');
                        }
                      } else {
                        if (useStock) {
                          addNewStock.run({
                            stockReq: {
                              id: useStock.id,
                              productName: useStock.productName,
                              shopName: useStock.shopName,
                              currency: useStock.currency,
                              note: useStock.note,
                              paidBy: useStock.paidBy,
                              price: +useStock.price,
                              quantity: +useStock.quantity,
                              unit: useStock.unit,
                              usedStock: useStock.usedStock
                                ? useStock.usedStock + +data.usedStock
                                : +data.usedStock,
                            },
                          });
                        }
                      }
                    })}
                  >
                    Use
                  </LoadingButton>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <LoadingButton
                    loading={addNewStock.loading}
                    variant='contained'
                    color='info'
                    fullWidth
                    sx={{
                      boxShadow: 0,
                      height: 56,
                      color: (theme) => theme.palette.common.white,
                      borderRadius: 2,
                    }}
                    onClick={handleSubmit((data) => {
                      if (useStock) {
                        addNewStock.run({
                          stockReq: {
                            id: useStock.id,
                            productName: useStock.productName,
                            shopName: useStock.shopName,
                            currency: useStock.currency,
                            note: useStock.note,
                            paidBy: useStock.paidBy,
                            price: +useStock.price,
                            quantity: +useStock.quantity + +data.usedStock,
                            unit: useStock.unit,
                            usedStock: useStock.usedStock,
                          },
                        });
                      }
                      setSmsOverStock('');
                    })}
                  >
                    Add
                  </LoadingButton>
                </Grid>
              </Grid>
            </form>
          </Stack>
        </Dialog>
      </FormProvider>
    </>
  );
};

export default Stocks;
