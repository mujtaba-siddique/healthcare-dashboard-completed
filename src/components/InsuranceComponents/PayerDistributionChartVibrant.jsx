import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

// 1. Aapke pasandeeda vibrant color palette
const VIBRANT_COLORS = [
  '#22c55e', // Green
  '#3b82f6', // Blue
  '#a855f7', // Purple
  '#ef4444', // Red
  '#eab308', // Yellow
  '#f97316', // Orange
  '#ec4899', // Pink
  '#14b8a6', // Teal
  '#6366f1', // Indigo
  '#84cc16', // Lime
  '#0ea5e9', // Sky
  '#f43f5e', // Rose
];

// Data processing logic wahi hai
const payerRawData = [
  { name: "Mednet", amount: 71500 },
  { name: "OIC", amount: 35400 },
  { name: "FMC", amount: 26900 },
  { name: "Nas", amount: 26500 },
  { name: "Khat a Haya", amount: 20400 },
  { name: "Nextcare", amount: 7700 },
  { name: "Inayah", amount: 65000 },
  { name: "NGI", amount: 60000 },
  { name: "DHA", amount: 59000 },
  { name: "Almadallah", amount: 58000 },
  { name: "Neuron", amount: 58000 },
  { name: "Ecare", amount: 55000 },
];

const totalAmount = payerRawData.reduce((sum, item) => sum + item.amount, 0);
const processedData = payerRawData
  .map(item => ({
    ...item,
    percentage: ((item.amount / totalAmount) * 100).toFixed(1),
  }))
  .sort((a, b) => b.amount - a.amount);

const formatLabelValue = (value) => {
  if (value === 0) return '0K';
  return `${Math.round(value / 1000)}K`;
};

// Tooltip ka dark style light background par aacha lagta hai, toh use waisa he rakha hai
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-800 text-white p-3 rounded-lg shadow-lg border border-slate-700">
        <p className="font-semibold mb-2 text-base text-slate-100">{label}</p>
        <p className="text-sm flex justify-between text-slate-300">
          <span>Amount:</span>
          <span className="font-bold text-white">AED{" "}{data.amount.toLocaleString()}</span>
        </p>
        <p className="text-sm flex justify-between text-slate-300">
          <span>Share:</span>
          <span className="font-bold text-white">{data.percentage}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const PayerDistributionChartVibrant = () => {
  return (
    // 2. Light theme ke liye container ko wapas bg-white kiya gaya
    <div className="bg-white rounded-xl shadow-sm p-6 slide-up payer-chart-container">
      {/* 3. Title text ko dark kiya gaya */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Top Payers by Amount
      </h3>
      <div style={{ height: `${processedData.length * 38}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={processedData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" hide={true} />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={90}
              // 4. Y-Axis label ka rang dark kiya gaya
              tick={{ fontSize: 13, fill: '#374151', fontWeight: '500' }}
            />
            <Tooltip
              content={<CustomTooltip />}
              // 5. Light theme wala hover effect
              cursor={{ fill: 'rgba(229, 231, 235, 0.5)' }}
            />
            <Bar 
              dataKey="amount" 
              radius={[0, 4, 4, 0]} 
              // 6. Light theme wala bar track
              background={{ fill: '#f1f5f9', radius: 4 }}
            >
              {/* 7. Aapke pasandeeda naye color palette ka istemal */}
              {processedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={VIBRANT_COLORS[index % VIBRANT_COLORS.length]} />
              ))}
              <LabelList
                dataKey="amount"
                position="insideRight"
                formatter={formatLabelValue}
                // Safed rang label ke liye
                style={{ fill: "white", fontSize: "12px", fontWeight: "bold" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PayerDistributionChartVibrant;