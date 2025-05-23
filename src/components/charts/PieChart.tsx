// src/components/MyPieChart.tsx
import React from "react";
import { Pie, PieChart as RePieChart, ResponsiveContainer } from "recharts";

export interface MyPieChartProps {
  data: { name: string; value: number }[];
  width?: number | string;
  height?: number;
  colors?: string[];
}

const ConeChart: React.FC<MyPieChartProps> = ({
  data,
  width = "100%",
  height = 300,
}) => {
  return (
    <div className="h-80 w-80 p-4">
      <ResponsiveContainer width={width} height={height}>
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            // label
          />
          {/* <Legend /> */}
        </RePieChart>
      </ResponsiveContainer>
      <div className="m-2 text-center  text-gray-800  font-bold">
        Calories Report
      </div>
    </div>
  );
};

export default ConeChart;
