import React from 'react';
import * as XLSX from 'xlsx'; // XLSX library ko import karein

// Mock data (ismein koi badlav nahi hai)
const detailedAgingData = [
  { payerName: 'Mednet', range: '0-30 days', amount: 25000, claims: 70 },
  { payerName: 'OIC', range: '0-30 days', amount: 30000, claims: 85 },
  { payerName: 'Nas', range: '0-30 days', amount: 30000, claims: 90 },
  { payerName: 'FMC', range: '31-60 days', amount: 28000, claims: 80 },
  { payerName: 'Inayah', range: '31-60 days', amount: 17000, claims: 50 },
  { payerName: 'Almadallah', range: '31-60 days', amount: 20000, claims: 55 },
  { payerName: 'DHA', range: '61-90 days', amount: 22000, claims: 65 },
  { payerName: 'NGI', range: '61-90 days', amount: 26000, claims: 73 },
  { payerName: 'Nextcare', range: '91-120 days', amount: 18000, claims: 42 },
  { payerName: 'Neuron', range: '91-120 days', amount: 10000, claims: 40 },
  { payerName: 'Khat a Haya', range: '120+ days', amount: 15000, claims: 45 },
];

// Helper functions (inmein koi badlav nahi hai)
const getPriorityDetails = (range) => {
  switch (range) {
    case '0-30 days':
      return { label: 'Low', className: 'bg-green-100 text-green-800' };
    case '31-60 days':
      return { label: 'Medium', className: 'bg-yellow-100 text-yellow-800' };
    case '61-90 days':
      return { label: 'High', className: 'bg-orange-100 text-orange-800' };
    case '91-120 days':
      return { label: 'Critical', className: 'bg-red-100 text-red-800' };
    case '120+ days':
      return { label: 'Urgent', className: 'bg-purple-100 text-purple-800' };
    default:
      return { label: 'N/A', className: 'bg-gray-100 text-gray-800' };
  }
};

const getRangeColor = (range) => {
  switch (range) {
    case '0-30 days': return '#10b981';
    case '31-60 days': return '#f59e0b';
    case '61-90 days': return '#f97316';
    case '91-120 days': return '#ef4444';
    case '120+ days': return '#8b5cf6';
    default: return '#6b7280';
  }
};


const AgingBucketsTable = () => {

  // Data ko .xlsx format mein export karne ke liye naya function
  const handleExportToExcel = () => {
    // 1. Export ke liye data taiyaar karein (calculated fields ke saath)
    const dataForExport = detailedAgingData.map(row => ({
      'Payer Name': row.payerName,
      'Age Range': row.range,
      'Total Amount': row.amount,
      ' Claims': row.claims,
      'Avg. Claim Value': Math.round(row.amount / row.claims),
      'Priority': getPriorityDetails(row.range).label
    }));

    // 2. JSON data se ek nayi worksheet banayein
    const worksheet = XLSX.utils.json_to_sheet(dataForExport);

    // 3. Ek nayi workbook banayein aur usmein worksheet jodein
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "AgingData"); // "AgingData" sheet ka naam hai

    // 4. Workbook ko .xlsx file ke roop mein download karein
    XLSX.writeFile(workbook, 'DetailedAgingData.xlsx');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 slide-up" style={{ animationDelay: '800ms' }}>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h3 className="text-xl font-semibold text-gray-900">Detailed Aging Report</h3>
        <button 
          onClick={handleExportToExcel} // Yahan naya function call karein
          className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
        >
          Export Data
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Payer Name</th>
              
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Age Range</th>
              
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Claims</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Avg. Claim Value</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Priority</th>
            </tr>
          </thead>
          <tbody>
            {detailedAgingData.map((data, index) => {
              const priority = getPriorityDetails(data.range);
              const rangeColor = getRangeColor(data.range);
              const avgClaimValue = Math.round(data.amount / data.claims);

              return (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-3" 
                        style={{ backgroundColor: rangeColor }}
                      ></div>
                      
                      <span className="font-medium text-gray-700">{data.payerName}</span>
                      
                       
                    </div>
                  </td>
                 <td className="py-3 px-4 font-medium text-gray-900">{data.range}</td>
                  
                  <td className="py-3 px-4 text-gray-600">AED {data.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{data.claims}</td>
                  <td className="py-3 px-4 text-gray-600">AED {avgClaimValue.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${priority.className}`}>
                      {priority.label}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgingBucketsTable;