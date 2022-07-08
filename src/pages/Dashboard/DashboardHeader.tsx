import {
  AppBar,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Menu,
  Stack,
  TextField,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import theme from 'theme/theme';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Notification } from 'iconsax-react';
import CusIconButton from 'components/CusIconButton';
import CusToggleButton from 'components/CusToggleButton';
import React from 'react';

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
    <AppBar
      position='sticky'
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 'none',
        borderRadius: 0,
        mb: 1,
      }}
    >
      <Toolbar sx={{ py: 2 }}>
        <Grid container>
          <Grid item xs='auto'>
            <Typography variant='h4' fontWeight='bolder'>
              Dashboard
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
                  <TextField
                    size='small'
                    sx={{
                      width: 170,
                      background: theme.palette.common.white,
                      '& fieldset': {
                        border: 'none',
                        boxShadow: theme.shadows[1],
                      },
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
