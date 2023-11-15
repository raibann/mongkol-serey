import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Avatar,
  Typography,
  alpha,
  SxProps,
  Theme,
  Chip,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Send2, Edit2, Trash, Location } from 'iconsax-react';
import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import theme from 'theme/theme';
import THEME_UTIL from 'utils/theme-util';

export default function ExpenseTable() {
  return (
    <>
      <TableContainer>
        <Table
          sx={{
            minWidth: '100%',
            borderCollapse: 'separate',
            borderSpacing: `0px 12px`,
          }}
        >
          <TableHead>
            <TableRow sx={custStyle.row}>
              <TableCell sx={custStyle.cell}>Invoice Id</TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Event
              </TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Paid
              </TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Due Amount
              </TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Total Expense
              </TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Total Income
              </TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Total Netincome
              </TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Status
              </TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array(3)
              .fill('')
              .map((_, i) => (
                <TableRow
                  key={i}
                  sx={{
                    background: (theme) => theme.palette.common.white,
                    '&> td:first-of-type': {
                      borderTopLeftRadius: '10px',
                      borderBottomLeftRadius: '10px',
                    },
                    '&> td:last-child': {
                      borderTopRightRadius: '10px',
                      borderBottomRightRadius: '10px',
                    },
                  }}
                >
                  <TableCell>{i + 1}</TableCell>
                  <TableCell
                    align='left'
                    sx={{
                      fontWeight: (theme) => theme.typography.fontWeightBold,
                    }}
                  >
                    <Stack direction={'column'}>
                      <Typography variant='body2'>Name</Typography>
                      <Typography
                        variant='caption'
                        noWrap
                        color={'text.secondary'}
                      >
                        Wedding
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align='left'>012121212</TableCell>
                  <TableCell align='left'>012121212</TableCell>
                  <TableCell align='left'>012121212</TableCell>
                  <TableCell align='left'>012121212</TableCell>
                  <TableCell align='left'>012121212</TableCell>
                  <TableCell align='left'>
                    <Chip
                      label='Pending'
                      sx={{
                        background: (theme) =>
                          alpha(theme.palette.error.main, 0.2),
                        color: (theme) => theme.palette.error.main,
                      }}
                    />
                  </TableCell>

                  <TableCell align='right'>
                    <CusIconButton
                      sx={{
                        boxShadow: 0,
                        color: (theme) => theme.palette.text.secondary,
                      }}
                    >
                      <HiDotsHorizontal />
                    </CusIconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

interface ITableStyle {
  row?: SxProps<Theme>;
  cell?: SxProps<Theme>;
}

const custStyle: ITableStyle = {
  row: {
    background: 'transparent',
    '&> th': {
      pt: 0,
      borderBottom: 0,
    },
  },
  cell: {
    fontWeight: (theme) => theme.typography.fontWeightBold,
    whiteSpace: 'nowrap',
  },
};
