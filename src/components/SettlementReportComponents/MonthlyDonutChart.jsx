import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonthlyDonutChart = () => {
  const performanceData = [
    { month: 'Jan', amountAED: 37.43 },
    { month: 'Feb', amountAED: 40.74 },
    { month: 'Mar', amountAED: 39.64 },
    { month: 'Apr', amountAED: 43.31 },
    { month: 'May', amountAED: 44.41 },
    { month: 'Jun', amountAED: 45.51 },
    { month: 'Jul', amountAED: 48.12 },
    { month: 'Aug', amountAED: 50.23 },
    { month: 'Sep', amountAED: 52.34 },
    { month: 'Oct', amountAED: 54.45 },
    { month: 'Nov', amountAED: 56.56 },
    { month: 'Dec', amountAED: 58.67 },
  ];

  const COLORS = [
  '#8884d8', // Purple
  '#82ca9d', // Light Green
  '#FFBB28', // Yellow
  '#FF8042', // Orange
  '#0088FE', // Blue
  '#00C49F', // Aqua Green
  '#FF6699', // Pink
  '#AA46BE', // Violet
  '#33CCCC', // Teal
  '#FF6666', // Light Red
  '#66CC66', // Lime Green
  '#9966FF', // Indigo
];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const formatAED = (value) =>
        new Intl.NumberFormat('en-AE', {
          style: 'currency',
          currency: 'AED',
        }).format(value * 1000000);

      return (
        <div className="bg-white p-3 border rounded shadow-lg">
          <p className="font-bold">{`${payload[0].name}`}</p>
          <p className="text-sm" style={{ color: payload[0].payload.fill }}>
            {`Amount: ${formatAED(payload[0].value)}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 w-full  mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        Monthly Contribution to Total Revenue
      </h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={performanceData}
              cx="50%"
              cy="50%"
              dataKey="amountAED"
              nameKey="month"
              outerRadius={160}
              innerRadius={80}
              fill="#8884d8"
              paddingAngle={3}
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {performanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyDonutChart;