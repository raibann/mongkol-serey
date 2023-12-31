import {
  InputAdornment,
  Button,
  Container,
  Stack,
  TablePagination,
} from '@mui/material';
import { useDebounce, useRequest } from 'ahooks';
import CUSTOMER_API from 'api/customer';
import { CusLoading } from 'components/CusLoading';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import EmptyResponse from 'components/ResponseUIs/EmptyResponse';
import ErrorResponse from 'components/ResponseUIs/ErrorResponse';
import useResponsive from 'hook/useResponsive';
import { SearchNormal1, Add } from 'iconsax-react';
import PotentialTable from 'pages/Customers/components/PotentialTable';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnumCustomerType } from 'utils/data-util';
import { ROUTE_PATH } from 'utils/route-util';

export default function Potential() {
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
    refresh: refreshCustomer,
  } = useRequest(CUSTOMER_API.getCustomerList, { manual: false });

  useEffect(() => {
    fecthData({
      type: EnumCustomerType.POTENTIAL_CUSTOMER,
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
      <PageHeader pageTitle='Potentials'>
        <CusTextField
          fullWidth={isSmDown ? true : false}
          placeholder='Search...'
          size='small'
          onChange={(e) => {
            handleSearch(e.currentTarget.value);
          }}
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
          onClick={() => navigate(ROUTE_PATH.customers.createPotentialCustomer)}
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
          '&> .css-19r6kue-MuiContainer-root': {
            px: 0,
          },
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
            {resCustomers?.response.length === 0 ? (
              <EmptyResponse />
            ) : (
              <>
                <PotentialTable
                  data={resCustomers?.response}
                  onSuccess={refreshCustomer}
                />
                <TablePagination
                  rowsPerPageOptions={isSmDown ? [] : [10, 25, 100]}
                  component='div'
                  count={resCustomers?.totalRecord || 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  labelRowsPerPage={isSmDown ? '' : 'Rows per page'}
                />
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
}
