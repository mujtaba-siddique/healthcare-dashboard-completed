import React from "react";
import RejectionAnalysisMetrics from "../components/RejectionAnalysisComponents/MetricCards";
import RejectionReasonsPieChart from "../components/RejectionAnalysisComponents/DenialCodePieChart";
import RejectionTrendsChart from "../components/RejectionAnalysisComponents/RejectionTrendsChart"
import RejectionsByPayerChart from "../components/RejectionAnalysisComponents/RejectionBarGraph.jsx";
import RejectionReasonsTable from "../components/RejectionAnalysisComponents/RejectionReasonsTable.jsx";
import MetricCards, { AedIcon } from "../components/Common/MetricCards.jsx";
import {
  ClipboardList, // New Icon for Claimed
  XCircle,       // New Icon for Rejected
  Percent,       // New Icon for Rej %
} from "lucide-react";

const metricsData = [
  {
    icon: ClipboardList,
    value: " 2.58M",
    label: "Submission",
    color: "from-blue-500 to-indigo-600",
    delay: 0,
  },
  
  {
    icon: AedIcon, // Yahan DollarSign ki jagah AedIcon ka istemaal karein
    value: "2.47M",
    label: "Paid",
    color: "from-green-500 to-emerald-600",
    delay: 100,
},
  {
    icon: XCircle,
    value: "8,186.74 ",
    label: "Rejected",
    color: "from-red-500 to-rose-600",
    delay: 200,
  },
  
  {
    icon: Percent,
    value: "0.33%",
    label: "Rej %",
    color: "from-purple-500 to-violet-600",
    delay: 400,
  },
];


const RejectionAnalysisPage = () => {
  return (
    <div className=" mx-auto p-1 md:p-3">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Rejection Analysis
        </h1>
        <p className="text-gray-600">
          Analyze claim rejections, identify patterns, and track resolution progress.
        </p>
      </div>

      {/* Metrics Cards */}
      <MetricCards data={metricsData} />

      {/* Charts Row (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RejectionReasonsPieChart />
        <RejectionTrendsChart />
      </div>

      {/* Rejections by Payer */}
      <div className="mb-8">
        <RejectionsByPayerChart />
      </div>

      {/* Rejection Reasons Table */}
      <div className="mb-8">
        <RejectionReasonsTable />
      </div>

      {/* Recent Rejections Table */}
      {/* <div>
        <RecentRejectionsTable />
      </div> */}
    </div>
  );
};

export default RejectionAnalysisPage;
