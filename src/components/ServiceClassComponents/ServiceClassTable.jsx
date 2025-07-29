import React from "react";

const serviceClasses = [
  {
    id: 1,
    name: "Emergency Services",
    totalClaims: 1245,
    totalAmount: 2850000,
    avgAmount: 2289,
    status: "Active",
    trend: "+12%",
  },
  {
    id: 2,
    name: "Outpatient Services",
    totalClaims: 3456,
    totalAmount: 1890000,
    avgAmount: 547,
    status: "Active",
    trend: "+8%",
  },
  {
    id: 3,
    name: "Inpatient Services",
    totalClaims: 892,
    totalAmount: 4560000,
    avgAmount: 5112,
    status: "Active",
    trend: "-3%",
  },
  {
    id: 4,
    name: "Diagnostic Services",
    totalClaims: 2134,
    totalAmount: 890000,
    avgAmount: 417,
    status: "Active",
    trend: "+15%",
  },
  {
    id: 5,
    name: "Surgical Services",
    totalClaims: 567,
    totalAmount: 3240000,
    avgAmount: 5714,
    status: "Active",
    trend: "+5%",
  },
];

const ServiceClassTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Service Classes Overview</h2>
        <p className="text-sm text-gray-600 mt-1">
          Detailed breakdown of all service classes and their metrics.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service Class
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Claims
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trend
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {serviceClasses.map((serviceClass) => (
              <tr key={serviceClass.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {serviceClass.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {serviceClass.totalClaims.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${serviceClass.totalAmount.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${serviceClass.avgAmount.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      serviceClass.trend.startsWith("+")
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {serviceClass.trend}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {serviceClass.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceClassTable;

