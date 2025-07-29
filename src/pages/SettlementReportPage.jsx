import React from "react";
import { FileText, DollarSign, Calendar, TrendingUp } from "lucide-react";
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

const SettlementReportPage = () => {
  const summaryStats = [
    {
      title: "Total Settlements",
      value: "1,847",
      icon: FileText,
      color: "bg-blue-500",
      change: "This month",
    },
    {
      title: "Settlement Amount",
      value: "$12.4M",
      icon: DollarSign,
      color: "bg-green-500",
      change: "+15% from last month",
    },
    {
      title: "Avg Settlement Time",
      value: "18 days",
      icon: Calendar,
      color: "bg-purple-500",
      change: "-2 days improvement",
    },
    {
      title: "Settlement Rate",
      value: "94%",
      icon: TrendingUp,
      color: "bg-orange-500",
      change: "+3% from last month",
    },
  ];

  const settlementTrends = [
    { month: "Jan", settlements: 1650, amount: 10.2, rate: 91 },
    { month: "Feb", settlements: 1720, amount: 11.1, rate: 92 },
    { month: "Mar", settlements: 1680, amount: 10.8, rate: 90 },
    { month: "Apr", settlements: 1780, amount: 11.8, rate: 93 },
    { month: "May", settlements: 1820, amount: 12.1, rate: 94 },
    { month: "Jun", settlements: 1847, amount: 12.4, rate: 94 },
  ];

  const settlementsByPayer = [
    { payer: "Medicare", settlements: 485, amount: 3.2, avgTime: 16 },
    { payer: "Medicaid", settlements: 392, amount: 2.1, avgTime: 20 },
    { payer: "Blue Cross", settlements: 341, amount: 2.8, avgTime: 15 },
    { payer: "Aetna", settlements: 298, amount: 2.0, avgTime: 17 },
    { payer: "Cigna", settlements: 186, amount: 1.2, avgTime: 19 },
    { payer: "UnitedHealth", settlements: 145, amount: 1.1, avgTime: 18 },
  ];

  const recentSettlements = [
    {
      id: "SET-001",
      claimId: "CLM-1234",
      patient: "John Doe",
      payer: "Medicare",
      service: "Emergency",
      originalAmount: 2500,
      settledAmount: 2200,
      settlementDate: "2024-01-15",
      daysToSettle: 16,
    },
    {
      id: "SET-002",
      claimId: "CLM-1235",
      patient: "Jane Smith",
      payer: "Blue Cross",
      service: "Outpatient",
      originalAmount: 450,
      settledAmount: 420,
      settlementDate: "2024-01-14",
      daysToSettle: 12,
    },
    {
      id: "SET-003",
      claimId: "CLM-1236",
      patient: "Bob Johnson",
      payer: "Aetna",
      service: "Diagnostic",
      originalAmount: 780,
      settledAmount: 750,
      settlementDate: "2024-01-13",
      daysToSettle: 18,
    },
    {
      id: "SET-004",
      claimId: "CLM-1237",
      patient: "Alice Brown",
      payer: "Cigna",
      service: "Surgical",
      originalAmount: 5200,
      settledAmount: 4800,
      settlementDate: "2024-01-12",
      daysToSettle: 22,
    },
    {
      id: "SET-005",
      claimId: "CLM-1238",
      patient: "Charlie Wilson",
      payer: "UnitedHealth",
      service: "Inpatient",
      originalAmount: 3400,
      settledAmount: 3200,
      settlementDate: "2024-01-11",
      daysToSettle: 15,
    },
  ];

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
        {/* Settlement Trends */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Settlement Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={settlementTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="settlements" stroke="#3B82F6" strokeWidth={2} name="Settlements" />
                <Line type="monotone" dataKey="amount" stroke="#10B981" strokeWidth={2} name="Amount ($M)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Settlements by Payer */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Settlements by Payer</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={settlementsByPayer}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="payer" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="settlements" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Payer Performance Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Payer Performance</h2>
          <p className="text-sm text-gray-600 mt-1">
            Settlement performance metrics by insurance payer.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Settlements
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount ($M)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Time (Days)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {settlementsByPayer.map((payer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payer.payer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payer.settlements}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${payer.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payer.avgTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        payer.avgTime <= 16
                          ? "bg-green-100 text-green-800"
                          : payer.avgTime <= 18
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {payer.avgTime <= 16 ? "Excellent" : payer.avgTime <= 18 ? "Good" : "Needs Improvement"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Settlements */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Settlements</h2>
          <p className="text-sm text-gray-600 mt-1">
            Latest settled claims and their details.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Settlement ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Claim ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Original Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Settled Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Settlement Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Days to Settle
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentSettlements.map((settlement) => (
                <tr key={settlement.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{settlement.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{settlement.claimId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{settlement.patient}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{settlement.payer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{settlement.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${settlement.originalAmount.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${settlement.settledAmount.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{settlement.settlementDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{settlement.daysToSettle}</div>
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

export default SettlementReportPage;

