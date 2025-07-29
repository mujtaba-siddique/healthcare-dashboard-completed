import React from "react";
import { Users, TrendingUp, Activity, BarChart3 } from "lucide-react";

const metricsData = [
  {
    icon: Users,
    value: "12",
    label: "Total Service Classes",
    color: "from-blue-500 to-indigo-600",
    change: "+2 this month",
    changeType: "positive",
    delay: 0,
  },
  {
    icon: Activity,
    value: "8,294",
    label: "Active Claims",
    color: "from-green-5200 to-emerald-600",
    change: "+12% from last month",
    changeType: "positive",
    delay: 100,
  },
  {
    icon: TrendingUp,
    value: "$13.4M",
    label: "Total Revenue",
    color: "from-purple-500 to-violet-600",
    change: "+8% from last month",
    changeType: "positive",
    delay: 200,
  },
  {
    icon: BarChart3,
    value: "$1,615",
    label: "Avg Claim Value",
    color: "from-orange-500 to-red-500",
    change: "-2% from last month",
    changeType: "negative",
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
      {/* {change && (
        <div
          className={`flex items-center text-sm font-medium ${
            changeType === "positive" ? "text-green-600" : "text-red-600"
          }`}
        >
          <TrendingUp
            className={`h-4 w-4 mr-1 ${
              changeType === "negative" ? "rotate-180" : ""
            }`}
          />
          {change}
        </div>
      )} */}
    </div>
    <div className="mt-4">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  </div>
);

const ServiceClassMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metricsData.map((metric, index) => (
        <MetricCard
          key={index}
          icon={metric.icon}
          value={metric.value}
          label={metric.label}
          color={metric.color}
          change={metric.change}
          changeType={metric.changeType}
          delay={metric.delay}
        />
      ))}
    </div>
  );
};

export default ServiceClassMetrics;

