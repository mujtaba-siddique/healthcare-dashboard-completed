import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

// Priority-based bar colors
const priorityColors = {
  High: '#ef4444',
  Medium: '#f59e0b',
  Low: '#3b82f6',
};

// Chart data with color mapping
const data = [
  { category: "Ready to Submit", count: 45, amount: 125000, priority: "High" },
  { category: "Awaiting Documentation", count: 32, amount: 89000, priority: "Medium" },
  { category: "Under Review", count: 28, amount: 76000, priority: "Medium" },
  { category: "Pending Approval", count: 18, amount: 52000, priority: "Low" },
  { category: "On Hold", count: 12, amount: 34000, priority: "Low" },
].map(item => ({
  ...item,
  color: priorityColors[item.priority] || '#6b7280',
}));

// Custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { category, count, amount, priority, color } = payload[0].payload;

  return (
    <div className="bg-white p-3 rounded shadow text-sm border border-gray-200">
      <p className="font-semibold text-gray-900">{category}</p>
      <p style={{ color }}>Claims Count: <strong>{count}</strong></p>
      <p>Total Amount: <strong>AED{" "}{amount.toLocaleString()}</strong></p>
      {/* <p>Priority: <strong>{priority}</strong></p> */}
    </div>
  );
};

const ResubmissionCategoriesChart = () => (
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Resubmission Queue</h3>
    <div style={{ height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
          <XAxis type="number" stroke="#6b7280" tickLine={false} axisLine={false} />
          <YAxis
            type="category"
            dataKey="category"
            stroke="#6b7280"
            tickLine={false}
            axisLine={false}
            width={140}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(243, 244, 246, 0.7)' }} />
          <Bar dataKey="count" background={{ fill: '#f1f5f9' }} radius={[0, 4, 4, 0]}>
            {data.map((item, i) => (
              <Cell key={i} fill={item.color} />
            ))}
            <LabelList
              dataKey="count"
              position="right"
              style={{ fill: '#1f2937', fontSize: 12, fontWeight: 500 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ResubmissionCategoriesChart;
