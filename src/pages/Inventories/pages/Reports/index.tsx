import {
  Button,
  Chip,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTable from 'components/CusTable';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, Box, Convert3DCube, SearchNormal1 } from 'iconsax-react';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function InventoryReport() {
  // Hooks
  const { isMdDown } = useResponsive();
  const navigate = useNavigate();
  const theme = useTheme();

  // States
  const [searchProduct, setSearchProduct] = useState('');

  return (
    <>
      <PageHeader pageTitle='Inventory Report'>
        <CusTextField
          placeholder='Search...'
          size='small'
          sx={{ bgcolor: 'common.white', mr: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchNormal1 size={18} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={() => navigate(ROUTE_PATH.inventories.addInventory)}
          variant='contained'
          size='small'
          disableElevation
          sx={{
            color: 'common.white',
            minWidth: 0,
          }}
        >
          <Add />
        </Button>
      </PageHeader>

      <Container maxWidth='xl'>
        <CusTable
          headers={[
            'ID',
            'Product Name',
            'Category',
            'Unit Price',
            'In Stock',
            'Out Stock',
            'Total Value',
            'Status',
            '',
          ]}
          body={
            <TableRow
              sx={{
                background: (theme) => theme.palette.common.white,
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
              <TableCell>1</TableCell>
              <TableCell>Master Chef</TableCell>
              <TableCell>Grocery</TableCell>
              <TableCell>3.2$</TableCell>
              <TableCell>10ដប</TableCell>
              <TableCell>5ដប</TableCell>
              <TableCell>
                <Typography variant='body2'>{`${(3.2 * 5).toFixed(
                  2
                )}$`}</Typography>
                <Typography variant='body2'>{`${3.2 * 5 * 4100}៛`}</Typography>
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
                <CusIconButton>
                  <BsThreeDots />
                </CusIconButton>
              </TableCell>
            </TableRow>
          }
        />
      </Container>
    </>
  );
}
