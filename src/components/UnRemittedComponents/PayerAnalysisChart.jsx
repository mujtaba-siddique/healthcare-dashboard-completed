import React from 'react';
import { AlertTriangle } from 'lucide-react';

// Mock data waisa he rahega
const payerWiseData = [
  { payer: 'Mednet', amount: 715000, claims: 210, avgDays: 30, status: 'Medium' },
  { payer: 'OIC', amount: 354000, claims: 180, avgDays: 28, status: 'High Priority' },
  { payer: 'FMC', amount: 269000, claims: 160, avgDays: 33, status: 'Low' },
  { payer: 'Nas', amount: 265000, claims: 175, avgDays: 31, status: 'Medium' },
  { payer: 'Khat a Haya', amount: 204000, claims: 140, avgDays: 36, status: 'Critical' },
  { payer: 'Nextcare', amount: 77000, claims: 95, avgDays: 27, status: 'High Priority' },
  { payer: 'Inayah', amount: 65000, claims: 80, avgDays: 29, status: 'Low' },
  { payer: 'NGI', amount: 60000, claims: 88, avgDays: 34, status: 'Medium' },
  { payer: 'DHA', amount: 59000, claims: 76, avgDays: 26, status: 'High Priority' },
  { payer: 'Almadallah', amount: 58000, claims: 69, avgDays: 32, status: 'Low' },
  { payer: 'Neuron', amount: 58000, claims: 72, avgDays: 35, status: 'Critical' },
  { payer: 'Ecare', amount: 55000, claims: 66, avgDays: 30, status: 'Medium' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Critical': return 'bg-red-100 text-red-800';
    case 'High Priority': return 'bg-orange-100 text-orange-800';
    case 'Medium': return 'bg-yellow-100 text-yellow-800';
    case 'Low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const PayerAnalysisChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 slide-up" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Payer-wise Analysis</h3>
        
      </div>

      <div className="space-y-4 max-h-[600px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {payerWiseData.map((payer, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-900">{payer.payer}</p>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(payer.status)}`}>
                  {payer.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium">AED{" "}{payer.amount.toLocaleString()}</p>
                  <p className="text-xs">Amount</p>
                </div>
                <div>
                  <p className="font-medium">{payer.claims}</p>
                  <p className="text-xs">Claims</p>
                </div>
                <div>
                  <p className="font-medium">{payer.avgDays} days</p>
                  <p className="text-xs">Avg. Days</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayerAnalysisChart;