"use client";

import { useMemo } from "react";
import { Cell, Legend, Pie, PieChart, PieLabelRenderProps } from "recharts";

export type PieChartData = {
  value: string | number;
  frequency: number;
  percent: number;
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  payload, // contains your original data object
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null)
    return null;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = Number(cx) + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = Number(cy) + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  // Use your own percent field from the dataset
  const pct = payload?.percent ?? 0;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > Number(cx) ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${pct.toFixed(1)}%`}
    </text>
  );
};

const renderCustomLabelLine = (props: any) => {
  const { points, stroke, payload } = props;
  if (!points || points.length < 2) return null;

  // Build the polyline path
  const linePoints = points.map((p: any) => `${p.x},${p.y}`).join(" ");

  // Tip of the line (last point)
  const tip = points[points.length - 1];

  return (
    <>
      {/* Draw the connector line */}
      <polyline points={linePoints} stroke={stroke} fill="none" />
      {/* Add the category label at the tip */}
      <text
        x={tip.x}
        y={tip.y}
        dy={-4} // adjust vertical offset
        textAnchor="middle"
        fill={stroke}
      >
        {payload?.value}
      </text>
    </>
  );
};

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }: PieLabelRenderProps) => {
//   if (cx == null || cy == null || innerRadius == null || outerRadius == null)
//     return null;

//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = Number(cx) + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
//   const y = Number(cy) + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > Number(cx) ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${((percent ?? 0) * 100).toFixed(0)}%`}
//     </text>
//   );
// };

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

export default function PieChartWithLabel({
  data,
  isAnimationActive = true,
}: {
  data: PieChartData;
  isAnimationActive?: boolean;
}) {
  const parsedData = useMemo(
    () =>
      (data as unknown as any[]).map((e) => ({
        ...e,
        frequency: Number(e.frequency),
      })),
    [data],
  );

  return (
    <PieChart
      className="mx-auto w-full"
      style={{
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={parsedData}
        labelLine={true}
        label={({ payload }) => `${payload?.percent}%`}
        fill="#0900adff"
        dataKey="frequency"
        nameKey={"value"}
        isAnimationActive={isAnimationActive}
      >
        {parsedData.map((entry: any, index: number) => (
          <Cell
            key={`cell-${entry.value}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
        <Legend />
      </Pie>
    </PieChart>
  );
}
