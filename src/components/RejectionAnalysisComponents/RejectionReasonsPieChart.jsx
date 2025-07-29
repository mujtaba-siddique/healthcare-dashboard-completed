// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// const rejectionReasons = [
//   { reason: "Missing Documentation", count: 245, percentage: 35, color: "#EF4444" },
//   { reason: "Invalid Coding", count: 189, percentage: 27, color: "#F59E0B" },
//   { reason: "Authorization Required", count: 134, percentage: 19, color: "#8B5CF6" },
//   { reason: "Duplicate Claim", count: 89, percentage: 13, color: "#10B981" },
//   { reason: "Other", count: 43, percentage: 6, color: "#6B7280" },
// ];

// const RejectionReasonsPieChart = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       <h2 className="text-lg font-semibold text-gray-900 mb-4">Rejection Reasons</h2>
//       <div className="h-80">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={rejectionReasons}
//               cx="50%"
//               cy="50%"
//               labelLine={false}
//               label={({ reason, percentage }) => `${reason} ${percentage}%`}
//               outerRadius={80}
//               fill="#8884d8"
//               dataKey="count"
//             >
//               {rejectionReasons.map((entry, index) => (
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

// export default RejectionReasonsPieChart;



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
  { reason: "Duplicate Claim", count: 89, percentage: 13, color: "#3B82F6" },
  { reason: "Other", count: 43, percentage: 6, color: "#6B7280" },
];

// बेहतर Tooltip बनाने के लिए एक कस्टम कंपोनेंट
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{data.reason}</p>
        <p className="text-sm text-gray-600">Count: {data.count.toLocaleString()}</p>
        <p className="text-sm text-gray-600">Percentage: {data.percentage}%</p>
      </div>
    );
  }
  return null;
};

const RejectionReasonsPieChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Top Rejection Reasons
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Analysis of the most common reasons for claim rejections.
      </p>
      
      <div className="flex flex-col md:flex-row items-center -mt-4">
        {/* Chart Section */}
        <div className="w-full md:w-1/2 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={rejectionReasons}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={60} // Donut chart banane ke liye
                outerRadius={100}
                paddingAngle={2}
                fill="#8884d8"
                dataKey="percentage" // dataKey ko 'percentage' par set kiya gaya hai
              >
                {rejectionReasons.map((entry, index) => (
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
            {rejectionReasons.map((entry) => (
              <div key={entry.reason} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-gray-700 text-base">{entry.reason}</span>
                </div>
                <span className="font-semibold text-gray-900 text-base">{entry.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectionReasonsPieChart;
