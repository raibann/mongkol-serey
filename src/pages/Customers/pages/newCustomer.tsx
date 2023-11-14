import { Paper, Container, Stack, MenuItem, Button } from '@mui/material';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';
import UploadButton from 'components/UploadButton';
import React from 'react';

export default function NewCustomer() {
  return (
    <>
      <SecondaryPageHeader title='Create New Customer' />
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
              <LabelTextField label='Phone Number' size='small' />

              <LabelTextField
                label='Gender'
                size='small'
                select
                defaultValue={''}
              ></LabelTextField>
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <LabelTextField label='Street' size='small' />
              <LabelTextField label='House' size='small' />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <LabelTextField label='Province' size='small' />
              <LabelTextField label='District' size='small' />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <LabelTextField label='Commune' size='small' />
              <LabelTextField
                label='Default Payment'
                size='small'
                select
                defaultValue={''}
              ></LabelTextField>
            </Stack>
            <Stack direction={'row'}>
              <LabelTextField label='Social Media' size='small'>
                <Stack direction={'row'} spacing={1}>
                  <CusTextField
                    select
                    defaultValue={''}
                    SelectProps={{
                      displayEmpty: true,
                    }}
                    size='small'
                    sx={{ width: '40%' }}
                  >
                    <MenuItem value=''>FB</MenuItem>
                    <MenuItem value='TG'>TG</MenuItem>
                  </CusTextField>
                  <CusTextField
                    defaultValue={''}
                    SelectProps={{
                      displayEmpty: true,
                    }}
                    fullWidth
                    size='small'
                  >
                    <MenuItem value=''>FB</MenuItem>
                  </CusTextField>
                </Stack>
              </LabelTextField>
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
