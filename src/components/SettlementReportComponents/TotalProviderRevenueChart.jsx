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

// Chart.js के आवश्यक हिस्से रजिस्टर करें
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalProviderRevenueChart = () => {
  const sourceData = [
    { id: "3", period: "January", ecare: 197.27, fmc: 0.0, mednet: 37328.43, nas: 129.54, nextcare: 457.02, ngi: null, oic: 13231.98 },
    { id: "2", period: "February", ecare: 192.03, fmc: null, mednet: 113.97, nas: 189.18, nextcare: 82.48, ngi: 173.23, oic: 10135.56 },
    { id: "1", period: "March", ecare: null, fmc: null, mednet: 36.73, nas: null, nextcare: null, ngi: 50.36, oic: null },
  ];

  const providerKeys = ['ecare', 'fmc', 'mednet', 'nas', 'nextcare', 'ngi', 'oic'];
  
  // 1. हर प्रोवाइडर के लिए टोटल रेवेन्यू की गणना करें
  const totalRevenueByProvider = providerKeys.map(provider => {
    return sourceData.reduce((total, monthData) => total + (monthData[provider] || 0), 0);
  });
  
  // प्रोफेशनल कलर पैलेट
  const providerColors = [
    '#4C51BF', '#ED64A6', '#38A169', '#ECC94B',
    '#F56565', '#4299E1', '#9F7AEA'
  ];

  const chartData = {
    labels: providerKeys.map(p => p.toUpperCase()),
    datasets: [
      {
        label: 'Total Revenue',
        data: totalRevenueByProvider,
        backgroundColor: providerColors, // हर बार के लिए अलग रंग
        borderColor: providerColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Total Revenue by Insurance Provider (Jan-Mar)',
        font: { size: 18, weight: 'bold' },
        padding: { top: 10, bottom: 20 },
        color: '#1a202c'
      },
      // 2. लेजेंड (Legend) की जरूरत नहीं है, इसलिए इसे हटा दिया गया है
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) label += ': ';
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-AE', {
                style: 'currency',
                currency: 'AED',
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        // 3. स्टैकिंग (Stacking) को बंद कर दिया गया है
        stacked: false, 
        grid: { display: false },
        title: {
          display: true,
          text: 'Insurance Provider',
          font: { size: 14, weight: 'bold' },
          color: '#4a5568'
        }
      },
      y: {
        stacked: false,
        beginAtZero: true,
        grid: { color: '#e2e8f0' },
        title: {
          display: true,
          text: 'Total Revenue (AED)',
          font: { size: 14, weight: 'bold' },
          color: '#4a5568'
        },
        ticks: {
          callback: function (value) {
            if (value >= 1000) return `${value / 1000}k`;
            return value;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm w-full  mx-auto">
      <div className="relative h-96 md:h-[400px]">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default TotalProviderRevenueChart;