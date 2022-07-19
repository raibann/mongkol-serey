import {
  List,
  ListSubheader,
  Menu,
  Stack,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import theme from 'theme/theme';
import React from 'react';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import { CusIconButton } from 'components/CusIconButton';
import { Calendar2 } from 'iconsax-react';
import { Notification } from 'iconsax-react';
import AnniversaryItem from './AnniversaryItem';

const DashboardHeader = () => {
  const [ToggleValue, setToggleValue] = useState('week');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Anniversary = Array(6).fill({
    name: 'Meas Saominea',
    lastOrder: '30-02-2002',
    daysLeft: 0,
  });
  return (
    <>
      <PageHeader
        pageTitle='Dashboard'
        endComponent={
          <>
            <CusIconButton
              color='primary'
              onClick={handleClick}
              sx={{ height: 40 }}
            >
              <Notification size='24' variant='Bold' />
            </CusIconButton>
          </>
        }
      >
        <Stack
          direction={'row'}
          spacing={2}
          justifyContent='flex-end'
          sx={{ width: '100%' }}
          alignItems='center'
        >
          <ToggleButtonGroup
            value={ToggleValue}
            exclusive
            fullWidth
            size='small'
            onChange={(
              event: React.MouseEvent<HTMLElement, MouseEvent>,
              value: any
            ) => {
              if (value !== null) {
                setToggleValue(value);
              }
            }}
            sx={{
              width: { xs: '100%', md: '30%' },
              height: 40,
            }}
          >
            <CusToggleButton value='week'>Week</CusToggleButton>
            <CusToggleButton value='month'>Month</CusToggleButton>
            <CusToggleButton value='year'>Year</CusToggleButton>
          </ToggleButtonGroup>

          <CusIconButton color='primary'>
            <Calendar2 size='24' variant='Outline' />
          </CusIconButton>

          <CusIconButton
            color='primary'
            onClick={handleClick}
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
              height: 40,
            }}
          >
            <Notification size='24' variant='Bold' />
          </CusIconButton>
        </Stack>
      </PageHeader>
      <Menu
        MenuListProps={{ sx: { p: 0 } }}
        sx={{
          mt: 1,
          height: 350,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <List
          disablePadding
          sx={{
            width: 350,
            px: 2,
            pb: 2,
          }}
        >
          <ListSubheader
            sx={{
              p: 1,
              px: 2,
              background: (theme) => theme.palette.common.white,
            }}
          >
            <Typography
              variant='subtitle1'
              fontWeight={theme.typography.fontWeightBold}
            >
              Anniverysary
            </Typography>
          </ListSubheader>
          {Anniversary.map((data, i) => (
            <AnniversaryItem
              key={i}
              daysLeft={data.daysLeft}
              lastOrder={data.lastOrder}
              name={data.name}
            />
          ))}
        </List>
      </Menu>
    </>
  );
};

export default DashboardHeader;
