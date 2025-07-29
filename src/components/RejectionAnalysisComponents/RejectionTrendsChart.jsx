import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const rejectionTrends = [
  { month: "Jan", rejections: 680, total: 3200, rate: 21.3 },
  { month: "Feb", rejections: 720, total: 3400, rate: 21.2 },
  { month: "Mar", rejections: 650, total: 3100, rate: 21.0 },
  { month: "Apr", rejections: 590, total: 2900, rate: 20.3 },
  { month: "May", rejections: 540, total: 2800, rate: 19.3 },
  { month: "Jun", rejections: 700, total: 3500, rate: 20.0 },
];

const RejectionTrendsChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Rejection Rate Trends</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rejectionTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#EF4444"
              strokeWidth={3}
              name="Rejection Rate (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RejectionTrendsChart;

