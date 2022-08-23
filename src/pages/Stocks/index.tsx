import {
  Button,
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
} from '@mui/material';
import ResponsiveDrawer from 'components/CusDrawer/ResponsiveDrawer';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, SearchNormal1 } from 'iconsax-react';
import { useState } from 'react';
import theme from 'theme/theme';
import { stockData } from 'utils/stock-util';
import FormStock from './FormStock';
import { StockTableBody, StockTableHead } from './stockTable';

const Stocks = () => {
  const [openDrawer, setOpenDrawer] = useState<'Add' | 'Edit' | ''>('');
  const [searchProduct, setSearchProduct] = useState(stockData);
  console.log(searchProduct);
  // handle add and edit stock
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
            startIcon={<Add />}
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
        <Stack
          alignItems='center'
          width='100%'
          p={1}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            bgcolor: '#fff',
          }}
        >
          <Pagination count={10} />
        </Stack>
      </Paper>

      <ResponsiveDrawer open={!!openDrawer} onCloseDrawer={() => {}}>
        <FormStock {...{ handleOpenDrawer, openDrawer }} />
      </ResponsiveDrawer>
    </>
  );
};

export default Stocks;
