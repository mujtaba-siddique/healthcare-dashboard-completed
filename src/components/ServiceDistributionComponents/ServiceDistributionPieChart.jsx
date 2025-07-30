// // import React from "react";
// // import {
// //   PieChart,
// //   Pie,
// //   Cell,
// //   ResponsiveContainer,
// //   Tooltip,
// // } from "recharts";

// // const distributionData = [
// //   { name: "Emergency", value: 35, amount: 2850000, color: "#3B82F6" },
// //   { name: "Outpatient", value: 28, amount: 1890000, color: "#10B981" },
// //   { name: "Inpatient", value: 20, amount: 4560000, color: "#8B5CF6" },
// //   { name: "Diagnostic", value: 12, amount: 890000, color: "#F59E0B" },
// //   { name: "Surgical", value: 5, amount: 3240000, color: "#EF4444" },
// // ];

// // // बेहतर Tooltip बनाने के लिए एक कस्टम कंपोनेंट
// // const CustomTooltip = ({ active, payload }) => {
// //   if (active && payload && payload.length) {
// //     const data = payload[0].payload;
// //     return (
// //       <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
// //         <p className="font-semibold text-gray-900">{data.name}</p>
// //         <p className="text-sm text-gray-600">Volume: {data.value}%</p>
// //         <p className="text-sm text-gray-600">
// //           Amount: AED {data.amount.toLocaleString()}
// //         </p>
// //       </div>
// //     );
// //   }
// //   return null;
// // };

// // const ServiceDistributionPieChart = () => {
// //   return (
// //     <div className="bg-white rounded-xl shadow-lg p-6">
// //       <h2 className="text-xl font-semibold text-gray-900 mb-1">
// //         Service Distribution
// //       </h2>
// //       <p className="text-sm text-gray-500 mb-6">
// //         Distribution of services by claim volume.
// //       </p>
      
// //       <div className="flex flex-col md:flex-row items-center -mt-4">
// //         {/* Chart Section */}
// //         <div className="w-full md:w-1/2 h-80">
// //           <ResponsiveContainer width="100%" height="100%">
// //             <PieChart>
// //               <Pie
// //                 data={distributionData}
// //                 cx="50%"
// //                 cy="50%"
// //                 labelLine={false}
// //                 innerRadius={60} // Donut chart banane ke liye
// //                 outerRadius={100}
// //                 paddingAngle={2}
// //                 fill="#8884d8"
// //                 dataKey="value"
// //               >
// //                 {distributionData.map((entry, index) => (
// //                   <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
// //                 ))}
// //               </Pie>
// //               <Tooltip content={<CustomTooltip />} />
// //             </PieChart>
// //           </ResponsiveContainer>
// //         </div>

// //         {/* Legend Section */}
// //         <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
// //           <div className="space-y-4">
// //             {distributionData.map((entry) => (
// //               <div key={entry.name} className="flex items-center justify-between">
// //                 <div className="flex items-center">
// //                   <div
// //                     className="w-3 h-3 rounded-full mr-3"
// //                     style={{ backgroundColor: entry.color }}
// //                   />
// //                   <span className="text-gray-700 text-base">{entry.name}</span>
// //                 </div>
// //                 <span className="font-semibold text-gray-900 text-base">{entry.value}%</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceDistributionPieChart;

// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   Title,
// } from 'chart.js';

// // Register necessary elements for Chart.js
// ChartJS.register(ArcElement, Tooltip, Legend, Title);

// // Data from the previous table
// const professionalData = [
//   { id: 1, name: "NAVED KHAN", share: 27.91 },
//   { id: 2, name: "AFTAB AHMAD", share: 27.66 },
//   { id: 3, name: "Rosemeen Younis", share: 22.39 },
//   { id: 4, name: "Eruj Danish", share: 16.76 },
//   { id: 5, name: "GAJENDER RAJEV", share: 4.51 },
//   { id: 6, name: "Rakhi Khade", share: 0.74 },
//   { id: 7, name: "SARWAR KHAN", share: 0.01 },
//   { id: 8, name: "HASNA AKTER", share: 0.01 },
//   { id: 9, name: "HARDIKKUMAR PATEL", share: 0.00 },
//   { id: 10, name: "SASILA MOOSA MALAVIL", share: 0.00 },
//   { id: 11, name: "NAGUR GANI MOHAMMED ZIBIRIL", share: 0.00 },
//   { id: 12, name: "Bichu rbichu", share: 0.00 },
//   { id: 13, name: "S M ANAMUL ISLAM", share: 0.00 },
//   { id: 14, name: "GLADSTON ASHYANA", share: 0.00 },
//   { id: 15, name: "MADHURI LOHANA", share: 0.00 },
// ];

