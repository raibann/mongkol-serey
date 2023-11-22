import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Menu,
  Popover,
  Stack,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useRef } from 'react';
import { CusIconButton } from 'components/CusIconButton';
import { BoxRemove, Calendar2, Printer, User } from 'iconsax-react';
// import { Notification } from 'iconsax-react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import { useReminderContext } from 'context/ReminderContext';
import { CusLoading } from 'components/CusLoading';
import React from 'react';
import CusToggleButton from 'components/CusToggleButton';
import PageHeader from 'components/PageHeader';
import moment from 'moment';
import CusTextField from 'components/CusTextField';
import LabelTextField from 'components/LabelTextField';
import useResponsive from 'hook/useResponsive';
import THEME_UTIL from 'utils/theme-util';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';
import ReactToPrint from 'react-to-print';
import { pageStyle } from 'utils/validate-util';
import ExportReport from 'components/ComToPrint/ExportReport';

interface IDateRange {
  startDate: string;
  endDate: string;
}

const DashboardHeader = ({
  dateRange,
  dashTotal,
  setDateRange,
  toggleValue,
  setToggleValue,
}: {
  dateRange: {
    startDate: string;
    endDate: string;
  };
  dashTotal?: IDashboard.IDashboardData;
  toggleValue: string | null;
  setToggleValue: React.Dispatch<React.SetStateAction<string | null>>;
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
    let monday = moment().weekday(0);
    let friday = moment().weekday(6);
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
    setToggleValue(null);
  };
  // notification
  // const handleClickNoti = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorElNotification(event.currentTarget);
  // };
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
  const { reminderList, reminderLoading } = useReminderContext();

  const temp = reminderList?.filter(
    (el) => moment().diff(el.date, 'years') === 1
  );

  const { isSmDown, isMdDown } = useResponsive();
  const theme = useTheme();
  const navigate = useNavigate();
  const compToPrint = useRef(null);

  return (
    <>
      <PageHeader
        pageTitle='Dashboard'
        // endComponent={
        //   <>
        //     <ReactToPrint
        //       pageStyle={pageStyle}
        //       documentTitle={'All Reports'}
        //       trigger={() => (
        //         <CusIconButton color='primary' sx={{ height: 40 }}>
        //           <Printer size='24' variant='Outline' />
        //         </CusIconButton>
        //       )}
        //       content={() => compToPrint.current}
        //     />
        //   </>
        // }
      >
        <Stack
          direction={'row'}
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
              mr: 2,
            }}
          >
            <CusToggleButton value='week'>Week</CusToggleButton>
            <CusToggleButton value='month'>Month</CusToggleButton>
            <CusToggleButton value='year'>Year</CusToggleButton>
          </ToggleButtonGroup>
          <CusIconButton
            color='primary'
            onClick={handleClickDatepicker}
            sx={{
              mr: { xs: 0, md: 2 },
            }}
          >
            <Calendar2 size='24' variant='Outline' />
          </CusIconButton>

          {!isMdDown && (
            <ReactToPrint
              pageStyle={pageStyle}
              documentTitle={'All Reports'}
              trigger={() => (
                <CusIconButton color='primary' sx={{ height: 40 }}>
                  <Printer size='24' variant='Outline' />
                </CusIconButton>
              )}
              content={() => compToPrint.current}
            />
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
            width: 400,
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
          {reminderLoading ? (
            <Stack
              alignItems={'center'}
              justifyContent='center'
              height={'100%'}
            >
              <CusLoading />
            </Stack>
          ) : temp && temp.length > 0 ? (
            reminderList?.map(
              (data) =>
                moment().diff(data.date, 'years') === 1 && (
                  <ListItemButton
                    key={data.id}
                    onClick={() =>
                      navigate(`${ROUTE_PATH.orders}?id=${data.id}`)
                    }
                  >
                    <ListItem
                      sx={{
                        px: 1,
                        py: 0,
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
                          {data.customer !== null ? (
                            data.customer.customer_name.charAt(0).toUpperCase()
                          ) : (
                            <User
                              color={theme.palette.common.white}
                              variant='Bold'
                            />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`Order ID: ${data.id} ~ ${data.type}`}
                        secondary={
                          data.customer === null
                            ? 'No Customer'
                            : data.customer.customer_name
                        }
                      />
                    </ListItem>
                  </ListItemButton>
                )
            )
          ) : (
            <Stack
              alignItems={'center'}
              justifyContent='center'
              height={'100%'}
              spacing={1}
            >
              <BoxRemove size='48' color={theme.palette.error.main} />
              <Typography variant='h6' color='error'>
                No Notification
              </Typography>
            </Stack>
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
                borderRadius: 2,
                boxShadow: 0,
                py: 1,
              }}
            >
              Confirm
            </Button>
          </Stack>
        </form>
      </Popover>
      <div style={{ display: 'none' }}>
        <ExportReport
          ref={compToPrint}
          dateRange={dateRange}
          dashTotal={dashTotal}
        />
      </div>
    </>
  );
};

export default DashboardHeader;
