import React from "react";

// The component is renamed for clarity
const MonthlyClaimsTable = () => {
  // Data extracted from your image
  const monthlyClaimsData = [
    { year: 2023, month: "February", count: 1090, total: 57024.74, average: 52.32 },
    { year: 2023, month: "March", count: 1242, total: 64782.67, average: 52.16 },
    { year: 2023, month: "April", count: 808, total: 42569.19, average: 52.68 },
    { year: 2023, month: "May", count: 1337, total: 66656.59, average: 49.86 },
    { year: 2023, month: "June", count: 1445, total: 65433.15, average: 45.28 },
    { year: 2023, month: "July", count: 1757, total: 79236.02, average: 45.10 },
    { year: 2023, month: "August", count: 1891, total: 86564.37, average: 45.78 },
    { year: 2023, month: "September", count: 1959, total: 87647.66, average: 44.74 },
    { year: 2023, month: "October", count: 2078, total: 101568.3, average: 48.88 },
    { year: 2023, month: "November", count: 1950, total: 98926.38, average: 50.73 },
    { year: 2023, month: "December", count: 1627, total: 75741.6, average: 46.55 },
    { year: 2024, month: "January", count: 1590, total: 81729.15, average: 51.40 },
  ];

  // Total row data from your image
  const totals = {
    count: 39106,
    total: 2046113.35,
    average: 52.32,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Monthly Claims Breakdown</h2>
        <p className="text-sm text-gray-600 mt-1">
          Detailed analysis of claims data by month.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Month
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No. of Claims
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Claimed AED
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Claim Average AED
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {monthlyClaimsData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{row.year}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{row.month}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{row.count.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{row.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{row.average.toFixed(2)}</div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* Footer section for totals */}
          <tfoot className="bg-gray-100 border-t-2 border-gray-300">
            <tr className="font-bold text-gray-900">
              <td colSpan="2" className="px-6 py-4 text-left text-sm">Total</td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm">
                {totals.count.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm">
                {totals.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm">
                {totals.average.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MonthlyClaimsTable;
