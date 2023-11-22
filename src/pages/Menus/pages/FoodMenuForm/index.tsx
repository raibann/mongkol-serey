import {
  Paper,
  Stack,
  Grid,
  Typography,
  Button,
  alpha,
  useTheme,
} from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import { Add, Trash } from 'iconsax-react';
import THEME_UTIL from 'utils/theme-util';

const FoodMenuForm = () => {
  const theme = useTheme();

  return (
    <>
      <SecondaryPageHeader title='Create New Food' />

      <Paper component={Stack} m={3} mt={0} p={2} alignItems='center'>
        <Grid container maxWidth='sm' spacing={2} alignItems='center'>
          <Grid item xs={12}>
            <UploadButton label='Food Photo' />
          </Grid>
          <Grid item xs={12}>
            <LabelTextField label='Food name' size='small' />
          </Grid>
          <Grid
            item
            xs={12}
            display='flex'
            alignItems='center'
            columnGap={2}
            mt={2}
          >
            <Typography>Ingredients</Typography>
            <Button
              size='small'
              variant='contained'
              disableElevation
              sx={{ minWidth: 0, color: 'common.white', p: 0.25 }}
            >
              <Add />
            </Button>
          </Grid>

          <Grid item xs={11 / 3}>
            <LabelTextField size='small' label='Name' />
          </Grid>
          <Grid item xs={11 / 3}>
            <LabelTextField size='small' label='Quantity' />
          </Grid>
          <Grid item xs={11 / 3}>
            <LabelTextField size='small' label='Unit' />
          </Grid>
          <Grid item xs={1} textAlign='end'>
            <Stack spacing={1}>
              <Typography fontSize={14} visibility='hidden'>
                Action
              </Typography>
              <CusIconButton
                sx={{
                  boxShadow: 0,
                  background: alpha(theme.palette.error.main, 0.1),
                }}
              >
                <Trash
                  size='20'
                  color={theme.palette.error.main}
                  variant='Bold'
                />
              </CusIconButton>
            </Stack>
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

export default FoodMenuForm;
