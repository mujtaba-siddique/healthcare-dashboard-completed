import React, { useState, useCallback } from 'react'; // Import hooks
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts'; // Import Sector

// Mock data for insurance types
const insuranceTypesData = [
  { type: 'Medicare', claims: 450, amount: 225000, percentage: 35.2, color: '#3b82f6' },
  { type: 'Medicaid', claims: 320, amount: 160000, percentage: 25.0, color: '#10b981' },
  { type: 'Private Insurance', claims: 380, amount: 285000, percentage: 29.7, color: '#f59e0b' },
  { type: 'Workers Comp', claims: 85, amount: 42500, percentage: 6.6, color: '#ef4444' },
  { type: 'Self-Pay', claims: 45, amount: 22500, percentage: 3.5, color: '#8b5cf6' },
];

// This function now renders the shape that "pops out" on hover
const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8} // Makes the slice pop out
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gray-900 bg-opacity-90 p-4 shadow-lg rounded-lg border border-gray-700 text-white">
        <div className="flex items-center mb-2">
          <span className="w-3 h-3 rounded-full inline-block mr-3 border-2 border-white" style={{ backgroundColor: data.color }}></span>
          <p className="font-bold text-lg">{data.type}</p>
        </div>
        <p className="text-sm text-gray-300">Claims: <span className="font-medium text-white">{data.claims.toLocaleString()}</span></p>
        <p className="text-sm text-gray-300">Amount: <span className="font-medium text-white">${data.amount.toLocaleString()}</span></p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;

const InsuranceTypesChart = () => {
  // --- NEW: State to track the active slice ---
  const [activeIndex, setActiveIndex] = useState(null);

  // --- NEW: Handlers for mouse events ---
  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, [setActiveIndex]);

  const onPieLeave = useCallback(() => {
    setActiveIndex(null);
  }, [setActiveIndex]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 slide-up" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Insurance Types Distribution</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">View Details</button>
      </div>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              // --- NEW: Props to control the active state ---
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              // --- End of new props ---
              data={insuranceTypesData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius={70}
              outerRadius={120}
              paddingAngle={2}
              fill="#8884d8"
              dataKey="claims"
            >
              {insuranceTypesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center flex-wrap items-center gap-x-6 gap-y-2 mt-4 pt-4 border-t border-gray-100">
        {insuranceTypesData.map((entry) => (
          <div key={entry.type} className="flex items-center">
            <span className="w-3 h-3 rounded-full inline-block mr-2" style={{ backgroundColor: entry.color }}></span>
            <span className="text-sm text-gray-700">{entry.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceTypesChart;