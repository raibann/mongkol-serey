import {
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import CusTable from 'components/CusTable/CusTable';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, BoxAdd, SearchNormal1 } from 'iconsax-react';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import theme from 'theme/theme';

const Stocks = () => {
  // Hooks
  const { isMdDown } = useResponsive();
  const theme = useTheme();

  // States
  const [searchProduct, setSearchProduct] = useState('');

  return (
    <>
      <PageHeader pageTitle='Inventory'>
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

      <CusTable
        sx={{
          container: {
            p: 3,
            pt: 0,
          },
        }}
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
              <Typography variant='body2'>{`$ ${3.2 * 5}`}</Typography>
              <Typography variant='body2'>{`៛ ${3.2 * 5 * 4100}`}</Typography>
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
              <IconButton>
                <BsThreeDots size={16} />
              </IconButton>
            </TableCell>
          </TableRow>
        }
      />
    </>
  );
};

export default Stocks;
