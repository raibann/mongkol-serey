import {
  Avatar,
  Badge,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Menu,
  Popover,
  Stack,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import theme from 'theme/theme';
import React from 'react';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import { CusIconButton } from 'components/CusIconButton';
import { Calendar2 } from 'iconsax-react';
import { Notification } from 'iconsax-react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import moment from 'moment';
// import ResponsiveDialog from 'components/CusDialog/ResponsiveDialog';
import { DatePicker } from '@mui/x-date-pickers';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import useResponsive from 'hook/useResponsive';
import { Controller, useForm } from 'react-hook-form';
import { useRequest } from 'ahooks';
import REMINDER_API from 'api/reminder';
import THEME_UTIL from 'utils/theme-util';

interface IDateRange {
  startDate: string;
  endDate: string;
}

const DashboardHeader = ({
  setDateRange,
  toggleValue,
  setToggleValue,
}: {
  toggleValue: string;
  setToggleValue: React.Dispatch<React.SetStateAction<string>>;
  setDateRange: React.Dispatch<
    React.SetStateAction<{
      startDate: string;
      endDate: string;
    }>
  >;
}) => {
  // ancher notification
  const [anchorElNotification, setAnchorElNotification] =
    React.useState<null | HTMLElement>(null);
  // anchor datepicker
  const [anchorElDatePicker, setAnchorElDatePicker] =
    React.useState<null | HTMLElement>(null);

  useEffect(() => {
    let monday = moment().weekday(1);
    let friday = moment().weekday(5);
    switch (toggleValue) {
      case 'month':
        return setDateRange({
          startDate: moment().startOf('month').format('YYYY-MM-DD'),
          endDate: moment().endOf('month').format('YYYY-MM-DD'),
        });
      case 'year':
        return setDateRange({
          startDate: moment().startOf('year').format('YYYY-MM-DD'),
          endDate: moment().endOf('year').format('YYYY-MM-DD'),
        });
      case 'week':
        return setDateRange({
          startDate: moment(monday).format('YYYY-MM-DD'),
          endDate: moment(friday).format('YYYY-MM-DD'),
        });
      default:
        return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleValue]);

  // Validate date range
  const { handleSubmit, control } = useForm<IDateRange>();
  const handleSubmitDate = (data: IDateRange) => {
    setDateRange({
      startDate: moment(data.startDate).format('YYYY-MM-DD'),
      endDate: moment(data.endDate).format('YYYY-MM-DD'),
    });
    console.log('start date', moment(data.startDate).format('YYYY-MM-DD'));
    console.log('end date', moment(data.endDate).format('YYYY-MM-DD'));
  };
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
  // fetch notifications
  const reminderList = useRequest(REMINDER_API.getReminder, { manual: false });
  const reminderData = reminderList.data;
  const { isSmDown } = useResponsive();
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
            value={toggleValue}
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

          <CusIconButton color='primary' onClick={handleClickDatepicker}>
            <Calendar2 size='24' variant='Outline' />
          </CusIconButton>

          {reminderData && reminderData?.data.length > 0 ? (
            <Badge color='error' badgeContent=' ' variant='dot'>
              <CusIconButton
                color='primary'
                onClick={handleClickNoti}
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
            </Badge>
          ) : (
            <CusIconButton
              color='primary'
              onClick={handleClickNoti}
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
          )}
        </Stack>
      </PageHeader>
      <Menu
        MenuListProps={{ sx: { p: 0 } }}
        sx={{
          mt: 1,
          height: 350,
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
            pb: 2,
          }}
        >
          <ListSubheader
            sx={{
              p: 2,
              pl: 0,
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
          {reminderData?.data.map(
            (data) =>
              moment().diff(data.date, 'years') === 1 && (
                <ListItem
                  key={data.id}
                  sx={{
                    px: 0,
                    pt: 0,
                  }}
                  secondaryAction={
                    <Typography
                      fontSize={14}
                      color={theme.palette.success.main}
                      fontWeight='bold'
                    >
                      Today
                    </Typography>
                  }
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: THEME_UTIL.goldGradientMain,
                        fontWeight: 'bold',
                      }}
                    >
                      {data.customer.customer_name
                        .split(' ')[0]
                        .charAt(0)
                        .toUpperCase() +
                        data.customer.customer_name
                          .split(' ')[1]
                          .charAt(0)
                          .toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${data.id}. ${data.type}`}
                    secondary={moment(data.date).format('DD-MM-YYYY')}
                  />
                </ListItem>
              )
          )}
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
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ mt: 1 }}
      >
        <form
          style={{ height: '100%' }}
          onSubmit={handleSubmit(handleSubmitDate)}
        >
          <Stack sx={{ p: 2, height: '100%' }} spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack direction={isSmDown ? 'column' : 'row'} spacing={2}>
                <Controller
                  control={control}
                  name='startDate'
                  render={({ field }) => (
                    <LabelTextField label='Start date'>
                      <DatePicker
                        openTo='day'
                        views={['year', 'month', 'day']}
                        value={field.value}
                        onChange={(date) => {
                          field.onChange(date);
                        }}
                        renderInput={(params) => <CusTextField {...params} />}
                      />
                    </LabelTextField>
                  )}
                />
                <Controller
                  control={control}
                  name='endDate'
                  render={({ field }) => (
                    <LabelTextField label='End date'>
                      <DatePicker
                        openTo='day'
                        views={['year', 'month', 'day']}
                        value={field.value}
                        onChange={(date) => {
                          field.onChange(date);
                        }}
                        renderInput={(params) => <CusTextField {...params} />}
                      />
                    </LabelTextField>
                  )}
                />
              </Stack>
            </LocalizationProvider>
            <Button
              variant='contained'
              type='submit'
              onClick={() => handleClose('datepicker')}
              sx={{
                width: '100%',
                color: (theme) => theme.palette.common.white,
                borderRadius: 3,
              }}
            >
              Confirm
            </Button>
          </Stack>
        </form>
      </Popover>
    </>
  );
};

export default DashboardHeader;
