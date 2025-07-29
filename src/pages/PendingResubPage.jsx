import React from "react";
import PendingResubMetrics from "../components/PendingResubComponents/PendingResubMetrics";
import ResubmissionCategoriesChart from "../components/PendingResubComponents/ResubmissionCategoriesChart";
import ResubmissionTrendsChart from "../components/PendingResubComponents/ResubmissionTrendsChart";

import ResubmissionStatsTable from "../components/PendingResubComponents/ResubmissionStatsTable.jsx";
import PendingResubmissionsTable from "../components/PendingResubComponents/PendingResubmissionsTable.jsx";

const PendingResubPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
       <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Pending Resubmissions</h1>
      <p className="text-gray-600">
        Manage and track claims that are pending resubmission after initial rejection.
      </p>
    </div>
      {/* Summary Cards */}
      <PendingResubMetrics />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResubmissionCategoriesChart />
        <ResubmissionTrendsChart />
      </div>

      {/* Resubmission Stats Table */}
      <ResubmissionStatsTable />

      {/* Pending Resubmissions Table */}
      <PendingResubmissionsTable />
    </div>
  );
};

export default PendingResubPage;
