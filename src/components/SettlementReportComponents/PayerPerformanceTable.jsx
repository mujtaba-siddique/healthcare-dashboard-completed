import React from "react";

const data = [
  { id: "3", period: "January", ecare: 197.27, fmc: 0.0, mednet: 37328.43, nas: 129.54, nextcare: 457.02, ngi: null, oic: 13231.98 },
  { id: "2", period: "February", ecare: 192.03, fmc: null, mednet: 113.97, nas: 189.18, nextcare: 82.48, ngi: 173.23, oic: 10135.56 },
  { id: "1", period: "March", ecare: null, fmc: null, mednet: 36.73, nas: null, nextcare: null, ngi: 50.36, oic: null },
];

const providers = ["ecare", "fmc", "mednet", "nas", "nextcare", "ngi", "oic"];

const format = (v) =>
  v == null ? "-" : v.toLocaleString("en-IN", { minimumFractionDigits: 2 });

const InsuranceDataTable = () => {
  // Total row
  const totals = providers.reduce((acc, key) => {
    acc[key] = data.reduce((sum, row) => sum + (row[key] || 0), 0);
    return acc;
  }, {});
  const rows = [...data, { id: "total", period: "Total", ...totals }];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Insurance Payer Report</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-right">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Month</th>
              {providers.map((p) => (
                <th key={p} className="px-6 py-3">{p.toUpperCase()}</th>
              ))}
              <th className="px-6 py-3">Total</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row) => {
              const total = providers.reduce((sum, p) => sum + (row[p] || 0), 0);
              const isTotal = row.period === "Total";
              return (
                <tr key={row.id} className={isTotal ? "bg-gray-100 font-bold" : "hover:bg-gray-50"}>
                  <td className="px-6 py-4 text-left text-gray-900">{row.period}</td>
                  {providers.map((p) => (
                    <td key={p} className="px-6 py-4 text-gray-600">{format(row[p])}</td>
                  ))}
                  <td className="px-6 py-4 text-gray-800 font-bold">{format(total)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InsuranceDataTable;
