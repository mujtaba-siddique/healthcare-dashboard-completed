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

const resubmissionStats = [
  { category: "Ready to Submit", count: 45, amount: 125000, priority: "High" },
  { category: "Awaiting Documentation", count: 32, amount: 89000, priority: "Medium" },
  { category: "Under Review", count: 28, amount: 76000, priority: "Medium" },
  { category: "Pending Approval", count: 18, amount: 52000, priority: "Low" },
  { category: "On Hold", count: 12, amount: 34000, priority: "Low" },
];

const ResubmissionCategoriesChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Resubmission Categories</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={resubmissionStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResubmissionCategoriesChart;

