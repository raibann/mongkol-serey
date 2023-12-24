import {
  Button,
  Chip,
  Container,
  InputAdornment,
  Stack,
  TableCell,
  TableRow,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { useDebounce, useRequest } from 'ahooks';
import { STOCK_API } from 'api/stock';
import { CusLoading } from 'components/CusLoading';
import CusTable from 'components/CusTable';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import EmptyResponse from 'components/ResponseUIs/EmptyResponse';
import ErrorResponse from 'components/ResponseUIs/ErrorResponse';
import { Add, SearchNormal1 } from 'iconsax-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function InventoryReport() {
  // Hooks
  const navigate = useNavigate();
  const theme = useTheme();

  // States
  const [search, setSearch] = useState('');

  // Requests
  const searchDebounce = useDebounce(search, { wait: 500 });
  const { data, loading, error, refresh } = useRequest(
    () => STOCK_API.stockReportsList({ search: searchDebounce }),
    { refreshDeps: [searchDebounce] }
  );

  const getPrice = (index: number) => {
    if (!data) return '0';
    if (data[index].priceUsd) return `${data[index].priceUsd}$`;
    if (data[index].priceKh) return `${data[index].priceKh}៛`;
    return '0';
  };

  const getTotalPrice = (index: number) => {
    if (!data) return '0';
    if (data[index].priceUsd)
      return `${data[index].priceUsd * data[index].stockQty}$`;
    if (data[index].priceKh)
      return `${data[index].priceKh * data[index].stockQty}៛`;
    return '0';
  };
  return (
    <>
      <PageHeader pageTitle='Inventory Report'>
        <CusTextField
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
        {loading ? (
          <Stack height='80vh' alignItems='center' justifyContent='center'>
            <CusLoading />
          </Stack>
        ) : error ? (
          <ErrorResponse
            height='80vh'
            errorMessage={error?.message}
            onRetry={refresh}
          />
        ) : data && data.length > 0 ? (
          <CusTable
            headers={[
              'ID',
              'Product name',
              'Unit price',
              'Quantity',
              'Available',
              'Total price',
              'User',
              'Action',
            ]}
            body={data.map((e, i) => (
              <TableRow
                key={e.id}
                sx={{
                  bgcolor: 'common.white',
                  '&> td:first-of-type': {
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                  },
                  '&> td:last-child': {
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                  },
                }}
              >
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.productName}</TableCell>
                <TableCell>{getPrice(i)}</TableCell>
                <TableCell>
                  {e.stockQty}
                  {e.unitType}
                </TableCell>
                <TableCell>
                  {e.stockAvailable}
                  {e.unitType}
                </TableCell>
                <TableCell>
                  <Typography variant='body2'>{getTotalPrice(i)}</Typography>
                </TableCell>
                <TableCell>{e.addedByUser.name}</TableCell>
                <TableCell>
                  <Chip
                    label={e.action}
                    color='info'
                    size='small'
                    sx={{
                      bgcolor: alpha(theme.palette.info.light, 0.2),
                      color: 'info.main',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          />
        ) : (
          <EmptyResponse height='80vh' />
        )}
      </Container>
    </>
  );
}
