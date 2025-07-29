import React from "react";
import ServiceDistributionMetrics from "../components/ServiceDistributionComponents/ServiceDistributionMetrics";
import ServiceDistributionPieChart from "../components/ServiceDistributionComponents/ServiceDistributionPieChart";
import ServiceDistributionBarChart from "../components/ServiceDistributionComponents/ServiceDistributionBarChart";
import ServiceDistributionTable from "../components/ServiceDistributionComponents/ServiceDistributionTable";

const ServiceDistributionPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Distribution</h1>
        <p className="text-gray-600">
          Analyze the distribution of services across different categories and time periods.
        </p>
      </div>

      {/* Summary Cards */}
      <ServiceDistributionMetrics />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ServiceDistributionPieChart />
        <ServiceDistributionBarChart />
      </div>

      {/* Distribution Table */}
      <ServiceDistributionTable />
    </div>
  );
};

export default ServiceDistributionPage;

