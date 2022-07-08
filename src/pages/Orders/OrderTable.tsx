import { TableRow, TableCell, TableHead } from '@mui/material';
import CusIconButton from 'components/CusIconButton';
import { GalleryImport, Edit, Printer } from 'iconsax-react';
import theme from 'theme/theme';

export const OrderTableBody = ({
  bookingDate,
  deposit,
  eventDate,
  eventLocation,
  id,
  name,
  paidBy,
  quantity,
  social,
}: {
  id: number;
  name: string;
  social: string;
  eventDate: string;
  quantity: number;
  eventLocation: string;
  bookingDate: string;
  deposit: number;
  paidBy: string;
}) => {
  return (
    <TableRow
      sx={{
        borderBottom: `solid 1.5px ${theme.palette.divider}`,
      }}
    >
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{social}</TableCell>
      <TableCell>{eventDate}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{eventLocation}</TableCell>
      <TableCell>{bookingDate}</TableCell>
      <TableCell>${deposit}</TableCell>
      <TableCell>{paidBy}</TableCell>
      <TableCell>
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
          },
        }}
      >
        <TableCell>INVOICE ID</TableCell>
        <TableCell>CUSTOMER NAME</TableCell>
        <TableCell>SOCIAL NAME</TableCell>
        <TableCell>EVENT DATE</TableCell>
        <TableCell>QUANTITY</TableCell>
        <TableCell>EVENT LOCATION</TableCell>
        <TableCell>BOOKING DATE</TableCell>
        <TableCell>DEPOSIT</TableCell>
        <TableCell>PAID BY</TableCell>
        <TableCell>ACTIONS</TableCell>
      </TableRow>
    </TableHead>
  );
};
