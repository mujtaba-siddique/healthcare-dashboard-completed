import React from 'react';
// import InsuranceMetrics from '../components/InsuranceComponents/MetricCards.jsx';
import ClaimsTrendChart from '../components/InsuranceComponents/SimpleClaimsChart.jsx';
import InsuranceTypesChart from '../components/InsuranceComponents/PayerDistributionChartVibrant.jsx';
import DenialReasonsChart from '../components/InsuranceComponents/DenialReasonsChart.jsx';
import RecentClaimsTable from '../components/InsuranceComponents/RecentClaimsTable.jsx';
import InsurancePerformanceTable from '../components/InsuranceComponents/InsurancePerformanceTable.jsx';
import MetricCards, { AedIcon } from "../components/Common/MetricCards.jsx";

import {
  ClipboardList, // New Icon for Claimed
  XCircle,       // New Icon for Rejected
  Hourglass,     // New Icon for Waiting
  Percent,       // New Icon for Rej %
} from "lucide-react";

const InsuranceData = [
  {
    icon: ClipboardList,
    value: "2M",
    label: "Claimed",
    color: "from-blue-500 to-indigo-600",
    delay: 0,
  },
  {
    icon: AedIcon, // Yahan DollarSign ki jagah AedIcon ka istemaal karein
    value: "1.9M",
    label: "Paid",
    color: "from-green-500 to-emerald-600",
    delay: 100,
},
  {
    icon: XCircle,
    value: "7,415",
    label: "Rejected",
    color: "from-red-500 to-rose-600",
    delay: 200,
  },
  {
    icon: Hourglass,
    value: "69.8K",
    label: "Waiting",
    color: "from-orange-500 to-amber-600",
    delay: 300,
  },
  {
    icon: Percent,
    value: "0.6%",
    label: "Rej %",
    color: "from-purple-500 to-violet-600",
    delay: 400,
  },
];

const InsurancePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Insurance Management</h1>
        <p className="text-gray-600">Monitor insurance claims, approvals, and revenue performance</p>
      </div>

      {/* Metrics Grid */}
      <MetricCards data={InsuranceData} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ClaimsTrendChart />
        <InsuranceTypesChart />
     
        
      </div>
      

      {/* Denial Reasons and Recent Claims */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <DenialReasonsChart />
        <RecentClaimsTable />
      </div>

      {/* Insurance Performance Table */}
      <InsurancePerformanceTable />
    </div>
  );
};

export default InsurancePage;
