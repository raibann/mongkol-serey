import {
  InputAdornment,
  Button,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  alpha,
  SxProps,
  Theme,
  useTheme,
  Typography,
  Avatar,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import {
  SearchNormal1,
  Add,
  Edit2,
  Trash,
  Location,
  Send2,
} from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import THEME_UTIL from 'utils/theme-util';

export default function Suppliers() {
  /* Hooks */
  const { isSmDown } = useResponsive();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <PageHeader pageTitle='Suppliers'>
        <CusTextField
          fullWidth={isSmDown ? true : false}
          placeholder='Search...'
          size='small'
          sx={{ bgcolor: 'common.white', mr: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchNormal1 size={18} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={() => navigate(ROUTE_PATH.suppliers.createNewSupplier)}
          variant='contained'
          size='small'
          disableElevation
          sx={{
            color: 'common.white',
            minWidth: 0,
          }}
        >
          <Add />
        </Button>
      </PageHeader>
      <Container maxWidth='xl'>
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
                      <Stack
                        direction={'row'}
                        spacing={2}
                        alignItems={'center'}
                      >
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
      </Container>
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
    },
  },
  cell: {
    fontWeight: (theme) => theme.typography.fontWeightBold,
    whiteSpace: 'nowrap',
  },
};
