import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { Add } from 'iconsax-react';

const MenuForm = () => {
  return (
    <>
      <SecondaryPageHeader title='Create New Package' />

      <Paper component={Stack} m={3} mt={0} p={2} alignItems='center'>
        <Grid container maxWidth={800} spacing={2} alignItems='center'>
          <Grid item xs={12}>
            <LabelTextField label='Package name' />
          </Grid>
          <Grid item xs={6}>
            <Typography>Pricing</Typography>
          </Grid>
          <Grid item xs={6} textAlign='end'>
            <Button
              variant='contained'
              disableElevation
              sx={{ minWidth: 0, color: 'common.white', p: 1 }}
            >
              <Add />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <LabelTextField label='Package price' />
          </Grid>
          <Grid item xs={6}>
            <LabelTextField label='Price per unit' />
          </Grid>
          <Grid item xs={6}>
            <Typography>Food Items</Typography>
          </Grid>
          <Grid item xs={6} textAlign='end'>
            <Button
              variant='contained'
              disableElevation
              sx={{ minWidth: 0, color: 'common.white', p: 1 }}
            >
              <Add />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <LabelTextField label='Name' />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MenuForm;
