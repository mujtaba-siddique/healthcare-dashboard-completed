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

const RejectionsByPayerChart = () => {
  // Payer ke naam aur data ko yahan badal aur jod diya gaya hai
  const rejectionsByPayer = [
    { payer: "Mednet", rejections: 180, total: 800, rate: 22.5 },
    { payer: "OIC", rejections: 150, total: 600, rate: 25.0 },
    { payer: "Nas", rejections: 120, total: 700, rate: 17.1 },
    { payer: "FMC", rejections: 100, total: 500, rate: 20.0 },
    { payer: "Nextcare", rejections: 80, total: 450, rate: 17.8 },
    { payer: "DHA", rejections: 70, total: 400, rate: 17.5 },
    { payer: "Inayah", rejections: 65, total: 350, rate: 18.6 },
    { payer: "Almadallah", rejections: 55, total: 300, rate: 18.3 },
    { payer: "NGI", rejections: 45, total: 250, rate: 18.0 },
    { payer: "Neuron", rejections: 30, total: 200, rate: 15.0 },
  ];

  // Custom Tooltip for better display
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-sm" style={{ color: payload[0].color }}>
            Rejections: {payload[0].value}
          </p>
          <p className="text-sm" style={{ color: payload[1].color }}>
            Rejection Rate: {payload[1].value}%
          </p>
           <p className="text-xs text-gray-500 mt-1">
            Total Claims: {payload[0].payload.total}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Rejections by Payer
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Comparison of claim rejections across different payers.
      </p>
      <div className="h-96"> {/* Increased height for better visibility */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={rejectionsByPayer}
            margin={{
              top: 5,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="payer" 
              tick={{ fontSize: 12 }} 
              angle={-10} 
              textAnchor="end"
              height={50}
            />
            <YAxis yAxisId="left" orientation="left" stroke="#EF4444" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="right" orientation="right" stroke="#F59E0B" tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
            <Bar yAxisId="left" dataKey="rejections" fill="#EF4444" name="Rejections" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="rate" fill="#F59E0B" name="Rate (%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RejectionsByPayerChart;
