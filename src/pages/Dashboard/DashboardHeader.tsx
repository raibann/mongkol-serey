import { ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import theme from 'theme/theme';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Notification } from 'iconsax-react';
import CusIconButton from 'components/CusIconButton';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import CusTextField from 'components/CusTextField';

const DashboardHeader = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [ToggleValue, setToggleValue] = useState('week');
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

      <CusIconButton color='primary'>
        <Notification variant='Bold' />
      </CusIconButton>
    </PageHeader>
  );
};

export default DashboardHeader;
