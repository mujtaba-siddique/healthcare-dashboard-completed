import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

// Custom Tooltip for better styling and information display
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
        <p className="font-bold text-gray-800">{`${label}`}</p>
        <p className="text-sm text-purple-600">{`Claim Average: AED ${payload[0].value.toFixed(2)} `}</p>
      </div>
    );
  }
  return null;
};


const QuarterlyAveragesChart = () => {
  // Data from your previously provided image, sorted chronologically
  const quarterlyData = [
    { quarter: "2024 Q1", average: 53.92 },
    { quarter: "2024 Q2", average: 57.82 },
    { quarter: "2024 Q3", average: 53.75 },
    { quarter: "2024 Q4", average: 54.64 },
    { quarter: "2025 Q1", average: 60.74 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Claim Average by Quarter</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={quarterlyData}
            margin={{
              top: 5,
              right: 20,
              left: 30, // Increased left margin for the Y-axis label
              bottom: 5,
            }}
          >
            {/* A subtle grid for better readability */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            
            {/* X-axis representing the quarters */}
            <XAxis 
              dataKey="quarter" 
              tick={{ fontSize: 12, fill: '#4A5568' }} 
              axisLine={false} 
              tickLine={false} 
            />
            
            {/* Y-axis representing the average amount */}
            <YAxis 
              tick={{ fontSize: 12, fill: '#4A5568' }} 
              axisLine={false} 
              tickLine={false}
            >
                <Label 
                    value="Claim Average (AED)" 
                    angle={-90} 
                    position="insideLeft"
                    style={{ textAnchor: 'middle', fill: '#374151' }} 
                />
            </YAxis>

            {/* Tooltip with custom styling */}
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(139, 92, 246, 0.1)' }} />
            
            {/* The bars representing the average value, with rounded tops */}
            <Bar dataKey="average" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuarterlyAveragesChart;
