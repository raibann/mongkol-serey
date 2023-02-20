import {
  Avatar,
  Box,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { forwardRef } from 'react';
interface IExportReport {
  dateRange: {
    startDate: string;
    endDate: string;
  };
  dashTotal?: IDashboard.IDashboardData;
}

const ExportReport = forwardRef<HTMLInputElement, IExportReport>(
  ({ dateRange, dashTotal }, ref) => {
    const totalIncomes =
      dashTotal?.totalProfits && dashTotal?.totalExpenses
        ? dashTotal?.totalProfits - dashTotal?.totalExpenses
        : 0;
    return (
      <Box ref={ref}>
        <Grid container sx={{ mb: 4 }}>
          <Grid item xs={7}>
            <Stack
              sx={{ height: '100%' }}
              alignItems='flex-start'
              justifyContent='center'
              spacing={0.5}
            >
              <Typography
                fontWeight={'bold'}
                fontFamily='Khmer Busra high'
                fontSize={16}
              >
                មង្គលសិរីម្ហូប&តុរោងការ
              </Typography>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={16}
                >
                  អាស័យដ្ឋាន​៖
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={16}
                >
                  បុរីឈូកវា០៣ ផ្លូវលេខ០៣ ផ្ទះលេខ៨២
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={16}
                >
                  ទូរស័ព្ទលេខ​៖
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={16}
                >
                  +85581951133 | 011951133
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={5}>
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
          </Grid>
        </Grid>
        <Typography textAlign={'center'} fontFamily='Moul' variant='h5'>
          របាយការណ៍
        </Typography>
        <br />
        <Typography
          textAlign={'center'}
          fontFamily='Khmer Busra high'
          variant='subtitle2'
          gutterBottom
        >
          ចាប់ពី ៖ {dateRange.startDate}
        </Typography>
        <Typography
          variant='subtitle2'
          fontFamily='Khmer Busra high'
          textAlign={'center'}
          gutterBottom
        >
          ដល់ទី ៖ {dateRange.endDate}
        </Typography>

        <Table
          sx={{
            '& thead  th, tbody  td': {
              border: '1px solid black',
              borderCollapse: 'collapse',
              fontFamily: 'Khmer Busra high',
              // fontWeight: theme.typography.fontWeightBold,
              py: 1,
              color: 'black',
              fontSize: 16,
            },
            '& thead th': {
              textAlign: 'center',
            },
            '& .css-1b87so5-MuiTableCell-root': {
              color: 'black',
            },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell width={'50%'}>ចំនួនកម្មវិធីសរុប</TableCell>
              <TableCell width={'50%'}>
                {dashTotal?.totalOrders} កម្មវិធី​
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={'50%'}>ចំនួនអតិថិជនសរុប</TableCell>
              <TableCell width={'50%'}>
                {dashTotal?.totalCustomer} អតិថិជន
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={'50%'}>ចំនួនតុសរុប</TableCell>
              <TableCell width={'50%'}>{dashTotal?.totalTables} តុ</TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={'50%'}>ចំណូល</TableCell>
              <TableCell width={'50%'}>
                {Intl.NumberFormat('en', {
                  maximumFractionDigits: 2,
                  style: 'currency',
                  currency: 'USD',
                }).format(dashTotal?.totalProfits || 0)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={'50%'}>ចំណាយ</TableCell>
              <TableCell width={'50%'}>
                {Intl.NumberFormat('en', {
                  maximumFractionDigits: 2,
                  style: 'currency',
                  currency: 'USD',
                }).format(dashTotal?.totalExpenses || 0)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={'50%'}>ចំណេញ</TableCell>
              <TableCell width={'50%'}>
                {Intl.NumberFormat('en', {
                  maximumFractionDigits: 2,
                  style: 'currency',
                  currency: 'USD',
                }).format(totalIncomes)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    );
  }
);

export default ExportReport;