// const ProfessionalSharePieChart = () => {
//   // Group professionals with less than 1% share into 'Others'
//   const mainProfessionals = professionalData.filter(p => p.share >= 1);
//   const otherProfessionalsShare = professionalData
//     .filter(p => p.share < 1)
//     .reduce((sum, p) => sum + p.share, 0);

//   const labels = [...mainProfessionals.map(p => p.name)];
//   const dataPoints = [...mainProfessionals.map(p => p.share)];

//   if (otherProfessionalsShare > 0) {
//     labels.push('Others');
//     dataPoints.push(otherProfessionalsShare);
//   }

//   // Data for the Pie chart
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: '% of Share',
//         data: dataPoints,
//         backgroundColor: [
//           '#3B82F6', // Blue
//           '#10B981', // Emerald
//           '#F59E0B', // Amber
//           '#8B5CF6', // Violet
//           '#EF4444', // Red
//           '#6B7280', // Gray
//         ],
//         borderColor: '#ffffff',
//         borderWidth: 2,
//       },
//     ],
//   };

//   // Options for the Pie chart
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'right',
//         labels: {
//           boxWidth: 12,
//           padding: 20,
//           font: {
//             size: 12,
//           },
//         },
//       },
//       // Disable the chart's internal title, as we have a custom one
//       title: {
//         display: false,
//       },
//        tooltip: {
//         callbacks: {
//           label: function(context) {
//             let label = context.label || '';
//             if (label) {
//               label += ': ';
//             }
//             if (context.parsed !== null) {
//               label += context.parsed.toFixed(2) + '%';
//             }
//             return label;
//           }
//         }
//       }
//     },
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm">
//       <div className="p-6 border-b border-gray-200">
//         <h2 className="text-lg font-semibold text-gray-900">Professional Share Distribution</h2>
//         <p className="text-sm text-gray-600 mt-1">
//           Overall share of claimed amount by each professional.
//         </p>
//       </div>
//       <div className="p-4" style={{ height: '350px' }}>
//         <Pie data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default ProfessionalSharePieChart;


import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Data for the chart
const professionalData = [
  { name: "NAVED KHAN", share: 27.91 },
  { name: "AFTAB AHMAD", share: 27.66 },
  { name: "ROSEMEEN YOUNIS", share: 22.39 },
  { name: "ERUJ DANISH", share: 16.76 },
  { name: "GAJENDER RAJEV", share: 4.51 },
  { name: "RAKHI KHADE", share: 0.74 },
  { name: "SARWAR KHAN", share: 0.01 },
  { name: "HASNA AKTER", share: 0.01 },
];

// Define colors for the chart and custom legend
const CHART_COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Emerald
  '#8B5CF6', // Violet
  '#F59E0B', // Amber
  '#EF4444', // Red
  '#6B7280', // Gray
];


const ProfessionalDonutChart = () => {
  // Group professionals with less than 1% share into 'Others' for clarity
  const mainProfessionals = professionalData.filter(p => p.share >= 1);
  const otherProfessionalsShare = professionalData
    .filter(p => p.share < 1)
    .reduce((sum, p) => sum + p.share, 0);

  const chartLabels = [...mainProfessionals.map(p => p.name)];
  const chartDataPoints = [...mainProfessionals.map(p => p.share)];

  if (otherProfessionalsShare > 0) {
    chartLabels.push('Others');
    chartDataPoints.push(otherProfessionalsShare);
  }
  
  const legendData = chartLabels.map((label, index) => ({
    name: label,
    value: chartDataPoints[index],
    color: CHART_COLORS[index % CHART_COLORS.length],
  }));

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartDataPoints,
        backgroundColor: CHART_COLORS,
        borderColor: '#ffffff',
        borderWidth: 2,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#ffffff',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed.toFixed(2)}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Professional Share
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Distribution of claim share by professional.
      </p>

      <div className="flex flex-col md:flex-row items-center -mt-4">
        {/* Chart Section */}
        <div className="w-full md:w-1/2 h-80">
          {/* CORRECTED: Removed the <ResponsiveContainer> wrapper */}
          <Pie data={data} options={options} />
        </div>

        {/* Custom Legend Section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-8">
          <div className="space-y-4">
            {legendData.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3.5 h-3.5 rounded-full mr-3 flex-shrink-0"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-gray-700 text-base">{entry.name}</span>
                </div>
                {/* <span className="font-semibold text-gray-900 text-base">
                  {entry.value.toFixed(2)}%
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDonutChart;