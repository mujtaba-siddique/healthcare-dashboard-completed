import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const distributionData = [
  { name: "Emergency", value: 35, amount: 2850000, color: "#3B82F6" },
  { name: "Outpatient", value: 28, amount: 1890000, color: "#10B981" },
  { name: "Inpatient", value: 20, amount: 4560000, color: "#8B5CF6" },
  { name: "Diagnostic", value: 12, amount: 890000, color: "#F59E0B" },
  { name: "Surgical", value: 5, amount: 3240000, color: "#EF4444" },
];

const ServiceDistributionPieChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Distribution by Volume</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {distributionData.map((entry, index) => (
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

export default ServiceDistributionPieChart;

