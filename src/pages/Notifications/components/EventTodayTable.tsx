import { TableRow, TableCell, Stack, Typography, alpha } from '@mui/material';
import CusTable, { custStyle } from 'components/CusTable';
import { User, MedalStar, NoteFavorite, Location } from 'iconsax-react';
import React from 'react';
import theme from 'theme/theme';

export default function EventTodayTable() {
  return (
    <CusTable
      headers={[]}
      body={Array(5)
        .fill('')
        .map((_, i) => (
          <TableRow
            key={i}
            sx={{
              ...custStyle.bodyRow,
              background: (theme) => alpha(theme.palette.info.main, 0.1),
            }}
          >
            <TableCell
              align='left'
              sx={{
                fontWeight: (theme) => theme.typography.fontWeightBold,
              }}
            >
              <Stack direction={'column'} alignItems={'center'}>
                <Typography variant='body2' color={theme.palette.error.main}>
                  Wed
                </Typography>
                <Typography
                  variant='h5'
                  color={theme.palette.error.main}
                  fontWeight={'bold'}
                >
                  27
                </Typography>
              </Stack>
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
          </TableRow>
        ))}
    />
  );
}
