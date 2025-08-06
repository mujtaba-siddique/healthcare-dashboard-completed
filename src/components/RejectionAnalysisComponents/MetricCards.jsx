import React from "react";
import {
  ClipboardList, // New Icon for Claimed
  XCircle,       // New Icon for Rejected
  Percent,       // New Icon for Rej %
  TrendingUp,    // Kept for the optional 'change' indicator
} from "lucide-react";

// Is component ko aap apne file mein kahin bhi rakh sakte hain
const AedIcon = ({ className }) => (
  <span className={`font-semibold text-center ${className}`} style={{ lineHeight: '1' }}>
    AED
  </span>
);
// Updated data based on your image
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
    className={`metric-card p-6 fade-in`} // Assuming 'metric-card' and 'fade-in' are defined in your CSS
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-between">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      {change && (
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
      )}
    </div>
    <div className="mt-4">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  </div>
);

const MetricCards = () => {
  return (
    // Changed grid to support 5 columns on large screens
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {metricsData.map((metric, index) => (
        <MetricCard
          key={index}
          icon={metric.icon}
          value={metric.value}
          label={metric.label}
          color={metric.color}
          delay={metric.delay}
        />
      ))}
    </div>
  );
};

export default MetricCards;