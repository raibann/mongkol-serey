import {
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Pagination,
  Paper,
  Popover,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ToggleButtonGroup,
  Typography,
  Radio,
} from '@mui/material';
import {
  BoxRemove,
  TickCircle,
  FilterSearch,
  FilterRemove,
} from 'iconsax-react';
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
import { Controller, useForm } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import LabelTextField from 'components/LabelTextField';
import { eventList } from 'utils/data-util';
import moment from 'moment';

interface IFilterSearch {
  eventType: string;
  type: string;
  from: string | null;
  to: string | null;
}

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

  // useForm
  const { handleSubmit, control, clearErrors, setValue } =
    useForm<IFilterSearch>();

  // State
  const { isSmDown } = useResponsive();
  const [toggleValue, setToggleValue] = useState('pending');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [openDialogs, setOpenDialogs] = useState<IOrder.Order>();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // useEffects
  useEffect(() => {
    if (search !== '') {
      expenseSearchReq.run({
        page: page - 1,
        status: toggleValue,
        search: search,
      });
      return;
    }

    expenseListReq.run({
      page: page - 1,
      status: toggleValue,
      search: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleValue, page, search]);

  // Methods
  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const onAddExpense = useCallback(
    (i: number) => setOpenDialogs(expenseList![i]),
    [expenseList]
  );
  const onClearFilter = () => {
    setValue('from', null);
    setValue('to', null);
    setValue('eventType', '');
    setValue('type', 'event');
  };
  const handleSubmitFilter = (data: IFilterSearch) => {
    setSearch('');
    setPage(1);
    setAnchorEl(null);
    clearErrors();
    expenseListReq.run({
      page: 0,
      status: toggleValue,
      search: '',
      dateType: data.type,
      startDate: moment(data.from).format('YYYY-MM-DD'),
      endDate: moment(data.to).format('YYYY-MM-DD'),
      eventType: data.eventType,
    });
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
            value={toggleValue}
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
                onClearFilter();
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
                  status: toggleValue,
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
                  <IconButton
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    sx={{ mr: -1 }}
                  >
                    <FilterSearch
                      size='20'
                      color={theme.palette.primary.main}
                    />
                  </IconButton>
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

      <Popover
        id='filter-order'
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            p: 2,
          },
        }}
      >
        <form onSubmit={handleSubmit(handleSubmitFilter)}>
          <Stack direction={'column'} spacing={2}>
            <Controller
              control={control}
              name='eventType'
              defaultValue=''
              render={({ field, fieldState: { error } }) => (
                <CusTextField
                  select
                  defaultValue={''}
                  SelectProps={{
                    displayEmpty: true,
                  }}
                  fullWidth
                  placeholder='Event Type'
                  size='small'
                  error={Boolean(error)}
                  {...field}
                >
                  <MenuItem value=''>All Event Type</MenuItem>
                  {eventList.map((d, i) => (
                    <MenuItem key={i} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </CusTextField>
              )}
            />
            <Controller
              control={control}
              name='type'
              defaultValue='event'
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value='event'
                    control={<Radio />}
                    label='Event'
                  />
                  <FormControlLabel
                    value='booking'
                    control={<Radio />}
                    label='Booking'
                  />
                </RadioGroup>
              )}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                control={control}
                name='from'
                defaultValue={null}
                rules={{
                  required: true,
                }}
                render={({ field, fieldState: { error } }) => (
                  <LabelTextField label='From'>
                    <DatePicker
                      openTo='day'
                      views={['year', 'month', 'day']}
                      renderInput={(params) => (
                        <CusTextField
                          size='small'
                          error={Boolean(error)}
                          {...params}
                        />
                      )}
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      value={field.value}
                    />
                  </LabelTextField>
                )}
              />
              <Controller
                control={control}
                name='to'
                defaultValue={null}
                rules={{
                  required: true,
                }}
                render={({ field, fieldState: { error } }) => (
                  <LabelTextField label='To'>
                    <DatePicker
                      openTo='day'
                      views={['year', 'month', 'day']}
                      renderInput={(params) => (
                        <CusTextField
                          size='small'
                          error={Boolean(error)}
                          {...params}
                        />
                      )}
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      value={field.value}
                    />
                  </LabelTextField>
                )}
              />
            </LocalizationProvider>
            <Stack direction='row' spacing={2}>
              <Button
                variant='contained'
                type='submit'
                sx={{
                  color: theme.palette.common.white,
                  boxShadow: theme.shadows[1],
                  borderRadius: 2,
                  textTransform: 'none',
                  height: 40,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 2,
                  flexGrow: 1,
                }}
                startIcon={<TickCircle variant='Bold' size={16} />}
              >
                Confirm
              </Button>
              <IconButton
                color='primary'
                onClick={() => {
                  onClearFilter();
                  expenseListReq.run({
                    page: page - 1,
                    status: toggleValue,
                  });
                }}
              >
                <FilterRemove />
              </IconButton>
            </Stack>
          </Stack>
        </form>
      </Popover>
    </>
  );
}
