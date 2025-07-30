import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


const rejectedByDenialCode = [
  { reason: "PRCE-003", count: 2000, percentage: 27, color: "#8884d8" },
  { reason: "CLAI-018", count: 1800, percentage: 24, color: "#82ca9d" },
  { reason: "DUPL-001", count: 1800, percentage: 24, color: "#ffc658" },
  { reason: "PRCE-001", count: 1000, percentage: 14, color: "#ff8042" },
  { reason: "CLAI-012", count: 800,  percentage: 11, color: "#00C49F" },
];

// Tooltip ke liye custom component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{data.reason}</p>
        <p className="text-sm text-gray-600">Count: {data.count.toLocaleString()}</p>
        <p className="text-sm text-gray-600">Percentage: {data.percentage}%</p>
      </div>
    );
  }
  return null;
};

const DenialCodePieChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Rejected by Denial Code
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Analysis of rejections based on denial codes.
      </p>
      
      <div className="flex flex-col md:flex-row items-center -mt-4">
        {/* Chart Section */}
        <div className="w-full md:w-1/2 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={rejectedByDenialCode}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={40} // Donut chart banane ke liye
                outerRadius={95}
                paddingAngle={2}
                fill="#8884d8"
                dataKey="percentage"
              >
                {rejectedByDenialCode.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
          <div className="space-y-4">
            {rejectedByDenialCode.map((entry) => (
              <div key={entry.reason} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-gray-700 text-base">{entry.reason}</span>
                </div>
                <span className="font-semibold text-gray-900 text-base">{entry.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenialCodePieChart;