import React, { useState, useCallback, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts';

// 1. PayerDistributionChart se data liya gaya
const payerRawData = [
  { name: "Mednet", amount: 715000 },
  { name: "OIC", amount: 354000 },
  { name: "FMC", amount: 269000 },
  { name: "Nas", amount: 265000 },
  { name: "Khat a Haya", amount: 204000 },
  { name: "Nextcare", amount: 77000 },
  { name: "Inayah", amount: 65000 },
  { name: "NGI", amount: 60000 },
  { name: "DHA", amount: 59000 },
  { name: "Almadallah", amount: 58000 },
  { name: "Neuron", amount: 58000 },
  { name: "Ecare", amount: 55000 },
];

// 2. Wahi vibrant color palette
const VIBRANT_COLORS = [
  '#22c55e', '#3b82f6', '#a855f7', '#ef4444', '#eab308',
];
const OTHERS_COLOR = '#6b7280'; // Gray color for "Others" category

// 3. Data ko process karne ka logic: Top 5 + Others
const processPieData = (data) => {
  const sortedData = [...data].sort((a, b) => b.amount - a.amount);
  const top5 = sortedData.slice(0, 5);
  const others = sortedData.slice(5);

  const othersAmount = others.reduce((sum, item) => sum + item.amount, 0);

  const processed = top5.map((item, index) => ({
    ...item,
    color: VIBRANT_COLORS[index],
  }));

  if (others.length > 0) {
    processed.push({
      name: 'Others',
      amount: othersAmount,
      color: OTHERS_COLOR,
    });
  }
  
  return processed;
};

// --- Interactive Shape Renderer (No changes needed) ---
const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const RADIAN = Math.PI / 180;
// --- Custom Label Renderer (No changes needed) ---
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.05) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" style={{ fontSize: '14px', fontWeight: 'bold' }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// 4. Tooltip ko naye data ke hisab se update kiya gaya
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gray-900 bg-opacity-90 p-4 shadow-lg rounded-lg border border-gray-700 text-white">
        <div className="flex items-center mb-2">
          <span className="w-3 h-3 rounded-full inline-block mr-3 border-2 border-white" style={{ backgroundColor: data.color }}></span>
          <p className="font-bold text-lg">{data.name}</p>
        </div>
        <p className="text-sm text-gray-300">Amount: <span className="font-medium text-white">${data.amount.toLocaleString()}</span></p>
      </div>
    );
  }
  return null;
};

const PayerPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // useMemo ensures data is processed only when raw data changes
  const pieData = useMemo(() => processPieData(payerRawData), [payerRawData]);

  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, [setActiveIndex]);

  const onPieLeave = useCallback(() => {
    setActiveIndex(null);
  }, [setActiveIndex]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Payer Distribution</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">View Details</button>
      </div>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius={70}
              outerRadius={120}
              paddingAngle={2}
              // 5. Data key ko 'amount' kiya gaya
              dataKey="amount"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={"#fff"} strokeWidth={2}/>
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* 6. Legend ko naye data ke hisab se update kiya gaya */}
      <div className="flex justify-center flex-wrap items-center gap-x-6 gap-y-2 mt-4 pt-4 border-t border-gray-100">
        {pieData.map((entry) => (
          <div key={entry.name} className="flex items-center">
            <span className="w-3 h-3 rounded-full inline-block mr-2" style={{ backgroundColor: entry.color }}></span>
            <span className="text-sm text-gray-700">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayerPieChart;