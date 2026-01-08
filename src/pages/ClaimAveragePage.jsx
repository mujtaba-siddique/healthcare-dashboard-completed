import React from "react";

import SummaryCards from "../components/ClaimAverageComponents/SummaryCards.jsx";
import AverageTrendsChart from "../components/ClaimAverageComponents/AverageTrendsChart.jsx";
import ServiceAveragesChart from "../components/ClaimAverageComponents/ServiceAveragesChart.jsx";
import ServiceAveragesTable from "../components/ClaimAverageComponents/ServiceAveragesTable.jsx";

const ClaimAveragePage = () => {
  return (
    <div className=" mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Claim Average Analysis
        </h1>
        <p className="text-gray-600">
          Analyze average claim values across different services and time periods.
        </p>
      </div>

      {/* <div className="mb-8"> */}

      {/* Summary Cards */}
      {/* <SummaryCards /> */}
      {/* </div> */}

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Average Trends Chart */}
        <div className="lg:col-span-6">
          <AverageTrendsChart />
        </div>

        {/* Service Averages Chart */}
        <div className="lg:col-span-6">
          <ServiceAveragesChart />
        </div>
      </div>

      {/* Service Averages Table (Full Width) */}
      <div className="mb-8">
        <ServiceAveragesTable />
      </div>
    </div>
  );
};

export default ClaimAveragePage;
