import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
  SxProps,
  Theme,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { ArrowLeft2 } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondaryPageHeader = ({
  title,
  sticky = false,
  endComponent,
  appBarSx,
}: {
  title: string;
  sticky?: boolean;
  endComponent?: React.ReactNode;
  appBarSx?: SxProps<Theme>;
}) => {
  const navigate = useNavigate();
  return (
    <AppBar
      position={sticky ? 'sticky' : 'static'}
      variant='elevation'
      elevation={0}
      color='transparent'
      sx={{ top: 64, ...appBarSx }}
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
