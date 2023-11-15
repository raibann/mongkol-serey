import {
  Avatar,
  Stack,
  TableCell,
  TableRow,
  Typography,
  alpha,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTable, { custStyle } from 'components/CusTable/CusTable';
import { Edit2, Location, Send2, Trash } from 'iconsax-react';
import theme from 'theme/theme';
import THEME_UTIL from 'utils/theme-util';
const headers = ['No', 'Name', 'Phone Number', 'Address', ''];

export default function CustTable() {
  return (
    <CusTable
      headers={headers}
      body={Array(3)
        .fill('')
        .map((_, i) => (
          <TableRow key={i} sx={custStyle.bodyRow}>
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
                  src='https://i.pinimg.com/564x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg'
                  variant='rounded'
                  sx={{
                    height: 40,
                    width: 40,
                    borderRadius: 2,
                  }}
                />
                <Stack direction={'column'}>
                  <Typography variant='body2'>Name</Typography>
                  <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
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
                    background: (theme) => alpha(theme.palette.info.main, 0.1),
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
                    background: (theme) => alpha(theme.palette.error.main, 0.1),
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
    />
  );
}
