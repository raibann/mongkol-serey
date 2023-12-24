/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Popover,
  RadioGroup,
  Stack,
  Radio,
  Container,
} from '@mui/material';
import { TickCircle, FilterSearch, FilterRemove } from 'iconsax-react';
import React, { useCallback, useEffect, useState } from 'react';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import theme from 'theme/theme';
import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
import EXPENSE_API from 'api/expense';
import { useDebounce, useRequest } from 'ahooks';
import { Controller, useForm } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import LabelTextField from 'components/LabelTextField';
import { eventList } from 'utils/data-util';
import moment from 'moment';
import ExpenseTable from './components/ExpenseTable';

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
    // loadingDelay: 1000,
  });

  // Variable
  const expenseList = expenseListReq.data?.response;

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
  const debouncedValue = useDebounce(search, { wait: 500 });
  // useEffects
  useEffect(() => {
    expenseListReq.run({
      page: page - 1,
      status: toggleValue,
      search: debouncedValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleValue, page, debouncedValue]);

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
      <PageHeader pageTitle={'Expense'}>
        <CusTextField
          sx={{
            background: (theme) => theme.palette.background.default,
          }}
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
                  <FilterSearch size='20' color={theme.palette.primary.main} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </PageHeader>
      <Container maxWidth='xl'>
        <ExpenseTable />
      </Container>

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
