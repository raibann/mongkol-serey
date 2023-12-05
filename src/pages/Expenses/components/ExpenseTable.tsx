import {
  Chip,
  Stack,
  TableCell,
  TableRow,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTable, { custStyle } from 'components/CusTable';
import { Edit2, Printer } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

const headers = [
  'Invoice Id',
  'Event',
  'Paid',
  'Due Amount',
  'Total Expense',
  'Total Income',
  'Tolal Netincome',
  'Status',
  '',
];

const bodyRow = [
  {
    id: 1,
    name: 'Hello',
    event: 'Metaverse',
    paid: 100,
    dueAmount: 200,
    tolalExpense: 100,
    totalIncome: 100,
    totalNetincome: 100,
    status: 'Pending',
  },
];

export default function ExpenseTable() {
  /* Hooks */
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      <CusTable
        headers={headers}
        body={bodyRow.map((value) => {
          return (
            <TableRow sx={custStyle.bodyRow} key={value.id}>
              <TableCell>{value.id}</TableCell>
              <TableCell>
                <Stack direction={'column'}>
                  <Typography variant='body2'>{value.name}</Typography>
                  <Typography variant='caption' noWrap color={'text.secondary'}>
                    {value.event}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>{value.paid}</TableCell>
              <TableCell>{value.dueAmount}</TableCell>
              <TableCell>{value.tolalExpense}</TableCell>
              <TableCell>{value.totalIncome}</TableCell>
              <TableCell>{value.totalNetincome}</TableCell>
              <TableCell>
                <Chip
                  label={value.status}
                  size='small'
                  sx={{
                    background: (theme) => alpha(theme.palette.error.main, 0.1),
                    color: (theme) => theme.palette.error.main,
                  }}
                />
              </TableCell>
              <TableCell align='right'>
                <Stack
                  direction={'row'}
                  spacing={1}
                  alignItems={'center'}
                  justifyContent={'right'}
                >
                  <CusIconButton
                    onClick={() =>
                      navigate(
                        ROUTE_PATH.expenses.updateExpense.replace(':id', '1')
                      )
                    }
                    sx={{
                      boxShadow: 0,
                      background: (theme) =>
                        alpha(theme.palette.info.main, 0.1),
                    }}
                  >
                    <Edit2
                      size='18'
                      color={theme.palette.info.main}
                      variant='Bold'
                    />
                  </CusIconButton>
                  <CusIconButton
                    color='default'
                    onClick={() =>
                      navigate(
                        ROUTE_PATH.expenses.previewExpense.replace(':id', '1')
                      )
                    }
                    sx={{
                      boxShadow: 0,
                      background: (theme) => theme.palette.background.paper,
                    }}
                  >
                    <Printer size='18' variant='Bold' />
                  </CusIconButton>
                </Stack>
              </TableCell>
            </TableRow>
          );
        })}
      />
    </>
  );
}
