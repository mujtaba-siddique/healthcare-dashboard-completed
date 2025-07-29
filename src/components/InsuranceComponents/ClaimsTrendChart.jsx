import React from 'react';
import { Download } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

// डेटा वही रहेगा
const insuranceClaimsData = [
  { month: 'Jan', submitted: 245, approved: 220, denied: 15, pending: 10 },
  { month: 'Feb', submitted: 268, approved: 240, denied: 18, pending: 10 },
  { month: 'Mar', submitted: 290, approved: 265, denied: 15, pending: 10 },
  { month: 'Apr', submitted: 315, approved: 285, denied: 20, pending: 10 },
  { month: 'May', submitted: 342, approved: 310, denied: 22, pending: 10 },
  { month: 'Jun', submitted: 365, approved: 335, denied: 18, pending: 12 },
  { month: 'Jul', submitted: 380, approved: 350, denied: 15, pending: 15 },
];

// 1. MetricCards के अनुसार रंगों को परिभाषित करें
const statusColors = {
  approved: "#10b981", // Green for "Paid/Approved"
  pending: "#f59e0b",  // Orange for "Waiting/Pending"
  denied: "#ef4444",   // Red for "Rejected/Denied"
};

// 2. एक सरल और साफ़ टूलटिप
const SimpleTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 text-sm">
        <p className="font-bold text-gray-900 mb-2">{`Month: ${label}`}</p>
        {payload.map(item => (
          <p key={item.name} style={{ color: item.color }} className="font-medium">
            {`${item.name}: ${item.value}`}
          </p>
        ))}
         <hr className="my-1 border-gray-200" />
        <p className="font-bold text-gray-800">
           Total: {payload.reduce((sum, item) => sum + item.value, 0)}
        </p>
      </div>
    );
  }
  return null;
};

const SimpleClaimsChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 slide-up">
      <div className="flex items-center justify-between mb-6">
        {/* 3. टाइटल को और सटीक बनाया गया */}
        <h3 className="text-xl font-semibold text-gray-900">Monthly Claims Status</h3>
        
      </div>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          {/* 4. AreaChart का उपयोग करें */}
          <AreaChart data={insuranceClaimsData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis stroke="#6b7280" axisLine={false} tickLine={false} />

            <Tooltip content={<SimpleTooltip />} />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />

            {/* 5. हर स्टेटस के लिए एक Area बनाएं और उन्हें stackId से जोड़ें */}
            <Area
              type="monotone"
              dataKey="approved"
              name="Approved"
              stackId="1" // सभी एरिया को एक ही स्टैक में रखें
              stroke={statusColors.approved}
              fill={statusColors.approved}
              fillOpacity={0.7}
            />
            <Area
              type="monotone"
              dataKey="pending"
              name="Pending"
              stackId="1"
              stroke={statusColors.pending}
              fill={statusColors.pending}
              fillOpacity={0.7}
            />
            <Area
              type="monotone"
              dataKey="denied"
              name="Denied"
              stackId="1"
              stroke={statusColors.denied}
              fill={statusColors.denied}
              fillOpacity={0.7}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleClaimsChart;