import { LoadingButton } from '@mui/lab';
import { Container, Paper, Stack } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import PageHeader from 'components/PageHeader';
import React from 'react';
import THEME_UTIL from 'utils/theme-util';

const ExchangeRate = () => {
  return (
    <>
      <PageHeader pageTitle='Update Exchange Rate' />
      <Paper
        sx={{
          m: 3,
          mt: 0,
          p: 2,
        }}
      >
        <Container maxWidth='sm'>
          <Stack width='100%' maxWidth='sm' spacing={2}>
            <LabelTextField
              label='Riel exchange rate (1$)'
              type='number'
              placeholder='4200'
            />
            <LoadingButton
              loading={false}
              variant='contained'
              sx={{
                py: 1.5,
                width: '50%',
                borderRadius: 2.5,
                alignSelf: 'flex-end',
                background: THEME_UTIL.goldGradientMain,
              }}
            >
              Save
            </LoadingButton>
          </Stack>
        </Container>
      </Paper>
    </>
  );
};

export default ExchangeRate;
