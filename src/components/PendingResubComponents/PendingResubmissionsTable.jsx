import React, { useMemo } from "react";

const monthlyData = [
  // ... (आपका पूरा डेटा यहाँ रहेगा)
  { id: "23_feb", year: 2023, period: "February", almadallah: null, ecare: 1.72, fmc: 0.05, khat_a_haya: 126.13, mednet: 941.61, nas: null, nextcare: null },
  { id: "23_mar", year: 2023, period: "March", almadallah: null, ecare: 1.31, fmc: 0.12, khat_a_haya: 158.68, mednet: 118.37, nas: 122.59, nextcare: null },
  { id: "23_apr", year: 2023, period: "April", almadallah: null, ecare: 1.19, fmc: 0.02, khat_a_haya: 15.15, mednet: null, nas: null, nextcare: null },
  { id: "23_may", year: 2023, period: "May", almadallah: null, ecare: 0.64, fmc: 4.59, khat_a_haya: 91.87, mednet: null, nas: null, nextcare: null },
  { id: "23_jun", year: 2023, period: "June", almadallah: null, ecare: 0.51, fmc: 39.09, khat_a_haya: 27.26, mednet: null, nas: null, nextcare: null },
  { id: "23_jul", year: 2023, period: "July", almadallah: null, ecare: 0.71, fmc: 194.87, khat_a_haya: 236.27, mednet: null, nas: null, nextcare: null },
  { id: "23_aug", year: 2023, period: "August", almadallah: null, ecare: 0.26, fmc: 226.17, khat_a_haya: 39.88, mednet: null, nas: null, nextcare: null },
  { id: "23_sep", year: 2023, period: "September", almadallah: null, ecare: 0.43, fmc: 300.18, khat_a_haya: 119.9, mednet: 47.63, nas: null, nextcare: null },
  { id: "23_oct", year: 2023, period: "October", almadallah: null, ecare: 1.25, fmc: 389.29, khat_a_haya: 172.36, mednet: 50.29, nas: null, nextcare: null },
  { id: "23_nov", year: 2023, period: "November", almadallah: 0.02, ecare: 0.62, fmc: 305.78, khat_a_haya: 5.35, mednet: null, nas: null, nextcare: null },
  { id: "23_dec", year: 2023, period: "December", almadallah: 46.7, ecare: 0.42, fmc: 143.42, khat_a_haya: 195.04, mednet: null, nas: 53.64, nextcare: null },
  { id: "24_jan", year: 2024, period: "January", almadallah: 0.02, ecare: 0.93, fmc: 13.94, khat_a_haya: 62.88, mednet: null, nas: null, nextcare: null },
  { id: "24_feb", year: 2024, period: "February", almadallah: 0.06, ecare: 0.58, fmc: 57.27, khat_a_haya: null, mednet: null, nas: null, nextcare: null },
  { id: "24_mar", year: 2024, period: "March", almadallah: 0.04, ecare: 0.47, fmc: 74.41, khat_a_haya: null, mednet: null, nas: null, nextcare: null },
  { id: "24_apr", year: 2024, period: "April", almadallah: 0.04, ecare: 0.25, fmc: 63.63, khat_a_haya: null, mednet: null, nas: null, nextcare: null },
  { id: "24_may_placeholder", year: 2024, period: "May", almadallah: 299.72, ecare: 56.29, fmc: 486.46, khat_a_haya: null, mednet: 119.26, nas: 135.96, nextcare: 116.58 },
];

const InsuranceDataTable2023 = () => {
    const formatValue = (value) => {
        if (value === null || value === undefined) return "-";
        return value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const tableData = useMemo(() => {
        const providerKeys = ["almadallah", "ecare", "fmc", "khat_a_haya", "mednet", "nas", "nextcare"];
        
        // 1. टोटल पंक्ति के लिए ऑब्जेक्ट बनाया गया
        const totalRow = {
            id: 'total_sum',
            period: 'Total', // नाम बदलकर "Total" कर दिया गया
            ...Object.fromEntries(providerKeys.map(key => [key, 0]))
        };

        const data2023 = [];

        monthlyData.forEach(row => {
            if (row.year === 2023) {
                data2023.push(row);
                // साथ-साथ टोटल की गणना करें
                providerKeys.forEach(key => totalRow[key] += (row[key] || 0));
            }
        });

        // 2. महीने के डेटा के बाद टोटल पंक्ति को जोड़ा गया
        return [...data2023, totalRow];
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 md:p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                    Insurance Data Report - 2023
                </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Almadallah</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ecare</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">FMC</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Khat a Haya</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Mednet</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Nas</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Nextcare</th>
                        </tr>
                    </thead>
                    <tfoot className="bg-gray-50">
                        {/* 3. यहाँ टोटल पंक्ति को अलग से स्टाइल किया गया है */}
                        {tableData.filter(row => row.period === 'Total').map(row => (
                            <tr key={row.id} className="font-bold text-gray-900">
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{row.period}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{formatValue(row.almadallah)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{formatValue(row.ecare)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{formatValue(row.fmc)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{formatValue(row.khat_a_haya)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{formatValue(row.mednet)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{formatValue(row.nas)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{formatValue(row.nextcare)}</td>
                            </tr>
                        ))}
                    </tfoot>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tableData.filter(row => row.period !== 'Total').map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.period}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatValue(row.almadallah)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatValue(row.ecare)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatValue(row.fmc)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatValue(row.khat_a_haya)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatValue(row.mednet)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatValue(row.nas)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatValue(row.nextcare)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InsuranceDataTable2023;