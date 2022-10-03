import useRequest from '@ahooksjs/use-request';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material';
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
import { stockData } from 'utils/stock-util';
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
}

const Stocks = () => {
  // State
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | ''>('');
  const [searchProduct, setSearchProduct] = useState(stockData);
  const [confirmDelete, setConfirmDelete] = useState<number>();
  const [useStock, setUseStock] = useState<IStock.IStockDetails | undefined>();
  const [openUseStock, setOpenStock] = useState(false);
  const methods = useForm<IStockInput>();
  const { setValue, control, handleSubmit, watch } = methods;

  // fetch data
  // get list
  const {
    data: stockList,
    run: fetchStockList,
    loading: isLoadingStockList,
    refresh: refreshStockList,
  } = useRequest(STOCK_API.getStockList, { manual: true });
  // add stock
  const addNewStock = useRequest(STOCK_API.addStock, {
    manual: true,
    onSuccess: () => {
      setOpenDrawer('');
      refreshStockList();
    },
  });
  // delete list
  const deleteStock = useRequest(STOCK_API.deleteStock, {
    manual: true,
    onSuccess: () => {
      refreshStockList();
      setConfirmDelete(undefined);
    },
  });
  // search list
  useEffect(() => {
    fetchStockList({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (openDrawer === 'Edit') {
      if (useStock) {
        setValue('productName', useStock.productName);
        setValue('price', useStock.price.toString());
        setValue('quantity', useStock.quantity.toString());
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
            onChange={(e) => {
              if (!!e.currentTarget.value) {
                let tmp = searchProduct.filter(
                  (el) =>
                    el.productName
                      .toLowerCase()
                      .indexOf(e.currentTarget.value.toLowerCase()) !== -1 ||
                    el.cateName
                      .toLowerCase()
                      .indexOf(e.currentTarget.value.toLowerCase()) !== -1
                );
                setSearchProduct(tmp);
              } else {
                setSearchProduct(stockData);
              }
            }}
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
          ) : stockList && stockList.data.length < 0 ? (
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
          }}
        >
          <Stack alignItems={'center'} sx={{ p: 4 }} spacing={3}>
            <Typography variant='h5'>Current Stocks: 100</Typography>
            <form>
              <Stack direction={'row'} spacing={2}>
                <Controller
                  control={control}
                  name='quantity'
                  defaultValue=''
                  rules={{
                    required: {
                      value:
                        watch('quantity') > `${useStock?.quantity}`
                          ? true
                          : false,
                      message: 'It over current qty',
                    },
                    pattern: {
                      value: validatePatterns.numberOnly,
                      message: 'Required only number',
                    },
                  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <StyledOutlinedTextField
                        placeholder='Enter value'
                        error={Boolean(error)}
                        helperText={error?.message}
                        {...field}
                      />
                    );
                  }}
                />
                <LoadingButton
                  loading={addNewStock.loading}
                  variant='contained'
                  sx={{
                    boxShadow: 0,
                  }}
                  onClick={handleSubmit((data) => {
                    console.log(data.quantity);
                  })}
                >
                  Use
                </LoadingButton>
                <LoadingButton
                  loading={addNewStock.loading}
                  variant='contained'
                  color='info'
                  sx={{
                    boxShadow: 0,
                  }}
                  onClick={handleSubmit((data) => {
                    console.log(data.quantity);
                  })}
                >
                  Add
                </LoadingButton>
              </Stack>
            </form>
          </Stack>
        </Dialog>
      </FormProvider>
    </>
  );
};

export default Stocks;
