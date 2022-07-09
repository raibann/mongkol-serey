import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Menu,
  Stack,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import theme from 'theme/theme';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Notification } from 'iconsax-react';
import React from 'react';
import CusTextField from 'components/CusTextField';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import { CusIconButton } from 'components/CusIconButton';

const DashboardHeader = () => {
  const [date, setDate] = useState<Date | null>(new Date());
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
    <PageHeader pageTitle='Dashboard'>
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
          width: '30%',
        }}
      >
        <CusToggleButton value='week'>Week</CusToggleButton>
        <CusToggleButton value='month'>Month</CusToggleButton>
        <CusToggleButton value='year'>Year</CusToggleButton>
      </ToggleButtonGroup>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          inputFormat='DD-MM-YYYY'
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          InputAdornmentProps={{
            sx: {
              '& .MuiIconButton-root': {
                color: theme.palette.primary.main,
              },
            },
          }}
          renderInput={(params) => (
            <CusTextField
              size='small'
              sx={{
                width: 170,
              }}
              {...params}
            />
          )}
        />
      </LocalizationProvider>

      <CusIconButton color='primary' onClick={handleClick}>
        <Notification variant='Bold' />
      </CusIconButton>
      <Menu
        sx={{ mt: 1, height: 350 }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <List>
          <ListSubheader
            sx={{
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
            <ListItemButton key={i}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <Stack direction={'row'} alignItems='center' spacing={4}>
                  <ListItemText
                    primary={data.name}
                    secondary={data.lastOrder}
                  />
                  <Stack direction={'row'}>
                    <Typography
                      color={theme.palette.success.main}
                      fontWeight={theme.typography.fontWeightBold}
                    >
                      {data.daysLeft === 0 ? 'Today' : ''}
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Menu>
    </PageHeader>
  );
};

export default DashboardHeader;
