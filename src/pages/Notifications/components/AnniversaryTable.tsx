import {
  TableRow,
  TableCell,
  Stack,
  Typography,
  useTheme,
  Box,
  alpha,
  Button,
} from '@mui/material';
import CusTable, { custStyle } from 'components/CusTable';
import { User, MedalStar, NoteFavorite, Location } from 'iconsax-react';

export default function AnniversaryTable() {
  const theme = useTheme();
  return (
    <>
      <CusTable
        headers={[]}
        body={Array(5)
          .fill('')
          .map((_, i) => (
            <TableRow key={i} sx={custStyle.bodyRow}>
              <TableCell
                align='center'
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                  width: 150,
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50vh',
                    border: `2px solid ${theme.palette.primary.main}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: (theme) =>
                      alpha(theme.palette.primary.main, 0.1),
                  }}
                >
                  <Stack direction={'column'} alignItems={'center'}>
                    <Typography
                      variant='h5'
                      color={theme.palette.primary.main}
                      fontWeight={'bold'}
                    >
                      1
                    </Typography>
                    <Typography
                      variant='body2'
                      color={theme.palette.primary.main}
                    >
                      Year
                    </Typography>
                  </Stack>
                </Box>
              </TableCell>
              <TableCell align='left'>
                <Stack direction={'column'} alignItems={'start'} spacing={1}>
                  <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                    <User
                      size='14'
                      color={theme.palette.primary.main}
                      variant='Bold'
                    />
                    <Typography variant='subtitle2' fontWeight={'bold'} noWrap>
                      Customer Name
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                    <Location
                      size='14'
                      color={theme.palette.primary.main}
                      variant='Bold'
                    />
                    <Typography variant='body2' noWrap>
                      Phnom Penh
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align='left'>
                <Stack direction={'column'} alignItems={'start'} spacing={1}>
                  <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                    <MedalStar
                      size='14'
                      color={theme.palette.info.main}
                      variant='Bold'
                    />

                    <Typography variant='body2' noWrap>
                      Wedding
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                    <NoteFavorite
                      size='14'
                      color={theme.palette.info.main}
                      variant='Bold'
                    />
                    <Typography variant='body2' noWrap>
                      10 tables
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align='right'>
                <Button
                  variant='contained'
                  color='secondary'
                  sx={{ whiteSpace: 'nowrap', textTransform: 'capitalize' }}
                >
                  Send Gift
                </Button>
              </TableCell>
            </TableRow>
          ))}
      />
    </>
  );
}
