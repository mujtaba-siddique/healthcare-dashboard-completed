// import React from "react";

// const RejectionReasonsTable = () => {
//   const rejectionReasons = [
//     { reason: "Missing Documentation", count: 245, percentage: 35, color: "#EF4444" },
//     { reason: "Invalid Coding", count: 189, percentage: 27, color: "#F59E0B" },
//     { reason: "Authorization Required", count: 134, percentage: 19, color: "#8B5CF6" },
//     { reason: "Duplicate Claim", count: 89, percentage: 13, color: "#10B981" },
//     { reason: "Other", count: 43, percentage: 6, color: "#6B7280" },
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-sm">
//       <div className="p-6 border-b border-gray-200">
//         <h2 className="text-lg font-semibold text-gray-900">Rejection Reasons Breakdown</h2>
//         <p className="text-sm text-gray-600 mt-1">
//           Detailed analysis of rejection reasons and their impact.
//         </p>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Rejection Reason
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Count
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Percentage
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Priority
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {rejectionReasons.map((reason, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <div
//                       className="w-4 h-4 rounded-full mr-3"
//                       style={{ backgroundColor: reason.color }}
//                     ></div>
//                     <div className="text-sm font-medium text-gray-900">
//                       {reason.reason}
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{reason.count}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{reason.percentage}%</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                       index === 0
//                         ? "bg-red-100 text-red-800"
//                         : index <= 2
//                         ? "bg-yellow-100 text-yellow-800"
//                         : "bg-green-100 text-green-800"
//                     }`}
//                   >
//                     {index === 0 ? "High" : index <= 2 ? "Medium" : "Low"}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RejectionReasonsTable;


import React from "react";

const RejectionReasonsTable = () => {
  // 1. Data from your image
  const denialDataFromImage = [
    { code: "PRCE-003", description: "Recovery", rejected: 2141.23 },
    { code: "CLAI-018", description: "Recalled", rejected: 1593.64 },
    { code: "DUPL-001", description: "Duplicate", rejected: 1523.74 },
    { code: "PRCE-001", description: "Calculation", rejected: 1029.22 },
    { code: "CLAI-012", description: "Not compliant with agreement", rejected: 613.01 },
    { code: "AUTH-003", description: "Auth no. not valid", rejected: 365.43 },
    { code: "AUTH-012", description: "Auth no. not valid", rejected: 345.95 },
    { code: "ELIG-001", description: "Pt not cov member", rejected: 271.48 },
    { code: "AUTH-001", description: "Auth not obtained", rejected: 127.25 },
    { code: "DUPL-002", description: "Paid already", rejected: 56.04 },
    { code: "AUTH-005", description: "Auth not matching", rejected: 55.96 },
    { code: "MNEC-004", description: "Add diagnosis", rejected: 43.03 },
    { code: "NCOV-003", description: "Serv not covered", rejected: 20.76 },
  ];

  // 2. Calculate total rejected amount to find percentages
  const totalRejected = denialDataFromImage.reduce((sum, item) => sum + item.rejected, 0);

  // 3. Prepare the data in the format your original component needs
  // It includes calculating percentages and assigning colors for the UI
  const rejectionReasons = denialDataFromImage
    // Data ko sort kiya gaya hai taaki "High" priority sabse upar aaye
    .sort((a, b) => b.rejected - a.rejected)
    // Ab data ko us format mein transform kiya jaa raha hai jaisa UI ko chahiye
    .map((item, index) => {
      const colors = ["#EF4444", "#F59E0B", "#8B5CF6", "#10B981", "#3B82F6", "#F97316", "#D946EF", "#6366F1", "#EC4899", "#84CC16", "#6B7280", "#06B6D4", "#EAB308"];
      return {
        // Reason mein Code aur Description dono ko joda gaya hai
        reason: `${item.code}: ${item.description}`,
        // "count" ki jagah ab "amount" hai
        amount: item.rejected,
        // Percentage calculate kiya gaya hai
        percentage: ((item.rejected / totalRejected) * 100).toFixed(2),
        // Color dot ke liye color assign kiya gaya hai
        color: colors[index % colors.length] || "#6B7280",
      };
    });

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Rejection Reasons Breakdown</h2>
        <p className="text-sm text-gray-600 mt-1">
          Detailed analysis of rejection reasons and their impact.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rejection Reason
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rejected Amount (AED)
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Percentage
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rejectionReasons.map((reason, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: reason.color }}
                    ></div>
                    <div className="text-sm font-medium text-gray-900">
                      {reason.reason}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm text-gray-900 font-mono">
                    {reason.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm text-gray-900">{reason.percentage}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      index === 0
                        ? "bg-red-100 text-red-800"
                        : index <= 2
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {index === 0 ? "High" : index <= 2 ? "Medium" : "Low"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RejectionReasonsTable;