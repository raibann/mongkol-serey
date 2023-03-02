import { AppBar, Toolbar, Grid, Typography } from '@mui/material';
import { CusIconButton } from 'components/CusIconButton';
import React from 'react';
import { HambergerMenu } from 'iconsax-react';
import useResponsive from 'hook/useResponsive';
import { useDrawerContext } from 'context/DrawerContext';

const PageHeader = ({
  children,
  pageTitle,
  endComponent,
}: {
  children?: React.ReactNode;
  endComponent?: React.ReactNode;
  pageTitle: string;
}) => {
  const { isMdDown } = useResponsive();
  const { openDrawer, setOpenDrawer } = useDrawerContext();

  return (
    <AppBar
      position='sticky'
      sx={{
        bgcolor: isMdDown
          ? (theme) => theme.palette.common.white
          : 'background.paper',
        boxShadow: 'none',
        borderRadius: 0,
        mb: 1,
      }}
    >
      <Toolbar sx={{ py: 2, px: { sm: 0 } }}>
        <Grid container px={2}>
          <Grid item xs={12} md='auto'>
            <Grid container>
              <Grid item xs>
                <CusIconButton
                  onClick={() => setOpenDrawer(!openDrawer)}
                  color='primary'
                  sx={{
                    height: 40,
                    display: {
                      xs: 'block',
                      md: 'none',
                    },
                  }}
                >
                  <HambergerMenu size='24' variant='Outline' />
                </CusIconButton>
              </Grid>
              <Grid item xs>
                <Typography variant='h5' fontWeight='bolder'>
                  {pageTitle}
                </Typography>
              </Grid>
              <Grid
                item
                xs
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {isMdDown && endComponent}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md>
            {children}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
