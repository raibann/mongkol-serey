import {
  Avatar,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import A4Layout from 'components/PrintLayout/A4Layout';
import { forwardRef } from 'react';

const headers = ['Supplier', 'Amount', 'Expense On'];
const data = [
  {
    id: 1,
    supplier: 'Rabann',
    amount: 100,
    expenseOn: '12-Dec-23',
  },
];
const ExpenseInvoice = forwardRef<HTMLInputElement, any>(({ value }, ref) => {
  return (
    <A4Layout ref={ref}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                លេខវិក័យបត្រ
              </Typography>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                ប្រាក់បានបង់
              </Typography>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                ប្រាក់នៅខ្វះ
              </Typography>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                ការចំណាយសរុប
              </Typography>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                ចំណូលសរុប
              </Typography>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                ចំនេញសរុប
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant='subtitle2'>: Invoice Id</Typography>
              <Typography variant='subtitle2'>: Total Expense</Typography>
              <Typography variant='subtitle2'>: Total Income</Typography>
              <Typography variant='subtitle2'>: Tolal Netincome</Typography>
              <Typography variant='subtitle2'>: Tolal Netincome</Typography>
              <Typography variant='subtitle2'>: Tolal Netincome</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Avatar
            variant='square'
            src={'/images/mongkol_serey_logo_1000.png'}
            alt='logo'
            imgProps={{
              sx: {
                objectFit: 'contain',
              },
            }}
            sx={{
              mx: 'auto',
              width: 167,
              height: 'auto',
              my: 2,
            }}
          />
          <Grid container>
            <Grid item xs={4}>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                ឈ្មោះអតិថិជន
              </Typography>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                កម្មវិធី​
              </Typography>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                កាលបរិច្ឆេទ
              </Typography>
              <Typography variant='subtitle2' fontWeight={'bold'}>
                ទីតាំងកម្មវិធី
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant='subtitle2'>Customer Name</Typography>
              <Typography variant='subtitle2'>Type</Typography>
              <Typography variant='subtitle2'>Date</Typography>
              <Typography variant='subtitle2'>Location</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} py={1}>
          <Typography
            textAlign={'center'}
            variant='subtitle1'
            fontWeight={'bold'}
          >
            ការចំណាយ
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Table
            sx={{
              minWidth: '100%',
            }}
            size='small'
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: 'bold', border: 1, fontSize: 12 }}
                  align='center'
                >
                  No.
                </TableCell>
                {headers.map((h, i) => {
                  return (
                    <TableCell
                      key={i}
                      sx={{ fontWeight: 'bold', border: 1, fontSize: 12 }}
                    >
                      {h}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d, i) => {
                return (
                  <TableRow key={d.id}>
                    <TableCell
                      sx={{ border: 1, width: 90, fontSize: 12 }}
                      align='center'
                    >
                      {d.id}
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 12 }}>
                      {d.supplier}
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 12 }}>
                      {d.amount}
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 12 }}>
                      {d.expenseOn}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </A4Layout>
  );
});

export default ExpenseInvoice;
