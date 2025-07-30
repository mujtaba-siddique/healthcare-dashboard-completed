// import React from 'react';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';

// // Data ko image ke hisab se update kiya gaya hai
// const insuranceData = [
//   { name: "Mednet", claimed: 715216.38, paid: 703734.63, rejected: 1277.16, waiting: 10204.59, rejPercentage: '0.18%', color: '#22c55e', status: 'Active' },
//   { name: "OIC", claimed: 353665.96, paid: 338302.55, rejected: 1622.67, waiting: 13740.74, rejPercentage: '0.48%', color: '#3b82f6', status: 'Active' },
//   { name: "FMC", claimed: 268761.33, paid: 260196.98, rejected: 2355.53, waiting: 6208.82, rejPercentage: '0.90%', color: '#a855f7', status: 'Active' },
//   { name: "Nas", claimed: 265401.82, paid: 251819.92, rejected: 312.19, waiting: 13269.71, rejPercentage: '0.12%', color: '#ef4444', status: 'Under Review' },
//   { name: "Khat a haya", claimed: 204472.86, paid: 202164.04, rejected: 1250.77, waiting: 1058.05, rejPercentage: '0.61%', color: '#eab308', status: 'Active' },
//   { name: "Nextcare", claimed: 77044.85, paid: 62390.81, rejected: 116.58, waiting: 14537.46, rejPercentage: '0.19%', color: '#f97316', status: 'On Hold' },
//   { name: "Almadallah", claimed: 58086.51, paid: 48560.41, rejected: 346.70, waiting: 9179.40, rejPercentage: '0.71%', color: '#84cc16', status: 'Active' },
//   { name: "Ecare", claimed: 55455.67, paid: 53847.48, rejected: 133.54, waiting: 1474.65, rejPercentage: '0.25%', color: '#f43f5e', status: 'Active' },
// ];

// // StatusBadge component waisa he rahega
// const StatusBadge = ({ status }) => {
//   const baseClasses = "px-2.5 py-1 text-xs font-medium rounded-full";
//   let specificClasses = "";
//   switch (status) {
//     case 'Active': specificClasses = "bg-green-100 text-green-800"; break;
//     case 'Under Review': specificClasses = "bg-yellow-100 text-yellow-800"; break;
//     case 'On Hold': specificClasses = "bg-red-100 text-red-800"; break;
//     default: specificClasses = "bg-gray-100 text-gray-800";
//   }
//   return <span className={`${baseClasses} ${specificClasses}`}>{status}</span>;
// };


// const InsurancePerformanceTable = () => {
//   // Export function ko naye data ke hisab se update kiya gaya hai
//   const handleExport = () => {
//     const dataToExport = insuranceData.map(item => ({
//       'Insurance': item.name,
//       'Claimed (AED)': item.claimed,
//       'Paid (AED)': item.paid,
//       'Rejected (AED)': item.rejected,
//       'Waiting (AED)': item.waiting,
//       'Rejection %': item.rejPercentage.replace('%', ''),
//       'Status': item.status,
//     }));

//     const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';
//     const fileName = 'Insurance_Performance_Summary';

//     const ws = XLSX.utils.json_to_sheet(dataToExport);
//     const wb = { Sheets: { 'Insurers': ws }, SheetNames: ['Insurers'] };
//     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     const data = new Blob([excelBuffer], { type: fileType });
//     saveAs(data, fileName + fileExtension);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm p-6 slide-up">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-xl font-semibold text-gray-900">Insurance Performance Summary</h3>
//         <button 
//           onClick={handleExport}
//           className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium"
//         >
//           Export Data
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           {/* Table headers (<thead>) ko image ke hisab se update kiya gaya hai */}
//           <thead>
//             <tr className="border-b border-gray-200 bg-gray-50">
//               <th className="text-left py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Insurance</th>
//               <th className="text-right py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Claimed</th>
//               <th className="text-right py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Paid</th>
//               <th className="text-right py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Rejected</th>
//               <th className="text-right py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Waiting</th>
//               <th className="text-center py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Rej %</th>
//               <th className="text-center py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Status</th>
//             </tr>
//           </thead>
//           {/* Table body (<tbody>) ko naye data keys ke hisab se update kiya gaya hai */}
//           <tbody>
//             {insuranceData.map((item) => (
//               <tr key={item.name} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                 <td className="py-3 px-4">
//                   <div className="flex items-center">
//                     <div 
//                       className="w-2.5 h-2.5 rounded-full mr-3 flex-shrink-0" 
//                       style={{ backgroundColor: item.color }}
//                     ></div>
//                     <span className="font-medium text-gray-900">{item.name}</span>
//                   </div>
//                 </td>
//                 <td className="py-3 px-4 text-gray-800 font-medium text-right">AED{" "}{item.claimed.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
//                 <td className="py-3 px-4 text-gray-600 text-right">AED{" "}{item.paid.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
//                 <td className="py-3 px-4 text-gray-600 text-right">AED{" "}{item.rejected.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
//                 <td className="py-3 px-4 text-gray-600 text-right">AED{" "}{item.waiting.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
//                 <td className="py-3 px-4 text-gray-600 text-center">{item.rejPercentage}</td>
//                 <td className="py-3 px-4 text-center">
//                   <StatusBadge status={item.status} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default InsurancePerformanceTable;

