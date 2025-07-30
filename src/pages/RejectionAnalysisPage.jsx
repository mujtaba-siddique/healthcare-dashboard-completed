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
    <div className="max-w-7xl mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Rejection Analysis
        </h1>
        <p className="text-gray-600">
          Analyze claim rejections, identify patterns, and track resolution progress.
        </p>
      </div>

      {/* Summary Cards */}
      <RejectionAnalysisMetrics />

      {/* Charts Row (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RejectionReasonsPieChart />
        <RejectionTrendsChart />
      </div>

      {/* Rejections by Payer */}
      <div className="mb-8">
        <RejectionsByPayerChart />
      </div>

      {/* Rejection Reasons Table */}
      <div className="mb-8">
        <RejectionReasonsTable />
      </div>

      {/* Recent Rejections Table */}
      {/* <div>
        <RecentRejectionsTable />
      </div> */}
    </div>
  );
};

export default RejectionAnalysisPage;
