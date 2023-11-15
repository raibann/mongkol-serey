import { InputAdornment, Button, Container } from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { SearchNormal1, Add } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import SupplierTable from './components/SupplierTable';

export default function Suppliers() {
  /* Hooks */
  const { isSmDown } = useResponsive();
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
