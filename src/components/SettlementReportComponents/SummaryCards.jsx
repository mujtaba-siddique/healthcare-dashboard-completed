import React from "react";
import { FileText, DollarSign, Calendar, TrendingUp } from "lucide-react";

const SummaryCards = () => {
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

  return (
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
  );
};

export default SummaryCards;