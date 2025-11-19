import { SurveyData } from "~/constants/types/data";
import PieChartWithLabel from "./pie-chart-with-label";
import SimpleBarChart from "./simple-bar-chart";
import SurveyFinding from "./survey-finding";
import TableWithTitle from "./table-with-title";

const NO_PIE_CHART_ID = [33, 42, 43, 44, 47, 48, 49, 50];

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
  return (
    <SurveyFinding
      data={data}
      index={index}
      isTable={false}
      hideSection={hideSection}
      hideTitle={hideTitle}
    >
      <div className="flex flex-col lg:flex-row lg:items-start">
        <SimpleBarChart data={data.table_data.body} />
        {NO_PIE_CHART_ID.includes(data.id) ? null : (
          <PieChartWithLabel data={data.table_data.body} />
        )}
        {data.id >= 47 && (
          <TableWithTitle
            onlyTable
            data={data}
            index={index}
            className="min-h-75"
          />
        )}
      </div>
    </SurveyFinding>
  );
}
