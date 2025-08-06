import React from "react";
import ServiceDistributionPieChart from "../components/ServiceDistributionComponents/ProfessionalDonutChart";
import ServiceDistributionBarChart from "../components/ServiceDistributionComponents/ServiceDistributionBarChart";
import ServiceDistributionTable from "../components/ServiceDistributionComponents/ProfessionalPerformanceTable";
import MetricCards, { AedIcon } from "../components/Common/MetricCards.jsx";
import {
  ClipboardList, // New Icon for Claimed
  XCircle,       // New Icon for Rejected
  Hourglass,     // New Icon for Waiting
  Percent,       // New Icon for Rej %
} from "lucide-react";
const metricsData = [
  {
    icon: ClipboardList,
    value: "1.4M",
    label: "Claimed",
    color: "from-blue-500 to-indigo-600",
    delay: 0,
  },
  
  {
    icon: AedIcon, // Yahan DollarSign ki jagah AedIcon ka istemaal karein
    value: "1.3M",
    label: "Paid",
    color: "from-green-500 to-emerald-600",
    delay: 100,
},
  {
    icon: XCircle,
    value: "5,875",
    label: "Rejected",
    color: "from-red-500 to-rose-600",
    delay: 200,
  },
  {
    icon: Hourglass,
    value: "40.0K",
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

     
       {/* Metrics Cards */}
      <MetricCards data={metricsData}/>
     

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
