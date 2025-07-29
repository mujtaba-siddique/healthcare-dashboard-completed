import React from "react";

const PendingResubmissionsTable = () => {
  const pendingResubmissions = [
    {
      id: "RESUB-001",
      originalClaim: "CLM-1234",
      patient: "John Doe",
      service: "Emergency",
      amount: 2500,
      reason: "Missing Documentation",
      daysWaiting: 8,
      status: "Ready to Submit",
      priority: "High",
    },
    {
      id: "RESUB-002",
      originalClaim: "CLM-1235",
      patient: "Jane Smith",
      service: "Outpatient",
      amount: 450,
      reason: "Invalid Coding",
      daysWaiting: 5,
      status: "Under Review",
      priority: "Medium",
    },
    {
      id: "RESUB-003",
      originalClaim: "CLM-1236",
      patient: "Bob Johnson",
      service: "Diagnostic",
      amount: 780,
      reason: "Authorization Required",
      daysWaiting: 12,
      status: "Awaiting Documentation",
      priority: "High",
    },
    {
      id: "RESUB-004",
      originalClaim: "CLM-1237",
      patient: "Alice Brown",
      service: "Surgical",
      amount: 5200,
      reason: "Duplicate Claim",
      daysWaiting: 3,
      status: "Pending Approval",
      priority: "Medium",
    },
    {
      id: "RESUB-005",
      originalClaim: "CLM-1238",
      patient: "Charlie Wilson",
      service: "Inpatient",
      amount: 3400,
      reason: "Missing Documentation",
      daysWaiting: 15,
      status: "On Hold",
      priority: "Low",
    },
    {
      id: "RESUB-006",
      originalClaim: "CLM-1239",
      patient: "Diana Prince",
      service: "Emergency",
      amount: 1800,
      reason: "Invalid Coding",
      daysWaiting: 6,
      status: "Ready to Submit",
      priority: "High",
    },
    {
      id: "RESUB-007",
      originalClaim: "CLM-1240",
      patient: "Bruce Wayne",
      service: "Outpatient",
      amount: 650,
      reason: "Authorization Required",
      daysWaiting: 9,
      status: "Under Review",
      priority: "Medium",
    },
    {
      id: "RESUB-008",
      originalClaim: "CLM-1241",
      patient: "Clark Kent",
      service: "Diagnostic",
      amount: 920,
      reason: "Missing Documentation",
      daysWaiting: 4,
      status: "Awaiting Documentation",
      priority: "Medium",
    },
  ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Ready to Submit":
//         return "bg-green-100 text-green-800";
//       case "Under Review":
//         return "bg-blue-100 text-blue-800";
//       case "Awaiting Documentation":
//         return "bg-yellow-100 text-yellow-800";
//       case "Pending Approval":
//         return "bg-purple-100 text-purple-800";
//       case "On Hold":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case "High":
//         return "bg-red-100 text-red-800";
//       case "Medium":
//         return "bg-yellow-100 text-yellow-800";
//       case "Low":
//         return "bg-green-100 text-green-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Pending Resubmissions</h2>
        {/* <p className="text-sm text-gray-600 mt-1">
          Detailed list of all pending resubmissions requiring attention.
        </p> */}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Resubmission ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Original Claim
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
                Days Waiting
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingResubmissions.map((resub) => (
              <tr key={resub.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{resub.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{resub.originalClaim}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{resub.patient}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{resub.service}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${resub.amount.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{resub.reason}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{resub.daysWaiting}</div>
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(resub.status)}`}>
                    {resub.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(resub.priority)}`}>
                    {resub.priority}
                  </span>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingResubmissionsTable;