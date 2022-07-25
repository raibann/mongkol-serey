import { TableRow, TableCell, TableHead } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Edit } from 'iconsax-react';
import { IStockData } from 'utils/stock-util';

export const StockTableBody = ({
  props,
  index,
  onEdit,
}: {
  props: IStockData;
  index: number;
  onEdit: (obj: 'Add' | 'Edit' | '') => void;
}) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{props.cateName}</TableCell>
      <TableCell>{props.productName}</TableCell>
      <TableCell>{` ${props.quantity.value} ${props.quantity.unit}`}</TableCell>
      <TableCell>{`${props.price.currency} ${props.price.value}`}</TableCell>
      <TableCell>{props.shopName}</TableCell>
      <TableCell>{props.paidBy}</TableCell>
      <TableCell>
        {`${props.totalPrice.currency} ${props.totalPrice.value}`}
      </TableCell>
      <TableCell>{`${props.inStock.value} ${props.inStock.unit}`}</TableCell>
      <TableCell>
        <CusIconButton
          color='info'
          sx={{ p: 0.5, mx: 0.5 }}
          onClick={() => onEdit('Edit')}
        >
          <Edit size={18} />
        </CusIconButton>
      </TableCell>
    </TableRow>
  );
};

export const StockTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>No.</TableCell>
        <TableCell>CATEGORY NAME</TableCell>
        <TableCell>PRODUCT NAME</TableCell>
        <TableCell>QUANTITY</TableCell>
        <TableCell>PRICE</TableCell>
        <TableCell>SHOP NAME</TableCell>
        <TableCell>PAID BY</TableCell>
        <TableCell>TOTAL PRICE</TableCell>
        <TableCell>IN STOCKS</TableCell>
        <TableCell>ACTIONS</TableCell>
      </TableRow>
    </TableHead>
  );
};
