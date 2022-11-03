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
import { eventType } from './FinalInvoice';
// import { IBookingInvoice } from 'utils/print-util';

interface IBookingInvoice {
  order: IOrder.Order;
}

const BookingInvoice = React.forwardRef<HTMLInputElement, IBookingInvoice>(
  ({ order }, ref) => {
    const getMonth = moment(order.bookingDate).format('MMMM');
    const getDay = moment(order.bookingDate).format('DD');
    const getYear = moment(order.bookingDate).format('YYYY');
    const generateMonth = (month: string) => {
      switch (month) {
        case 'January':
          return 'មករា';
        case 'February':
          return 'កុម្ភៈ';
        case 'March':
          return 'មិនា';
        case 'April':
          return 'មេសា';
        case 'May':
          return 'ឧសភា';
        case 'June':
          return 'មិថុនា';
        case 'July':
          return 'កក្កដា';
        case 'August':
          return 'សីហា';
        case 'September':
          return 'កញ្ញា';
        case 'October':
          return 'តុលា';
        case 'November':
          return 'វិច្ឆិកា';
        case 'December':
          return 'ធ្នូ';
        default:
          return;
      }
    };

    const formatInvoiceId = (value: string) => {
      const pad = '00000';
      return pad.substring(0, pad.length - value.length) + value;
    };

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
              src={'images/mongkol_serey_logo_1000.png'}
              alt='logo'
              imgProps={{
                sx: {
                  objectFit: 'contain',
                },
              }}
              sx={{
                mx: 'auto',
                width: 200,
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
                  {order.id && formatInvoiceId(order.id?.toString())}
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
          វិក័យបត្រកក់ប្រាក់ {(eventType as any)[`${order.type}`]}
        </Typography>
        <Typography
          textAlign='justify'
          fontFamily='Khmer Busra high'
          fontSize={18}
          lineHeight={2}
        >
          កញ្ញា <b>រដ្ឋា ម៉េងអ៊ី</b> ភេទ ស្រី កាន់អត្តសញ្ញាណប័ណ្ណលេខ ០៥១៥៦៧៤៣៩
          មានអាស័យដ្ឋានស្ថិតនៅផ្ទះលេខ៨០ ផ្លូវលេខ០៣ បុរីពិភពថ្មីឈូកវ៉ា៣
          ជាអ្នកតំណាងក្រុមហ៊ុន{' '}
          <b>មង្គលសេរីតុរោង&ម្ហូបការ Mungkul Serey Catering Services</b>{' '}
          បានទទួលការកក់ប្រាក់ សេវាកម្មចុងភៅ តុការ{' '}
          {(eventType as any)[`${order.type}`]} <b>ចំនួន {order.quantity}តុ។</b>
        </Typography>
        <Typography
          textAlign={'center'}
          lineHeight={2}
          fontFamily='Khmer Busra high'
          fontSize={18}
          fontWeight={'bold'}
        >
          ពី
        </Typography>
        <Typography
          mb={4}
          textAlign='justify'
          lineHeight={2}
          fontFamily='Khmer Busra high'
          fontSize={18}
        >
          អតិថិជនឈ្មោះ{' '}
          <b>
            {order.customer === null
              ? 'No Cutomer'
              : order.customer.customer_name}
          </b>{' '}
          {order.customer !== null && (
            <>
              មានទីលំនៅ
              {order.customer.house
                ? `ផ្ទះលេខ៖${order.customer.house}`
                : ''}{' '}
              {order.customer.street ? `ផ្លូវលេខ៖${order.customer.street}` : ''}{' '}
              {order.customer.location} {order.customer.commune}{' '}
              {order.customer.district} {order.customer.province}{' '}
            </>
          )}
          ចំនួនទឹកប្រាក់ ${Intl.NumberFormat().format(order.deposit)}{' '}
          {order.amountInKhmer && <b>({order.amountInKhmer})</b>}{' '}
          {order.paidBy !== 'Cash'
            ? 'តាមរយៈគណនេយ្យធនាគារ' + order.paidBy
            : 'តាមរយៈក្រដាស់ប្រាក់'}{' '}
          នៅថ្ងៃទី <b>{getDay}</b> ខែ <b>{generateMonth(getMonth)}</b> ឆ្នាំ{' '}
          <b>{getYear}</b>។
        </Typography>
        <Table
          sx={{
            '& thead th, tbody td': {
              border: '1px solid black',
              borderCollapse: 'collapse',
              py: 1,
              fontWeight: theme.typography.fontWeightBold,
              fontFamily: 'Khmer Busra high',
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
              <TableCell width={'65%'}>រាយឈ្មោះមុខម្ហូប</TableCell>
              <TableCell width={'15%'}>ចំនួន</TableCell>
              <TableCell width={'15%'}>តម្លៃរាយ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.eventPackages?.map((data) => (
              <TableRow key={data.id}>
                <TableCell></TableCell>
                <TableCell>
                  <Typography
                    textAlign={'center'}
                    fontFamily='Khmer Busra high'
                    fontSize={18}
                    fontWeight={'bold'}
                  >
                    {data.category}
                  </Typography>
                  <Typography
                    whiteSpace={'pre-line'}
                    fontFamily='Khmer Busra high'
                    fontSize={18}
                    lineHeight={1.8}
                    component='div'
                  >
                    <ol
                      style={{
                        listStyleType: 'khmer',
                        fontFamily: 'Khmer Busra high',
                        fontSize: 18,
                      }}
                    >
                      {data?.packageItems?.map((ls, i) => (
                        <li key={i}>{ls.title}</li>
                      ))}
                    </ol>
                  </Typography>
                </TableCell>
                <TableCell sx={{ verticalAlign: 'top', textAlign: 'center' }}>
                  <Typography
                    textAlign={'center'}
                    fontFamily='Khmer Busra high'
                    fontSize={18}
                    fontWeight={'bold'}
                  >
                    {data.quantity !== 0 ? `${data.quantity}${data.unit}` : ''}
                  </Typography>
                </TableCell>
                <TableCell sx={{ verticalAlign: 'top', textAlign: 'center' }}>
                  <Typography
                    textAlign={'center'}
                    fontFamily='Khmer Busra high'
                    fontSize={18}
                    fontWeight={'bold'}
                  >
                    {data.price > 0 && data.quantity > 0
                      ? Intl.NumberFormat().format(data.price / data.quantity)
                      : ''}
                    {data.price > 0 && `$/${data.unit}`}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack spacing={0.5} sx={{ mt: 4 }}>
          <Typography
            fontSize={20}
            textAlign='justify'
            fontWeight={'bold'}
            fontFamily='Khmer Busra high'
            mb={2}
          >
            គោលការណ៍របស់ក្រុមហ៊ុន មង្គលសេរីតុរោង&ម្ហូបការ Mungkul Serey Catering
            Service
          </Typography>
          <ol
            style={{
              listStyleType: 'khmer',
              fontFamily: 'Khmer Busra high',
              fontSize: 18,
            }}
          >
            <li style={{ lineHeight: 2, textAlign: 'justify' }}>
              សម្រាប់អតិថិជនដែលបានកក់ប្រាក់រួចមិនអាចទាមទាប្រាក់កក់ត្រលប់ទៅវិញទេប្រសិនបើចង់
              CANCEL
            </li>
            <li style={{ lineHeight: 2, textAlign: 'justify' }}>
              ក្នុងករណីភ្ញៀវចង់ CANCEL
              សូមជូនដំណឹងដល់ក្រុមហ៊ុនរយះពេលមុនមួយខែប្រសិនបើភ្ញៀវ CANCEL
              មុនរយះពេលក្រោមមួយខែ
              ភ្ញៀវត្រូវទូទាត់ប្រាក់សងការកម្មង់អីវ៉ាន់ត្រៀមសម្រាប់កម្មវិធីខ្លួនចំនួន
              50% នៃតម្លៃម្ហូបសរុប ។
            </li>
            <li style={{ lineHeight: 2, textAlign: 'justify' }}>
              ករណីមានអំពើហិង្សាឬគ្រោះហានិភ័យណាមួយក្នុងកំឡុងពេលកម្មវិធីរាល់សម្ភារះដែលបាក់បែក
              ឬ ខូចខាត ឬ ភ្ញៀវត្រូវសងទៅតាមតម្លៃជាក់ស្តែងរបស់ក្រុមហ៊ុន ។
            </li>
            <li style={{ lineHeight: 2, textAlign: 'justify' }}>
              ចុងភៅមិនទទួលខុសត្រូវលើកាកសំណល់សម្រាមបន្ទាប់ពីកម្មវិធីរួចទេម្ចាស់កម្មវិធីត្រូវធ្វើការសំអាតដោយយក
              ទៅចោលដោយខ្លួនឯងមិនថាទីតាំងកម្មវិធីនៅក្នុងផ្ទះ ឬនៅក្នុងបុរី
              ឬនៅក្នុងហាង។
            </li>
            <li style={{ lineHeight: 2, textAlign: 'justify' }}>
              អតិថិជនត្រូវទូទាត់ប្រាក់សេវាកម្មទាំងអស់យូរបំផុតព្រឹកម៉ោង{' '}
              <b>១១ថ្ងៃត្រង់</b>{' '}
              បន្ទាប់ពីកម្មវិធីរួចកាលពីយប់ក្នុងករណីអតិថិជនទូទាត់ប្រាក់យឺតត្រូវបង់ប្រាក់ពិន័យ{' '}
              <b>យឺត១ថ្ងៃ ១០០$</b> ឬ <b>៣ថ្ងៃ ៥០០$</b>។
            </li>
            <li style={{ lineHeight: 2, textAlign: 'justify' }}>
              អតិថិជន​អាចទូទាត់ប្រាក់តាមគណនេយ្យធនាគារដូចខាងក្រោម ៖
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
            </li>
          </ol>
        </Stack>
      </Box>
    );
  }
);
export default BookingInvoice;
