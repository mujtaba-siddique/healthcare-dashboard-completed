import React from "react";
import { Activity, PieChart, BarChart3, TrendingUp } from "lucide-react";

const metricsData = [
  {
    icon: Activity,
    value: "5",
    label: "Total Services",
    color: "from-blue-500 to-indigo-600",
    change: "Active services",
    changeType: "neutral",
    delay: 0,
  },
  {
    icon: TrendingUp,
    value: "Emergency",
    label: "Most Used Service",
    color: "from-green-500 to-emerald-600",
    change: "35% of total",
    changeType: "positive",
    delay: 100,
  },
  {
    icon: BarChart3,
    value: "Inpatient",
    label: "Highest Revenue",
    color: "from-purple-500 to-violet-600",
    change: "$4.56M total",
    changeType: "positive",
    delay: 200,
  },
  {
    icon: PieChart,
    value: "Diagnostic",
    label: "Growth Leader",
    color: "from-orange-500 to-red-500",
    change: "+15% this month",
    changeType: "positive",
    delay: 300,
  },
];

const MetricCard = ({
  icon: Icon,
  value,
  label,
  change,
  changeType,
  color,
  delay = 0,
}) => (
  <div
    className={`bg-white rounded-lg shadow-sm p-6 fade-in`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-between">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      {change && (
        <div
          className={`flex items-center text-sm font-medium ${
            changeType === "positive" 
              ? "text-green-600" 
              : changeType === "negative" 
              ? "text-red-600" 
              : "text-gray-600"
          }`}
        >
          {changeType !== "neutral" && (
            <TrendingUp
              className={`h-4 w-4 mr-1 ${
                changeType === "negative" ? "rotate-180" : ""
              }`}
            />
          )}
          {change}
        </div>
      )}
    </div>
    <div className="mt-4">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  </div>
);

const ServiceDistributionMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metricsData.map((metric, index) => (
        <MetricCard
          key={index}
          icon={metric.icon}
          value={metric.value}
          label={metric.label}
          color={metric.color}
          // change={metric.change}
          changeType={metric.changeType}
          delay={metric.delay}
        />
      ))}
    </div>
  );
};

export default ServiceDistributionMetrics;

