import React, { useState, useEffect } from 'react';
import UnremittedMetrics from '../components/UnRemittedComponents/UnremittedMetrics.jsx';
import UnremittedTrendsChart from '../components/UnRemittedComponents/UnremittedTrendsChart.jsx';
import AgingBucketsChart from '../components/UnRemittedComponents/AgingBucketsChart.jsx';
import PayerAnalysisChart from '../components/UnRemittedComponents/PayerAnalysisChart.jsx';
import RecentUnremittedTable from '../components/UnRemittedComponents/RecentUnremittedTable.jsx';
import AgingBucketsTable from '../components/UnRemittedComponents/AgingBucketsTable.jsx';

const UnremittedPage = () => {
  
  return (
    <div className="mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unremitted Claims Management</h1>
        <p className="text-gray-600">Track and manage outstanding claims awaiting payment from insurance providers</p>
      </div>

      {/* Metrics Grid */}
      {/* <UnremittedMetrics /> */}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <UnremittedTrendsChart />
        <AgingBucketsChart />
      </div>

      {/* Payer Analysis and Search */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <PayerAnalysisChart />
        <RecentUnremittedTable />
      </div>

      {/* Aging Buckets Summary Table */}
      <AgingBucketsTable />
    </div>
  );
};

export default UnremittedPage;