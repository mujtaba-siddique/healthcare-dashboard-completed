import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Data for the chart
const professionalData = [
  { name: "NAVED KHAN", share: 27.91 },
  { name: "AFTAB AHMAD", share: 27.66 },
  { name: "ROSEMEEN YOUNIS", share: 22.39 },
  { name: "ERUJ DANISH", share: 16.76 },
  { name: "GAJENDER RAJEV", share: 4.51 },
  { name: "RAKHI KHADE", share: 0.74 },
  { name: "SARWAR KHAN", share: 0.01 },
  { name: "HASNA AKTER", share: 0.01 },
];

// Define colors for the chart and custom legend
const CHART_COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Emerald
  '#8B5CF6', // Violet
  '#F59E0B', // Amber
  '#EF4444', // Red
  '#6B7280', // Gray
];


const ProfessionalDonutChart = () => {
  // Group professionals with less than 1% share into 'Others' for clarity
  const mainProfessionals = professionalData.filter(p => p.share >= 1);
  const otherProfessionalsShare = professionalData
    .filter(p => p.share < 1)
    .reduce((sum, p) => sum + p.share, 0);

  const chartLabels = [...mainProfessionals.map(p => p.name)];
  const chartDataPoints = [...mainProfessionals.map(p => p.share)];

  if (otherProfessionalsShare > 0) {
    chartLabels.push('Others');
    chartDataPoints.push(otherProfessionalsShare);
  }
  
  const legendData = chartLabels.map((label, index) => ({
    name: label,
    value: chartDataPoints[index],
    color: CHART_COLORS[index % CHART_COLORS.length],
  }));

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartDataPoints,
        backgroundColor: CHART_COLORS,
        borderColor: '#ffffff',
        borderWidth: 2,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#ffffff',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed.toFixed(2)}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Professional Share
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Distribution of claim share by professional.
      </p>

      <div className="flex flex-col md:flex-row items-center -mt-4">
        {/* Chart Section */}
        <div className="w-full md:w-1/2 h-80">
          {/* CORRECTED: Removed the <ResponsiveContainer> wrapper */}
          <Pie data={data} options={options} />
        </div>

        {/* Custom Legend Section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-8">
          <div className="space-y-4">
            {legendData.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3.5 h-3.5 rounded-full mr-3 flex-shrink-0"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-gray-700 text-base">{entry.name}</span>
                </div>
                {/* <span className="font-semibold text-gray-900 text-base">
                  {entry.value.toFixed(2)}%
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDonutChart;