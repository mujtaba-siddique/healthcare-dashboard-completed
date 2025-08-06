import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Mock data for recent unremitted claims
const recentUnremitted = [
  { id: 'UR-2024-001', patient: 'Alice Johnson', payer: 'Mednet',amount: 'AED 2,450', days: 45, priority: 'High', date: '2023-12-01' },
  { id: 'UR-2024-002', patient: 'Bob Smith', payer: 'OIC',  amount: 'AED 1,850', days: 32, priority: 'Medium', date: '2023-12-15' },
  { id: 'UR-2024-003', patient: 'Carol Davis', payer: 'FMC',  amount: 'AED 3,200', days: 58, priority: 'Critical', date: '2023-11-28' },
  { id: 'UR-2024-004', patient: 'David Wilson', payer: 'Nas',  amount: 'AED 1,650', days: 28, priority: 'Low', date: '2023-12-18' },
  { id: 'UR-2024-005', patient: 'Eva Brown', payer: 'Khat a Haya', amount: 'AED 2,100', days: 67, priority: 'Critical', date: '2023-11-15' },
  { id: 'UR-2024-006', patient: 'inva Brown', payer: 'Nextcare', amount: 'AED 2,100', days: 67, priority: 'Critical', date: '2023-11-15' },
];

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'Critical': return 'bg-red-100 text-red-800';
    case 'High': return 'bg-orange-100 text-orange-800';
    case 'Medium': return 'bg-yellow-100 text-yellow-800';
    case 'Low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const RecentUnremittedTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUnremitted = recentUnremitted.filter(item =>
    item.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.payer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 slide-up" style={{ animationDelay: '600ms' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Recent Unremitted Claims</h3>
        
      </div>
      <div className="space-y-3  overflow-y-auto">
        {filteredUnremitted.map((claim, index) => (
          <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-gray-900">{claim.id}</p>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(claim.priority)}`}>
                  {claim.priority}
                </span>
              </div>
              <p className="text-sm text-gray-600">{claim.patient} • {claim.payer}</p>
              <p className="text-xs text-gray-500">{claim.date} • {claim.days} days outstanding</p>
            </div>
            <div className="text-right ml-4">
              <p className="font-bold text-gray-900">{claim.amount}</p>
              <p className="text-xs text-gray-500">{claim.days} days</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUnremittedTable;
