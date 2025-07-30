import React from "react";
import SubAgingMetrics from "../components/SubAgingComponents/SubAgingMetrics";
import AgingDistributionChart from "../components/SubAgingComponents/AgingDistributionChart";
import AgingTrendsChart from "../components/SubAgingComponents/AgingTrendsChart";
import AgingBucketsTable from "../components/SubAgingComponents/AgingBucketsTable";
import CriticalAgingTable from "../components/SubAgingComponents/CriticalAgingTable";

const SubAgingPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Sub Aging Analysis
        </h1>
        <p className="text-gray-600">
          Monitor and analyze the aging of outstanding claims and submissions.
        </p>
      </div>

      {/* Summary Cards */}
      <SubAgingMetrics />

      {/* Charts Row (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AgingDistributionChart />
        <AgingTrendsChart />
      </div>

      {/* Aging Buckets Table */}
      <div className="mb-8">
        <AgingBucketsTable />
      </div>

      {/* Critical Aging Table */}
      <div>
        <CriticalAgingTable />
      </div>
    </div>
  );
};

export default SubAgingPage;
