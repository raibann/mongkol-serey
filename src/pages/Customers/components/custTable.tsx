import {
  Avatar,
  Stack,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
  alpha,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Edit2, Location, Send2, Trash } from 'iconsax-react';
import theme from 'theme/theme';
import THEME_UTIL from 'utils/theme-util';

export default function CustTable() {
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
              <TableCell sx={custStyle.cell}>No.</TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Name
              </TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Phone Number
              </TableCell>
              <TableCell align='left' sx={custStyle.cell}>
                Address
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
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                      <Avatar
                        alt='Remy Sharp'
                        src='/static/images/avatar/1.jpg'
                        variant='rounded'
                        sx={{
                          height: 40,
                          width: 40,
                          borderRadius: 2,
                        }}
                      />
                      <Stack direction={'column'}>
                        <Typography variant='body2'>Name</Typography>
                        <Stack
                          direction={'row'}
                          spacing={0.5}
                          alignItems={'center'}
                        >
                          <Send2
                            size='14'
                            color={THEME_UTIL.telegramColor}
                            variant='Bold'
                          />
                          <Typography
                            variant='caption'
                            noWrap
                            color={'text.secondary'}
                          >
                            @Raibann
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align='left'>012121212</TableCell>
                  <TableCell align='left'>
                    <Stack
                      direction={'row'}
                      spacing={0.5}
                      alignItems={'center'}
                    >
                      <Location
                        size='14'
                        color={theme.palette.primary.main}
                        variant='Bold'
                      />
                      <Typography variant='body2' noWrap>
                        Phnom Penh
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align='right'>
                    <Stack
                      direction={'row'}
                      spacing={2}
                      alignItems={'center'}
                      justifyContent={'end'}
                    >
                      <CusIconButton
                        sx={{
                          boxShadow: 0,
                          background: (theme) =>
                            alpha(theme.palette.info.main, 0.1),
                        }}
                      >
                        <Edit2
                          size='20'
                          color={theme.palette.info.main}
                          variant='Bold'
                        />
                      </CusIconButton>
                      <CusIconButton
                        sx={{
                          boxShadow: 0,
                          background: (theme) =>
                            alpha(theme.palette.error.main, 0.1),
                        }}
                      >
                        <Trash
                          size='20'
                          color={theme.palette.error.main}
                          variant='Bold'
                        />
                      </CusIconButton>
                    </Stack>
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
