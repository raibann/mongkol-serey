import React from 'react';
import {
  TableRow,
  TableCell,
  Stack,
  Typography,
  Chip,
  Tooltip,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import moment from 'moment';
import { FaFacebookSquare, FaTelegram } from 'react-icons/fa';
import { CusIconButton } from 'components/CusIconButton';
import { Calendar, Edit2, MenuBoard, Printer } from 'iconsax-react';
import { paidByColor } from 'utils/data-util';
import THEME_UTIL from 'utils/theme-util';

const OrderTableBody = ({
  item,
  onPrintClick,
  onEditClick,
}: {
  item: IOrder.Order;
  onPrintClick?: () => void;
  onEditClick?: () => void;
}) => {
  const theme = useTheme();

  return (
    <TableRow
      sx={{
        bgcolor: 'common.white',
        '&> td:first-child': {
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        },
        '&> td:last-child': {
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        },
      }}
    >
      <TableCell>{item.id}</TableCell>
      <TableCell>
        <Stack>
          <Typography
            color={item.customer?.deletedAt !== null ? 'error' : undefined}
            variant='subtitle2'
            fontWeight={'light'}
          >
            {item.customer?.customer_name || 'No Customer'}
          </Typography>
          {(item.customer?.telegram_name && (
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='start'
              spacing={1}
              component={Button}
              onClick={() =>
                window.open(
                  `//t.me/+855${item.customer?.telegram_name
                    .substring(1)
                    .replaceAll(' ', '')}`
                )
              }
              p={0}
              disableRipple
              maxWidth='min-content'
              whiteSpace='nowrap'
            >
              <FaTelegram style={{ color: THEME_UTIL.telegramColor }} />
              <Typography
                color={item.customer?.deletedAt !== null ? 'error' : undefined}
                variant='subtitle2'
                fontWeight='light'
              >
                {item.customer?.telegram_name}
              </Typography>
            </Stack>
          )) ||
            (item.customer?.facebook_name && (
              <Stack direction={'row'} alignItems='center' spacing={1}>
                <FaFacebookSquare style={{ color: THEME_UTIL.facebookColor }} />
                <Typography
                  color={
                    item.customer?.deletedAt !== null ? 'error' : undefined
                  }
                  variant='subtitle2'
                  fontWeight='light'
                >
                  {item.customer?.facebook_name}
                </Typography>
              </Stack>
            ))}
        </Stack>
      </TableCell>
      <TableCell>
        <Tooltip title='Booking Date' placement='left' arrow>
          <Typography
            variant='subtitle2'
            fontWeight='light'
            display='flex'
            alignItems='center'
            columnGap={0.5}
            mb={0.5}
          >
            <Calendar
              variant='Bulk'
              size={20}
              color={theme.palette.info.main}
            />
            {moment(item.date).format('DD-MM-YYYY')}
          </Typography>
        </Tooltip>
        <Tooltip title='Event Date' placement='left' arrow>
          <Typography
            variant='subtitle2'
            fontWeight='light'
            display='flex'
            alignItems='center'
            columnGap={0.5}
          >
            <MenuBoard
              variant='Bulk'
              size={20}
              color={theme.palette.primary.main}
            />
            {moment(item.bookingDate).format('DD-MM-YYYY')}
          </Typography>
        </Tooltip>
      </TableCell>
      <TableCell>
        <Typography variant='body2'>
          {item.quantity || 0}តុ • {item.type}
        </Typography>
      </TableCell>
      <TableCell sx={{ maxWidth: 200 }}>
        <Typography variant='body2' noWrap>
          {item.location}
        </Typography>
      </TableCell>
      <TableCell>
        <Stack direction='row' spacing={0.5} alignItems='center'>
          <Chip
            label={item.paidBy || 'Cash'}
            size='small'
            sx={{
              backgroundColor:
                (paidByColor as any)[item.paidBy || 'Cash'] ||
                theme.palette.info.main,
              color: '#fff',
            }}
          />

          <Typography variant='subtitle2' fontWeight='light'>
            • ${Intl.NumberFormat().format(item.deposit) || 0}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Chip
          label='Complete'
          color='info'
          size='small'
          sx={{
            bgcolor: alpha(theme.palette.info.light, 0.2),
            color: 'info.main',
          }}
        />
      </TableCell>
      <TableCell align='right'>
        <Stack
          direction={'row'}
          justifyContent={'end'}
          alignItems={'center'}
          spacing={1}
        >
          {onEditClick && (
            <CusIconButton
              onClick={onEditClick}
              color='info'
              sx={{
                boxShadow: 0,
                background: (theme) => alpha(theme.palette.info.main, 0.1),
              }}
            >
              <Edit2 size={18} variant='Bold' />
            </CusIconButton>
          )}
          {onPrintClick && (
            <CusIconButton
              color='default'
              sx={{
                boxShadow: 0,
                background: (theme) => theme.palette.background.paper,
              }}
              onClick={onPrintClick}
            >
              <Printer size='18' variant='Bold' />
            </CusIconButton>
          )}
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default React.memo(OrderTableBody);
