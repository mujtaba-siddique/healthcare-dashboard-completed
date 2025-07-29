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

const SettlementsByPayerChart = () => {
  const settlementsByPayer = [
    { payer: "Medicare", settlements: 485, amount: 3.2, avgTime: 16 },
    { payer: "Medicaid", settlements: 392, amount: 2.1, avgTime: 20 },
    { payer: "Blue Cross", settlements: 341, amount: 2.8, avgTime: 15 },
    { payer: "Aetna", settlements: 298, amount: 2.0, avgTime: 17 },
    { payer: "Cigna", settlements: 186, amount: 1.2, avgTime: 19 },
    { payer: "UnitedHealth", settlements: 145, amount: 1.1, avgTime: 18 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Settlements by Payer</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={settlementsByPayer}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="payer" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="settlements" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SettlementsByPayerChart;
