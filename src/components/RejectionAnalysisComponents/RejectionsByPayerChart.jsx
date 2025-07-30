// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from 'recharts';

// // CSS for scrolling container and hiding the scrollbar
// const chartStyles = `
//   .chart-scroll-container {
//     overflow-x: auto;
//     overflow-y: hidden;
//     padding-bottom: 10px; /* Optional: for better spacing */
//   }

//   /* Hide scrollbar for Chrome, Safari and Opera */
//   .chart-scroll-container::-webkit-scrollbar {
//     display: none;
//   }

//   /* Hide scrollbar for IE, Edge and Firefox */
//   .chart-scroll-container {
//     -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */
//   }
// `;

// // आपका डेटा
// const denialData = [
//     { denialCode: 'PRCE-003', shortDes: 'Recovery', rejected: 2141.23 },
//     { denialCode: 'CLAI-018', shortDes: 'Recalled', rejected: 1593.64 },
//     { denialCode: 'DUPL-001', shortDes: 'Duplicate', rejected: 1523.74 },
//     { denialCode: 'PRCE-001', shortDes: 'Calculation', rejected: 1029.22 },
//     { denialCode: 'CLAI-012', shortDes: 'Not compliant with agreement', rejected: 613.01 },
//     { denialCode: 'AUTH-003', shortDes: 'Auth no. not valid', rejected: 365.43 },
//     { denialCode: 'AUTH-012', shortDes: 'N/A', rejected: 345.95 },
//     { denialCode: 'ELIG-001', shortDes: 'Pt not cov member', rejected: 271.48 },
//     { denialCode: 'AUTH-001', shortDes: 'Auth not obtained', rejected: 127.25 },
//     { denialCode: 'DUPL-002', shortDes: 'Paid already', rejected: 56.04 },
//     { denialCode: 'AUTH-005', shortDes: 'Auth not matching', rejected: 55.96 },
//     { denialCode: 'MNEC-004', shortDes: 'Add diagnosis', rejected: 43.03 },
//     { denialCode: 'NCOV-003', shortDes: 'Serv not covered', rejected: 20.76 },
// ];


// const RoundedBar = (props) => {
//   const { x, y, width, height, fill } = props;
//   const radius = 6;

//   return (
//     <g>
//       <path d={`M${x},${y + radius} A${radius},${radius},0,0,1,${x + radius},${y} L${x + width - radius},${y} A${radius},${radius},0,0,1,${x + width},${y + radius} L${x + width},${y + height} L${x},${y + height} Z`} fill={fill} />
//     </g>
//   );
// };

// // Tooltip component (koi badlav nahi)
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     return (
//       <div className="bg-white p-3 shadow-sm rounded-lg border border-gray-200">
//         <p className="font-bold text-gray-900 text-base">{label}</p>
//         {/* Yahan 'shortDes' hona chahiye tha, maine use theek kar diya hai */}
//         <p className="text-sm text-gray-600 mt-1">Description: {data.shortDes}</p>
//         <p className="text-sm text-indigo-600 font-bold mt-2">
//           Rejected: AED {payload[0].value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//         </p>
//       </div>
//     );
//   }
//   return null;
// };

// const RejectionBarGraph = () => {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 w-full my-8">
//       {/* CSS ko head me ya component me add karne ke liye */}
//       <style>{chartStyles}</style>
      
//       <div>
//         <h2 className="text-xl font-bold text-gray-800">Rejections Analysis</h2>
//         <p className="text-sm text-gray-500">By Denial Code - Last 30 Days</p>
//       </div>
      
//       {/* YEH NAYA SCROLLING CONTAINER HAI */}
//       <div className="chart-scroll-container" style={{ marginTop: '20px' }}>
//         <BarChart
//           width={1200} // Chart ki fixed width
//           height={500}
//           data={denialData}
//           margin={{ top: 5, right: 30, left: 20, bottom: 120 }}
//         >
//           <defs>
//             <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
//               <stop offset="95%" stopColor="#A855F7" stopOpacity={0.9}/>
//             </linearGradient>
//           </defs>
//           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
//           <XAxis 
//             dataKey="denialCode" 
//             angle={-60}
//             textAnchor="end"
//             interval={0}
//             tick={{ fontSize: 12, fill: '#6b7280' }}
//             tickLine={false}
//             axisLine={false}
//           />
//           <YAxis 
//             tickFormatter={(value) => `AED ${value.toLocaleString()}`}
//             tick={{ fontSize: 12, fill: '#6b7280' }}
//             tickLine={false}
//             axisLine={false}
//           />
//           <Tooltip 
//             content={<CustomTooltip />} 
//             cursor={{ fill: 'rgba(238, 242, 255, 0.6)' }} 
//           />
//           <Bar 
//             dataKey="rejected" 
//             fill="url(#barGradient)" 
//             shape={<RoundedBar />} 
//           />
//         </BarChart>
//       </div>
//     </div>
//   );
// };

// export default RejectionBarGraph;

import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer // ResponsiveContainer ko wapas import kiya gaya hai
} from 'recharts';

