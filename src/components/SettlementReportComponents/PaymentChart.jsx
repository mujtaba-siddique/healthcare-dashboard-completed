// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const SettlementsByPayerChart = () => {
//   const settlementsByPayer = [
//     { payer: "Medicare", settlements: 485, amount: 3.2, avgTime: 16 },
//     { payer: "Medicaid", settlements: 392, amount: 2.1, avgTime: 20 },
//     { payer: "Blue Cross", settlements: 341, amount: 2.8, avgTime: 15 },
//     { payer: "Aetna", settlements: 298, amount: 2.0, avgTime: 17 },
//     { payer: "Cigna", settlements: 186, amount: 1.2, avgTime: 19 },
//     { payer: "UnitedHealth", settlements: 145, amount: 1.1, avgTime: 18 },
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       <h2 className="text-lg font-semibold text-gray-900 mb-4">Settlements by Payer</h2>
//       <div className="h-80">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={settlementsByPayer}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="payer" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="settlements" fill="#8B5CF6" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default SettlementsByPayerChart;



// src/components/PaymentChart.js

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PaymentChart = () => {
  // आपका पिछला डेटा, recharts के लिए फॉर्मेट किया गया
  const paymentData = [
   
    { date: '23 Feb', paid: 128.69 },
    { date: '20 Feb', paid: 2990.22 },
    { date: '13 Feb', paid: 36.73 },
    { date: '12 Feb', paid: 3249.10 },
    { date: '9 Feb', paid: 60.49 },
    { date: '7 Feb', paid: 2646.94 },
    { date: '1 Feb', paid: 1422.53 }
  ];

  // Y-axis पर नंबर्स को फॉर्मेट करने के लिए फंक्शन
  const yAxisFormatter = (value) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value;
  };

  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const amount = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
      }).format(payload[0].value);

      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow-lg">
          <p className="label text-sm font-semibold">{`${label}`}</p>
          <p className="intro text-sm" style={{ color: payload[0].color }}>
            {`Paid: ${amount}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Daily Paid Amount 
      </h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={paymentData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }} 
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              tickFormatter={yAxisFormatter} 
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(230, 230, 230, 0.4)' }}/>
            <Legend />
            <Bar dataKey="paid" name="Paid Amount" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentChart;