import React from 'react';
import {
  Pie,
  Cell,
  PieChart,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import theme from 'theme/theme';

const data = [
  { name: 'Wedding', value: 400 },
  { name: 'Birthday', value: 300 },
  { name: 'House Warming', value: 300 },
  { name: 'Other', value: 200 },
];
const COLORS = [
  theme.palette.primary.main,
  theme.palette.success.main,
  theme.palette.warning.main,
  theme.palette.error.main,
];

const PieChartComp = () => {
  return (
    <ResponsiveContainer width='100%' height='65%'>
      <PieChart margin={{ bottom: 24, left: 56, right: 56 }}>
        <Legend />
        <Tooltip />
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey='value'
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComp;
