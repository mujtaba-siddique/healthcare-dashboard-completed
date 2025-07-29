import React from 'react';
import InsuranceMetrics from '../components/InsuranceComponents/InsuranceMetrics.jsx';
import ClaimsTrendChart from '../components/InsuranceComponents/ClaimsTrendChart.jsx';
import InsuranceTypesChart from '../components/InsuranceComponents/PayerDistributionChartVibrant.jsx';
import DenialReasonsChart from '../components/InsuranceComponents/DenialReasonsChart.jsx';
import RecentClaimsTable from '../components/InsuranceComponents/RecentClaimsTable.jsx';
import InsurancePerformanceTable from '../components/InsuranceComponents/InsurancePerformanceTable.jsx';


const InsurancePage = () => {
  

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-8 fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Insurance Management</h1>
        <p className="text-gray-600">Monitor insurance claims, approvals, and revenue performance</p>
      </div>

      {/* Metrics Grid */}
      <InsuranceMetrics />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ClaimsTrendChart />
        <InsuranceTypesChart />
     
        
      </div>
      

      {/* Denial Reasons and Recent Claims */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <DenialReasonsChart />
        <RecentClaimsTable />
      </div>

      {/* Insurance Performance Table */}
      <InsurancePerformanceTable />
    </div>
  );
};

export default InsurancePage;
