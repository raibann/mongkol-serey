import {
  Box,
  Button,
  Divider,
  List,
  Paper,
  Stack,
  Tabs,
  Typography,
} from '@mui/material';
import DashboardCard from 'components/DashboardCard';
import useResponsive from 'hook/useResponsive';
import {
  ArrowRight2,
  DollarCircle,
  Profile2User,
  WalletAdd,
} from 'iconsax-react';
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

const CHART1_DATA = [
  {
    name: 'Jan',
    Events: 15,
  },
  {
    name: 'Feb',
    Events: 30,
  },
  {
    name: 'Mar',
    Events: 20,
  },
  {
    name: 'Apr',
    Events: 27,
  },
  {
    name: 'May',
    Events: 18,
  },
  {
    name: 'Jun',
    Events: 23,
  },
  {
    name: 'Jul',
    Events: 34,
  },
  {
    name: 'Aug',
    Events: 10,
  },
  {
    name: 'Sep',
    Events: 28,
  },
  {
    name: 'Oct',
    Events: 34,
  },
  {
    name: 'Nov',
    Events: 23,
  },
  {
    name: 'Dec',
    Events: 16,
  },
];

const CHART2_DATA = [
  {
    name: 'Jan',
    Sales: 27,
    Expenses: 10,
  },
  {
    name: 'Feb',
    Sales: 30,
    Expenses: 20,
  },
  {
    name: 'Mar',
    Sales: 20,
    Expenses: 10,
  },
  {
    name: 'Apr',
    Sales: 27,
    Expenses: 17,
  },
  {
    name: 'May',
    Sales: 18,
    Expenses: 8,
  },
  {
    name: 'Jun',
    Sales: 23,
    Expenses: 15,
  },
  {
    name: 'Jul',
    Sales: 34,
    Expenses: 13,
  },
  {
    name: 'Aug',
    Sales: 10,
    Expenses: 4,
  },
  {
    name: 'Sep',
    Sales: 28,
    Expenses: 7,
  },
  {
    name: 'Oct',
    Sales: 34,
    Expenses: 22,
  },
  {
    name: 'Nov',
    Sales: 23,
    Expenses: 20,
  },
  {
    name: 'Dec',
    Sales: 16,
    Expenses: 10,
  },
];

const Anniversary = Array(4).fill({
  name: 'Meas Saominea',
  lastOrder: '30-02-2002',
  daysLeft: 3,
});

const Dashboard = () => {
  const { isMdDown } = useResponsive();

  return (
    <>
      <DashboardHeader />
      <Stack direction={'row'} pl={2}>
        <Tabs value={false} variant='scrollable' scrollButtons={false}>
          <DashboardCard
            title='Total Profits'
            value='$100,000'
            percentage='2.3%'
            isHigher
            icon={<DollarCircle />}
            type={''}
          />
          <DashboardCard
            title='Total Expenses'
            value='$50,000'
            percentage='2%'
            icon={<DollarCircle />}
            type={''}
          />
          <DashboardCard
            title='Total Orders'
            value='100'
            percentage='5%'
            isHigher
            icon={<WalletAdd />}
            type={'Events'}
          />
          <DashboardCard
            title='Total Customers'
            value='100'
            percentage='2.3%'
            isHigher
            icon={<Profile2User />}
            type={'Customers'}
          />
        </Tabs>
      </Stack>

      {/* <Stack direction='row' px={2}></Stack> */}

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
        </Paper>

        <Paper
          sx={{
            px: 3,
            flexGrow: 1,
            height: '100%',
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
            Upcoming Anniversary
          </Typography>
          <List sx={{ width: '100%', bgcolor: 'common.white', p: 0 }}>
            {Anniversary.map((data, i) => {
              return (
                <AnniversaryItem
                  key={i}
                  daysLeft={data.daysLeft}
                  lastOrder={data.lastOrder}
                  name={data.name}
                />
              );
            })}
          </List>
          <Divider
            sx={{
              borderColor: theme.palette.divider,
              mt: 2.5,
            }}
          />
          <Button
            sx={{ color: theme.palette.primary.dark, py: 2 }}
            endIcon={<ArrowRight2 size={16} />}
          >
            More Insights
          </Button>
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
          <Typography fontWeight={500} variant='h5' ml={5} mb={3}>
            Sales Report
          </Typography>
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
          <PieChartComp />
          <Box position='absolute' bottom={0} left={0} width={'100%'} px={3}>
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
  );
};

export default Dashboard;
