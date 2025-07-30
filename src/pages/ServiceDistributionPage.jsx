import React from "react";
import ServiceDistributionMetrics from "../components/ServiceDistributionComponents/ServiceDistributionMetrics";
import ServiceDistributionPieChart from "../components/ServiceDistributionComponents/ServiceDistributionPieChart";
import ServiceDistributionBarChart from "../components/ServiceDistributionComponents/ServiceDistributionBarChart";
import ServiceDistributionTable from "../components/ServiceDistributionComponents/ServiceDistributionTable";

const ServiceDistributionPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Service Distribution
        </h1>
        <p className="text-gray-600">
          Analyze the distribution of services across different categories and time periods.
        </p>
      </div>

      {/* Summary Cards */}
      <ServiceDistributionMetrics />

      {/* Charts Row (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ServiceDistributionPieChart />
        <ServiceDistributionBarChart />
      </div>

      {/* Service Distribution Table */}
      <div>
        <ServiceDistributionTable />
      </div>
    </div>
  );
};

export default ServiceDistributionPage;
