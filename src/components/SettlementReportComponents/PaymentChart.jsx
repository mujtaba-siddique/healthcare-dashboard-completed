import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PaymentChart = () => {
  // Sample data for the bar chart
  const paymentData = [
   
    { date: '23 Feb', paid: 128.69 },
    { date: '20 Feb', paid: 2990.22 },
    { date: '13 Feb', paid: 36.73 },
    { date: '12 Feb', paid: 3249.10 },
    { date: '9 Feb', paid: 60.49 },
    { date: '7 Feb', paid: 2646.94 },
    { date: '1 Feb', paid: 1422.53 }
  ];
  // Format function for Y-axis values
  const yAxisFormatter = (value) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value;
  };

  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const amount = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
      }).format(payload[0].value);

      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow-lg">
          <p className="label text-sm font-semibold">{`${label}`}</p>
          <p className="intro text-sm" style={{ color: payload[0].color }}>
            {`Paid: ${amount}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Daily Paid Amount 
      </h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={paymentData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }} 
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              tickFormatter={yAxisFormatter} 
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(230, 230, 230, 0.4)' }}/>
            <Legend />
            <Bar dataKey="paid" name="Paid Amount" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentChart;