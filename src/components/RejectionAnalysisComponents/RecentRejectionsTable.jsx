import React from "react";

const RecentRejectionsTable = () => {
  const recentRejections = [
    {
      id: "REJ-001",
      patient: "John Doe",
      service: "Emergency",
      amount: 2500,
      reason: "Missing Documentation",
      date: "2024-01-15",
      status: "Pending",
    },
    {
      id: "REJ-002",
      patient: "Jane Smith",
      service: "Outpatient",
      amount: 450,
      reason: "Invalid Coding",
      date: "2024-01-14",
      status: "Resolved",
    },
    {
      id: "REJ-003",
      patient: "Bob Johnson",
      service: "Diagnostic",
      amount: 780,
      reason: "Authorization Required",
      date: "2024-01-13",
      status: "In Progress",
    },
    {
      id: "REJ-004",
      patient: "Alice Brown",
      service: "Surgical",
      amount: 5200,
      reason: "Duplicate Claim",
      date: "2024-01-12",
      status: "Resolved",
    },
    {
      id: "REJ-005",
      patient: "Charlie Wilson",
      service: "Inpatient",
      amount: 3400,
      reason: "Missing Documentation",
      date: "2024-01-11",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-red-100 text-red-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Rejections</h2>
        <p className="text-sm text-gray-600 mt-1">
          Latest rejected claims requiring attention.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rejection ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reason
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentRejections.map((rejection) => (
              <tr key={rejection.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{rejection.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{rejection.patient}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{rejection.service}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${rejection.amount.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{rejection.reason}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{rejection.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      rejection.status
                    )}`}
                  >
                    {rejection.status}
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

export default RecentRejectionsTable;