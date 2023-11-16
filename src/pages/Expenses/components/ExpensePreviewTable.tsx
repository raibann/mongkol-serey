import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Stack,
  Checkbox,
  Typography,
  TableBody,
  TablePagination,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import theme from 'theme/theme';

const headers = ['Supplier', 'Amount', 'Expense On', 'Status', ''];
const data = [
  {
    id: 1,
    supplier: 'Rabann',
    amount: 100,
    expenseOn: '12-Dec-23',
    status: 'Pending',
  },
];

export default function ExpensePreviewTable() {
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: '100%',
        }}
        size='small'
      >
        <TableHead>
          <TableRow
            sx={{
              '&>.css-nie4sy-MuiTableCell-root': {
                borderBottom: `1px solid ${theme.palette.divider}`,
                borderTop: `1px solid ${theme.palette.divider}`,
              },
              '&>.css-nie4sy-MuiTableCell-root:first-of-type': {
                borderLeft: `1px solid ${theme.palette.divider}`,
              },
              '&>.css-nie4sy-MuiTableCell-root:last-child': {
                borderRight: `1px solid ${theme.palette.divider}`,
              },
            }}
          >
            <TableCell>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Checkbox defaultChecked />
                <Typography variant='subtitle2'>Id</Typography>
              </Stack>
            </TableCell>
            {headers.map((h, i) => {
              return <TableCell key={i}>{h}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d, i) => {
            return (
              <TableRow
                key={d.id}
                sx={{
                  '&>.css-ewdr02-MuiTableCell-root': {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  },
                  '&>.css-ewdr02-MuiTableCell-root:first-of-type': {
                    borderLeft: `1px solid ${theme.palette.divider}`,
                  },
                  '&>.css-ewdr02-MuiTableCell-root:last-child': {
                    borderRight: `1px solid ${theme.palette.divider}`,
                  },
                }}
              >
                <TableCell>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Checkbox defaultChecked />
                    <Typography variant='subtitle2'>{d.id}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{d.supplier}</TableCell>
                <TableCell>{d.amount}</TableCell>
                <TableCell>{d.expenseOn}</TableCell>
                <TableCell>{d.status}</TableCell>
                <TableCell>
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'end'}
                  >
                    <CusIconButton
                      sx={{
                        boxShadow: 0,
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      <HiDotsVertical />
                    </CusIconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        component='div'
        count={100}
        page={1}
        onPageChange={() => {}}
        rowsPerPage={10}
        onRowsPerPageChange={() => {}}
      />
    </TableContainer>
  );
}
