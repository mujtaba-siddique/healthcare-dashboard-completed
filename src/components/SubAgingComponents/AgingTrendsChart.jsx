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

const agingTrends = [
  { month: "Jan", "0-30": 1200, "31-60": 800, "61-90": 400, "91-120": 200, "120+": 100 },
  { month: "Feb", "0-30": 1150, "31-60": 850, "61-90": 420, "91-120": 210, "120+": 110 },
  { month: "Mar", "0-30": 1300, "31-60": 780, "61-90": 380, "91-120": 190, "120+": 95 },
  { month: "Apr", "0-30": 1280, "31-60": 820, "61-90": 450, "91-120": 220, "120+": 105 },
  { month: "May", "0-30": 1350, "31-60": 900, "61-90": 480, "91-120": 240, "120+": 130 },
  { month: "Jun", "0-30": 1245, "31-60": 892, "61-90": 456, "91-120": 234, "120+": 123 },
];

const AgingTrendsChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Aging Trends Over Time</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={agingTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="0-30" stroke="#10B981" strokeWidth={2} />
            <Line type="monotone" dataKey="31-60" stroke="#F59E0B" strokeWidth={2} />
            <Line type="monotone" dataKey="61-90" stroke="#EF4444" strokeWidth={2} />
            <Line type="monotone" dataKey="91-120" stroke="#8B5CF6" strokeWidth={2} />
            <Line type="monotone" dataKey="120+" stroke="#6B7280" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AgingTrendsChart;

