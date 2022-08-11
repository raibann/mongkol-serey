import {
  Avatar,
  Box,
  Grid,
  InputProps,
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

const FinalInvoice = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    // eslint-disable-line max-len
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
                variant='subtitle1'
              >{`មង្គលសិរីម្ហូប&តុរោងការ`}</Typography>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                >
                  អាស័យដ្ឋាន​៖
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                >
                  បុរីឈូកវា០៣ ផ្លូវលេខ០៣ ផ្ទះលេខ៨២
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle2'
                >
                  ទូរស័ព្ទលេខ​៖
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle2'
                >
                  +85581951133 | 011951133
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={5}>
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
                width: 152,
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
                  variant='subtitle2'
                >
                  លេខវិក័យបត្រ៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle2'>
                  00260
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle2'
                >
                  អតិថិជន​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle2'>
                  អ្នកស្រី រដ្ឋា ម៉េងអ៉ី
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle2'
                >
                  ទូរស័ព្ទលេខ​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle2'>
                  081951133
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle2'
                >
                  កម្មវិធី​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle2'>
                  07-08.07.2022
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                >
                  ទីតាំង​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  BoreyChaktomuk City
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
          variant='subtitle1'
        >
          វិក័យបត្រកម្មវិធីរៀបអាពាហ៍ពិពាហ៍
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
            <TableRow>
              <TableCell sx={{ textAlign: 'center' }}>1.</TableCell>
              <TableCell>អាហារពេលល្ងាច៖ Full</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>48តុ</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>160$</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>7680$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: 'center' }}>2.</TableCell>
              <TableCell>បបរពេលព្រឹក Free 1ខ្ទះ</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>1ខ្ទះ</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>250$</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>250$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                តម្លៃសរុប 10,050$
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                បានកក់ 300${' '}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                ប្រាក់នៅសល់ 9750$
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box sx={{ mt: 4 }}>
          <Typography
            fontFamily='Khmer Busra high'
            variant='subtitle1'
            lineHeight={1.8}
          >
            អតិថិជន​អាចទូទាត់ប្រាក់តាមគណនេយ្យធនាគារដូចខាងក្រោម ៖
          </Typography>
          <Grid container columnSpacing={2} rowSpacing={1} sx={{ px: 4 }}>
            <Grid item xs={6}>
              <Stack direction={'row'} justifyContent='space-between'>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  គណនេយ្យ ABA
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  ៖
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction={'row'} spacing={2}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                >
                  000348435
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  (Ratha Mengey)
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack direction={'row'} justifyContent='space-between'>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  គណនេយ្យ Acleda Toanchet
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  ៖
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction={'row'} spacing={2}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                >
                  081951133
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack direction={'row'} justifyContent='space-between'>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  គណនេយ្យ True Money
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  ៖
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack direction={'row'} spacing={2}>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
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