// CSS for scrolling container (koi badlav nahi)
const chartStyles = `
  .chart-scroll-container {
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
  }
  .chart-scroll-container::-webkit-scrollbar {
    display: none;
  }
  .chart-scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// Screen size ka pata lagane ke liye custom hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size set karne ke liye
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
}

// Data aur baki components waise he rahenge
const denialData = [
    { denialCode: 'PRCE-003', shortDes: 'Recovery', rejected: 2141.23 },
    { denialCode: 'CLAI-018', shortDes: 'Recalled', rejected: 1593.64 },
    { denialCode: 'DUPL-001', shortDes: 'Duplicate', rejected: 1523.74 },
    { denialCode: 'PRCE-001', shortDes: 'Calculation', rejected: 1029.22 },
    { denialCode: 'CLAI-012', shortDes: 'Not compliant with agreement', rejected: 613.01 },
    { denialCode: 'AUTH-003', shortDes: 'Auth no. not valid', rejected: 365.43 },
    { denialCode: 'AUTH-012', shortDes: 'N/A', rejected: 345.95 },
    { denialCode: 'ELIG-001', shortDes: 'Pt not cov member', rejected: 271.48 },
    { denialCode: 'AUTH-001', shortDes: 'Auth not obtained', rejected: 127.25 },
    { denialCode: 'DUPL-002', shortDes: 'Paid already', rejected: 56.04 },
    { denialCode: 'AUTH-005', shortDes: 'Auth not matching', rejected: 55.96 },
    { denialCode: 'MNEC-004', shortDes: 'Add diagnosis', rejected: 43.03 },
    { denialCode: 'NCOV-003', shortDes: 'Serv not covered', rejected: 20.76 },
];

const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;
    const radius = 6;
    return <g><path d={`M${x},${y + radius} A${radius},${radius},0,0,1,${x + radius},${y} L${x + width - radius},${y} A${radius},${radius},0,0,1,${x + width},${y + radius} L${x + width},${y + height} L${x},${y + height} Z`} fill={fill} /></g>;
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white p-3 shadow-sm rounded-lg border border-gray-200">
                <p className="font-bold text-gray-900 text-base">{label}</p>
                <p className="text-sm text-gray-600 mt-1">Description: {data.shortDes}</p>
                <p className="text-sm text-indigo-600 font-bold mt-2">
                    Rejected: AED {payload[0].value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
            </div>
        );
    }
    return null;
};

const RejectionBarGraph = () => {
  const { width } = useWindowSize();
  const breakpoint = 768; // Tailwind ka 'md' breakpoint
  const isMobile = width < breakpoint;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full my-8">
      <style>{chartStyles}</style>
      
      <div>
        <h2 className="text-xl font-bold text-gray-800">Rejections Analysis</h2>
        <p className="text-sm text-gray-500">By Denial Code - Last 30 Days</p>
      </div>
      
      {/* Chart container, jiska behavior ab screen size par depend karega */}
      <div 
        className={isMobile ? "chart-scroll-container" : ""}
        style={{ marginTop: '20px', height: '500px', width: '100%' }}
      >
        <ResponsiveContainer width={isMobile ? 1200 : '100%'} height="100%">
          <BarChart
            data={denialData}
            margin={{ top: 5, right: 30, left: 20, bottom: 120 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#A855F7" stopOpacity={0.9}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
            <XAxis 
              dataKey="denialCode" 
              angle={-60}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              tickFormatter={(value) => `AED ${value.toLocaleString()}`}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ fill: 'rgba(238, 242, 255, 0.6)' }} 
            />
            <Bar 
              dataKey="rejected" 
              fill="url(#barGradient)" 
              shape={<RoundedBar />} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RejectionBarGraph;