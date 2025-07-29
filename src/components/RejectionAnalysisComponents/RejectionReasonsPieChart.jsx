import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const rejectionReasons = [
  { reason: "Missing Documentation", count: 245, percentage: 35, color: "#EF4444" },
  { reason: "Invalid Coding", count: 189, percentage: 27, color: "#F59E0B" },
  { reason: "Authorization Required", count: 134, percentage: 19, color: "#8B5CF6" },
  { reason: "Duplicate Claim", count: 89, percentage: 13, color: "#10B981" },
  { reason: "Other", count: 43, percentage: 6, color: "#6B7280" },
];

const RejectionReasonsPieChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Rejection Reasons</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={rejectionReasons}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ reason, percentage }) => `${reason} ${percentage}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
            >
              {rejectionReasons.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RejectionReasonsPieChart;

