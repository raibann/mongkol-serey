import { Grid, Paper, Stack } from '@mui/material';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { FormProvider, useForm } from 'react-hook-form';
import InventoryLeftInput from './components/InventoryLeftInput';
import InventoryRightInput from './components/InventoryRightInput';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { STOCK_API } from 'api/stock';
import { useRequest } from 'ahooks';
import { LoadingButton } from '@mui/lab';
import THEME_UTIL from 'utils/theme-util';

export type InventoryInput = {
  id?: number;
  paidBy: string;
  addStock?: boolean;
  quantity: number;
  priceKh: number;
  priceUsd: number;
  discount?: number;
  expiryDate?: string;
  category?: number;
  product: { id: number };
  currency?: { id: number } | '';
  unit?: { id: number } | '';
  suppliers?: { id: number } | '';
  pricing?: {
    qty: number;
    unit: string;
    currency: number;
    cost: number;
  }[];
};

const InventoryForm = () => {
  // Hooks
  const [params] = useSearchParams();
  const navigate = useNavigate();

  // Variables
  const cateId = params.get('cateId');
  const prodId = params.get('prodId');

  const methods = useForm<InventoryInput>({
    defaultValues: {
      category: +cateId!,
      product: { id: +prodId! },
      discount: 0,
      addStock: false,
      currency: { id: 2 },
      expiryDate: '',
      paidBy: '',
      priceKh: 0,
      priceUsd: 0,
      quantity: 0,
      suppliers: '',
      unit: '',
      pricing: [
        {
          cost: 0,
          currency: 2,
          qty: 0,
          unit: 'ដប',
        },
      ],
    },
  });

  // Requests
  const { loading: loadingCreateStock, run: runCreateStock } = useRequest(
    STOCK_API.createStock,
    {
      onSuccess: () => navigate(-1),
      manual: true,
    }
  );

  // Methods
  const onSubmit = (data: InventoryInput) => {
    runCreateStock({
      ...data,
      quantity: +data.quantity,
      priceUsd: +data.priceUsd,
      priceKh: +data.priceKh,
      pricing: undefined,
      addStock: undefined,
      category: undefined,
      discount: undefined,
    });
  };

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SecondaryPageHeader
          sticky
          title='Add New Inventory'
          appBarSx={{ bgcolor: 'background.paper' }}
          endComponent={
            <LoadingButton
              variant='contained'
              type='submit'
              loading={loadingCreateStock}
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
