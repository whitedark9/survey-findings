"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ReChartData } from "~/constants/types/data";

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

export default function SimpleBarChart({ data }: { data: ReChartData[] }) {
  return (
    <BarChart
      className="mx-auto w-full"
      style={{
        fontSize: 22,
        aspectRatio: 1,
        maxWidth: "50vw",
        height: "88vh",
      }}
      responsive
      data={data as unknown as any[]}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="x"
        interval="preserveStartEnd"
        height={360}
        angle={-45}
        textAnchor="end"
      />
      <YAxis dataKey={"frequency"} width={200} />
      <Tooltip />
      <Bar
        dataKey="frequency"
        fill="#33CC33"
        label={{ position: "top" }}
        activeBar={<Rectangle fill="#0404e7ff" stroke="blue" />}
      />
    </BarChart>
  );
}
