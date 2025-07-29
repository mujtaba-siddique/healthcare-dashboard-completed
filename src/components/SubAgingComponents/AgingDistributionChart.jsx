import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const agingBuckets = [
  { bucket: "0-30 days", count: 1245, amount: 2850000, percentage: 45 },
  { bucket: "31-60 days", count: 892, amount: 1890000, percentage: 32 },
  { bucket: "61-90 days", count: 456, amount: 1240000, percentage: 16 },
  { bucket: "91-120 days", count: 234, amount: 680000, percentage: 5 },
  { bucket: "120+ days", count: 123, amount: 340000, percentage: 2 },
];

const AgingDistributionChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Aging Distribution</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={agingBuckets}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bucket" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AgingDistributionChart;

