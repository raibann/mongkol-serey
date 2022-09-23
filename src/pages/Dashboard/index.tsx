import useRequest from '@ahooksjs/use-request';
import {
  Box,
  Divider,
  Grid,
  List,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import DASHBOARD_API from 'api/dashboard';
import { CusLoading } from 'components/CusLoading';
import DashboardCard from 'components/DashboardCard';
import useResponsive from 'hook/useResponsive';
import {
  BoxRemove,
  MoneyRecive,
  MoneySend,
  Profile2User,
  WalletAdd,
} from 'iconsax-react';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import theme from 'theme/theme';
import AnniversaryItem from './AnniversaryItem';
import DashboardHeader from './DashboardHeader';
import PieChartComp from './PieChartComp';

const Dashboard = () => {
  // use moment
  let monday = moment().weekday(0);
  let friday = moment().weekday(6);
  const [dateRange, setDateRange] = useState({
    startDate: moment(monday).format('YYYY-MM-DD'),
    endDate: moment(friday).format('YYYY-MM-DD'),
  });
  const { isMdDown } = useResponsive();
  // fetch total
  const {
    data: dashTotal,
    run: fetchDashTotal,
    loading: isDashLoading,
  } = useRequest(DASHBOARD_API.getTotals, {
    manual: true,
  });
  // fetch chart
  const { data: chartData, loading: isLoadingChart } = useRequest(
    DASHBOARD_API.getCharts,
    { manual: false }
  );
  // useEffect total
  useEffect(() => {
    fetchDashTotal({
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange]);
  // console.log(dateRange);
  // function generate month
  const monthGenerate = (value: number) => {
    switch (value) {
      case 1:
        return 'Jan';
      case 2:
        return 'Feb';
      case 3:
        return 'Mar';
      case 4:
        return 'Apr';
      case 5:
        return 'May';
      case 6:
        return 'Jun';
      case 7:
        return 'Jul';
      case 8:
        return 'Aug';
      case 9:
        return 'Sep';
      case 10:
        return 'Oct';
      case 11:
        return 'Nov';
      case 12:
        return 'Dec';
      default:
        return;
    }
  };
  // format cash
  const formatCash = (n: number) => {
    if (n < 1e3)
      return n.toLocaleString(undefined, { minimumFractionDigits: 2 });
    if (n >= 1e3 && n < 1e6)
      return n.toLocaleString(undefined, { minimumFractionDigits: 2 });
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
  };
  const CHART1_DATA = chartData?.charts.map((data) => {
    return {
      name: monthGenerate(data.month),
      Events: data.amount,
    };
  });
  const CHART2_DATA = chartData?.charts.map((data) => {
    return {
      name: monthGenerate(data.month),
      Sales: data.profits,
      Expenses: data.expenses,
    };
  });

  return (
    <>
      <DashboardHeader {...{ setDateRange, fetchDashTotal }} />
      {isDashLoading ? (
        <Stack
          sx={{ height: 'calc( 100vh - 74px )' }}
          justifyContent='center'
          alignItems={'center'}
        >
          <CusLoading />
        </Stack>
      ) : (
        <>
          <Stack direction={'row'}>
            <Grid container spacing={2} px={2}>
              <Grid item xs={12} sm={6} md={6} lg>
                <DashboardCard
                  title='Total Profits'
                  value={`${formatCash(
                    dashTotal?.totalProfits
                      ? dashTotal?.totalProfits - dashTotal?.totalExpenses
                      : 0
                  )} `}
                  icon={<MoneyRecive />}
                  startType={'$'}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg>
                <DashboardCard
                  title='Total Expenses'
                  value={`${formatCash(
                    dashTotal?.totalExpenses ? dashTotal?.totalExpenses : 0
                  )}`}
                  startType={'$'}
                  icon={<MoneySend />}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg>
                <DashboardCard
                  title='Total Orders'
                  value={`${dashTotal?.totalOrders}`}
                  icon={<WalletAdd />}
                  endType={'Events'}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg>
                <DashboardCard
                  title='Total Customers'
                  value={`${dashTotal?.totalCustomer}`}
                  // percentage='2.3%'
                  // isHigher
                  icon={<Profile2User />}
                  endType={'Customers'}
                />
              </Grid>
            </Grid>
          </Stack>
          <Stack
            mt={2}
            px={2}
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            height={{ xs: 1020, md: 400 }}
          >
            <Paper
              elevation={1}
              sx={{
                width: { xs: '100%', md: '60%' },
                py: 3,
                pr: 5,
              }}
            >
              <Typography fontWeight={500} variant='h5' ml={5} mb={3}>
                Events
              </Typography>
              {isLoadingChart ? (
                <Stack
                  sx={{ height: '100%' }}
                  justifyContent='center'
                  alignItems={'center'}
                >
                  <CusLoading />
                </Stack>
              ) : (
                <ResponsiveContainer width='100%' height='90%'>
                  <BarChart
                    data={CHART1_DATA}
                    barSize={25}
                    layout={isMdDown ? 'vertical' : 'horizontal'}
                  >
                    <CartesianGrid vertical={false} />

                    {isMdDown ? (
                      <>
                        <XAxis type='number' domain={[0, 100]} />
                        <YAxis dataKey='name' type='category' />
                      </>
                    ) : (
                      <>
                        <XAxis dataKey='name' />
                        <YAxis domain={[0, 100]} />
                      </>
                    )}

                    <Tooltip />
                    <Bar
                      dataKey='Events'
                      fill={theme.palette.primary.main}
                      orientation='top'
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </Paper>

            <Paper
              sx={{
                px: 3,
                flexGrow: 1,
                height: '100%',
                overflow: 'auto',
              }}
            >
              <Typography
                fontWeight={600}
                fontSize={18}
                pt={3}
                pb={2}
                position='sticky'
                top={0}
                zIndex={theme.zIndex.appBar - 1}
                bgcolor='common.white'
              >
                Upcoming Event
              </Typography>
              {chartData && chartData?.reminder.length > 0 ? (
                <List
                  sx={{
                    bgcolor: 'common.white',
                    p: 0,
                  }}
                >
                  {chartData?.reminder.map((data, i) => {
                    const dateFormat = moment(data.date).format('DD-MM-YYYY');
                    const s = moment(data.date).format('DD');
                    return (
                      <AnniversaryItem
                        key={i}
                        daysLeft={parseInt(s) - parseInt(moment().format('DD'))}
                        eventDate={dateFormat}
                        name={
                          data.customer !== null
                            ? data.customer.customer_name
                            : ''
                        }
                        invoiceId={data.id}
                        eventType={data.type}
                      />
                    );
                  })}
                </List>
              ) : (
                <Stack
                  direction={'column'}
                  alignItems={'center'}
                  justifyContent='center'
                  spacing={1}
                  sx={{ height: 'calc(100% - 100px)' }}
                >
                  <BoxRemove size='64' color={theme.palette.error.main} />
                  <Typography variant='body1' color='error'>
                    No upcoming event...
                  </Typography>
                </Stack>
              )}
            </Paper>
          </Stack>
          <Stack
            mt={2}
            px={2}
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            height={{ xs: 1300, md: 400 }}
            mb={4}
          >
            <Paper
              elevation={1}
              sx={{
                width: { xs: '100%', md: '60%' },
                height: { xs: 800, md: 'auto' },
                py: 3,
                pr: 5,
              }}
            >
              <Stack direction={'row'} justifyContent='space-between'>
                <Typography fontWeight={500} variant='h5' ml={5} mb={3}>
                  Sales Report
                </Typography>
                <Typography fontWeight={500} variant='subtitle1' mb={3}>
                  Total: $
                  {formatCash(
                    dashTotal?.totalProfits ? dashTotal?.totalProfits : 0
                  )}
                </Typography>
              </Stack>
              <ResponsiveContainer width='100%' height='90%'>
                <BarChart
                  data={CHART2_DATA}
                  barSize={15}
                  layout={isMdDown ? 'vertical' : 'horizontal'}
                >
                  <CartesianGrid vertical={false} />
                  {isMdDown ? (
                    <>
                      <XAxis type='number' domain={[0, 100]} />
                      <YAxis dataKey='name' type='category' />
                    </>
                  ) : (
                    <>
                      <XAxis dataKey='name' />
                      <YAxis type='number' domain={[0, 100]} />
                    </>
                  )}
                  <Tooltip />
                  <Legend />
                  <Bar dataKey='Sales' fill={theme.palette.success.main} />
                  <Bar dataKey='Expenses' fill={theme.palette.error.main} />
                </BarChart>
              </ResponsiveContainer>
            </Paper>

            <Paper
              sx={{
                px: 3,
                flexGrow: 1,
                overflow: 'auto',
                height: { xs: 'auto', md: '100%' },
                position: 'relative',
              }}
            >
              <Typography
                fontWeight={600}
                fontSize={18}
                pt={3}
                pb={2}
                position='sticky'
                top={0}
                zIndex={theme.zIndex.appBar}
                bgcolor='common.white'
              >
                Type of Event
              </Typography>
              <PieChartComp {...{ dashTotal }} />
              <Box
                position='absolute'
                bottom={0}
                left={0}
                width={'100%'}
                px={3}
              >
                <Divider
                  sx={{
                    borderBottomWidth: 0.1,
                    borderColor: theme.palette.divider,
                  }}
                />
              </Box>
            </Paper>
          </Stack>
        </>
      )}
    </>
  );
};

export default Dashboard;
