"use client";

import { Cell, Legend, Pie, PieChart } from "recharts";
import { ReChartData } from "~/constants/types/data";

// #endregion
const RADIAN = Math.PI / 180;
const COLORS = [
  "#0088FE", // bright blue
  "#00C49F", // teal
  "#FFBB28", // golden yellow
  "#FF8042", // orange
  "#A28EFF", // lavender purple
  "#FF6699", // pink
  "#33CC33", // green
  "#996633", // brown
  "#FF3333", // red
  "#66CCCC", // aqua
];

export default function PieChartWithLabel({ data }: { data: ReChartData[] }) {
  return (
    <PieChart
      className="mx-auto w-full text-2xl"
      style={{
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        labelLine={true}
        label={({ payload }) => `${payload?.percentage}%`}
        fill="#0900adff"
        dataKey="frequency"
        nameKey={"x"}
        isAnimationActive={true}
      >
        {data.map((entry: any, index: number) => (
          <Cell key={`cell-${entry.x}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Legend />
      </Pie>
    </PieChart>
  );
}
