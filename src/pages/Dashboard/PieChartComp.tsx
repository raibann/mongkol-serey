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

const COLORS = [
  theme.palette.primary.main,
  theme.palette.success.main,
  theme.palette.warning.main,
  theme.palette.error.main,
];

const PieChartComp = ({
  dashTotal,
}: {
  dashTotal: IDashboard.IDashboardData | undefined;
}) => {
  const data = [
    { name: 'Wedding', value: dashTotal?.eventType.Wedding },
    { name: 'Birthday', value: dashTotal?.eventType.Birthday },
    { name: 'Party', value: dashTotal?.eventType.Party },
    { name: 'Other', value: dashTotal?.eventType.Other },
  ];

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
