import { Container, Stack, Typography } from '@mui/material';
import { CusLoading } from 'components/CusLoading';
import PageHeader from 'components/PageHeader';
import { useReminderContext } from 'context/ReminderContext';
import EventToday from './EventCard/today';
import UpcomingEvent from './EventCard/upcoming';

export default function Reminder() {
  const { reminderList, reminderLoading } = useReminderContext();
  return (
    <>
      <PageHeader pageTitle='Reminder' />
      {reminderLoading ? (
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
            Anniversary today
          </Typography>
          <EventToday listItem={reminderList} />
          <Typography variant='h6' sx={{ py: 2 }}>
            Upcoming Anniversary
          </Typography>
          <UpcomingEvent listItem={reminderList} />
        </Container>
      )}
    </>
  );
}
