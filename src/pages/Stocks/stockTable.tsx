import {
  TableRow,
  TableCell,
  TableHead,
  Chip,
  Tooltip,
  Stack,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { Calculator, Edit, Trash } from 'iconsax-react';
import theme from 'theme/theme';
import { paidByColor } from 'utils/expense-util';

export const StockTableBody = ({
  stockList,
  handleOpenDrawer,
  setConfirmDelete,
  setUseStock,
  setOpenStock,
}: {
  stockList: IStock.IStockRespone | undefined;
  handleOpenDrawer: (obj: 'Add' | 'Edit' | '') => void;
  setConfirmDelete: React.Dispatch<React.SetStateAction<number | undefined>>;
  setUseStock: React.Dispatch<
    React.SetStateAction<IStock.IStockDetails | undefined>
  >;
  setOpenStock: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {stockList?.data.map((data, index) => (
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          key={index}
        >
          <TableCell>{index + 1}</TableCell>
          <TableCell>{data.productName}</TableCell>
          <TableCell>{` ${data.quantity} ${data.unit}`}</TableCell>
          <TableCell>${data.price}</TableCell>
          <TableCell>{data.shopName}</TableCell>
          <TableCell>
            <Chip
              label={data.paidBy || 'Cash'}
              size='small'
              sx={{
                backgroundColor:
                  (paidByColor as any)[data.paidBy || 'Cash'] ||
                  theme.palette.info.main,
                color: '#fff',
              }}
            />
          </TableCell>
          <TableCell>{data.note}</TableCell>
          <TableCell>
            <Stack
              direction={'row'}
              justifyContent='flex-end'
              alignItems={'center'}
            >
              <Tooltip title='Edit' arrow>
                <CusIconButton
                  color='info'
                  sx={{ p: 0.5, mx: 0.5 }}
                  onClick={() => {
                    handleOpenDrawer('Edit');
                    let temp = stockList?.data.find(
                      (value) => value.id === data.id
                    );
                    setUseStock(temp);
                  }}
                >
                  <Edit size={18} />
                </CusIconButton>
              </Tooltip>
              <Tooltip title='Use Stocks' arrow>
                <CusIconButton
                  color='info'
                  sx={{ p: 0.5, mx: 0.5 }}
                  onClick={() => {
                    let temp = stockList?.data.find(
                      (value) => value.id === data.id
                    );
                    setUseStock(temp);
                    setOpenStock(true);
                  }}
                >
                  <Calculator size='18' color={theme.palette.warning.main} />
                </CusIconButton>
              </Tooltip>
              <Tooltip title='Delete' arrow>
                <CusIconButton
                  color='info'
                  sx={{ p: 0.5, mx: 0.5 }}
                  onClick={() => {
                    setConfirmDelete(data.id);
                  }}
                >
                  <Trash size='18' color={theme.palette.error.main} />
                </CusIconButton>
              </Tooltip>
            </Stack>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export const StockTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>No.</TableCell>
        <TableCell>PRODUCT NAME</TableCell>
        <TableCell>QUANTITY</TableCell>
        <TableCell>PRICE</TableCell>
        <TableCell>SHOP NAME</TableCell>
        <TableCell>PAID BY</TableCell>
        <TableCell>Other</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};
