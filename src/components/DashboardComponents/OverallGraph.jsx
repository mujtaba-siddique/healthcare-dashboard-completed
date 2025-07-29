import React from 'react';
import {
  ComposedChart, // 1. Switched to ComposedChart for mixed chart types
  Bar,
  Line,        // 2. Imported Line for the rejections data
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Original raw data
const yearlyRawData = [
  { year: '2022', Submissions: 2100000, Payments: 1950000, Rejections: 75000 },
  { year: '2023', Submissions: 2400000, Payments: 2250000, Rejections: 85000 },
  { year: '2024', Submissions: 2800000, Payments: 2680000, Rejections: 80000 },
  // 3. Data for the current year (2025) will be handled as YTD
  // For this example, let's assume it's ~7/12ths of the way through the year
  { year: '2025', Submissions: 1700000, Payments: 1600000, Rejections: 48000 },
];

// 4. Process data to add a YTD label for the current year
const currentYear = new Date().getFullYear().toString();
const processedData = yearlyRawData.map(item => ({
  ...item,
  // Add a (YTD) label to the current year's data point for clarity
  yearLabel: item.year === currentYear ? `${item.year} (YTD)` : item.year,
}));


// Function to format large currency numbers for the Y-axis (e.g., 2,000,000 -> $2M)
const formatCurrencyAxis = (tick) => `$${(tick / 1000000).toFixed(1)}M`;
// Function to format smaller numbers for the rejections axis
const formatCountAxis = (tick) => `${(tick / 1000)}k`;


// Custom tooltip to display all data points clearly
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold text-gray-900 mb-2">{`Year: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm font-medium">
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Custom legend for a cleaner look
const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center items-center gap-6 pt-4">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: entry.color }}></div>
            <span className="text-sm text-gray-600">{entry.value}</span>
          </div>
        ))}
      </div>
    );
};


const YearlyComparisonChart = () => {
  // Dynamically generate the title based on the data years
  const startYear = processedData[0].year;
  const endYear = processedData[processedData.length - 1].year;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 slide-up">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Yearly Performance 
      </h3>
      <div style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={processedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="yearLabel" stroke="#6b7280" tick={{ fontSize: 12 }} />
            
            {/* 5. Left Y-Axis for Submissions and Payments (in Millions) */}
            <YAxis
              yAxisId="left"
              tickFormatter={formatCurrencyAxis}
              stroke="#6b7280"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            
            {/* 6. Right Y-Axis for Rejections (in Thousands) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={formatCountAxis}
              stroke="#ef4444"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(243, 244, 246, 0.7)' }}/>
            <Legend content={<CustomLegend />} />
            
            {/* 7. Bars for large values, associated with the left Y-Axis */}
            <Bar yAxisId="left" dataKey="Submissions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="left" dataKey="Payments" fill="#10b981" radius={[4, 4, 0, 0]} />
            
            {/* 8. Line for small values, associated with the right Y-Axis */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Rejections"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyComparisonChart;