import { Paper, Stack, Tab, Tabs } from '@mui/material';
import { useReminderContext } from 'context/ReminderContext';
import { useState } from 'react';
import EventToday from './EventCard/Today';
import UpcomingEvent from './EventCard/Upcoming';

export default function Reminder() {
  /* Context */
  const { reminderList, reminderLoading } = useReminderContext();

  /* State */
  const [tabValue, setTabValue] = useState(0);

  /* Methods */
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <>
      <Stack p={3} spacing={3}>
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          TabIndicatorProps={{ sx: { height: 5 } }}
        >
          <Tab
            label='Upcoming Event'
            sx={{ fontWeight: 600, fontSize: 18, textTransform: 'capitalize' }}
          />
          <Tab
            label='Anniversary Event'
            sx={{ fontWeight: 600, fontSize: 18, textTransform: 'capitalize' }}
          />
        </Tabs>

        <Paper component={Stack} alignItems='center' p={2}>
          {tabValue === 0 && <EventToday listItem={reminderList} />}
          {tabValue === 1 && <UpcomingEvent listItem={reminderList} />}
        </Paper>
      </Stack>
      {/* {reminderLoading ? (
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
      )} */}
    </>
  );
}
