import React from "react";

const RejectionReasonsTable = () => {
  const rejectionReasons = [
    { reason: "Missing Documentation", count: 245, percentage: 35, color: "#EF4444" },
    { reason: "Invalid Coding", count: 189, percentage: 27, color: "#F59E0B" },
    { reason: "Authorization Required", count: 134, percentage: 19, color: "#8B5CF6" },
    { reason: "Duplicate Claim", count: 89, percentage: 13, color: "#10B981" },
    { reason: "Other", count: 43, percentage: 6, color: "#6B7280" },
  ];

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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Count
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Percentage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: reason.color }}
                    ></div>
                    <div className="text-sm font-medium text-gray-900">
                      {reason.reason}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{reason.count}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{reason.percentage}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
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