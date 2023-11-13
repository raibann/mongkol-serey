import { Button, Grid, InputAdornment } from '@mui/material';
import PageHeader from 'components/PageHeader';
import MenuCard from './components/MenuCard';
import CusTextField from 'components/CusTextField';
import { Add, SearchNormal1 } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export default function Menus() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader pageTitle='Menu'>
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
          onClick={() => navigate(ROUTE_PATH.menus.createMenuPackage)}
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

      <Grid container p={3} pt={0} spacing={3}>
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <Grid key={i} item xs={3}>
              <MenuCard />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
