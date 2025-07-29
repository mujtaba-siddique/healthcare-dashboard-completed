import React from "react";
import RejectionAnalysisMetrics from "../components/RejectionAnalysisComponents/RejectionAnalysisMetrics";
import RejectionReasonsPieChart from "../components/RejectionAnalysisComponents/RejectionReasonsPieChart";
import RejectionTrendsChart from "../components/RejectionAnalysisComponents/RejectionTrendsChart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RejectionAnalysisPage = () => {
  const rejectionsByPayer = [
    { payer: "Medicare", rejections: 180, total: 800, rate: 22.5 },
    { payer: "Medicaid", rejections: 150, total: 600, rate: 25.0 },
    { payer: "Blue Cross", rejections: 120, total: 700, rate: 17.1 },
    { payer: "Aetna", rejections: 100, total: 500, rate: 20.0 },
    { payer: "Cigna", rejections: 80, total: 450, rate: 17.8 },
    { payer: "UnitedHealth", rejections: 70, total: 400, rate: 17.5 },
  ];

  const rejectionReasons = [
    { reason: "Missing Documentation", count: 245, percentage: 35, color: "#EF4444" },
    { reason: "Invalid Coding", count: 189, percentage: 27, color: "#F59E0B" },
    { reason: "Authorization Required", count: 134, percentage: 19, color: "#8B5CF6" },
    { reason: "Duplicate Claim", count: 89, percentage: 13, color: "#10B981" },
    { reason: "Other", count: 43, percentage: 6, color: "#6B7280" },
  ];

  const recentRejections = [
    {
      id: "REJ-001",
      patient: "John Doe",
      service: "Emergency",
      amount: 2500,
      reason: "Missing Documentation",
      date: "2024-01-15",
      status: "Pending",
    },
    {
      id: "REJ-002",
      patient: "Jane Smith",
      service: "Outpatient",
      amount: 450,
      reason: "Invalid Coding",
      date: "2024-01-14",
      status: "Resolved",
    },
    {
      id: "REJ-003",
      patient: "Bob Johnson",
      service: "Diagnostic",
      amount: 780,
      reason: "Authorization Required",
      date: "2024-01-13",
      status: "In Progress",
    },
    {
      id: "REJ-004",
      patient: "Alice Brown",
      service: "Surgical",
      amount: 5200,
      reason: "Duplicate Claim",
      date: "2024-01-12",
      status: "Resolved",
    },
    {
      id: "REJ-005",
      patient: "Charlie Wilson",
      service: "Inpatient",
      amount: 3400,
      reason: "Missing Documentation",
      date: "2024-01-11",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-red-100 text-red-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Rejection Analysis</h1>
        <p className="text-gray-600">
          Analyze claim rejections, identify patterns, and track resolution progress.
        </p>
      </div>

      {/* Summary Cards */}
      <RejectionAnalysisMetrics />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RejectionReasonsPieChart />
        <RejectionTrendsChart />
      </div>

      {/* Rejection by Payer */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Rejections by Payer</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rejectionsByPayer}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="payer" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rejections" fill="#EF4444" name="Rejections" />
              <Bar dataKey="rate" fill="#F59E0B" name="Rate (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Rejection Reasons Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Rejection Reasons Breakdown</h2>
          <p className="text-sm text-gray-600 mt-1">
            Detailed analysis of rejection reasons and their impact.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rejection Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rejectionReasons.map((reason, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: reason.color }}
                      ></div>
                      <div className="text-sm font-medium text-gray-900">
                        {reason.reason}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{reason.count}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{reason.percentage}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        index === 0
                          ? "bg-red-100 text-red-800"
                          : index <= 2
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {index === 0 ? "High" : index <= 2 ? "Medium" : "Low"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Rejections */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Rejections</h2>
          <p className="text-sm text-gray-600 mt-1">
            Latest rejected claims requiring attention.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rejection ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentRejections.map((rejection) => (
                <tr key={rejection.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{rejection.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{rejection.patient}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{rejection.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${rejection.amount.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{rejection.reason}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{rejection.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        rejection.status
                      )}`}
                    >
                      {rejection.status}
                    </span>
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

export default RejectionAnalysisPage;

