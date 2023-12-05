import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import A4Layout from 'components/PrintLayout/A4Layout';
import React, { forwardRef } from 'react';
const header = ['ល.រ', 'ឈ្មោះទំនិញ', 'ចំនួន', 'ឯកតា'];

const GroceryList = forwardRef<HTMLInputElement, any>(({ value }, ref) => {
  return (
    <A4Layout ref={ref}>
      <Grid container>
        <Grid item xs={12} sx={{ p: 1 }}>
          <Typography
            variant='h5'
            fontFamily='Moul'
            fontWeight={'bold'}
            textAlign={'center'}
          >
            តារាងរៀបចំអីវ៉ាន់ចាប់ហួយ បន្លែ និងត្រីសាច់
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ p: 0.5 }}>
          <Typography variant='subtitle1' fontFamily='Khmer Busra high'>
            ទីតាំងកម្មវិធី ​៖
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ borderLeft: 0, p: 0.5 }}>
          <Typography variant='subtitle1' fontFamily='Khmer Busra high'>
            ថ្ងៃកម្មវិធី ៖
          </Typography>
        </Grid>
        {Array(10)
          .fill('')
          .map((_, i) => (
            <Grid item xs={6} sx={{ borderLeft: 0, p: 0.5 }} key={i}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant='subtitle1' fontWeight={'bold'}>
                    {i + 1}.Category
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {header.map((h, i) => (
                          <TableCell
                            sx={{
                              border: 1,
                              p: 0.5,
                              fontFamily: 'Moul',
                              fontSize: 12,
                            }}
                            key={i}
                            align='center'
                          >
                            {h}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array(20)
                        .fill('')
                        .map((_, idx) => (
                          <TableRow key={idx}>
                            <TableCell
                              sx={{
                                border: 1,
                                p: 0.5,
                                fontSize: 12,
                              }}
                              align='center'
                            >
                              {idx + 1}
                            </TableCell>
                            <TableCell
                              sx={{
                                border: 1,
                                p: 0.5,
                                fontSize: 12,
                              }}
                            >
                              item
                            </TableCell>
                            <TableCell
                              sx={{
                                border: 1,
                                p: 0.5,
                                fontSize: 12,
                              }}
                              align='center'
                            >
                              10
                            </TableCell>
                            <TableCell
                              align='center'
                              sx={{
                                border: 1,
                                p: 0.5,
                                fontSize: 12,
                              }}
                            >
                              kg
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </A4Layout>
  );
});

export default GroceryList;
