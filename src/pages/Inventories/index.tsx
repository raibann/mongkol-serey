import {
  Button,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import CusTable from 'components/CusTable';
import CusTextField from 'components/CusTextField';
import Dialog, { IDialogRef } from 'components/Dialog';
import PageHeader from 'components/PageHeader';
import { Add, Box, Convert3DCube, SearchNormal1 } from 'iconsax-react';
import { useRef, useState } from 'react';
import ProductForm from './components/ProductForm';
import { useDebounce, useRequest } from 'ahooks';
import { STOCK_API } from 'api/stock';
import StockItem from './components/StockItem';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

const Stocks = () => {
  // Hooks
  const theme = useTheme();
  const navigate = useNavigate();
  const productFormRef = useRef<IDialogRef>();

  // States
  const [search, setSearch] = useState('');

  // Requests
  const searchDebounce = useDebounce(search, { wait: 500 });
  const { data, loading, error, refresh } = useRequest(
    () => STOCK_API.stockList({ search: searchDebounce }),
    { refreshDeps: [searchDebounce] }
  );

  return (
    <>
      <Dialog
        ref={productFormRef}
        cusWidth={400}
        cusTitle='Add New Product'
        alternateTitle='Update Product'
        content={(id?: number) => (
          <ProductForm
            id={id}
            onClose={() => {
              productFormRef.current?.close();
              refresh();
            }}
          />
        )}
      />

      <PageHeader pageTitle='Inventory'>
        <CusTextField
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search...'
          size='small'
          sx={{ bgcolor: 'common.white', mr: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchNormal1 size={18} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          // onClick={() => productFormRef.current?.open()}
          onClick={() => navigate(ROUTE_PATH.inventories.addInventory)}
          variant='contained'
          size='small'
          disableElevation
          sx={{
            color: 'common.white',
            minWidth: 0,
          }}
        >
          <Add />
        </Button>
      </PageHeader>

      <Container maxWidth='xl'>
        <Stack direction='row' spacing={3}>
          <Paper component={Stack} width='50%' p={2}>
            <Box variant='Bulk' color={theme.palette.primary.main} size={32} />
            <Grid container mt={2}>
              <Grid item xs={6}>
                <Typography>All Products</Typography>
                <Typography variant='h6' fontWeight='600'>
                  350
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Active</Typography>
                <Typography variant='h6' fontWeight='600'>
                  {'316 '}
                  <Typography variant='body2' component='span'>
                    (86%)
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper component={Stack} width='50%' p={2}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
            >
              <Convert3DCube
                variant='Bulk'
                color={theme.palette.primary.main}
                size={32}
              />
              <TextField
                size='small'
                select
                value='1'
                sx={{
                  '& .MuiOutlinedInput-input': {
                    p: 0,
                  },
                  '& fieldset': {
                    border: 'none',
                  },
                }}
              >
                <MenuItem value='1'>This week</MenuItem>
                <MenuItem value='2'>This month</MenuItem>
                <MenuItem value='3'>This year</MenuItem>
              </TextField>
            </Stack>
            <Grid container mt={2}>
              <Grid item xs={6}>
                <Typography>Low Stock Alert</Typography>
                <Typography variant='h6' fontWeight='600'>
                  30
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Expire</Typography>
                <Typography variant='h6' fontWeight='600'>
                  3
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Stack>

        {data && data.length > 0 && (
          <CusTable
            sx={{
              container: {
                py: 3,
              },
            }}
            headers={[
              'ID',
              'Product Name',
              'Category',
              'Unit Price',
              'In Stock',
              'Total Value',
              'Status',
              '',
            ]}
            body={data.map((e) => (
              <StockItem key={e.id} stock={e} refresh={refresh} />
            ))}
          />
        )}
      </Container>
    </>
  );
};

export default Stocks;
