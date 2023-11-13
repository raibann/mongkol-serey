import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import { ShieldSecurity } from 'iconsax-react';

export default function NewDepartmentForm() {
  const theme = useTheme();
  return (
    <>
      <SecondaryPageHeader title='Create New Department' />

      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
      >
        <Container maxWidth='sm'>
          <Stack direction={'column'} spacing={2}>
            <LabelTextField label='Department' />
            <Stack direction={'row'} spacing={1}>
              <ShieldSecurity size='24' color={theme.palette.secondary.main} />
              <Typography
                variant='body2'
                fontWeight={'bold'}
                color={theme.palette.secondary.main}
              >
                Permissions
              </Typography>
            </Stack>
            <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
              <FormGroup>
                <Grid container>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          onChange={() => {}}
                          name='gilad'
                        />
                      }
                      label='Gilad Gray'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          onChange={() => {}}
                          name='gilad'
                        />
                      }
                      label='Gilad Gray'
                    />
                  </Grid>
                </Grid>
              </FormGroup>
            </FormControl>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              spacing={2}
            >
              <Button variant='outlined' fullWidth>
                Reset
              </Button>
              <Button variant='contained' fullWidth>
                Create
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Paper>
    </>
  );
}
