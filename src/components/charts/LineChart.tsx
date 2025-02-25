// src/components/MyLineChart.tsx
import React from "react";
import {
  Line,
  LineChart as ReLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface MyLineChartProps {
  data: { name: string; value: number }[];
  width?: number | string;
  height?: number;
}

const LineChart: React.FC<MyLineChartProps> = ({
  data,
  width = "100%",
  height = 300,
}) => {
  return (
    <div className=" w-80 h-80 p-2 shadow rounded">
      <ResponsiveContainer width={width} height={height}>
        <ReLineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="black" />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
