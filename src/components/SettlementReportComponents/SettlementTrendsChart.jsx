

// import React from "react";
// import {
//   ComposedChart,
//   Bar,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const FinancialPerformanceChart = () => {
//   // 1. डेटा को बदला गया है: अमाउंट को AED में कन्वर्ट किया गया है और टारगेट जोड़ा गया है।
//   const performanceData = [
//     // 1 USD = 3.67 AED (लगभग)
//     { month: "Jan", settlements: 1650, amountAED: 37.43, rate: 91, targetAmountAED: 38.0 },
//     { month: "Feb", settlements: 1720, amountAED: 40.74, rate: 92, targetAmountAED: 40.0 },
//     { month: "Mar", settlements: 1680, amountAED: 39.64, rate: 90, targetAmountAED: 41.0 },
//     { month: "Apr", settlements: 1780, amountAED: 43.31, rate: 93, targetAmountAED: 42.0 },
//     { month: "May", settlements: 1820, amountAED: 44.41, rate: 94, targetAmountAED: 44.0 },
//     { month: "Jun", settlements: 1847, amountAED: 45.51, rate: 94, targetAmountAED: 45.0 },
//   ];


//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       const formatAED = (value) => new Intl.NumberFormat('en-AE', {
//         style: 'currency',
//         currency: 'AED'
//       }).format(value * 1000000);

//       const amount = payload.find(p => p.dataKey === 'amountAED');
//       const target = payload.find(p => p.dataKey === 'targetAmountAED');
//       const rate = payload.find(p => p.dataKey === 'rate');
      
//       return (
//         <div className="text-gray-800 bg-white p-3 border rounded shadow-lg">
//           <p className="font-bold mb-2">{label}</p>
//           {amount && <p style={{ color: amount.color }}>{`Amount: ${formatAED(amount.value)}`}</p>}
//           {target && <p style={{ color: target.color }}>{`Target: ${formatAED(target.value)}`}</p>}
//           {rate && <p style={{ color: rate.color }}>{`Rate: ${rate.value}%`}</p>}
//         </div>
//       );
//     }
//     return null;
//   };


//   return (
//     <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 w-full max-w-4xl mx-auto">
//       <h2 className="text-lg font-semibold text-gray-900 mb-5">Monthly Financial Performance</h2>
//       {/* <p className="text-sm text-gray-500 mb-4">Actual Amount vs. Target (in AED) with Settlement Rate</p> */}
//       <div className="h-96">
//         <ResponsiveContainer width="100%" height="100%">
//           <ComposedChart data={performanceData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            
//             <XAxis dataKey="month" tick={{ fontSize: 12 }} />

            
//             <YAxis 
//               yAxisId="left" 
//               orientation="left" 
//               stroke="#8B5CF6"
//               tick={{ fontSize: 12 }}
//               tickFormatter={(value) => `${value}M`}
//             />
//             <YAxis 
//               yAxisId="right" 
//               orientation="right" 
//               stroke="#10B981"
//               tick={{ fontSize: 12 }}
//               tickFormatter={(value) => `${value}%`}
//             />

//             <Tooltip content={<CustomTooltip />} />
//             <Legend />

//             <Bar dataKey="amountAED" yAxisId="left" name="Amount Settled (M AED)" fill="#8B5CF6" />
//             <Line type="monotone" dataKey="targetAmountAED" yAxisId="left" name="Target (M AED)" stroke="#F97316" strokeWidth={2} strokeDasharray="5 5" />
//             <Line type="monotone" dataKey="rate" yAxisId="right" name="Settlement Rate" stroke="#10B981" strokeWidth={2} />
          
//           </ComposedChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default FinancialPerformanceChart;


import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonthlyDonutChart = () => {
  const performanceData = [
    { month: 'Jan', amountAED: 37.43 },
    { month: 'Feb', amountAED: 40.74 },
    { month: 'Mar', amountAED: 39.64 },
    { month: 'Apr', amountAED: 43.31 },
    { month: 'May', amountAED: 44.41 },
    { month: 'Jun', amountAED: 45.51 },
    { month: 'Jul', amountAED: 48.12 },
    { month: 'Aug', amountAED: 50.23 },
    { month: 'Sep', amountAED: 52.34 },
    { month: 'Oct', amountAED: 54.45 },
    { month: 'Nov', amountAED: 56.56 },
    { month: 'Dec', amountAED: 58.67 },
  ];

  const COLORS = [
  '#8884d8', // Purple
  '#82ca9d', // Light Green
  '#FFBB28', // Yellow
  '#FF8042', // Orange
  '#0088FE', // Blue
  '#00C49F', // Aqua Green
  '#FF6699', // Pink
  '#AA46BE', // Violet
  '#33CCCC', // Teal
  '#FF6666', // Light Red
  '#66CC66', // Lime Green
  '#9966FF', // Indigo
];


  // यह फंक्शन लेबल (प्रतिशत) को हर स्लाइस के अंदर रखने के लिए है
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontWeight="bold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const formatAED = (value) =>
        new Intl.NumberFormat('en-AE', {
          style: 'currency',
          currency: 'AED',
        }).format(value * 1000000);

      return (
        <div className="bg-white p-3 border rounded shadow-lg">
          <p className="font-bold">{`${payload[0].name}`}</p>
          <p className="text-sm" style={{ color: payload[0].payload.fill }}>
            {`Amount: ${formatAED(payload[0].value)}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 w-full max-w-lg mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        Monthly Contribution to Total Revenue
      </h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={performanceData}
              cx="50%"
              cy="50%"
              dataKey="amountAED"
              nameKey="month"
              outerRadius={160}
              // innerRadius जोड़ने से यह डोनट चार्ट बन जाता है
              innerRadius={80}
              fill="#8884d8"
              paddingAngle={3}
              // कस्टम लेबल फंक्शन का उपयोग
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {performanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyDonutChart;