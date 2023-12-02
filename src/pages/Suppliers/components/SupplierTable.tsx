import {
  Avatar,
  Stack,
  TableCell,
  TableRow,
  Typography,
  alpha,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTable, { custStyle } from 'components/CusTable';
import { Send2, Edit2, Trash, Location, Facebook } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import theme from 'theme/theme';
import { ROUTE_PATH } from 'utils/route-util';
import THEME_UTIL from 'utils/theme-util';

const headers = ['No', 'Name', 'Phone Number', 'Address', ''];

export default function SupplierTable(props: {
  data: ICustomer.Customer[] | undefined;
}) {
  // Hooks
  const navigate = useNavigate();
  return (
    <>
      <CusTable
        headers={headers}
        body={
          props.data &&
          props.data.map((item) => (
            <TableRow key={item.id} sx={custStyle.bodyRow}>
              <TableCell>{item.id}</TableCell>
              <TableCell
                align='left'
                sx={{
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                }}
              >
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <Avatar
                    alt='Remy Sharp'
                    src={item.image}
                    variant='rounded'
                    sx={{
                      height: 40,
                      width: 40,
                      borderRadius: 2,
                    }}
                  />
                  <Stack direction={'column'}>
                    <Typography variant='body2'>
                      {item.customer_name}
                    </Typography>
                    <Stack
                      direction={'row'}
                      spacing={0.5}
                      alignItems={'center'}
                    >
                      {(item.telegram_name && (
                        <Send2
                          size='14'
                          color={THEME_UTIL.telegramColor}
                          variant='Bold'
                        />
                      )) ||
                        (item.facebook_name && (
                          <Facebook
                            size='14'
                            color={THEME_UTIL.facebookColor}
                            variant='Bold'
                          />
                        ))}

                      <Typography
                        variant='caption'
                        noWrap
                        color={'text.secondary'}
                      >
                        {item.telegram_name || item.facebook_name}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align='left'>{item.contact_number}</TableCell>
              <TableCell align='left'>
                <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                  <Location
                    size='14'
                    color={theme.palette.primary.main}
                    variant='Bold'
                  />
                  <Typography variant='body2' noWrap>
                    {item.province}
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
                    onClick={() =>
                      navigate(
                        ROUTE_PATH.suppliers.updateSupplier.replace(
                          ':id',
                          `${item.id}`
                        )
                      )
                    }
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
          ))
        }
      />
    </>
  );
}
