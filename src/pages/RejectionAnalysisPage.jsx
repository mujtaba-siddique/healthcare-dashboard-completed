import React from "react";
import RejectionAnalysisMetrics from "../components/RejectionAnalysisComponents/RejectionAnalysisMetrics";
import RejectionReasonsPieChart from "../components/RejectionAnalysisComponents/RejectionReasonsPieChart";
import RejectionTrendsChart from "../components/RejectionAnalysisComponents/RejectionTrendsChart";
// import PageHeader from "./PageHeader";
import RejectionsByPayerChart from "../components/RejectionAnalysisComponents/RejectionsByPayerChart.jsx";
import RejectionReasonsTable from "../components/RejectionAnalysisComponents/RejectionReasonsTable.jsx";
import RecentRejectionsTable from "../components/RejectionAnalysisComponents/RecentRejectionsTable.jsx";

const RejectionAnalysisPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Rejection Analysis</h1>
      <p className="text-gray-600">
        Analyze claim rejections, identify patterns, and track resolution progress.
      </p>
    </div>

      {/* Summary Cards */}
      <RejectionAnalysisMetrics />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RejectionReasonsPieChart />
        <RejectionTrendsChart />
      </div>

      {/* Rejection by Payer */}
      <RejectionsByPayerChart />

      {/* Rejection Reasons Table */}
      <RejectionReasonsTable />

      {/* Recent Rejections */}
      <RecentRejectionsTable />
    </div>
  );
};

export default RejectionAnalysisPage;
