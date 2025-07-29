import React from "react";

const RecentSettlementsTable = () => {
  const recentSettlements = [
    {
      id: "SET-001",
      claimId: "CLM-1234",
      patient: "John Doe",
      payer: "Medicare",
      service: "Emergency",
      originalAmount: 2500,
      settledAmount: 2200,
      settlementDate: "2024-01-15",
      daysToSettle: 16,
    },
    {
      id: "SET-002",
      claimId: "CLM-1235",
      patient: "Jane Smith",
      payer: "Blue Cross",
      service: "Outpatient",
      originalAmount: 450,
      settledAmount: 420,
      settlementDate: "2024-01-14",
      daysToSettle: 12,
    },
    {
      id: "SET-003",
      claimId: "CLM-1236",
      patient: "Bob Johnson",
      payer: "Aetna",
      service: "Diagnostic",
      originalAmount: 780,
      settledAmount: 750,
      settlementDate: "2024-01-13",
      daysToSettle: 18,
    },
    {
      id: "SET-004",
      claimId: "CLM-1237",
      patient: "Alice Brown",
      payer: "Cigna",
      service: "Surgical",
      originalAmount: 5200,
      settledAmount: 4800,
      settlementDate: "2024-01-12",
      daysToSettle: 22,
    },
    {
      id: "SET-005",
      claimId: "CLM-1238",
      patient: "Charlie Wilson",
      payer: "UnitedHealth",
      service: "Inpatient",
      originalAmount: 3400,
      settledAmount: 3200,
      settlementDate: "2024-01-11",
      daysToSettle: 15,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Settlements</h2>
        <p className="text-sm text-gray-600 mt-1">
          Latest settled claims and their details.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Settlement ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Claim ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Original Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Settled Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Settlement Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Days to Settle
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentSettlements.map((settlement) => (
              <tr key={settlement.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{settlement.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{settlement.claimId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{settlement.patient}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{settlement.payer}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{settlement.service}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${settlement.originalAmount.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${settlement.settledAmount.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{settlement.settlementDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{settlement.daysToSettle}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSettlementsTable;
