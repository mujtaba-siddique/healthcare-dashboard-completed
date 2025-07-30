import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

// A custom tooltip to display all data points clearly
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-xl">
          <p className="font-bold text-gray-800 mb-2">{label}</p>
          {payload.map((pld, index) => (
            <div key={index} style={{ color: pld.stroke }}>
              {`${pld.name}: ${pld.value.toLocaleString('en-US', {maximumFractionDigits: 2})}`}
            </div>
          ))}
        </div>
      );
    }
    return null;
};

const AverageTrendsChart = () => {
  // Data provided by you, formatted for the chart
  const monthlyTrendsData = [
    { month: "Feb '23", count: 1090, total: 57024.74, average: 52.32 },
    { month: "Mar '23", count: 1242, total: 64782.67, average: 52.16 },
    { month: "Apr '23", count: 808, total: 42569.19, average: 52.68 },
    { month: "May '23", count: 1337, total: 66656.59, average: 49.86 },
    { month: "Jun '23", count: 1445, total: 65433.15, average: 45.28 },
    { month: "Jul '23", count: 1757, total: 79236.02, average: 45.10 },
    { month: "Aug '23", count: 1891, total: 86564.37, average: 45.78 },
    { month: "Sep '23", count: 1959, total: 87647.66, average: 44.74 },
    { month: "Oct '23", count: 2078, total: 101568.3, average: 48.88 },
    { month: "Nov '23", count: 1950, total: 98926.38, average: 50.73 },
    { month: "Dec '23", count: 1627, total: 75741.6, average: 46.55 },
    { month: "Jan '24", count: 1590, total: 81729.15, average: 51.40 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Claim Trends</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={monthlyTrendsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="month" tick={{ fontSize: 12 }}/>
            
            {/* Left Y-Axis for Total Amount and Claim Count */}
            <YAxis yAxisId="left" tick={{ fontSize: 12 }}>
                <Label value="Amount (AED) " angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>

            {/* Right Y-Axis for Average Claim Value */}
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }}>
                 <Label value="Average (AED)" angle={-90} position="insideRight" style={{ textAnchor: 'middle' }} />
            </YAxis>

            <Tooltip content={<CustomTooltip />} />
            <Legend />

            {/* Line for Claimed AED (Total Amount) */}
            <Line yAxisId="left" type="monotone" dataKey="total" stroke="#8B5CF6" strokeWidth={2} name="Claimed AED" />
            
            {/* Line for No. of Claims */}
            {/* <Line yAxisId="left" type="monotone" dataKey="count" stroke="#10B981" strokeWidth={2} name="No. of Claims" /> */}
            
            {/* Line for Claim Average AED */}
            <Line yAxisId="right" type="monotone" dataKey="average" stroke="#10B981" strokeWidth={2} name="Claim Average" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AverageTrendsChart;
