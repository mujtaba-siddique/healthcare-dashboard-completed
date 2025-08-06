// components/Common/MetricCards.jsx

import React from "react";
// AED icon
const AedIcon = ({ className }) => (
  <span className={`font-semibold text-center ${className}`} style={{ lineHeight: '1' }}>
    AED
  </span>
);

const MetricCard = ({
  icon: Icon,
  value,
  label,
  color,
  delay = 0,
}) => (
  <div
    className={`metric-card p-6 fade-in`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-between">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
     
    </div>
    <div className="mt-4">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  </div>
);

// Reusable MetricCards component
const MetricCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {data.map((metric, index) => (
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

export { AedIcon }; // Export for use where needed
export default MetricCards;
