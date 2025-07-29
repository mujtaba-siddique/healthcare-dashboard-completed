import React from "react";
import ServiceClassMetrics from "../components/ServiceClassComponents/ServiceClassMetrics";
import ServiceClassTable from "../components/ServiceClassComponents/ServiceClassTable";

const ServiceClassPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Class Management</h1>
        <p className="text-gray-600">
          Monitor and manage different service classes and their performance metrics.
        </p>
      </div>

      {/* Metrics Cards */}
      <ServiceClassMetrics />

      {/* Service Classes Table */}
      <ServiceClassTable />
    </div>
  );
};

export default ServiceClassPage;

