import {
  InputAdornment,
  Button,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  alpha,
  SxProps,
  Theme,
  useTheme,
  Typography,
  Avatar,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import {
  SearchNormal1,
  Add,
  Edit2,
  Trash,
  Location,
  Send2,
} from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import THEME_UTIL from 'utils/theme-util';
import SupplierTable from './components/supplierTable';

export default function Suppliers() {
  /* Hooks */
  const { isSmDown } = useResponsive();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <PageHeader pageTitle='Suppliers'>
        <CusTextField
          fullWidth={isSmDown ? true : false}
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
          onClick={() => navigate(ROUTE_PATH.suppliers.createNewSupplier)}
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
        <SupplierTable />
      </Container>
    </>
  );
}
