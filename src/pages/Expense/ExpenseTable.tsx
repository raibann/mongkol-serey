import { TableHead, TableRow, TableCell } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Edit } from 'iconsax-react';

const ExpenseTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>INVOICE</TableCell>
        <TableCell>CUSTOMER NAME</TableCell>
        <TableCell>EVENT DATE</TableCell>
        <TableCell>QUANTITY</TableCell>
        <TableCell>EVENT LOCATION</TableCell>
        <TableCell>BOOKING DATE</TableCell>
        <TableCell>DEPOSIT</TableCell>
        <TableCell>PAID BY</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};
const ExpenseTableBody = ({
  bookingDate,
  deposit,
  eventDate,
  eventLocation,
  id,
  name,
  paidBy,
  quantity,
  social,
  handleOpenDialogs,
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
  handleOpenDialogs: () => void;
}) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{eventDate}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{eventLocation}</TableCell>
      <TableCell>{bookingDate}</TableCell>
      <TableCell>${deposit}</TableCell>
      <TableCell>{paidBy}</TableCell>
      <TableCell>
        <CusIconButton
          color='info'
          sx={{ p: 0.5, mx: 0.5 }}
          onClick={handleOpenDialogs}
        >
          <Edit size={18} />
        </CusIconButton>
      </TableCell>
    </TableRow>
  );
};

export { ExpenseTableBody, ExpenseTableHead };
