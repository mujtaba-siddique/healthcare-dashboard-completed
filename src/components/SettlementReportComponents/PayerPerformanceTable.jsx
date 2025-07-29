import React from "react";

const PayerPerformanceTable = () => {
  const settlementsByPayer = [
    { payer: "Medicare", settlements: 485, amount: 3.2, avgTime: 16 },
    { payer: "Medicaid", settlements: 392, amount: 2.1, avgTime: 20 },
    { payer: "Blue Cross", settlements: 341, amount: 2.8, avgTime: 15 },
    { payer: "Aetna", settlements: 298, amount: 2.0, avgTime: 17 },
    { payer: "Cigna", settlements: 186, amount: 1.2, avgTime: 19 },
    { payer: "UnitedHealth", settlements: 145, amount: 1.1, avgTime: 18 },
  ];

  const getPerformanceStatus = (avgTime) => {
    if (avgTime <= 16) {
      return { text: "Excellent", className: "bg-green-100 text-green-800" };
    } else if (avgTime <= 18) {
      return { text: "Good", className: "bg-yellow-100 text-yellow-800" };
    } else {
      return { text: "Needs Improvement", className: "bg-red-100 text-red-800" };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Payer Performance</h2>
        <p className="text-sm text-gray-600 mt-1">
          Settlement performance metrics by insurance payer.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Settlements
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount ($M)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg Time (Days)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Performance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {settlementsByPayer.map((payer, index) => {
              const performance = getPerformanceStatus(payer.avgTime);
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payer.payer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payer.settlements}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${payer.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payer.avgTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${performance.className}`}>
                      {performance.text}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayerPerformanceTable;