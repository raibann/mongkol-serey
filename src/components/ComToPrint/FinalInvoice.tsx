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
} from '@mui/material';
import moment from 'moment';
import React from 'react';
import theme from 'theme/theme';

interface IFinalInvoice {
  order: IOrder.Order;
}

export const eventType = {
  Wedding: 'ពិធីរៀបមង្គលការ',
  Party: 'ពិធីជប់លៀង',
  Birthday: 'ពិធីខួបកំណើត',
};

const FinalInvoice = React.forwardRef<HTMLInputElement, IFinalInvoice>(
  ({ order }, ref) => {
    const formatInvoiceId = (value: string) => {
      const pad = '00000';
      return pad.substring(0, pad.length - value.length) + value;
    };

    const totalPrice = order.finalInvoices?.reduce(
      (init, next) => init + next.price,
      0
    );

    return (
      <Box
        ref={ref}
        sx={{
          width: '21cm',
          height: 'auto',
          bgcolor: 'white',
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Stack
              sx={{ height: '100%' }}
              alignItems='flex-start'
              spacing={0.5}
            >
              <Typography
                fontWeight={'bold'}
                fontFamily='Khmer Busra high'
                fontSize={18}
              >
                មង្គលសិរីម្ហូប&តុរោងការ
              </Typography>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  អាស័យដ្ឋាន​៖
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  បុរីឈូកវា០៣ ផ្លូវលេខ០៣ ផ្ទះលេខ៨២
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  ទូរស័ព្ទលេខ​៖
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  +85581951133 | 011951133
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4}>
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
            <Stack spacing={0.5}>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  fontWeight={'bold'}
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  លេខវិក័យបត្រ៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  {order.id && formatInvoiceId(order.id.toString())}
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  អតិថិជន​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  {order.customer?.customer_name}
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  ទូរស័ព្ទលេខ​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  {order.customer?.contact_number}
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  កម្មវិធី​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  {moment(order.date).format('DD.MM.YYYY')}
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  ទីតាំង​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  {order.location}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Typography
          textAlign={'center'}
          padding={2}
          fontWeight={'bold'}
          fontFamily='Khmer Busra high'
          fontSize={20}
        >
          វិក័យបត្រ {(eventType as any)[`${order.type}`]}
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
              <TableCell width={'5%'}>ល.រ</TableCell>
              <TableCell width={'45%'}>រាយឈ្មោះមុខម្ហូប</TableCell>
              <TableCell width={'15%'}>ចំនួន</TableCell>
              <TableCell width={'15%'}>តម្លៃរាយ</TableCell>
              <TableCell width={'20%'}>សរុបរង</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.finalInvoices?.map((ls, i) => (
              <TableRow key={ls.id}>
                <TableCell sx={{ textAlign: 'center' }}>{i + 1}</TableCell>
                <TableCell>{ls.category}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {ls.quantity}
                  {ls.unit}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {Intl.NumberFormat().format(ls.price / ls.quantity)}$
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {Intl.NumberFormat().format(ls.price)}$
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                តម្លៃសរុប {Intl.NumberFormat().format(totalPrice)}$
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                បានកក់ {Intl.NumberFormat().format(order.deposit)}$
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                ប្រាក់នៅសល់{' '}
                {Intl.NumberFormat().format(totalPrice - order.deposit)}$
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box sx={{ mt: 4 }}>
          <Typography
            fontFamily='Khmer Busra high'
            fontSize={18}
            lineHeight={1.8}
          >
            ១. អតិថិជនត្រូវទូទាត់ប្រាក់សេវាកម្មទាំងអស់យ៉ាងយូរ ត្រឹមម៉ោង
            11ថ្ងៃត្រង់ បន្ទាប់ពីកម្មវិធីរួចកាលពីយប់
            ក្នុងករណីអតិថិជនទូទាត់ប្រាក់យឺតត្រូវបង់ប្រាក់ពិន័យ យឺត1ថ្ងៃ 100$ ឬ
            3ថ្ងៃ 500$។
          </Typography>
          <Typography
            fontFamily='Khmer Busra high'
            fontSize={18}
            lineHeight={1.8}
          >
            ២. អតិថិជន​អាចទូទាត់ប្រាក់តាមគណនេយ្យធនាគារដូចខាងក្រោម ៖
          </Typography>
          <Grid container columnSpacing={2} rowSpacing={1} sx={{ px: 4 }}>
            <Grid item xs={6}>
              <Stack direction={'row'} justifyContent='space-between'>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  គណនេយ្យ ABA
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  ៖
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction={'row'} spacing={2}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  999119199
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  (Ratha Mengey)
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack direction={'row'} justifyContent='space-between'>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  គណនេយ្យ Acleda Toanchet
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  ៖
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction={'row'} spacing={2}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  081951133
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack direction={'row'} justifyContent='space-between'>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  គណនេយ្យ Wing
                </Typography>
                <Typography fontFamily='Khmer Busra high' fontSize={18}>
                  ៖
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction={'row'} spacing={2}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  fontSize={18}
                >
                  081951133
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
);
export default FinalInvoice;
