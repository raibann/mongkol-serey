import {
  Avatar,
  Box,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { IFormQuotation } from 'pages/Orders/Quotations';
import { forwardRef } from 'react';
interface IQuotation {
  quotData?: IFormQuotation;
}

const QuotationInvoice = forwardRef<HTMLInputElement, IQuotation>(
  ({ quotData }, ref) => {
    const theme = useTheme();
    return (
      <Box ref={ref}>
        <Grid container sx={{ mb: 4 }}>
          <Grid item xs={7}>
            <Stack
              sx={{ height: '100%' }}
              alignItems='flex-start'
              // justifyContent='center'
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
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={16}
                >
                  អតិថិជន​
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography fontFamily='Khmer Busra high' fontSize={16}>
                  {`៖ ${quotData?.customerName || '....................'}`}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={16}
                >
                  ទូរស័ព្ទលេខ​
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography fontFamily='Khmer Busra high' fontSize={16}>
                  {`៖ ${quotData?.phoneNumber || '....................'}`}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={16}
                >
                  កម្មវិធី​
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography fontFamily='Khmer Busra high' fontSize={16}>
                  {`៖ ${quotData?.event || '....................'}`}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={16}
                >
                  ទីតាំង
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography fontFamily='Khmer Busra high' fontSize={16}>
                  {`៖ ${quotData?.location || '....................'}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography textAlign={'center'} fontFamily='Moul' gutterBottom>
          គម្រោងចំណាយកម្មវិធី
        </Typography>

        <Table
          sx={{
            '& thead  th, tbody  td': {
              border: '1px solid black',
              borderCollapse: 'collapse',
              fontFamily: 'Khmer Busra high',
              fontWeight: theme.typography.fontWeightBold,
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
          <TableHead>
            <TableRow>
              <TableCell width={'5%'}>
                <Typography
                  textAlign={'center'}
                  fontFamily='Moul'
                  noWrap
                  lineHeight={2}
                >
                  ល.រ
                </Typography>
              </TableCell>
              <TableCell width={'40%'}>
                <Typography
                  textAlign={'center'}
                  fontFamily='Moul'
                  noWrap
                  lineHeight={2}
                >
                  ឈ្មោះសម្ភារៈ សេវាកម្ម
                </Typography>
              </TableCell>
              <TableCell width={'15%'}>
                <Typography
                  textAlign={'center'}
                  fontFamily='Moul'
                  noWrap
                  lineHeight={2}
                >
                  ចំនួន
                </Typography>
              </TableCell>
              <TableCell width={'20%'}>
                <Typography
                  textAlign={'center'}
                  fontFamily='Moul'
                  noWrap
                  lineHeight={2}
                >
                  តម្លៃរាយ
                </Typography>
              </TableCell>
              <TableCell width={'20%'}>
                <Typography
                  textAlign={'center'}
                  fontFamily='Moul'
                  noWrap
                  lineHeight={2}
                >
                  សរុបរង
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotData?.list.map((data, index) => (
              <TableRow key={index}>
                <TableCell sx={{ textAlign: 'center' }}>{index + 1}</TableCell>
                <TableCell>{data.productName}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{data.qty}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{data.price}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {data.subTotal > 0 ? data.subTotal : ''}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                <Typography
                  textAlign={'center'}
                  fontFamily='Moul'
                  noWrap
                  lineHeight={2}
                >
                  ចំណាយសរុបកម្មវិធីទាំងមូល
                </Typography>
                <Typography
                  fontFamily='Khmer Busra high'
                  lineHeight={2}
                  fontWeight='bold'
                  variant='h6'
                  textAlign={'center'}
                >
                  {quotData?.total
                    ? `${Intl.NumberFormat().format(quotData?.total)}$`
                    : '...............................$'}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography
          fontFamily='Moul'
          lineHeight={2}
          mt={2}
          textAlign='center'
          variant='subtitle1'
        >
          ការចំណាយអាចមានការប្រែប្រួលអាស្រ័យលើការបត់បែនក្នុងកម្មវិធីជាក់ស្ដែង។
        </Typography>
      </Box>
    );
  }
);

export default QuotationInvoice;
