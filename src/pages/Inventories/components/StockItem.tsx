import {
  Avatar,
  Chip,
  Menu,
  MenuItem,
  Stack,
  TableCell,
  TableRow,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useRequest } from 'ahooks';
import { STOCK_API } from 'api/stock';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

const StockItem = ({
  stock: e,
  refresh,
}: {
  stock: IStock.Stock;
  refresh: () => void;
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openActionMenu = Boolean(anchorEl);

  // Methods
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Requests
  const { run: runDelete } = useRequest(STOCK_API.deleteStock, {
    manual: true,
    onSuccess: () => {
      refresh();
      handleClose();
    },
  });

  return (
    <>
      <Menu anchorEl={anchorEl} open={openActionMenu} onClose={handleClose}>
        <MenuItem
          onClick={() =>
            navigate(`${ROUTE_PATH.inventories.addInventory}?stockId=${e.id}`)
          }
        >
          Add Stock
        </MenuItem>
        <MenuItem
          onClick={() =>
            navigate(ROUTE_PATH.inventories.editInventory.replace(':id', e.id!))
          }
        >
          Update
        </MenuItem>
        <MenuItem
          onClick={() => {
            runDelete({ id: e.id });
          }}
        >
          Delete
        </MenuItem>
      </Menu>
      <TableRow
        key={e.id}
        sx={{
          bgcolor: 'common.white',
          '&> td:first-of-type': {
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          },
          '&> td:last-child': {
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
          },
        }}
      >
        <TableCell>{e.id}</TableCell>
        <TableCell>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Avatar src={e.product.images} variant='rounded'>
              {e.product.name.slice(0, 1)}
            </Avatar>
            <Typography variant='body2'>{e.product.name}</Typography>
          </Stack>
        </TableCell>
        <TableCell>{e.product.category.name}</TableCell>
        <TableCell>
          <Typography variant='body2'>{e.unitPrice ?? 0}$</Typography>
        </TableCell>
        <TableCell>
          {e.unitQty}
          {e.unit?.name}
        </TableCell>
        <TableCell>
          <Typography variant='body2'>{e.totalPrice.toFixed(2)}$</Typography>
          {/* <Typography variant='body2'>{e.defaultValueKh}៛</Typography> */}
        </TableCell>
        <TableCell>
          <Chip
            label='Active'
            color='info'
            size='small'
            sx={{
              bgcolor: alpha(theme.palette.info.light, 0.2),
              color: 'info.main',
            }}
          />
        </TableCell>
        <TableCell>
          <CusIconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <BsThreeDots />
          </CusIconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default StockItem;
