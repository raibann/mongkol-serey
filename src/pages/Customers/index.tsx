import { Button, InputAdornment } from '@mui/material';
import { Container } from '@mui/system';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { Add, SearchNormal1 } from 'iconsax-react';
import CustTable from './components/CustomerTable';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function Customers() {
  /* State */
  /* Hooks */
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();
  /* Methods */

  return (
    <>
      <PageHeader pageTitle='Customers'>
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
          onClick={() => navigate(ROUTE_PATH.customers.createNewCustomer)}
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

      <Container
        maxWidth={'xl'}
        sx={{
          height: [
            'calc(100vh - 138px)',
            'calc(100vh - 138px)',
            'calc(100vh - 85px)',
          ],
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CustTable />
      </Container>
    </>
  );
}
