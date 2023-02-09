import {
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { SearchNormal1, BoxRemove } from 'iconsax-react';
import React, { useCallback, useEffect, useState } from 'react';
import { CusLoading } from 'components/CusLoading';
import CusTextField from 'components/CusTextField';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import theme from 'theme/theme';
import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
import EXPENSE_API from 'api/expense';
import OrderTable, { OrderTableHead } from 'pages/Orders/OrderTable';
import ExpenseDialogs from './ExpenseDialogs';
import { AnimatePresence, motion } from 'framer-motion';
import { useRequest } from 'ahooks';

export default function Expense() {
  // useRequests
  const expenseListReq = useRequest(EXPENSE_API.getExpense, {
    manual: true,
    loadingDelay: 1000,
  });
  const expenseSearchReq = useRequest(expenseListReq.runAsync, {
    manual: true,
    debounceWait: 500,
  });

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
      return;
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
  const onAddExpense = useCallback(
    (i: number) => setOpenDialogs(expenseList![i]),
    [expenseList]
  );

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
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack
          direction={isSmDown ? 'column' : 'row'}
          alignItems='flex-start'
          justifyContent={'space-between'}
          spacing={2}
          sx={{ width: '100%', p: 2 }}
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
                setPage(1);
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
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                expenseListReq.run({
                  page: page - 1,
                  status: ToggleValue,
                  search: search,
                });
              }
            }}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
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
          className='hide-scrollbar'
          sx={{
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          {expenseListReq.loading && !expenseList ? (
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
                <AnimatePresence exitBeforeEnter>
                  {expenseListReq.loading && (
                    <TableRow
                      component={motion.tr}
                      layout
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.3,
                          ease: 'easeInOut',
                        },
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        transition: {
                          delay: 0,
                          ease: 'easeInOut',
                        },
                      }}
                    >
                      <TableCell colSpan={8} sx={{ textAlign: 'center' }}>
                        <CusLoading />
                      </TableCell>
                    </TableRow>
                  )}
                </AnimatePresence>
                <OrderTable
                  data={expenseListReq.loading ? [] : expenseList}
                  onAddExpenseClick={onAddExpense}
                  isExpense={true}
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
                No Expense Data
              </Typography>
            </Stack>
          )}
        </TableContainer>
        <Stack
          alignItems='center'
          width='100%'
          p={1.5}
          sx={{ bgcolor: 'background.paper' }}
        >
          <Pagination
            page={page}
            onChange={handleChangePage}
            count={expenseListReq.data?.totalPage}
            color='primary'
            variant='outlined'
            sx={{
              '& .MuiPaginationItem-root': {
                borderWidth: 0,
              },
            }}
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
