import React from "react";

// Updated data for the table, now including rejected amount
// Rejected amount is calculated as: claimed - received
const dosageFormData = [
  {
    id: 1,
    name: "TABLETS (14'S, BLISTER)",
    claimed: 330841.21,
    received: 317892.24,
    rejected: 12948.97, // Added rejected amount
    totalClaims: 1520,
  },
  {
    id: 2,
    name: "FILM COATED TABLETS (5'S, BLISTER PACK)",
    claimed: 228372.4,
    received: 220891.89,
    rejected: 7480.51, // Added rejected amount
    totalClaims: 1150,
  },
  {
    id: 3,
    name: "CAPSULES (HARD GELATIN) (30'S, BLISTER)",
    claimed: 213404.98,
    received: 206631.27,
    rejected: 6773.71, // Added rejected amount
    totalClaims: 980,
  },
  {
    id: 4,
    name: "SYRUP (200ML, BOTTLE)",
    claimed: 109855.71,
    received: 105064.52,
    rejected: 4791.19, // Added rejected amount
    totalClaims: 850,
  },
  {
    id: 5,
    name: "TABLETS (20'S, BLISTER PACK)",
    claimed: 147202.07,
    received: 142630.38,
    rejected: 4571.69, // Added rejected amount
    totalClaims: 1025,
  },
  {
    id: 6,
    name: "FILM COATED TABLETS (20'S, BLISTER PACK)",
    claimed: 122210.63,
    received: 119100.47,
    rejected: 3110.16, // Added rejected amount
    totalClaims: 910,
  },
  {
    id: 7,
    name: "TABLETS (14'S, BLISTER PACK)",
    claimed: 88220.01,
    received: 86117.92,
    rejected: 2102.09, // Added rejected amount
    totalClaims: 720,
  },
  {
    id: 8,
    name: "FILM COATED TABLETS (10'S, BLISTER PACK)",
    claimed: 68080.67,
    received: 66005.12,
    rejected: 2075.55, // Added rejected amount
    totalClaims: 650,
  },
];

// This component renders the responsive table
const DosageFormTable = () => {
  // Calculate totals for the table footer
  const totals = {
    claimed: dosageFormData.reduce((sum, item) => sum + item.claimed, 0),
    received: dosageFormData.reduce((sum, item) => sum + item.received, 0),
    rejected: dosageFormData.reduce((sum, item) => sum + item.rejected, 0), // Calculate total rejected
    totalClaims: dosageFormData.reduce((sum, item) => sum + item.totalClaims, 0),
  };
  
  // Calculate the overall average amount for the footer
  const totalAvgAmount = totals.totalClaims > 0 ? totals.claimed / totals.totalClaims : 0;

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
          <h2 className="text-lg font-semibold text-gray-900">Dosage Form Overview</h2>
          <p className="text-sm text-gray-600 mt-1">
            Detailed breakdown of all dosage forms and their metrics.
          </p>
        </div>

        {/* Container for horizontal scrolling on small screens */}
        <div className="overflow-x-auto hide-scrollbar">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dosage Form
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Claims
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
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Amount
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dosageFormData.map((item) => {
                const avgAmount = item.totalClaims > 0 ? item.claimed / item.totalClaims : 0;
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.totalClaims.toLocaleString()}</div>
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
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        AED {avgAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-gray-100">
              <tr className="font-semibold text-gray-900">
                <td className="px-6 py-4 text-sm">Total</td>
                <td className="px-6 py-4 text-sm">{totals.totalClaims.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm">AED <br/> {totals.claimed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="px-6 py-4 text-sm">AED <br/> {totals.received.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="px-6 py-4 text-sm text-red-700">AED <br/> {totals.rejected.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                {/* <td className="px-6 py-4 text-sm">AED <br/> {totalAvgAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td> */}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default DosageFormTable;