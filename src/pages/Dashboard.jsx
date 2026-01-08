import React from "react";
import MetricCards, { AedIcon } from "../components/Common/MetricCards.jsx";
import ClaimStatusChart from "../components/DashboardComponents/ClaimStatusChart.jsx";
import RevenueChart from "../components/DashboardComponents/RevenueChart.jsx";
import KPIGauges from "../components/DashboardComponents/KPIGauges.jsx";
import OverallGraph from "../components/DashboardComponents/YearlyComparisonChart.jsx";
import InsuranceTypeChart from "../components/DashboardComponents/PayerPieChart.jsx";
import AgingReportChart from "../components/DashboardComponents/AgingReportChart.jsx";
import { ClipboardList, XCircle, Hourglass, Percent } from "lucide-react";

const dashboardMetricsData = [
  {
    icon: ClipboardList,
    value: "2.6M",
    label: "Claimed",
    color: "from-blue-500 to-indigo-600",
    delay: 0,
  },
  {
    icon: AedIcon,
    value: "2.5M",
    label: "Paid",
    color: "from-green-500 to-emerald-600",
    delay: 100,
  },
  {
    icon: XCircle,
    value: "8,187",
    label: "Rejected",
    color: "from-red-500 to-rose-600",
    delay: 200,
  },
  {
    icon: Hourglass,
    value: "103.5K",
    label: "Waiting",
    color: "from-orange-500 to-amber-600",
    delay: 300,
  },
  {
    icon: Percent,
    value: "0.3%",
    label: "Rej %",
    color: "from-purple-500 to-violet-600",
    delay: 400,
  },
];

const Dashboard = () => {
  return (
    <div className=" mx-auto p-1 md:p-3">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Healthcare RCM Dashboard
        </h1>
        <p className="text-gray-600">
          Monitor your revenue cycle management performance and key metrics
        </p>
      </div>

      {/* Key Metrics */}
      <MetricCards data={dashboardMetricsData} />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-5">
          <ClaimStatusChart />
        </div>
        <div className="lg:col-span-7">
          <RevenueChart />
        </div>
      </div>

      <div className="mb-8">
        <OverallGraph />
      </div>

      <KPIGauges />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <InsuranceTypeChart />
        <AgingReportChart />
      </div>
    </div>
  );
};

export default Dashboard;
