import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import LabelTextField from 'components/LabelTextField';
import React from 'react';
import THEME_UTIL from 'utils/theme-util';

const ExchangeRate = () => {
  return (
    <Stack width='100%' maxWidth={800} spacing={2}>
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
  );
};

export default ExchangeRate;
