import { ReChartData, SurveyData } from "~/constants/types/data";
import { calculateTotalValues } from "~/utils/helpers";
import SurveyFinding from "./survey-finding";

const ASSOCIATION_ID = 47;

export default function TableWithTitle({
  data,
  index,
  onlyTable = false,
}: {
  data: SurveyData;
  index: number;
  onlyTable?: boolean;
}) {
  const isAssociation = data.id >= ASSOCIATION_ID;
  const { totalFrequency, totalPercentage } = calculateTotalValues(
    data.table_data,
  );

  let allTotal = 0;

  if (onlyTable)
    return (
      <table className={"mb-6 min-h-70 w-full border-1 text-center"}>
        <thead className="h-16">
          <tr className="capitalize">
            {data.table_data.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            {isAssociation && <th>Total (%)</th>}
          </tr>
        </thead>
        <tbody>
          {data.table_data.body.map((e: ReChartData, i: number) => {
            const total = e.frequency + e.percentage;
            allTotal += total;

            return (
              <tr key={i} className="border-t-1 last:border-b-1">
                <td>{e.x}</td>
                <td>{e.frequency}</td>
                <td>{e.percentage}</td>
                {isAssociation && <td>{total} (100%)</td>}
              </tr>
            );
          })}
        </tbody>
        {data.id === 44 || data.id === 42 ? null : (
          <tfoot className="h-16 font-bold">
            <tr>
              <td>Total</td>
              <td>
                {isAssociation ? `${totalFrequency} (28.8%)` : totalFrequency}
              </td>
              <td>{isAssociation ? `${totalPercentage} (72.2%)` : 100}</td>
              {isAssociation && <td>{allTotal} (100%)</td>}
            </tr>
          </tfoot>
        )}
      </table>
    );

  return (
    <SurveyFinding data={data} index={index} isTable>
      <table className="mb-6 w-full border-1 text-center">
        <thead>
          <tr className="capitalize">
            {data.table_data.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            {isAssociation && <th>Total (%)</th>}
          </tr>
        </thead>
        <tbody>
          {data.table_data.body.map((e: ReChartData, i: number) => {
            const total = e.frequency + e.percentage;
            allTotal += total;

            return (
              <tr key={i} className="border-t-1 last:border-b-1">
                <td>{e.x}</td>
                <td>{e.frequency}</td>
                <td>{e.percentage}</td>
                {isAssociation && <td>{total} (100%)</td>}
              </tr>
            );
          })}
        </tbody>
        {data.id === 44 || data.id === 42 ? null : (
          <tfoot className="font-bold">
            <tr>
              <td>Total</td>
              <td>
                {isAssociation ? `${totalFrequency} (28.8%)` : totalFrequency}
              </td>
              <td>{isAssociation ? `${totalPercentage} (72.2%)` : 100}</td>
              {isAssociation && <td>{allTotal} (100%)</td>}
            </tr>
          </tfoot>
        )}
      </table>
    </SurveyFinding>
  );
}
