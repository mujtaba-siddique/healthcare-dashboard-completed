import React from "react";

// Data from the image, adapted for the table structure
const professionalData = [
  { id: 1, name: "NAVED KHAN", share: 27.91, claimed: 387019.17, rejPercentage: 0.67 },
  { id: 2, name: "AFTAB AHMAD", share: 27.66, claimed: 383607.79, rejPercentage: 0.36 },
  { id: 3, name: "ROSEMEEN YOUNIS", share: 22.39, claimed: 310459.51, rejPercentage: 0.37 },
  { id: 4, name: "ERUJ DANISH", share: 16.76, claimed: 232401.33, rejPercentage: 0.18 },
  { id: 5, name: "GAJENDER RAJEV", share: 4.51, claimed: 62615.28, rejPercentage: 0.69 },
  { id: 6, name: "RAKHI KHADE", share: 0.74, claimed: 10284.52, rejPercentage: 0.63 },
  { id: 7, name: "SARWAR KHAN", share: 0.01, claimed: 178.56, rejPercentage: 0.00 },
  { id: 8, name: "HASNA AKTER", share: 0.01, claimed: 118.15, rejPercentage: 0.00 },
  { id: 9, name: "HARDIKKUMAR PATEL", share: 0.00, claimed: 49.00, rejPercentage: 0.00 },
  { id: 10, name: "SASILA MOOSA MALAVIL", share: 0.00, claimed: 44.41, rejPercentage: 0.00 },
  { id: 11, name: "NAGUR GANI MOHAMMED ZIBIRIL", share: 0.00, claimed: 24.99, rejPercentage: 0.00 },
  { id: 12, name: "BICHU RBICHU", share: 0.00, claimed: 24.52, rejPercentage: 0.00 },
  { id: 13, name: "S M ANAMUL ISLAM", share: 0.00, claimed: 19.58, rejPercentage: 0.00 },
  { id: 14, name: "GLADSTON ASHYANA", share: 0.00, claimed: 15.73, rejPercentage: 0.00 },
  { id: 15, name: "MADHURI LOHANA", share: 0.00, claimed: 6.02, rejPercentage: 0.00 },
];

// This component renders the responsive table with Professional Performance data
const ProfessionalPerformanceTable = () => {
  // Calculate derived values for each professional (rejected and received amounts)
  const tableData = professionalData.map(item => {
    const rejected = item.claimed * (item.rejPercentage / 100);
    const received = item.claimed - rejected;
    return { ...item, rejected, received };
  });

  // Calculate totals for the table footer
  const totals = {
    claimed: tableData.reduce((sum, item) => sum + item.claimed, 0),
    received: tableData.reduce((sum, item) => sum + item.received, 0),
    rejected: tableData.reduce((sum, item) => sum + item.rejected, 0),
  };

  // Calculate total rejection percentage for the footer
  const totalRejPercentage = totals.claimed > 0 ? (totals.rejected / totals.claimed) * 100 : 0;

  return (
    <>
      {/* CSS to hide the scrollbar while keeping scroll functionality */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Professional Performance</h2>
          <p className="text-sm text-gray-600 mt-1">
            Breakdown of claims by professional.
          </p>
        </div>

        {/* Container for horizontal scrolling on small screens */}
        <div className="overflow-x-auto hide-scrollbar">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Professional Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % of Share
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Claimed Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Received Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rejected Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rej %
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.share.toFixed(2)}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      AED {item.claimed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      AED {item.received.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-red-600 font-medium">
                      AED {item.rejected.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.rejPercentage.toFixed(2)}%</div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-100">
              <tr className="font-semibold text-gray-900">
                <td className="px-6 py-4 text-sm">Total</td>
                <td className="px-6 py-4 text-sm">100.00%</td>
                <td className="px-6 py-4 text-sm">AED {totals.claimed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="px-6 py-4 text-sm">AED {totals.received.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="px-6 py-4 text-sm text-red-700">AED {totals.rejected.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="px-6 py-4 text-sm">{totalRejPercentage.toFixed(2)}%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProfessionalPerformanceTable;