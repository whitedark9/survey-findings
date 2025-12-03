import { SurveyData } from "~/constants/types/data";
import PieChartWithLabel from "./pie-chart-with-label";
import SimpleBarChart from "./simple-bar-chart";

export default function Visualization({ data }: { data: SurveyData }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start">
      <SimpleBarChart data={data.table_data.body} />
      <PieChartWithLabel data={data.table_data.body} />
    </div>
  );
}
