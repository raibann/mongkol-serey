import {
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  ToggleButtonGroup,
} from '@mui/material';
import CusTextField from 'components/CusTextField';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import { SearchNormal1 } from 'iconsax-react';
import { ORDER_DATA } from 'pages/Orders';
import { useState } from 'react';
import theme from 'theme/theme';
import ExpenseDialogs from './ExpenseDialogs';
import { ExpenseTableBody, ExpenseTableHead } from './expenseTable';

export default function Expense() {
  const [ToggleValue, setToggleValue] = useState('pending');
  const [openDialogs, setOpenDialogs] = useState(false);
  const handleOpenDialogs = () => {
    setOpenDialogs(true);
  };

  return (
    <>
      <PageHeader pageTitle={'Expense'} />
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
                width: '30%',
              }}
            >
              <CusToggleButton value='pending'>Pending</CusToggleButton>
              <CusToggleButton value='completed'>Completed</CusToggleButton>
              <CusToggleButton value='all'>All</CusToggleButton>
            </ToggleButtonGroup>
            <CusTextField
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
            <ExpenseTableHead />
            <TableBody>
              {ORDER_DATA.map((order) => {
                return (
                  <ExpenseTableBody
                    key={order.id}
                    id={order.id}
                    name={order.name}
                    social={order.social}
                    bookingDate={order.bookingDate}
                    deposit={order.deposit}
                    eventDate={order.eventDate}
                    eventLocation={order.eventLocation}
                    paidBy={order.paidBy}
                    quantity={order.quantity}
                    {...{ handleOpenDialogs }}
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
      <ExpenseDialogs {...{ openDialogs, setOpenDialogs }} />
    </>
  );
}
