import {
  TableRow,
  TableCell,
  TableHead,
  Avatar,
  Stack,
  Typography,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { GalleryImport, Edit, Printer } from 'iconsax-react';
import moment from 'moment';
import ReactToPrint from 'react-to-print';
import theme from 'theme/theme';
import { paidBy } from 'utils/expense-util';
import { pageStyle } from 'utils/print-util';
import { FaFacebookSquare, FaTelegram } from 'react-icons/fa';
export const OrderTableBody = ({
  data,
  onPhotoClick,
  componentRef,
}: {
  data: IOrder.Data[] | undefined;
  onPhotoClick: () => void;
  componentRef: React.MutableRefObject<null>;
}) => {
  const handlePaidby = (value: string) => {
    let temp = [...paidBy];
    temp = temp.filter((el) => el.name === value);
    return temp[0].imageUrl;
  };
  return (
    <>
      {data?.map((item) => (
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          key={item.id}
        >
          <TableCell>{item.id}</TableCell>
          <TableCell>
            <Stack direction={'column'}>
              <Typography variant='subtitle2' fontWeight={'light'}>
                {item.customer.customer_name}
              </Typography>
              {!!item.customer.facebook_name && (
                <Stack direction={'row'} alignItems='center' spacing={1}>
                  <FaFacebookSquare style={{ color: '#4267B2' }} />
                  <Typography variant='subtitle2' fontWeight={'light'}>
                    {item.customer.facebook_name}
                  </Typography>
                </Stack>
              )}
              {!!item.customer.telegram_name && (
                <Stack direction={'row'} alignItems='center' spacing={1}>
                  <FaTelegram style={{ color: '#229ED9' }} />
                  <Typography variant='subtitle2' fontWeight={'light'}>
                    {item.customer.telegram_name}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </TableCell>
          <TableCell>
            <Stack direction={'column'}>
              <Typography variant='subtitle2' fontWeight={'light'}>
                <b>Event:</b> {moment(item.date).format('DD-MM-YYYY')}
              </Typography>
              <Typography variant='subtitle2' fontWeight={'light'}>
                <b>Booked:</b> {moment(item.bookingDate).format('DD-MM-YYYY')}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell>{item.quantity.toLocaleString()} តុ</TableCell>
          <TableCell>
            <Stack direction={'row'} spacing={2} alignItems='center'>
              <Avatar
                variant='rounded'
                src={handlePaidby('Cash')}
                sx={{ width: 24, height: 24, background: 'transparent' }}
              />
              <Typography variant='subtitle2' fontWeight={'light'}>
                $ {item.deposit.toLocaleString()}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell align='center'>
            <CusIconButton
              color='success'
              sx={{ p: 0.5, mx: 0.5 }}
              onClick={onPhotoClick}
            >
              <GalleryImport size={18} />
            </CusIconButton>
            <CusIconButton color='info' sx={{ p: 0.5, mx: 0.5 }}>
              <Edit size={18} />
            </CusIconButton>
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
        <TableCell>INVOICE</TableCell>
        <TableCell>CUSTOMER</TableCell>
        <TableCell>DATE</TableCell>
        <TableCell>QUANTITY</TableCell>
        <TableCell>DEPOSIT</TableCell>
        <TableCell width={140} align='center'>
          ACTIONS
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
