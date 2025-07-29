import React from "react";
import SubAgingMetrics from "../components/SubAgingComponents/SubAgingMetrics";
import AgingDistributionChart from "../components/SubAgingComponents/AgingDistributionChart";
import AgingTrendsChart from "../components/SubAgingComponents/AgingTrendsChart";
import AgingBucketsTable from "../components/SubAgingComponents/AgingBucketsTable";
import CriticalAgingTable from "../components/SubAgingComponents/CriticalAgingTable";

const SubAgingPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sub Aging Analysis</h1>
        <p className="text-gray-600">
          Monitor and analyze the aging of outstanding claims and submissions.
        </p>
      </div>

      {/* Summary Cards */}
      <SubAgingMetrics />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AgingDistributionChart />
        <AgingTrendsChart />
      </div>

      {/* Aging Buckets Table */}
      <AgingBucketsTable />

      {/* Recent Critical Items */}
      <CriticalAgingTable />
    </div>
  );
};

export default SubAgingPage;

