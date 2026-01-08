import React from "react";

import ServiceClassTable from "../components/ServiceClassComponents/DosageFormTable";
import ServiceClassBarGraph from "../components/ServiceClassComponents/ClaimsChart";
import MetricCards, { AedIcon } from "../components/Common/MetricCards.jsx";
import {
  DollarSign,
  ClipboardList, // New Icon for Claimed
  XCircle,       // New Icon for Rejected
  Hourglass,     // New Icon for Waiting
  Percent,       // New Icon for Rej %
  TrendingUp,    // Kept for the optional 'change' indicator
} from "lucide-react";

const MetricsData = [
  {
    icon: ClipboardList,
    value: "2M",
    label: "Claimed",
    color: "from-blue-500 to-indigo-600",
    delay: 0,
  },
  
  {
    icon: AedIcon, 
    value: "2M",
    label: "Paid",
    color: "from-green-500 to-emerald-600",
    delay: 100,
},
  {
    icon: XCircle,
    value: "7,449",
    label: "Rejected",
    color: "from-red-500 to-rose-600",
    delay: 200,
  },
  {
    icon: Hourglass,
    value: "71.5K",
    label: "Waiting",
    color: "from-orange-500 to-amber-600",
    delay: 300,
  },
  {
    icon: Percent,
    value: "0.4%",
    label: "Rej %",
    color: "from-purple-500 to-violet-600",
    delay: 400,
  },
];
const ServiceClassPage = () => {
  return (
    <div className="mx-auto p-1 md:p-3">
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
      <MetricCards data={MetricsData} />

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
