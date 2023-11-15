import { Button, Container, Paper, Stack } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';

export default function NewUserForm() {
  return (
    <>
      <SecondaryPageHeader title='Create New User' />
      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
      >
        <Container maxWidth='sm'>
          <Stack direction={'column'} spacing={2}>
            <Stack direction={'row'} spacing={2}>
              <UploadButton />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <LabelTextField label='First Name' size='small' />
              <LabelTextField label='Last Name' size='small' />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <LabelTextField label='Username' size='small' />

              <LabelTextField
                label='Gender'
                size='small'
                select
                defaultValue={''}
              ></LabelTextField>
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <LabelTextField label='Password' size='small' />
              <LabelTextField label='Confirm Password' size='small' />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <LabelTextField
                label='Department'
                size='small'
                select
                defaultValue={''}
              ></LabelTextField>
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
        </Container>
      </Paper>
    </>
  );
}
