import { AppBar, Toolbar, Grid, Typography } from '@mui/material';
import React from 'react';

import useResponsive from 'hook/useResponsive';

const PageHeader = ({
  children,
  pageTitle,
}: {
  children?: React.ReactNode;
  pageTitle: string;
}) => {
  const { isSmDown } = useResponsive();

  return (
    <AppBar
      position='sticky'
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 'none',
        borderRadius: 0,
        mb: 1,
      }}
    >
      <Toolbar sx={{ py: 2, px: { sm: 0 } }}>
        <Grid container px={isSmDown ? 0 : 3} rowGap={isSmDown ? 2 : 0}>
          <Grid item xs={6} md='auto'>
            <Typography variant='h6' fontWeight='600'>
              {pageTitle}
            </Typography>
          </Grid>
          <Grid item xs={6} md display='flex' justifyContent='flex-end'>
            {children}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
