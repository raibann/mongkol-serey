import { InputAdornment, Button, Grid, Typography, Stack } from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import useResponsive from 'hook/useResponsive';
import { SearchNormal1, Add } from 'iconsax-react';
import PotentialTable from 'pages/Customers/components/potentialTable';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import NewPotential from './newPotential';

export default function Potential() {
  /* Hooks */
  const { isSmDown } = useResponsive();
  const navigate = useNavigate();
  return (
    <>
      <PageHeader pageTitle='Potentials'>
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
          onClick={() => navigate(ROUTE_PATH.customers.createPotentialCustomer)}
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
      <PotentialTable />
    </>
  );
}