import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// Data aur StatusBadge component me koi badlav nahi hai
const insuranceData = [
    { name: "Mednet", claimed: 715216.38, paid: 703734.63, rejected: 1277.16, waiting: 10204.59, rejPercentage: '0.18%', color: '#22c55e', status: 'Active' },
    { name: "OIC", claimed: 353665.96, paid: 338302.55, rejected: 1622.67, waiting: 13740.74, rejPercentage: '0.48%', color: '#3b82f6', status: 'Active' },
    { name: "FMC", claimed: 268761.33, paid: 260196.98, rejected: 2355.53, waiting: 6208.82, rejPercentage: '0.90%', color: '#a855f7', status: 'Active' },
    { name: "Nas", claimed: 265401.82, paid: 251819.92, rejected: 312.19, waiting: 13269.71, rejPercentage: '0.12%', color: '#ef4444', status: 'Under Review' },
    { name: "Khat a haya", claimed: 204472.86, paid: 202164.04, rejected: 1250.77, waiting: 1058.05, rejPercentage: '0.61%', color: '#eab308', status: 'Active' },
    { name: "Nextcare", claimed: 77044.85, paid: 62390.81, rejected: 116.58, waiting: 14537.46, rejPercentage: '0.19%', color: '#f97316', status: 'On Hold' },
    { name: "Almadallah", claimed: 58086.51, paid: 48560.41, rejected: 346.70, waiting: 9179.40, rejPercentage: '0.71%', color: '#84cc16', status: 'Active' },
    { name: "Ecare", claimed: 55455.67, paid: 53847.48, rejected: 133.54, waiting: 1474.65, rejPercentage: '0.25%', color: '#f43f5e', status: 'Active' },
];

const StatusBadge = ({ status }) => {
    const baseClasses = "px-2.5 py-1 text-xs font-medium rounded-full";
    let specificClasses = "";
    switch (status) {
        case 'Active': specificClasses = "bg-green-100 text-green-800"; break;
        case 'Under Review': specificClasses = "bg-yellow-100 text-yellow-800"; break;
        case 'On Hold': specificClasses = "bg-red-100 text-red-800"; break;
        default: specificClasses = "bg-gray-100 text-gray-800";
    }
    return <span className={`${baseClasses} ${specificClasses}`}>{status}</span>;
};


const InsurancePerformanceTable = () => {
    const handleExport = () => {
        const dataToExport = insuranceData.map(item => ({
            'Insurance': item.name,
            'Claimed (AED)': item.claimed,
            'Paid (AED)': item.paid,
            'Rejected (AED)': item.rejected,
            'Waiting (AED)': item.waiting,
            'Rejection %': item.rejPercentage.replace('%', ''),
            'Status': item.status,
        }));

        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const fileName = 'Insurance_Performance_Summary';

        const ws = XLSX.utils.json_to_sheet(dataToExport);
        const wb = { Sheets: { 'Insurers': ws }, SheetNames: ['Insurers'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        saveAs(data, fileName + fileExtension);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 slide-up">
            {/* // <-- YEH DIV AB RESPONSIVE HAI --> */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center">Insurance Performance Summary</h3>
                <button 
                    onClick={handleExport}
                    className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium w-full md:w-auto"
                >
                    Export Data
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="text-left py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Insurance</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Claimed</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Paid</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Rejected</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Waiting</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Rej %</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {insuranceData.map((item) => (
                            <tr key={item.name} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="flex items-center">
                                        <div className="w-2.5 h-2.5 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                                        <span className="font-medium text-gray-900">{item.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-gray-800 font-medium text-right">AED {item.claimed.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                                <td className="py-3 px-4 text-gray-600 text-right">AED {item.paid.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                                <td className="py-3 px-4 text-gray-600 text-right">AED {item.rejected.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                                <td className="py-3 px-4 text-gray-600 text-right">AED {item.waiting.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                                <td className="py-3 px-4 text-gray-600 text-center">{item.rejPercentage}</td>
                                <td className="py-3 px-4 text-center">
                                    <StatusBadge status={item.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InsurancePerformanceTable;