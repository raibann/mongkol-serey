import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { IFormQuotation } from 'pages/Quotation';
import { forwardRef } from 'react';
interface IQuotation {
  quotData?: IFormQuotation;
}

const QuotationInvoice = forwardRef<HTMLInputElement, IQuotation>(
  ({ quotData }, ref) => {
    const theme = useTheme();
    return (
      <div ref={ref}>
        <Avatar
          variant='square'
          src={'images/mongkol_serey_logo_1000.png'}
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
        <Typography fontFamily='Moul' noWrap lineHeight={2}>
          ចុងភៅមង្គលសិរី
        </Typography>
        <Typography
          fontFamily='Khmer Busra high'
          lineHeight={2}
          fontWeight='bold'
        >
          081951133 | 011951133
        </Typography>
        <Typography textAlign={'center'} fontFamily='Moul' gutterBottom>
          គម្រោងចំណាយកម្មវិធី{quotData?.title}
        </Typography>
        <Typography textAlign={'center'} fontFamily='Moul' gutterBottom>
          {quotData?.location}
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
              fontSize: 18,
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
                  {data.subTotal}
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
                  {Intl.NumberFormat().format(quotData?.total || 0)}$
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
      </div>
    );
  }
);

export default QuotationInvoice;
