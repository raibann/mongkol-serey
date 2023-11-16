import {
  Chip,
  Stack,
  TableCell,
  TableRow,
  Typography,
  alpha,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTable, { custStyle } from 'components/CusTable';
import { HiDotsHorizontal } from 'react-icons/hi';

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
                  sx={{
                    background: (theme) => alpha(theme.palette.error.main, 0.2),
                    color: (theme) => theme.palette.error.main,
                  }}
                />
              </TableCell>
              <TableCell>
                <CusIconButton
                  sx={{
                    boxShadow: 0,
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  <HiDotsHorizontal />
                </CusIconButton>
              </TableCell>
            </TableRow>
          );
        })}
      />
    </>
  );
}
