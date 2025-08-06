import React from "react";
// import PageHeader from "./PageHeader";
import SummaryCards from "../components/SettlementReportComponents/SummaryCards.jsx";
import SettlementTrendsChart from "../components/SettlementReportComponents/MonthlyDonutChart.jsx";
import SettlementsByPayerChart from "../components/SettlementReportComponents/PaymentChart.jsx";
import PayerPerformanceTable from "../components/SettlementReportComponents/InsuranceDataTable.jsx";
import RecentSettlementsTable from "../components/SettlementReportComponents/TotalProviderRevenueChart.jsx";

const SettlementReportPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Settlement Report
        </h1>
        <p className="text-gray-600">
          Track and analyze claim settlements, payment trends, and payer
          performance.
        </p>
      </div>

      
      

      {/* Charts Row (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SettlementTrendsChart />
        <SettlementsByPayerChart />
      </div>

       {/* Recent Settlements Table */}
      <div className="mb-8">
        <RecentSettlementsTable />
      </div>

      {/* Payer Performance Table (Full Width) */}
      <div className="mb-8">
        <PayerPerformanceTable />
      </div>

     
    </div>
  );
};

export default SettlementReportPage;
