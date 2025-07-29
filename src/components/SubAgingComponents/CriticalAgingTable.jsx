import React from "react";

const recentAgingItems = [
  {
    id: "CLM-001",
    patient: "John Doe",
    service: "Emergency",
    amount: 2500,
    age: 125,
    status: "Critical",
  },
  {
    id: "CLM-002",
    patient: "Jane Smith",
    service: "Outpatient",
    amount: 450,
    age: 95,
    status: "Critical",
  },
  {
    id: "CLM-003",
    patient: "Bob Johnson",
    service: "Diagnostic",
    amount: 780,
    age: 85,
    status: "Warning",
  },
  {
    id: "CLM-004",
    patient: "Alice Brown",
    service: "Surgical",
    amount: 5200,
    age: 75,
    status: "Warning",
  },
  {
    id: "CLM-005",
    patient: "Charlie Wilson",
    service: "Inpatient",
    amount: 3400,
    age: 65,
    status: "Normal",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Critical":
      return "bg-red-100 text-red-800";
    case "Warning":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-green-100 text-green-800";
  }
};

const CriticalAgingTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Critical Aging Items</h2>
        <p className="text-sm text-gray-600 mt-1">
          Claims requiring immediate attention due to aging.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Claim ID
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
                Age (Days)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentAgingItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.patient}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.service}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${item.amount.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.age}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
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

export default CriticalAgingTable;

