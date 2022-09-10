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
import React from 'react';
import theme from 'theme/theme';
import { IFinalInvoice } from 'utils/print-util';

const FinalInvoice = React.forwardRef<HTMLInputElement, IFinalInvoice>(
  (props, ref) => {
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
              // justifyContent='center'
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
                  {props.orderInfo.invoiceId}
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
                  {props.customerInfo.name}
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
                  {props.customerInfo?.phone}
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
                  {props.orderInfo?.eventDate}
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
                  {props.orderInfo?.eventLocation}
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
          វិក័យបត្រ{props.orderInfo?.eventType}
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
            {props.orderInfo.listOrdered?.map((ls, i) => (
              <TableRow key={ls.id}>
                <TableCell sx={{ textAlign: 'center' }}>{ls.id}</TableCell>
                <TableCell>អាហារពេលល្ងាច៖ Full</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {ls.quantity.value}
                  {ls.quantity.units}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{ls.price}$</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {ls.subTotal}$
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                តម្លៃសរុប {props.orderInfo.totalPrice}$
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                បានកក់ {props.orderInfo.deposit}$
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                ប្រាក់នៅសល់ {props.orderInfo.remainMoney}$
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
            អតិថិជន​អាចទូទាត់ប្រាក់តាមគណនេយ្យធនាគារដូចខាងក្រោម ៖
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
                  000348435
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
                  គណនេយ្យ True Money
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
