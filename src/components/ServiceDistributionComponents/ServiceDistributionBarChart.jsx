import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyDistribution = [
  { month: "Jan", Emergency: 120, Outpatient: 95, Inpatient: 68, Diagnostic: 45, Surgical: 22 },
  { month: "Feb", Emergency: 135, Outpatient: 102, Inpatient: 72, Diagnostic: 48, Surgical: 25 },
  { month: "Mar", Emergency: 142, Outpatient: 108, Inpatient: 75, Diagnostic: 52, Surgical: 28 },
  { month: "Apr", Emergency: 128, Outpatient: 98, Inpatient: 70, Diagnostic: 46, Surgical: 24 },
  { month: "May", Emergency: 155, Outpatient: 115, Inpatient: 82, Diagnostic: 58, Surgical: 32 },
  { month: "Jun", Emergency: 148, Outpatient: 112, Inpatient: 78, Diagnostic: 55, Surgical: 30 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.dataKey}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ServiceDistributionBarChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Service Distribution</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyDistribution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Emergency" stackId="a" fill="#3B82F6" />
            <Bar dataKey="Outpatient" stackId="a" fill="#10B981" />
            <Bar dataKey="Inpatient" stackId="a" fill="#8B5CF6" />
            <Bar dataKey="Diagnostic" stackId="a" fill="#F59E0B" />
            <Bar dataKey="Surgical" stackId="a" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServiceDistributionBarChart;

