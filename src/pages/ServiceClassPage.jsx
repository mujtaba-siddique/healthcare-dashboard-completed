import React from "react";
import ServiceClassMetrics from "../components/ServiceClassComponents/ServiceClassMetrics";
import ServiceClassTable from "../components/ServiceClassComponents/ServiceClassTable";
import ServiceClassBarGraph from "../components/ServiceClassComponents/ServiceClassBarGraph";

const ServiceClassPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Service Class Management
        </h1>
        <p className="text-gray-600">
          Monitor and manage different service classes and their performance metrics.
        </p>
      </div>

      {/* Metrics Cards */}
      <ServiceClassMetrics />

      {/* Bar Graph Section */}
      <div className="mb-8">
        <ServiceClassBarGraph />
      </div>

      {/* Service Classes Table */}
      <div>
        <ServiceClassTable />
      </div>
    </div>
  );
};

export default ServiceClassPage;
