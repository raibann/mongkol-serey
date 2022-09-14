import React from 'react';
import {
  TableRow,
  TableCell,
  TableHead,
  Stack,
  Typography,
  Chip,
} from '@mui/material';
import moment from 'moment';
import ReactToPrint from 'react-to-print';
import theme from 'theme/theme';
import { FaFacebookSquare, FaTelegram } from 'react-icons/fa';
import { CusIconButton } from 'components/CusIconButton';
import { Edit, Printer } from 'iconsax-react';
import { pageStyle } from 'utils/print-util';
import { paidByColor } from 'utils/expense-util';

const OrderTableBody = ({
  data,
  componentRef,
  enablePrint,
  onEditClick,
}: {
  data: IOrder.Order[] | undefined;
  componentRef: React.MutableRefObject<null>;
  enablePrint?: boolean;
  onEditClick?: (i: number) => void;
}) => {
  return (
    <>
      {data?.map((item, i) => (
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          key={item.id}
        >
          <TableCell>{item.id}</TableCell>
          <TableCell>
            <Stack direction={'column'}>
              <Typography variant='subtitle2' fontWeight={'light'}>
                {item.customer?.customer_name || 'No Name'}
              </Typography>
              {(!!item.customer?.telegram_name && (
                <Stack direction={'row'} alignItems='center' spacing={1}>
                  <FaTelegram style={{ color: '#229ED9' }} />
                  <Typography variant='subtitle2' fontWeight={'light'}>
                    {item.customer?.telegram_name}
                  </Typography>
                </Stack>
              )) ||
                (!!item.customer?.facebook_name && (
                  <Stack direction={'row'} alignItems='center' spacing={1}>
                    <FaFacebookSquare style={{ color: '#4267B2' }} />
                    <Typography variant='subtitle2' fontWeight={'light'}>
                      {item.customer?.facebook_name}
                    </Typography>
                  </Stack>
                ))}
              {!item.customer && (
                <Typography color='error'>No Customer</Typography>
              )}
            </Stack>
          </TableCell>
          <TableCell width={200}>
            <Typography variant='subtitle2' fontWeight={'light'}>
              <b>Event:</b> {moment(item.date).format('DD-MM-YYYY')}
            </Typography>
            <Typography variant='subtitle2' fontWeight={'light'}>
              <b>Booked:</b> {moment(item.bookingDate).format('DD-MM-YYYY')}
            </Typography>
          </TableCell>
          <TableCell sx={{ maxWidth: 300 }}>
            <Typography noWrap>{item.location}</Typography>
          </TableCell>
          <TableCell>
            {item.quantity || 0}តុ{' '}
            <span style={{ color: theme.palette.info.main }}>|</span>{' '}
            {item.type}
          </TableCell>
          <TableCell>
            <Stack direction={'row'} spacing={2} alignItems='center'>
              <Chip
                label='ABA'
                size='small'
                sx={{
                  backgroundColor:
                    (paidByColor as any)['ABA'] || theme.palette.info.main,
                  color: '#fff',
                }}
              />
              <Typography variant='subtitle2' fontWeight={'light'}>
                ${item.deposit || 0}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell align='center'>
            {onEditClick && (
              <CusIconButton
                onClick={() => onEditClick(i)}
                color='info'
                sx={{ p: 0.5, mx: 0.5 }}
              >
                <Edit size={18} />
              </CusIconButton>
            )}
            {enablePrint && (
              <ReactToPrint
                pageStyle={pageStyle}
                documentTitle='final invoice'
                trigger={() => (
                  <CusIconButton color='primary' sx={{ p: 0.5, mx: 0.5 }}>
                    <Printer size={18} />
                  </CusIconButton>
                )}
                content={() => componentRef.current}
              />
            )}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export const OrderTableHead = () => {
  return (
    <TableHead sx={{ position: 'sticky', top: 0, zIndex: theme.zIndex.appBar }}>
      <TableRow
        sx={{
          backgroundColor: theme.palette.background.paper,
          '&> th': {
            fontWeight: '600',
            color: theme.palette.secondary.main,
            minWidth: 'md',
          },
        }}
      >
        <TableCell>ID</TableCell>
        <TableCell>CUSTOMER</TableCell>
        <TableCell>DATE</TableCell>
        <TableCell width={200}>LOCATION</TableCell>
        <TableCell>QTY | TYPE</TableCell>
        <TableCell align='center'>DEPOSIT</TableCell>
        <TableCell width={140} align='center'>
          ACTIONS
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default React.memo(OrderTableBody);
