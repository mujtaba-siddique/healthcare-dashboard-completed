import React from "react";
import ResubmissionCategoriesChart from "../components/PendingResubComponents/ResubmissionCategoriesChart";
import ResubmissionTrendsChart from "../components/PendingResubComponents/ResubmissionTrendsChart";
import ResubmissionStatsTable from "../components/PendingResubComponents/ResubmissionStatsTable.jsx";
import PendingResubmissionsTable from "../components/PendingResubComponents/InsuranceDataTable.jsx";
import MetricCards from "../components/Common/MetricCards.jsx";
import { AlertTriangle, Clock, RefreshCw, CheckCircle } from "lucide-react";

const metricsData = [
  {
    icon: AlertTriangle,
    value: "135",
    label: "Total Pending",
    color: "from-red-500 to-red-600",
    change: "Resubmissions",
    changeType: "neutral",
    delay: 0,
  },
  {
    icon: RefreshCw,
    value: "45",
    label: "Ready to Submit",
    color: "from-green-500 to-emerald-600",
    change: "33% of total",
    changeType: "positive",
    delay: 100,
  },
  {
    icon: Clock,
    value: "5 days",
    label: "Avg Processing Time",
    color: "from-blue-500 to-indigo-600",
    change: "-0.8 days improvement",
    changeType: "positive",
    delay: 200,
  },
  {
    icon: CheckCircle,
    value: "87%",
    label: "Success Rate",
    color: "from-purple-500 to-violet-600",
    change: "+3% this month",
    changeType: "positive",
    delay: 300,
  },
];

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
      
      {/* Metrics Cards */}
      <MetricCards data={metricsData} />

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
