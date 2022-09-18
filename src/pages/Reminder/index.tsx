import useRequest from '@ahooksjs/use-request';
import { Container, Stack, Typography } from '@mui/material';
import REMINDER_API from 'api/reminder';
import { CusLoading } from 'components/CusLoading';
import PageHeader from 'components/PageHeader';
import EventToday from './EventCard/today';
import UpcomingEvent from './EventCard/upcoming';

export default function Reminder() {
  // request api

  const reminderList = useRequest(REMINDER_API.getReminder, { manual: false });
  // console.log('reminder list:', reminderList.data);

  return (
    <>
      <PageHeader pageTitle='Reminder' />
      {reminderList.loading ? (
        <Stack
          justifyContent={'center'}
          alignItems='center'
          sx={{
            height: [
              'calc( 100vh - 130px)',
              'calc( 100vh - 130px)',
              'calc( 100vh - 85px)',
            ],
          }}
        >
          <CusLoading />
        </Stack>
      ) : (
        <Container maxWidth='xl'>
          <Typography variant='h6' sx={{ pb: 2 }}>
            Aniversary today
          </Typography>
          <EventToday listItem={reminderList.data} />
          <Typography variant='h6' sx={{ py: 2 }}>
            Upcoming Aniversary
          </Typography>
          <UpcomingEvent listItem={reminderList.data} />
        </Container>
      )}
    </>
  );
}
