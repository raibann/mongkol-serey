import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import ExpensePreviewTable from '../components/ExpensePreviewTable';
import LabelTextField from 'components/LabelTextField';
import UploadButton from 'components/UploadButton';

export default function UpdateExpenseForm() {
  return (
    <>
      <SecondaryPageHeader title='Update Expense' />
      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
      >
        <Grid container sx={{ pb: 2 }}>
          <Grid item xs={12} sm={7}>
            <Stack direction={'column'} spacing={2}>
              <Stack direction={'row'} spacing={2}>
                <LabelTextField label='Category' size='small' />
                <LabelTextField label='Product' size='small' />
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <LabelTextField label='Supplier' size='small' />
                <LabelTextField label='Payment Methods' size='small' />
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <LabelTextField label='Unit' size='small' />
                <Box sx={{ width: '100%', position: 'relative' }}>
                  <LabelTextField label='Total' size='small' />
                  <Stack
                    direction={'row'}
                    spacing={0.5}
                    sx={{ position: 'absolute', right: 0, top: 0 }}
                  >
                    <Typography variant='subtitle2' color={'text.secondary'}>
                      Paid
                    </Typography>
                    <Switch defaultChecked size='small' />
                  </Stack>
                </Box>
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <LabelTextField label='Date' size='small' />
                <LabelTextField label='Remark' size='small' />
              </Stack>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                spacing={2}
                py={2}
              >
                <Button variant='outlined' fullWidth>
                  Reset
                </Button>
                <Button variant='contained' fullWidth>
                  Create
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs sm={5} sx={{ pl: 2, py: 2 }}>
            <Stack direction={'row'} spacing={2}>
              <UploadButton />
            </Stack>
            <Typography
              variant='body1'
              color={'text.primary'}
              fontWeight={'bold'}
            >
              Payment Images
            </Typography>
            <Stack
              direction={'row'}
              spacing={2}
              py={2}
              sx={{ overflow: 'auto' }}
            >
              {Array(5)
                .fill('')
                .map((_, i) => {
                  return (
                    <Avatar
                      key={i}
                      variant='rounded'
                      sx={{ height: 120, width: 120 }}
                    />
                  );
                })}
            </Stack>
          </Grid>
        </Grid>
        <ExpensePreviewTable />
      </Paper>
    </>
  );
}
