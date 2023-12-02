import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { ArrowLeft2 } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondaryPageHeader = ({
  title,
  endComponent,
}: {
  title: string;
  endComponent?: React.ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <AppBar
      position='static'
      variant='elevation'
      elevation={0}
      color='transparent'
    >
      <Toolbar>
        <Stack
          direction='row'
          textTransform='none'
          color='secondary.main'
          spacing={1}
          component={Button}
          disableRipple
          onClick={() => navigate(-1)}
        >
          <ArrowLeft2 variant='Bold' />
          <Typography variant='h6' fontWeight='600'>
            {title}
          </Typography>
        </Stack>

        <Box flexGrow={1} />
        {endComponent}
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryPageHeader;
