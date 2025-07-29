// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// const distributionData = [
//   { name: "Emergency", value: 35, amount: 2850000, color: "#3B82F6" },
//   { name: "Outpatient", value: 28, amount: 1890000, color: "#10B981" },
//   { name: "Inpatient", value: 20, amount: 4560000, color: "#8B5CF6" },
//   { name: "Diagnostic", value: 12, amount: 890000, color: "#F59E0B" },
//   { name: "Surgical", value: 5, amount: 3240000, color: "#EF4444" },
// ];

// const ServiceDistributionPieChart = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Distribution by Volume</h2>
//       <div className="h-80">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={distributionData}
//               cx="50%"
//               cy="50%"
//               labelLine={false}
//               label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//               outerRadius={80}
//               fill="#8884d8"
//               dataKey="value"
//             >
//               {distributionData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default ServiceDistributionPieChart;

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

// बेहतर Tooltip बनाने के लिए एक कस्टम कंपोनेंट
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{data.name}</p>
        <p className="text-sm text-gray-600">Volume: {data.value}%</p>
        <p className="text-sm text-gray-600">
          Amount: $ {data.amount.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const ServiceDistributionPieChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Service Distribution
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Distribution of services by claim volume.
      </p>
      
      <div className="flex flex-col md:flex-row items-center -mt-4">
        {/* Chart Section */}
        <div className="w-full md:w-1/2 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={60} // Donut chart banane ke liye
                outerRadius={100}
                paddingAngle={2}
                fill="#8884d8"
                dataKey="value"
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
          <div className="space-y-4">
            {distributionData.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-gray-700 text-base">{entry.name}</span>
                </div>
                <span className="font-semibold text-gray-900 text-base">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDistributionPieChart;