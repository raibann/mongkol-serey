import { Toolbar, IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { ArrowLeft2 } from 'iconsax-react';
import React from 'react';

const SecondaryPageHeader = ({ title }: { title: string }) => {
  return (
    <AppBar
      position='static'
      variant='elevation'
      elevation={0}
      color='transparent'
    >
      <Toolbar>
        <IconButton>
          <ArrowLeft2 variant='Bold' />
        </IconButton>
        <Typography variant='h6'>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryPageHeader;
