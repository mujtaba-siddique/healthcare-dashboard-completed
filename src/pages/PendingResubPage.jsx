import React from "react";
import PendingResubMetrics from "../components/PendingResubComponents/PendingResubMetrics";
import ResubmissionCategoriesChart from "../components/PendingResubComponents/ResubmissionCategoriesChart";
import ResubmissionTrendsChart from "../components/PendingResubComponents/ResubmissionTrendsChart";
import ResubmissionStatsTable from "../components/PendingResubComponents/ResubmissionStatsTable.jsx";
import PendingResubmissionsTable from "../components/PendingResubComponents/PendingResubmissionsTable.jsx";

const PendingResubPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Pending Resubmissions
        </h1>
        <p className="text-gray-600">
          Manage and track claims that are pending resubmission after initial
          rejection.
        </p>
      </div>

      {/* Summary Cards */}
      <PendingResubMetrics />

      {/* Charts Row (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ResubmissionCategoriesChart />
        <ResubmissionTrendsChart />
      </div>

      {/* Resubmission Stats Table */}
      <div className="mb-8">
        <ResubmissionStatsTable />
      </div>

      {/* Pending Resubmissions Table */}
      <div>
        <PendingResubmissionsTable />
      </div>
    </div>
  );
};

export default PendingResubPage;
