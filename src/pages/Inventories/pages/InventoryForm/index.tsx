import { Box, Grid, Paper, Stack } from '@mui/material';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { FormProvider, useForm } from 'react-hook-form';
import InventoryLeftInput from './components/InventoryLeftInput';
import InventoryRightInput from './components/InventoryRightInput';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { STOCK_API, STOCK_PRODUCT_API } from 'api/stock';
import { useRequest } from 'ahooks';
import { LoadingButton } from '@mui/lab';
import THEME_UTIL from 'utils/theme-util';
import { CusLoading } from 'components/CusLoading';
import { ROUTE_PATH } from 'utils/route-util';

export type InventoryInput = {
  id?: string;
  paidBy: string;
  priceKh: number;
  priceUsd: number;
  unitPrice: number;
  discount?: number;
  category?: number;
  expiryDate?: string;
  defaultUnitQty: number;
  currency?: { id: number } | '';
  suppliers?: { id: number } | '';
  product: { id: number; name?: string; images?: string };
  unit?: { id: number; name?: string } | '';
};

const InventoryForm = () => {
  // Hooks
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const pathParams = useParams();

  const methods = useForm<InventoryInput>({
    defaultValues: {
      discount: 0,
      currency: { id: 2 },
      expiryDate: '',
      paidBy: '',
      priceKh: 0,
      priceUsd: 0,
      defaultUnitQty: 0,
      unitPrice: 0,
      suppliers: '',
      unit: '',
    },
  });

  // Variables
  const updateStockId = pathParams['id'];
  const addStockId = params.get('stockId');
  const isLoadingUpload = methods
    .watch('product.images')
    ?.includes('data:image/jpeg;base64');

  // Requests
  const { loading: loadingStockAction, run: runStockAction } = useRequest(
    STOCK_API.stockAction,
    {
      onSuccess: () => navigate(ROUTE_PATH.inventories.root),
      manual: true,
    }
  );
  const { loading: loadingProductAction, runAsync: runProductAction } =
    useRequest(STOCK_PRODUCT_API.productAction, {
      manual: true,
    });
  const { loading: loadingStockDetail } = useRequest(
    () =>
      STOCK_API.stockDetail({ id: addStockId ? addStockId : updateStockId! }),
    {
      onSuccess: (res) => {
        methods.setValue('paidBy', res.paidBy);
        methods.setValue('product.id', res.product.id);
        methods.setValue('product.name', res.product.name);
        methods.setValue('product.images', res.product.images);
        methods.setValue('category', res.product.category.id);
        res.unit && methods.setValue('unit.id', res.unit.id);
        res.unit && methods.setValue('unit.name', res.unit.name);
        res.suppliers && methods.setValue('suppliers.id', res.suppliers.id);

        if (!!updateStockId) {
          methods.setValue('id', updateStockId);
          methods.setValue('currency.id', res.currency.id);
          methods.setValue('unitPrice', res.unitPrice);
          methods.setValue('defaultUnitQty', res.unitQty);
          methods.setValue('priceKh', res.priceKh);
          methods.setValue('priceUsd', res.priceUsd);
        }
      },
      ready: !!addStockId || !!updateStockId,
    }
  );

  // Methods
  const onSubmit = async (data: InventoryInput) => {
    let res = await runProductAction({
      id: data.product.id,
      name: data.product.name ?? '',
      images: data.product.images ?? '',
      category: { id: data.category! },
    });

    runStockAction({
      ...data,
      defaultUnitQty: +data.defaultUnitQty,
      priceUsd: +data.priceUsd,
      priceKh: +data.priceKh,
      product: { id: res.id! },
    });
  };

  if (loadingStockDetail) {
    return (
      <Box height='80vh' sx={{ display: 'grid', placeItems: 'center' }}>
        <CusLoading />
      </Box>
    );
  }

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SecondaryPageHeader
          sticky
          title={
            !updateStockId
              ? !!addStockId
                ? `Add stock for ${methods.watch('product.name')}`
                : 'Add New Inventory'
              : 'Update Inventory'
          }
          appBarSx={{ bgcolor: 'background.paper' }}
          endComponent={
            <LoadingButton
              variant='contained'
              type='submit'
              loading={
                loadingStockAction || loadingProductAction || isLoadingUpload
              }
              sx={{ background: THEME_UTIL.goldGradientMain }}
            >
              Save
            </LoadingButton>
          }
        />

        <FormProvider {...methods}>
          <Grid container p={3} pt={0} spacing={3}>
            <Grid item xs={8}>
              <Stack component={Paper} p={2}>
                <InventoryLeftInput />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack component={Paper} p={2}>
                <InventoryRightInput />
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </form>
    </>
  );
};

export default InventoryForm;
