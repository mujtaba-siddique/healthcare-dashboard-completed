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

const SettlementTrendsChart = () => {
  const settlementTrends = [
    { month: "Jan", settlements: 1650, amount: 10.2, rate: 91 },
    { month: "Feb", settlements: 1720, amount: 11.1, rate: 92 },
    { month: "Mar", settlements: 1680, amount: 10.8, rate: 90 },
    { month: "Apr", settlements: 1780, amount: 11.8, rate: 93 },
    { month: "May", settlements: 1820, amount: 12.1, rate: 94 },
    { month: "Jun", settlements: 1847, amount: 12.4, rate: 94 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Settlement Trends</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={settlementTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="settlements" stroke="#3B82F6" strokeWidth={2} name="Settlements" />
            <Line type="monotone" dataKey="amount" stroke="#10B981" strokeWidth={2} name="Amount ($M)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SettlementTrendsChart;
