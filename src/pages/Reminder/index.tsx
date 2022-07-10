import { Stack, Typography } from '@mui/material';
import PageHeader from 'components/PageHeader';
import EventToday from './EventCard/today';
import UpcomingEvent from './EventCard/upcoming';

export default function Reminder() {
  return (
    <>
      <PageHeader pageTitle='Reminder' />
      <Stack spacing={2} px={2}>
        <Stack direction={'row'} spacing={2}>
          <Typography variant='h5' fontWeight={'light'}>
            Anniversary:
          </Typography>
          <Typography variant='h5' fontWeight={'light'}>
            5 Cusomter
          </Typography>
        </Stack>
        <EventToday />
        <Stack direction={'row'} spacing={2}>
          <Typography variant='h5' fontWeight={'light'}>
            Upcoming Anniversary
          </Typography>
        </Stack>
        <UpcomingEvent />
      </Stack>
    </>
  );
}
