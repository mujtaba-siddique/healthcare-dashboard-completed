import React from "react";
import { TrendingUp, DollarSign, BarChart3, Calculator } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const ClaimAveragePage = () => {
  const summaryStats = [
    {
      title: "Overall Average",
      value: "$1,615",
      icon: DollarSign,
      color: "bg-blue-500",
      change: "+5% from last month",
    },
    {
      title: "Highest Average",
      value: "$5,714",
      icon: TrendingUp,
      color: "bg-green-500",
      change: "Surgical Services",
    },
    {
      title: "Total Claims",
      value: "8,294",
      icon: BarChart3,
      color: "bg-purple-500",
      change: "This month",
    },
    {
      title: "Median Value",
      value: "$1,250",
      icon: Calculator,
      color: "bg-orange-500",
      change: "+2% from last month",
    },
  ];

  const averageTrends = [
    { month: "Jan", average: 1520, median: 1200, total: 7800 },
    { month: "Feb", average: 1580, median: 1220, total: 8100 },
    { month: "Mar", average: 1545, median: 1180, total: 7950 },
    { month: "Apr", average: 1620, median: 1240, total: 8200 },
    { month: "May", average: 1590, median: 1230, total: 8050 },
    { month: "Jun", average: 1615, median: 1250, total: 8294 },
  ];

  const serviceAverages = [
    { service: "Emergency", average: 2289, count: 1245, total: 2850000 },
    { service: "Surgical", average: 5714, count: 567, total: 3240000 },
    { service: "Inpatient", average: 5112, count: 892, total: 4560000 },
    { service: "Outpatient", average: 547, count: 3456, total: 1890000 },
    { service: "Diagnostic", average: 417, count: 2134, total: 890000 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Claim Average Analysis</h1>
        <p className="text-gray-600">
          Analyze average claim values across different services and time periods.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Average Trends */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Average Claim Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={averageTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="average" stroke="#3B82F6" strokeWidth={2} name="Average" />
                <Line type="monotone" dataKey="median" stroke="#10B981" strokeWidth={2} name="Median" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Service Averages */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Average by Service Type</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serviceAverages}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="service" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="average" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Service Averages Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Service Average Breakdown</h2>
          <p className="text-sm text-gray-600 mt-1">
            Detailed analysis of average claim values by service type.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Claim Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {serviceAverages.map((service, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{service.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${service.average.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{service.count.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${service.total.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {((service.total / 13430000) * 100).toFixed(1)}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClaimAveragePage;

