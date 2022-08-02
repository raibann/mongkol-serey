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

const ComponentToPrint = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    // eslint-disable-line max-len
    return (
      <Box ref={ref} sx={{ width: '21cm', height: '29.7cm', bgcolor: 'white' }}>
        <Grid container>
          <Grid item xs={8}>
            <Stack
              sx={{ height: '100%' }}
              alignItems='flex-start'
              justifyContent='center'
            >
              <Typography fontWeight={'bold'}>មង្គលសិរីម្ហូប&តុការ</Typography>
              <Stack direction={'row'} spacing={1.5}>
                <Typography fontWeight={'bold'}>អាស័យដ្ឋាន​ ៖</Typography>
                <Typography fontWeight={'bold'}>
                  បុរីឈូកវា ០៣ ផ្លូវលេខ ០៣ ផ្ទះលេខ ៨២
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography fontWeight={'bold'}>ទូរស័ព្ទលេខ​ ៖</Typography>
                <Typography fontWeight={'bold'}>+85581951133 </Typography>
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
                height: 200,
              }}
            />
            <Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography fontWeight={'bold'}>លេខវិក័យបត្រ ៖</Typography>
                <Typography>០០០០១</Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography>អតិថិជន​ ៖</Typography>
                <Typography>អ្នកស្រី រដ្ឋា ម៉េងអ៉ី </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography>ទូរស័ព្ទលេខ​ ៖</Typography>
                <Typography>0966116714</Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography>កម្មវិធី​ ៖</Typography>
                <Typography>២ៗ មករា ២០២២</Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography>ទីតាំង​ ៖</Typography>
                <Typography>បុរីពិភពថ្មីចំការដូង</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Typography textAlign={'center'} padding={2} fontWeight={'bold'}>
          វិក័យបត្រកម្មវិធីរៀបអាពាហ៍ពិពាហ៍
        </Typography>
        <Table
          sx={{
            '& thead th, tbody td': {
              border: '1px solid black',
              borderCollapse: 'collapse',
              py: 1,
              fontWeight: theme.typography.fontWeightBold,
              textAlign: 'center',
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell width={'10%'}>ល.រ</TableCell>
              <TableCell width={'40%'}>រាយឈ្មោះមុខម្ហូប</TableCell>
              <TableCell width={'15%'}>ចំនួន</TableCell>
              <TableCell width={'20%'}>តម្លៃរាយ</TableCell>
              <TableCell width={'15%'}>សរុបរង</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>item</TableCell>
              <TableCell>item</TableCell>
              <TableCell>item</TableCell>
              <TableCell>item</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>item</TableCell>
              <TableCell>item</TableCell>
              <TableCell>item</TableCell>
              <TableCell>item</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5}>តម្លៃសរុប</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5}>បានកក់</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5}>ប្រាក់នៅសល់</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography
          sx={{
            '&>b': {
              mx: 1.5,
            },
          }}
        >
          អតិថិជន​ត្រូវទូទាត់ប្រាក់សេវាកម្មទាំអស់យូរបំផុតព្រឹកម៉ោង
          <b>១២ថ្ងៃត្រង់</b>
          បន្ទាប់ពីកម្មវិធីរួចកាលពីយប់ក្នុងករនីអតិថិជនទូទាត់ប្រាក់យឺតត្រូវបង់ប្រាក់ពិន័យ
          <b>យឺត១ថ្ងៃ ១០០ដុល្លា</b> ឬ <b>៣ថ្ងៃ ៥០០ដុល្លា</b> ។
        </Typography>
        <Typography>
          អតិថិជន​អាចទូទាត់ប្រាក់តាមគណនេយ្យធនាគារដូចខាងក្រោម ៖
        </Typography>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={6}>
            <Stack direction={'row'} justifyContent='space-between'>
              <Typography>គណនេយ្យ ABA</Typography>
              <Typography>៖</Typography>
            </Stack>
          </Grid>
          <Grid item xs>
            <Stack direction={'row'} spacing={2}>
              <Typography fontWeight={'bold'}>000348435</Typography>
              <Typography>(Ratha Mengey)</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction={'row'} justifyContent='space-between'>
              <Typography>គណនេយ្យ Acleda Toanchet</Typography>
              <Typography>៖</Typography>
            </Stack>
          </Grid>
          <Grid item xs>
            <Stack direction={'row'} spacing={2}>
              <Typography fontWeight={'bold'}>081951133</Typography>
              <Typography>(Ratha Mengey)</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
  }
);
export default ComponentToPrint;
