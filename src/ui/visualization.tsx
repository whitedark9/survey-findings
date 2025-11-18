import { SurveyData } from "~/constants/types/data";
import { convertToReChartData } from "~/utils/helpers";
import PieChartWithLabel from "./pie-chart-with-label";
import SimpleBarChart from "./simple-bar-chart";
import SurveyFinding from "./survey-finding";

export default function Visualization({
  data,
  index,
  hideSection,
  hideTitle,
}: {
  data: SurveyData;
  index: number;
  hideSection?: boolean;
  hideTitle?: boolean;
}) {
  const rechart_data = convertToReChartData(data.table_data);

  return (
    <SurveyFinding
      data={data}
      index={index}
      isTable={false}
      hideSection={hideSection}
      hideTitle={hideTitle}
    >
      <div className="flex flex-col lg:flex-row lg:items-start">
        <SimpleBarChart data={rechart_data} />
        <PieChartWithLabel data={rechart_data} />
      </div>
    </SurveyFinding>
  );
}
