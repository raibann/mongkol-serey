import {
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { SearchNormal1, BoxRemove } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { CusLoading } from 'components/CusLoading';
import CusTextField from 'components/CusTextField';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import theme from 'theme/theme';
import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
import useRequest from '@ahooksjs/use-request';
import EXPENSE_API from 'api/expense';
import OrderTable, { OrderTableHead } from 'pages/Orders/OrderTable';
import ExpenseDialogs from './ExpenseDialogs';

export default function Expense() {
  // useRequests
  const expenseListReq = useRequest(EXPENSE_API.getExpense, {
    manual: true,
  });
  const expenseSearchReq = useRequest(expenseListReq.run, { manual: true });

  // Variable
  const expenseList = expenseListReq.data?.data;

  // State
  const [ToggleValue, setToggleValue] = useState('pending');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [openDialogs, setOpenDialogs] = useState<IOrder.Order>();
  const { isSmDown } = useResponsive();

  // useEffects
  useEffect(() => {
    if (search !== '') {
      expenseSearchReq.run({
        page: page - 1,
        status: ToggleValue,
        search: search,
      });
    }

    expenseListReq.run({
      page: page - 1,
      status: ToggleValue,
      search: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ToggleValue, page, search]);

  // Methods
  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <PageHeader pageTitle={'Expense'} />
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
          direction={isSmDown ? 'column' : 'row'}
          alignItems='flex-start'
          justifyContent={'space-between'}
          spacing={2}
          sx={{ width: '100%', py: 2 }}
        >
          <ToggleButtonGroup
            value={ToggleValue}
            exclusive
            fullWidth
            size='small'
            onChange={(
              event: React.MouseEvent<HTMLElement, MouseEvent>,
              value: any
            ) => {
              if (value !== null) {
                setToggleValue(value);
              }
            }}
            sx={{
              width: ['100%', '50%', '30%'],
            }}
          >
            <CusToggleButton value='pending'>Pending</CusToggleButton>
            <CusToggleButton value='complete'>Completed</CusToggleButton>
            <CusToggleButton value='all'>All</CusToggleButton>
          </ToggleButtonGroup>
          <CusTextField
            placeholder='Search...'
            size='small'
            fullWidth={isSmDown}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            height: 'calc(100% - 48px - 56px)',
            overflow: 'auto',
            pb: { xs: 15, md: 10, lg: 5 },
          }}
        >
          {expenseListReq.loading ? (
            <Stack
              direction={'column'}
              alignItems={'center'}
              justifyContent='center'
              sx={{ height: '100%' }}
            >
              <CusLoading />
            </Stack>
          ) : expenseList && expenseList.length > 0 ? (
            <Table
              sx={{
                minWidth: 1000,
                '& thead tr th': {
                  background: (theme) => theme.palette.background.paper,
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                },
              }}
            >
              <OrderTableHead showAction={false} />
              <TableBody>
                <OrderTable
                  data={expenseList}
                  onAddExpenseClick={(i) => setOpenDialogs(expenseList[i])}
                />
              </TableBody>
            </Table>
          ) : (
            <Stack
              direction={'column'}
              alignItems={'center'}
              justifyContent='center'
              spacing={1}
              sx={{ height: '100%' }}
            >
              <BoxRemove size='80' color={theme.palette.error.main} />
              <Typography variant='h6' color='error'>
                No Expense...
              </Typography>
            </Stack>
          )}
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
          <Pagination
            page={page}
            onChange={handleChangePage}
            count={expenseListReq.data?.totalPage}
          />
        </Stack>
      </Paper>
      <ResponsiveDialog
        onCloseDialog={() => {}}
        open={openDialogs !== undefined}
        PaperProps={{
          elevation: 0,
          sx: {
            height: { xs: '100vh', md: '90vh' },
            backgroundColor: 'transparent',
            borderRadius: 0,
          },
        }}
      >
        <ExpenseDialogs
          orderDetail={openDialogs}
          onCloseDialogClick={() => setOpenDialogs(undefined)}
          onAddExpenseSuccess={() => {
            expenseListReq.refresh();
            setOpenDialogs(undefined);
          }}
        />
      </ResponsiveDialog>
    </>
  );
}
