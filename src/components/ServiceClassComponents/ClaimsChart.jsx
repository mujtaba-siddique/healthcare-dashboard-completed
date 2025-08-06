import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary elements for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Data is defined within the component
const mockBarGraphData = [
  { month: "Jan", Claimed: 166100, Paid: 160000, Rejected: 600, Waiting: 5500 },
  { month: "Feb", Claimed: 161410, Paid: 155000, Rejected: 610, Waiting: 5800 },
  { month: "Mar", Claimed: 171625, Paid: 165000, Rejected: 625, Waiting: 6000 },
  { month: "Apr", Claimed: 176690, Paid: 170000, Rejected: 590, Waiting: 6100 },
  { month: "May", Claimed: 174830, Paid: 168000, Rejected: 630, Waiting: 6200 },
  { month: "Jun", Claimed: 178650, Paid: 172000, Rejected: 650, Waiting: 6000 },
  { month: "Jul", Claimed: 181540, Paid: 175000, Rejected: 640, Waiting: 5900 },
  { month: "Aug", Claimed: 172915, Paid: 166000, Rejected: 615, Waiting: 6300 },
  { month: "Sep", Claimed: 170120, Paid: 163000, Rejected: 620, Waiting: 6500 },
  { month: "Oct", Claimed: 175435, Paid: 169000, Rejected: 635, Waiting: 5800 },
  { month: "Nov", Claimed: 177044, Paid: 171000, Rejected: 644, Waiting: 5400 },
  { month: "Dec", Claimed: 172590, Paid: 166000, Rejected: 590, Waiting: 6000 },
];

const ClaimsChart = () => {
  // Prepare data format for Chart.js
  const data = {
    labels: mockBarGraphData.map((d) => d.month),
    datasets: [
      {
        label: 'Claimed',
        data: mockBarGraphData.map((d) => d.Claimed),
        backgroundColor: 'rgba(59, 130, 246, 0.7)', // Blue
      },
      {
        label: 'Paid',
        data: mockBarGraphData.map((d) => d.Paid),
        backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
      },
      {
        label: 'Rejected',
        data: mockBarGraphData.map((d) => d.Rejected),
        backgroundColor: 'rgba(239, 68, 68, 0.7)', // Red
      },
    ],
  };

  // Configure options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // The title is now a separate JSX element, so we disable the chart's internal title
      title: {
        display: false,
      },
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 12,
          font: {
            size: 12,
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        }
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    // Style the container with Tailwind CSS
    <div className="bg-white rounded-xl shadow-sm">
      {/* Component Header */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Monthly Claims Overview</h2>
    
      </div>

      {/* Chart Container */}
      <div className="p-4">
        <div style={{ height: '350px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ClaimsChart;