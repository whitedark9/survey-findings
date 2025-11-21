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
import { useDevice } from "~/components/hooks/useDevice";
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
  const { isDesktop } = useDevice();

  return (
    <BarChart
      className="mx-auto w-full text-2xl"
      style={{
        aspectRatio: 1,
        maxWidth: isDesktop ? "50vw" : "100%",
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
      <YAxis dataKey={"frequency"} width={isDesktop ? 200 : 60} />
      <Tooltip />
      <Bar
        dataKey="frequency"
        fill="#0b0bbcff"
        label={{ position: "top" }}
        activeBar={<Rectangle fill="#0404e7ff" stroke="blue" />}
      />
    </BarChart>
  );
}
