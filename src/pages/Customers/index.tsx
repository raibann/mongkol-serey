import { Button, InputAdornment, Stack, TablePagination } from '@mui/material';
import { Container } from '@mui/system';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, SearchNormal1 } from 'iconsax-react';
import CustTable from './components/CustomerTable';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import { useDebounce, useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import { useEffect, useState } from 'react';
import { EnumCustomerType } from 'utils/data-util';
import ErrorResponse from 'components/ResponseUIs/ErrorResponse';
import { CusLoading } from 'components/CusLoading';

export default function Customers() {
  // State
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');

  // Hooks
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();
  const searchDebounced = useDebounce(search, { wait: 500 });

  // Request APIs
  const {
    data: resCustomers,
    loading: isLoading,
    run: fecthData,
    error: errorFetch,
  } = useRequest(CUSTOMER_API.getCustomerList, { manual: false });

  useEffect(() => {
    fecthData({
      type: EnumCustomerType.CUSTOMER,
      page: page,
      size: 10,
      search: searchDebounced,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchDebounced]);

  // Methods
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <PageHeader pageTitle='Customers'>
        <CusTextField
          onChange={(e) => {
            handleSearch(e.currentTarget.value);
          }}
          fullWidth={isSmDown ? true : false}
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
          onClick={() => navigate(ROUTE_PATH.customers.createNewCustomer)}
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

      <Container
        maxWidth={'xl'}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {isLoading ? (
          <Stack
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              height: ['calc(100vh - 176px)'],
            }}
          >
            <CusLoading />
          </Stack>
        ) : errorFetch ? (
          <ErrorResponse errorMessage={'Internal Server Error!'} />
        ) : (
          <>
            <CustTable data={resCustomers?.data} />
            <TablePagination
              rowsPerPageOptions={isSmDown ? [] : [10, 25, 100]}
              component='div'
              count={resCustomers?.totalItem || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage={isSmDown ? '' : 'Rows per page'}
            />
          </>
        )}
      </Container>
    </>
  );
}
