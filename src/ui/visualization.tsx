import { Callout } from "nextra/components";
import { SurveyData } from "~/constants/types/data";
import PieChartWithLabel from "./pie-chart-with-label";
import SimpleBarChart from "./simple-bar-chart";

export default function Visualization({
  data,
  title,
  isSingle = true,
}: {
  title?: string;
  data: SurveyData;
  isSingle?: boolean;
}) {
  if (isSingle) {
    return (
      <div
        className={"mt-6 mb-6 pb-12 text-black"}
        style={{
          fontFamily: "Verdana, sans-serif",
        }}
      >
        <div>
          <h3
            className="font-bold capitalize"
            style={{
              fontSize: 28,
              marginBottom: 20,
            }}
          >
            {title}
          </h3>

          <div className="flex flex-col lg:flex-row lg:items-start">
            <SimpleBarChart data={data.table_data.body} />
            <PieChartWithLabel data={data.table_data.body} />
          </div>

          <Callout type={"info"} emoji={""} style={{ fontSize: 22 }}>
            <span className="font-bold">Findings:</span> {data.finding}
          </Callout>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row lg:items-start">
      <SimpleBarChart data={data.table_data.body} />
      <PieChartWithLabel data={data.table_data.body} />
    </div>
  );
}
