import React from 'react';
import {
  TableRow,
  TableCell,
  TableHead,
  Stack,
  Typography,
  Chip,
  Tooltip,
  alpha,
} from '@mui/material';
import moment from 'moment';
import theme from 'theme/theme';
import { FaFacebookSquare, FaTelegram } from 'react-icons/fa';
import { CusIconButton } from 'components/CusIconButton';
import { Edit, MoneySend, Printer } from 'iconsax-react';
import { paidByColor } from 'utils/data-util';
import { AnimatePresence, motion } from 'framer-motion';
import { yellow } from '@mui/material/colors';

const OrderTableBody = ({
  data,
  onPrintClick,
  onEditClick,
  onAddExpenseClick,
}: {
  data: IOrder.Order[] | undefined;
  onPrintClick?: (i: number) => void;
  onEditClick?: (i: number) => void;
  onAddExpenseClick?: (i: number) => void;
}) => {
  return (
    <>
      <AnimatePresence>
        {data?.map((item, i) => (
          <TableRow
            key={item.id}
            component={motion.tr}
            layout
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              background:
                item.finalInvoices.length === 0
                  ? alpha(yellow[400], 0.2)
                  : alpha(theme.palette.success.main, 0.2),
            }}
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              delay: 0.1 + i * 0.025,
              ease: 'easeInOut',
            }}
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
                <b>Event :</b> {moment(item.date).format('DD-MM-YYYY')}
              </Typography>
              <Typography variant='subtitle2' fontWeight={'light'}>
                <b>Books :</b> {moment(item.bookingDate).format('DD-MM-YYYY')}
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
                  ${Intl.NumberFormat().format(item.deposit) || 0}
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align='center'>
              {onEditClick && (
                <Tooltip title='Edit' arrow>
                  <CusIconButton
                    onClick={() => onEditClick(i)}
                    color='info'
                    sx={{ p: 0.5, mx: 0.5 }}
                  >
                    <Edit size={18} />
                  </CusIconButton>
                </Tooltip>
              )}
              {onAddExpenseClick && (
                <Tooltip title='Add Expense' arrow>
                  <CusIconButton
                    onClick={() => onAddExpenseClick(i)}
                    color='info'
                    sx={{ p: 0.5, mx: 0.5 }}
                  >
                    <MoneySend size={18} />
                  </CusIconButton>
                </Tooltip>
              )}
              {onPrintClick && (
                <Tooltip title='Print' arrow>
                  <CusIconButton
                    color='primary'
                    sx={{ p: 0.5, mx: 0.5 }}
                    onClick={() => onPrintClick(i)}
                  >
                    <Printer size={18} />
                  </CusIconButton>
                </Tooltip>
              )}
            </TableCell>
          </TableRow>
        ))}
      </AnimatePresence>
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
