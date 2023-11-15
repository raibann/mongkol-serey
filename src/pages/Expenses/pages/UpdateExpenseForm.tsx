import {
  Checkbox,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { HiDotsVertical } from 'react-icons/hi';

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

export default function UpdateExpenseForm() {
  const theme = useTheme();
  return (
    <>
      <SecondaryPageHeader title='Update Expense' />
      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={8}>
            a
          </Grid>
          <Grid item xs sm={4}>
            a
          </Grid>
        </Grid>
        <TableContainer>
          <Table
            sx={{
              minWidth: '100%',
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  '&>.css-emzb0t-MuiTableCell-root': {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  },
                  '&>.css-emzb0t-MuiTableCell-root:first-of-type': {
                    borderLeft: `1px solid ${theme.palette.divider}`,
                  },
                  '&>.css-emzb0t-MuiTableCell-root:last-child': {
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
                      '&>.css-82xwdw-MuiTableCell-root': {
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        borderTop: `1px solid ${theme.palette.divider}`,
                      },
                      '&>.css-82xwdw-MuiTableCell-root:first-of-type': {
                        borderLeft: `1px solid ${theme.palette.divider}`,
                      },
                      '&>.css-82xwdw-MuiTableCell-root:last-child': {
                        borderRight: `1px solid ${theme.palette.divider}`,
                      },
                    }}
                  >
                    <TableCell>
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={1}
                      >
                        <Checkbox defaultChecked />
                        <Typography variant='subtitle2'>{d.id}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{d.supplier}</TableCell>
                    <TableCell>{d.amount}</TableCell>
                    <TableCell>{d.expenseOn}</TableCell>
                    <TableCell>{d.status}</TableCell>
                    <TableCell align='right'>
                      <CusIconButton
                        sx={{
                          boxShadow: 0,
                          color: (theme) => theme.palette.text.secondary,
                        }}
                      >
                        <HiDotsVertical />
                      </CusIconButton>
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
      </Paper>
    </>
  );
}
