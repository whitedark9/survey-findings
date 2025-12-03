"use client";

import { Cell, Legend, Pie, PieChart } from "recharts";
import { ReChartData } from "~/constants/types/data";

// #endregion
const RADIAN = Math.PI / 180;
const COLORS = [
  "#33CC33", // green
  "#FFBB28", // golden yellow
  "#FF8042", // orange
  "#A28EFF", // lavender purple
  "#FF6699", // pink
  "#996633", // brown
  "#00C49F", // teal
  "#FF3333", // red
  "#0088FE", // bright blue
  "#66CCCC", // aqua
];

export default function PieChartWithLabel({ data }: { data: ReChartData[] }) {
  return (
    <PieChart
      className="mx-auto w-full"
      style={{
        maxHeight: "80vh",
        fontSize: 22,
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        labelLine={true}
        label={({ payload }) => `${payload?.percentage}%`}
        fill="#33CC33"
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
