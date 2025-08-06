import React from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const unremittedTrendsData = [
  { month: 'Jan', amount: 715000, claims: 210, avgDays: 30 },      // Mednet
  { month: 'Feb', amount: 354000, claims: 180, avgDays: 28 },      // OIC
  { month: 'Mar', amount: 269000, claims: 160, avgDays: 33 },      // FMC
  { month: 'Apr', amount: 265000, claims: 175, avgDays: 31 },      // Nas
  { month: 'May', amount: 204000, claims: 140, avgDays: 36 },      // Khat a Haya
  { month: 'Jun', amount: 77000, claims: 95, avgDays: 27 },        // Nextcare
  { month: 'Jul', amount: 65000, claims: 80, avgDays: 29 },        // Inayah
]
const UnremittedTrendsChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Unremitted Trends</h3>
       
      </div>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={unremittedTrendsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis yAxisId="left" stroke="#6b7280" />
            <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
            <Tooltip />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="amount" 
              stroke="#ef4444" 
              strokeWidth={3}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="claims" 
              stroke="#f59e0b" 
              strokeWidth={3}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UnremittedTrendsChart;