import { alpha, Box, Container, Stack, Typography } from '@mui/material';
import { CusLoading } from 'components/CusLoading';
import PageHeader from 'components/PageHeader';
import { useReminderContext } from 'context/ReminderContext';
import { BoxRemove } from 'iconsax-react';
import theme from 'theme/theme';
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
      ) : reminderList?.length === 0 ? (
        <Stack
          alignItems='center'
          justifyContent='center'
          height={[
            'calc( 100vh - 130px)',
            'calc( 100vh - 130px)',
            'calc( 100vh - 85px)',
          ]}
          width='100%'
          py={5}
        >
          <Box
            sx={{
              boxShadow: theme.shadows[1],
              p: 5,
              borderRadius: 3,
              textAlign: 'center',
              background: alpha(theme.palette.error.light, 0.1),
              position: 'relative',
              top: -74,
            }}
          >
            <BoxRemove size='48' color={theme.palette.error.main} />
            <Typography variant='h6' color='error'>
              No Reminder Data
            </Typography>
          </Box>
        </Stack>
      ) : (
        <Container maxWidth='xl'>
          <EventToday listItem={reminderList} />
          <UpcomingEvent listItem={reminderList} />
        </Container>
      )}
    </>
  );
}
