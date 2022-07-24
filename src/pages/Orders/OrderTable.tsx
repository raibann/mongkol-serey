import { TableRow, TableCell, TableHead } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { GalleryImport, Edit, Printer } from 'iconsax-react';
import theme from 'theme/theme';

export const OrderTableBody = ({
  bookingDate,
  deposit,
  eventDate,
  id,
  name,
  paidBy,
  quantity,
}: {
  id: number;
  name: string;
  eventDate: string;
  quantity: number;
  bookingDate: string;
  deposit: number;
  paidBy: string;
}) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{eventDate}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{bookingDate}</TableCell>
      <TableCell>${deposit}</TableCell>
      <TableCell>{paidBy}</TableCell>
      <TableCell align='center'>
        <CusIconButton color='success' sx={{ p: 0.5, mx: 0.5 }}>
          <GalleryImport size={18} />
        </CusIconButton>
        <CusIconButton color='warning' sx={{ p: 0.5, mx: 0.5 }}>
          <Edit size={18} />
        </CusIconButton>
        <CusIconButton color='primary' sx={{ p: 0.5, mx: 0.5 }}>
          <Printer size={18} />
        </CusIconButton>
      </TableCell>
    </TableRow>
  );
};

export const OrderTableHead = () => {
  return (
    <TableHead>
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
        <TableCell>BOOKING</TableCell>
        <TableCell>DEPOSIT</TableCell>
        <TableCell>PAID BY</TableCell>
        <TableCell width={140} align='center'>
          ACTIONS
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
