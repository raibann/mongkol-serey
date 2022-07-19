import {
  Button,
  Drawer,
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
} from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { Add, SearchNormal1 } from 'iconsax-react';
import { useState } from 'react';
import theme from 'theme/theme';
import FormStock from './FormStock';
import { StockTableBody, StockTableHead } from './stockTable';

export interface IStockData {
  id: number;
  cateName: string;
  productName: string;
  quantity: {
    value: number;
    unit: string;
  };
  price: {
    value: number;
    currency: string;
  };
  shopName: string;
  paidBy: string;
  totalPrice: {
    value: number;
    currency: string;
  };
  inStock: {
    value: number;
    unit: string;
  };
}
const stockData: IStockData[] = [
  {
    id: 1,
    cateName: 'Groceries',
    productName: 'Soy Sauce',
    quantity: {
      value: 10,
      unit: 'packages',
    },
    price: {
      value: 5,
      currency: '$',
    },
    shopName: 'Psa Tmey',
    paidBy: 'Cash',
    totalPrice: {
      value: 50,
      currency: '$',
    },
    inStock: {
      value: 5,
      unit: 'packages',
    },
  },
  {
    id: 2,
    cateName: 'Drinks',
    productName: 'Singha Beer',
    quantity: {
      value: 10,
      unit: 'cases',
    },
    price: {
      value: 15,
      currency: '$',
    },
    shopName: 'Psa Tmey',
    paidBy: 'Cash',
    totalPrice: {
      value: 150,
      currency: '$',
    },
    inStock: {
      value: 5,
      unit: 'packages',
    },
  },
  {
    id: 3,
    cateName: 'Fruit',
    productName: 'Apple',
    quantity: {
      value: 10,
      unit: 'packages',
    },
    price: {
      value: 5,
      currency: '$',
    },
    shopName: 'Psa Tmey',
    paidBy: 'Cash',
    totalPrice: {
      value: 50,
      currency: '$',
    },
    inStock: {
      value: 5,
      unit: 'packages',
    },
  },
  {
    id: 4,
    cateName: 'Meat',
    productName: 'Beef',
    quantity: {
      value: 10,
      unit: 'Kg',
    },
    price: {
      value: 5,
      currency: '$',
    },
    shopName: 'Psa Tmey',
    paidBy: 'Cash',
    totalPrice: {
      value: 50,
      currency: '$',
    },
    inStock: {
      value: 5,
      unit: 'Kg',
    },
  },
];
const Stocks = () => {
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | ''>('');
  const [searchProduct, setSearchProduct] = useState(stockData);
  console.log(searchProduct);
  // handle add and edit stock
  const handleOpenDrawer = (obj: 'Add' | 'Edit' | '') => {
    setOpenDrawer(obj);
  };

  return (
    <>
      <PageHeader pageTitle='Stocks' />
      <Paper
        elevation={1}
        sx={{
          mx: 2,
          borderRadius: 4,
          minHeight: '92.5%',
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
          py={2}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ width: '100%' }}
          >
            <Button
              variant='contained'
              startIcon={<Add />}
              sx={{
                color: theme.palette.common.white,
                boxShadow: theme.shadows[1],
                borderRadius: 2,
              }}
              onClick={() => handleOpenDrawer('Add')}
            >
              Add New
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
                    <SearchNormal1
                      size='20'
                      color={theme.palette.primary.main}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>
        <TableContainer>
          <Table
            stickyHeader
            sx={{
              '& thead tr th': {
                background: (theme) => theme.palette.background.paper,
                fontWeight: '600',
              },
            }}
          >
            <StockTableHead />
            <TableBody>
              {searchProduct.map((stock, i) => {
                return (
                  <StockTableBody
                    props={stock}
                    index={i}
                    key={i}
                    onEdit={handleOpenDrawer}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={10}
          shape='rounded'
          sx={{ position: 'absolute', bottom: 5 }}
        />
      </Paper>

      <Drawer
        open={!!openDrawer}
        onClose={() => {
          setOpenDrawer('');
        }}
        anchor={'right'}
        PaperProps={{ sx: { borderRadius: 0, width: '50vw' } }}
      >
        <FormStock {...{ handleOpenDrawer, openDrawer }} />
      </Drawer>
    </>
  );
};

export default Stocks;
