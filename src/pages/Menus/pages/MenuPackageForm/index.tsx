import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { Add } from 'iconsax-react';
import THEME_UTIL from 'utils/theme-util';

const MenuPackageForm = () => {
  return (
    <>
      <SecondaryPageHeader title='Create New Package' />

      <Paper component={Stack} m={3} mt={0} p={2} alignItems='center'>
        <Grid container maxWidth='sm' spacing={2} alignItems='center'>
          <Grid item xs={12}>
            <LabelTextField size='small' label='Package name' />
          </Grid>
          <Grid item xs={6}>
            <Typography>Pricing</Typography>
          </Grid>
          <Grid item xs={6} textAlign='end'>
            <Button
              variant='contained'
              disableElevation
              sx={{ minWidth: 0, color: 'common.white', p: 0.5 }}
            >
              <Add />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <LabelTextField size='small' label='Package price' />
          </Grid>
          <Grid item xs={6}>
            <LabelTextField size='small' label='Price per unit' />
          </Grid>
          <Grid item xs={6}>
            <Typography>Food Items</Typography>
          </Grid>
          <Grid item xs={6} textAlign='end'>
            <Button
              variant='contained'
              disableElevation
              sx={{ minWidth: 0, color: 'common.white', p: 0.5 }}
            >
              <Add />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <LabelTextField size='small' label='Name' />
          </Grid>
          <Grid item xs={6}>
            <Button
              size='large'
              variant='outlined'
              sx={{ width: '100%', mt: 2 }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              size='large'
              variant='contained'
              sx={{
                mt: 2,
                width: '100%',
                background: THEME_UTIL.goldGradientMain,
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MenuPackageForm;
