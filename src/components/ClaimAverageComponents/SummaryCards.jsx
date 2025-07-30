import React from "react";
import { TrendingUp, DollarSign, BarChart3, Calculator } from "lucide-react";

const SummaryCards = () => {
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