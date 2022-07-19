import { Button, InputAdornment, Stack, Typography } from '@mui/material';
import CusTextField from 'components/CusTextField';
import PageHeader from 'components/PageHeader';
import { Add, SearchNormal1 } from 'iconsax-react';
import React from 'react';
import theme from 'theme/theme';
import CustCard from './CustCard';

export default function Customers() {
  return (
    <>
      <PageHeader pageTitle={'Customers'}>
        <Stack direction='row' spacing={2}>
          <CusTextField
            placeholder='Search...'
            size='small'
            sx={{ flexGrow: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchNormal1 size='20' color={theme.palette.primary.main} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant='contained'
            startIcon={<Add />}
            sx={{
              color: theme.palette.common.white,
              boxShadow: theme.shadows[1],
              borderRadius: 2,
              height: 40,
            }}
          >
            Add New
          </Button>
        </Stack>
      </PageHeader>
      <Stack spacing={2} px={2}>
        <Stack direction={'row'} spacing={2}>
          <Typography variant='h5' fontWeight={'medium'}>
            New Customers
          </Typography>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Typography variant='h5' fontWeight={'medium'}>
            All Customers
          </Typography>
        </Stack>
        <CustCard />
      </Stack>
    </>
  );
}
