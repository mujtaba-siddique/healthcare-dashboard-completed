import React from "react";
// import PageHeader from "./PageHeader";
import SummaryCards from "../components/SettlementReportComponents/SummaryCards.jsx";
import SettlementTrendsChart from "../components/SettlementReportComponents/SettlementTrendsChart.jsx";
import SettlementsByPayerChart from "../components/SettlementReportComponents/SettlementsByPayerChart.jsx";
import PayerPerformanceTable from "../components/SettlementReportComponents/PayerPerformanceTable.jsx";
import RecentSettlementsTable from "../components/SettlementReportComponents/RecentSettlementsTable.jsx";

const SettlementReportPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Settlement Report</h1>
      <p className="text-gray-600">
        Track and analyze claim settlements, payment trends, and payer performance.
      </p>
    </div>

      {/* Summary Cards */}
      <SummaryCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SettlementTrendsChart />
        <SettlementsByPayerChart />
      </div>

      {/* Payer Performance Table */}
      <PayerPerformanceTable />

      {/* Recent Settlements */}
      <RecentSettlementsTable />
    </div>
  );
};

export default SettlementReportPage;