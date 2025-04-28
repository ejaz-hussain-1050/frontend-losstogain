// src/components/MyBarChart.tsx
import React from "react";
import {
  Bar,
  BarChart as ReBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export interface MyBarChartProps {
  data: { name: string; value: number }[];
  width?: number | string;
  height?: number | string;
  barColor?: string;
}

const BarChart: React.FC<MyBarChartProps> = ({
  data,
  barColor = "#75716E", // default blue color
}) => {
  return (
    <div className="h-80 w-[20rem] p-4">
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" stroke="#ccc" /> */}
          {/* <XAxis dataKey="name" stroke="#333" /> */}
          {/* <YAxis stroke="#333" /> */}
          <Tooltip />
          <Bar dataKey="value" fill={barColor} />
        </ReBarChart>
      </ResponsiveContainer>
      <div className="m-5 text-gray-800 text-center font-bold">
        Weekly Progress Report
      </div>
    </div>
  );
};

export default BarChart;
