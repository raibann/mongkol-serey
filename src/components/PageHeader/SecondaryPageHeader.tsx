import { Toolbar, IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { ArrowLeft2 } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondaryPageHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <AppBar
      position='static'
      variant='elevation'
      elevation={0}
      color='transparent'
    >
      <Toolbar>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowLeft2 variant='Bold' />
        </IconButton>
        <Typography variant='h6'>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryPageHeader;
