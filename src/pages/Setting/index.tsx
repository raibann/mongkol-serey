import { Paper, Stack, Tab, Tabs } from '@mui/material';
import React from 'react';
import CompanyDetail from './pages/CompanyDetail';
import ExchangeRate from './pages/ExchangeRate';

const Setting = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Stack p={3} spacing={3}>
      <Tabs
        value={tabValue}
        onChange={handleChangeTab}
        TabIndicatorProps={{ sx: { height: 5 } }}
      >
        <Tab label='Company Detail' sx={{ fontWeight: 600, fontSize: 18 }} />
        <Tab label='Exchange Rate' sx={{ fontWeight: 600, fontSize: 18 }} />
      </Tabs>

      <Paper component={Stack} alignItems='center' p={2}>
        {tabValue === 0 && <CompanyDetail />}
        {tabValue === 1 && <ExchangeRate />}
      </Paper>
    </Stack>
  );
};

export default Setting;
