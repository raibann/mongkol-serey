import { Container, Typography } from '@mui/material';
import PageHeader from 'components/PageHeader';
import EventToday from './EventCard/today';
import UpcomingEvent from './EventCard/upcoming';

export default function Reminder() {
  return (
    <>
      <PageHeader pageTitle='Reminder' />
      <Container maxWidth='xl'>
        <Typography variant='h6' sx={{ pb: 2 }}>
          Aniversary:
        </Typography>
        <EventToday />
        <Typography variant='h6' sx={{ py: 2 }}>
          Upcoming Event
        </Typography>
        <UpcomingEvent />
      </Container>
    </>
  );
}
