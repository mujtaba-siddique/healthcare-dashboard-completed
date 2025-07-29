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

const resubmissionTrends = [
  { month: "Jan", submitted: 120, pending: 85, resolved: 95 },
  { month: "Feb", submitted: 135, pending: 92, resolved: 108 },
  { month: "Mar", submitted: 128, pending: 88, resolved: 102 },
  { month: "Apr", submitted: 142, pending: 95, resolved: 115 },
  { month: "May", submitted: 156, pending: 102, resolved: 128 },
  { month: "Jun", submitted: 148, pending: 135, resolved: 122 },
];

const ResubmissionTrendsChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Resubmission Trends</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={resubmissionTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="submitted" stroke="#10B981" strokeWidth={2} name="Submitted" />
            <Line type="monotone" dataKey="pending" stroke="#F59E0B" strokeWidth={2} name="Pending" />
            <Line type="monotone" dataKey="resolved" stroke="#3B82F6" strokeWidth={2} name="Resolved" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResubmissionTrendsChart;

