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
import { Edit, MoneySend, Printer } from 'iconsax-react';
import { pageStyle } from 'utils/print-util';
import { paidByColor } from 'utils/expense-util';

const OrderTableBody = ({
  data,
  componentRef,
  enablePrint,
  onEditClick,
  onAddExpenseClick,
}: {
  data: IOrder.Order[] | undefined;
  componentRef?: React.MutableRefObject<null>;
  enablePrint?: boolean;
  onEditClick?: (i: number) => void;
  onAddExpenseClick?: (i: number) => void;
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
                {item.customer?.customer_name || 'No Customer'}
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
            </Stack>
          </TableCell>
          <TableCell>
            <Typography variant='subtitle2' fontWeight={'light'}>
              <b>Event:</b> {moment(item.date).format('DD-MM-YYYY')}
            </Typography>
            <Typography variant='subtitle2' fontWeight={'light'}>
              <b>Books:</b> {moment(item.bookingDate).format('DD-MM-YYYY')}
            </Typography>
          </TableCell>
          <TableCell sx={{ maxWidth: 200 }}>
            <Typography noWrap>{item.location}</Typography>
          </TableCell>
          <TableCell>{item.quantity || 0}តុ </TableCell>
          <TableCell>{item.type}</TableCell>
          <TableCell>
            <Stack direction={'row'} spacing={2} alignItems='center'>
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
            {onAddExpenseClick && (
              <CusIconButton
                onClick={() => onAddExpenseClick(i)}
                color='info'
                sx={{ p: 0.5, mx: 0.5 }}
              >
                <MoneySend size={18} />
              </CusIconButton>
            )}
            {enablePrint && componentRef?.current && (
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

export const OrderTableHead = ({
  showAction = true,
}: {
  showAction?: boolean;
}) => {
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
        <TableCell width={200}>DATE</TableCell>
        <TableCell>LOCATION</TableCell>
        <TableCell>QTY</TableCell>
        <TableCell>TYPE</TableCell>
        <TableCell>DEPOSIT</TableCell>
        <TableCell width={showAction ? 140 : 'auto'} align='center'>
          {showAction && 'ACTIONS'}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default React.memo(OrderTableBody);
