import { TableRow, TableCell, TableHead } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { GalleryImport, Edit, Printer } from 'iconsax-react';
import ReactToPrint from 'react-to-print';
import theme from 'theme/theme';
import { pageStyle } from 'utils/print-util';

export const OrderTableBody = ({
  bookingDate,
  deposit,
  eventDate,
  id,
  name,
  paidBy,
  quantity,
  onPhotoClick,
  componentRef,
}: {
  id: number;
  name: string;
  eventDate: string;
  quantity: number;
  bookingDate: string;
  deposit: number;
  paidBy: string;
  onPhotoClick: () => void;
  componentRef: React.MutableRefObject<null>;
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
        <CusIconButton
          color='success'
          sx={{ p: 0.5, mx: 0.5 }}
          onClick={onPhotoClick}
        >
          <GalleryImport size={18} />
        </CusIconButton>
        <CusIconButton color='warning' sx={{ p: 0.5, mx: 0.5 }}>
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
        <TableCell>CUSTOMER NAME</TableCell>
        <TableCell>EVENT DATE</TableCell>
        <TableCell>QUANTITY</TableCell>
        <TableCell>BOOKING DATE</TableCell>
        <TableCell>DEPOSIT</TableCell>
        <TableCell>PAID BY</TableCell>
        <TableCell width={140} align='center'>
          ACTIONS
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
