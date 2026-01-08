import React from "react";
import AgingDistributionChart from "../components/SubAgingComponents/AgingDistributionChart";
import AgingTrendsChart from "../components/SubAgingComponents/AgingTrendsChart";
import AgingBucketsTable from "../components/SubAgingComponents/AgingBucketsTable";
import CriticalAgingTable from "../components/SubAgingComponents/CriticalAgingTable";
import MetricCards from "../components/Common/MetricCards.jsx";

import { Calendar, Clock, AlertTriangle, TrendingDown } from "lucide-react";

const metricsData = [
  {
    icon: Calendar,
    value: "2,950",
    label: "Total Outstanding",
    color: "from-blue-500 to-indigo-600",
    delay: 0,
  },
  {
    icon: Clock,
    value: "42 days",
    label: "Avg Age",
    color: "from-green-500 to-emerald-600",
    delay: 100,
  },
  {
    icon: AlertTriangle,
    value: "357",
    label: "Critical (90+ days)",
    color: "from-red-500 to-red-600",
    delay: 200,
  },
  {
    icon: TrendingDown,
    value: "Improving",
    label: "Aging Trend",
    color: "from-purple-500 to-violet-600",
    delay: 300,
  },
];

const SubAgingPage = () => {
  return (
    <div className="mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Sub Aging Analysis
        </h1>
        <p className="text-gray-600">
          Monitor and analyze the aging of outstanding claims and submissions.
        </p>
      </div>

      {/* Metrics Cards */}
      <MetricCards data={metricsData} />

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
