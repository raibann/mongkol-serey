import { AppBar, Toolbar, Grid, Typography } from '@mui/material';
import React from 'react';

const PageHeader = ({
  children,
  pageTitle,
}: {
  children?: React.ReactNode;
  pageTitle: string;
}) => {
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
      <Toolbar sx={{ py: 2, px: { xs: 0 } }}>
        <Grid container px={2}>
          <Grid item xs='auto'>
            <Typography variant='h4' fontWeight='bolder'>
              {pageTitle}
            </Typography>
          </Grid>
          <Grid
            item
            xs
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
