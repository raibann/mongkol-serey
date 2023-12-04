import { Stack, Tab, Tabs } from '@mui/material';
import { useReminderContext } from 'context/ReminderContext';
import { useState } from 'react';
import Upcomings from './pages/Upcomings';
import EventToday from './pages/EventToday';
import Anniversaries from './pages/Aniversaries';
import GiftHistory from './pages/GiftHistory';

export default function Reminder() {
  /* Context */
  const { reminderList } = useReminderContext();

  /* State */
  const [tabValue, setTabValue] = useState(0);

  /* Methods */
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <>
      <Stack p={3} spacing={0}>
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          TabIndicatorProps={{ sx: { height: 2 } }}
        >
          <Tab
            label='Today'
            sx={{ fontWeight: 600, fontSize: 16, textTransform: 'capitalize' }}
          />
          <Tab
            label='Upcomings'
            sx={{ fontWeight: 600, fontSize: 16, textTransform: 'capitalize' }}
          />
          <Tab
            label='Anniversaries'
            sx={{ fontWeight: 600, fontSize: 16, textTransform: 'capitalize' }}
          />
          <Tab
            label='Gift History'
            sx={{ fontWeight: 600, fontSize: 16, textTransform: 'capitalize' }}
          />
        </Tabs>
        {tabValue === 0 && <EventToday />}
        {tabValue === 1 && <Upcomings />}
        {tabValue === 2 && <Anniversaries />}
        {tabValue === 3 && <GiftHistory />}
      </Stack>
    </>
  );
}
