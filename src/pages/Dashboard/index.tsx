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
  StatusUp,
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
import { MonthRanks } from 'utils/data-util';
import { DataFormater, formatCash } from 'utils/validate-util';
import AnniversaryItem from './AnniversaryItem';
import DashboardHeader from './DashboardHeader';
import PieChartComp from './PieChartComp';

const Dashboard = () => {
  // use moment
  let monday = moment().weekday(0);
  let friday = moment().weekday(6);
  const [toggleValue, setToggleValue] = useState<string | null>('week');
  const [dateRange, setDateRange] = useState({
    startDate: moment(monday).format('YYYY-MM-DD'),
    endDate: moment(friday).format('YYYY-MM-DD'),
  });
  const [loadingDateRange, setLoadingDateRange] = useState(false);
  const { isMdDown } = useResponsive();
  // fetch total
  const {
    data: dashTotal,
    run: fetchDashTotal,
    loading: isDashLoading,
  } = useRequest(DASHBOARD_API.getTotals, {
    manual: true,
    onSuccess: () => setLoadingDateRange(false),
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

  useEffect(() => {
    setLoadingDateRange(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleValue]);

  const CHART1_DATA = chartData?.charts.map((data) => {
    return {
      name: MonthRanks[data.month],
      Events: data.amount,
    };
  });
  const CHART2_DATA = chartData?.charts.map((data) => {
    return {
      name: MonthRanks[data.month],
      Sales: data.profits,
      Expenses: data.expenses,
    };
  });

  return (
    <>
      <DashboardHeader
        {...{ setDateRange, fetchDashTotal, setToggleValue, toggleValue }}
      />
      {isDashLoading && isLoadingChart ? (
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
              {isDashLoading ? (
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '146px',
                  }}
                >
                  <CusLoading />
                </Grid>
              ) : (
                <>
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
                      value={`${formatCash(dashTotal?.totalExpenses || 0)}`}
                      startType={'$'}
                      icon={<MoneySend />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg>
                    <DashboardCard
                      title='Total Orders'
                      value={`${dashTotal?.totalOrders || 0}`}
                      icon={<StatusUp />}
                      endType={'Events'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg>
                    <DashboardCard
                      title='Total Customers'
                      value={`${dashTotal?.totalCustomer || 0}`}
                      // percentage='2.3%'
                      // isHigher
                      icon={<Profile2User />}
                      endType={'Customers'}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Stack>
          <Stack
            mt={2}
            px={2}
            direction={{ xs: 'column-reverse', md: 'row' }}
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

              <ResponsiveContainer width='100%' height='90%'>
                <BarChart
                  data={CHART1_DATA}
                  barSize={25}
                  layout={isMdDown ? 'vertical' : 'horizontal'}
                >
                  <CartesianGrid vertical={false} />

                  {isMdDown ? (
                    <>
                      <XAxis type='number' domain={[0, 20]} />
                      <YAxis dataKey='name' type='category' />
                    </>
                  ) : (
                    <>
                      <XAxis dataKey='name' />
                      <YAxis domain={[0, 20]} />
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
                    return (
                      <AnniversaryItem
                        key={i}
                        daysLeft={1 - moment().diff(data.date, 'days')}
                        name={
                          data.customer !== null
                            ? data.customer.customer_name
                            : 'No Customer'
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
                  {isDashLoading || loadingDateRange
                    ? 'Calculating Income...'
                    : `${
                        'Total Income: $' +
                        formatCash(
                          dashTotal?.totalProfits ? dashTotal?.totalProfits : 0
                        )
                      }${
                        toggleValue ? `/this ${toggleValue}` : `/specific date`
                      }`}
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
                      <XAxis type='number' domain={[0, 100000]} />
                      <YAxis
                        dataKey='name'
                        type='category'
                        tickFormatter={DataFormater}
                      />
                    </>
                  ) : (
                    <>
                      <XAxis dataKey='name' />
                      <YAxis
                        type='number'
                        domain={[0, 100000]}
                        tickFormatter={DataFormater}
                      />
                      <Tooltip formatter={formatCash} />
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
