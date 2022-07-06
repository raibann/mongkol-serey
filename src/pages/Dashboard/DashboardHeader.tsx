import {
  AppBar,
  Grid,
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

const DashboardHeader = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [ToggleValue, setToggleValue] = useState('week');
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

            <CusIconButton color='primary'>
              <Notification variant='Bold' />
            </CusIconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
