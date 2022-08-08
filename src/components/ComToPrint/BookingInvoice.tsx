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

const BookingInvoice = React.forwardRef<HTMLInputElement, InputProps>(
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
                  variant='subtitle1'
                >
                  ទូរស័ព្ទលេខ​៖
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
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
                  variant='subtitle1'
                >
                  លេខវិក័យបត្រ៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  00260
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                >
                  អតិថិជន​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  អ្នកស្រី រដ្ឋា ម៉េងអ៊ី
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                >
                  ទូរស័ព្ទលេខ​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
                  081951133
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1.5}>
                <Typography
                  whiteSpace={'nowrap'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                >
                  កម្មវិធី​៖
                </Typography>
                <Typography fontFamily='Khmer Busra high' variant='subtitle1'>
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
          វិក័យបត្រកក់ប្រាក់ កម្មវិធីភ្ជាប់ពាក្យ
        </Typography>
        <Typography
          textAlign='justify'
          fontFamily='Khmer Busra high'
          variant='subtitle1'
          lineHeight={2}
        >
          កញ្ញា <b>រដ្ឋា ម៉េងអ៊ី</b> ភេទ ស្រី កាន់អត្តសញ្ញាណប័ណ្ណលេខ ០៥១៥៦៧៤៣៩
          មានអាស័យដ្ឋានស្ថិតនៅផ្ទះលេខ៨០ ផ្លូវលេខ០៣ បុរីពិភពថ្មីឈូកវ៉ា៣
          ជាអ្នកតំណាងក្រុមហ៊ុន{' '}
          <b>មង្គលសេរីតុរោង&ម្ហូបការ Mungkul Serey Catering Services</b>{' '}
          បានទទួលការកក់ប្រាក់ សេវាកម្មចុងភៅ តុការ កម្មវិធីភ្ជាប់ពាក្យ{' '}
          <b>ចំនួន 15តុ។</b>
        </Typography>
        <Typography
          textAlign={'center'}
          lineHeight={2}
          fontFamily='Khmer Busra high'
          variant='subtitle1'
          fontWeight={'bold'}
        >
          ពី
        </Typography>
        <Typography
          mb={4}
          textAlign='justify'
          lineHeight={2}
          fontFamily='Khmer Busra high'
          variant='subtitle1'
        >
          អតិថិជនឈ្មោះ <b>ច័ន្ទ ណុបវីរក្យា</b> មានទីលំនៅនៅ បុរីប៉េងហ៊ួតច្បារអំពៅ
          ចំនួនទឹកប្រាក់ 200$ <b>(ពីររយដុល្លារអាមេរិកគត់)</b>{' '}
          តាមរយះគណនេយ្យធនាគារ <b>ABA</b> នៅថ្ងៃទី <b>19</b> ខែ <b>កក្កដា</b>{' '}
          ឆ្នាំ <b>2022</b>។
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
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography
                  textAlign={'center'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                  fontWeight={'bold'}
                >
                  បាយថ្ងៃត្រង់
                </Typography>
                <Typography
                  whiteSpace={'pre-line'}
                  fontFamily='Khmer Busra high'
                  variant='subtitle1'
                  lineHeight={1.8}
                >{`1. (ត្រីជប៉ុន ប្រហិតត្រី សាច់គោបំពង មាន់ស្ពៃខ្មៅ គ្រាប់ស្វាយចាន់ទី)
                2. ញាំជើងទាក្រឿងសមុទ្រ
                3. ស្តេកសាច់គោ
                4. ត្រីតុកែចំហុយ
                5. តុងយាំ បង្កង
                6. បាយ បាយឆា
                7. សុភមង្គល`}</Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: 'top', textAlign: 'center' }}>
                15តុ
              </TableCell>
              <TableCell sx={{ verticalAlign: 'top', textAlign: 'center' }}>
                90$/តុ
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Stack spacing={0.5} sx={{ mt: 4 }}>
          <Typography
            variant='subtitle1'
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
              fontSize: 14,
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
                    <Typography
                      fontFamily='Khmer Busra high'
                      variant='subtitle1'
                    >
                      គណនេយ្យ ABA
                    </Typography>
                    <Typography
                      fontFamily='Khmer Busra high'
                      variant='subtitle1'
                    >
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
                    <Typography
                      fontFamily='Khmer Busra high'
                      variant='subtitle1'
                    >
                      (Ratha Mengey)
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction={'row'} justifyContent='space-between'>
                    <Typography
                      fontFamily='Khmer Busra high'
                      variant='subtitle1'
                    >
                      គណនេយ្យ Acleda Toanchet
                    </Typography>
                    <Typography
                      fontFamily='Khmer Busra high'
                      variant='subtitle1'
                    >
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
                    <Typography
                      fontFamily='Khmer Busra high'
                      variant='subtitle1'
                    >
                      គណនេយ្យ True Money
                    </Typography>
                    <Typography
                      fontFamily='Khmer Busra high'
                      variant='subtitle1'
                    >
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
            </li>
          </ol>
        </Stack>
      </Box>
    );
  }
);
export default BookingInvoice;
