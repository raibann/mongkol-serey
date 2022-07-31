import {
  List,
  ListSubheader,
  Menu,
  Popover,
  Stack,
  TextField,
  ToggleButtonGroup,
  Typography
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import moment from 'moment';
const DashboardHeader = () => {
  const [ToggleValue, setToggleValue] = useState('week');
  const [datePicked, setDatePicked] = React.useState<Date | null>(new Date());
  // ancher notification
  const [
    anchorElNotification,
    setAnchorElNotification
  ] = React.useState<null | HTMLElement>(null);
  // anchor datepicker
  const [
    anchorElDatePicker,
    setAnchorElDatePicker
  ] = React.useState<null | HTMLElement>(null);
  // notification
  const handleClickNoti = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNotification(event.currentTarget);
  };
  // datepicker

  const handleClickDatepicker = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElDatePicker(event.currentTarget);
  };
  // handle close
  const handleClose = (type: string) => {
    if (type === 'notification') {
      setAnchorElNotification(null);
    } else if (type === 'datepicker') {
      setAnchorElDatePicker(null);
    }
  };
  const Anniversary = Array(6).fill({
    name: 'Meas Saominea',
    lastOrder: '30-02-2002',
    daysLeft: 0
  });
  console.log('datePicked:', moment(datePicked).format('DD-MM-YYYY'));
  return (
    <>
      <PageHeader
        pageTitle='Dashboard'
        endComponent={
          <>
            <CusIconButton
              color='primary'
              onClick={handleClickNoti}
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
          sx={{ width: '100%', mt: { xs: 2, md: 0 } }}
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
              height: 40
            }}
          >
            <CusToggleButton value='week'>Week</CusToggleButton>
            <CusToggleButton value='month'>Month</CusToggleButton>
            <CusToggleButton value='year'>Year</CusToggleButton>
          </ToggleButtonGroup>

          <CusIconButton color='primary' onClick={handleClickDatepicker}>
            <Calendar2 size='24' variant='Outline' />
          </CusIconButton>

          <CusIconButton
            color='primary'
            onClick={handleClickNoti}
            sx={{
              display: {
                xs: 'none',
                md: 'block'
              },
              height: 40
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
          height: 350
        }}
        anchorEl={anchorElNotification}
        open={Boolean(anchorElNotification)}
        onClose={() => handleClose('notification')}
      >
        <List
          disablePadding
          sx={{
            width: 350,
            px: 2,
            pb: 2
          }}
        >
          <ListSubheader
            sx={{
              p: 1,
              px: 2,
              background: theme => theme.palette.common.white
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
      {/* pop over */}
      <Popover
        id={Boolean(anchorElDatePicker) ? 'simple-popover' : undefined}
        open={Boolean(anchorElDatePicker)}
        anchorEl={anchorElDatePicker}
        onClose={() => handleClose('datepicker')}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs='desktop'
            openTo='year'
            value={datePicked}
            onChange={newValue => {
              setDatePicked(newValue);
              if (newValue?.getDate() !== datePicked?.getDate()) {
                setAnchorElDatePicker(null);
              }
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Popover>
    </>
  );
};

export default DashboardHeader;
