import React from "react";
import MetricCards from "../components/DashboardComponents/MetricCards.jsx";
import ClaimStatusChart from "../components/DashboardComponents/ClaimStatusChart.jsx";
import RevenueChart from "../components/DashboardComponents/RevenueChart.jsx";
import KPIGauges from "../components/DashboardComponents/KPIGauges.jsx";
import OverallGraph from "../components/DashboardComponents/OverallGraph.jsx";
import InsuranceTypeChart from "../components/DashboardComponents/PayerPieChart.jsx";
import AgingReportChart from "../components/DashboardComponents/AgingReportChart.jsx";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-1 md:p-3">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Healthcare RCM Dashboard
        </h1>
        <p className="text-gray-600">
          Monitor your revenue cycle management performance and key metrics
        </p>
      </div>

      {/* Key Metrics */}
      <MetricCards />

      {/* Main Charts Row (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Claim Status Chart takes 5 of 12 columns */}
        <div className="lg:col-span-5">
          <ClaimStatusChart />
        </div>
        
        {/* Revenue Chart takes the remaining 7 of 12 columns */}
        <div className="lg:col-span-7">
          <RevenueChart />
        </div>
      </div>
      
      {/* Overall Performance Graph (Full Width) */}
      <div className="mb-8">
        <OverallGraph />
      </div>

      {/* KPI Gauges */}
      <KPIGauges />

      {/* Extra Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <InsuranceTypeChart />
        <AgingReportChart />
      </div>
    </div>
  );
};

export default Dashboard;
