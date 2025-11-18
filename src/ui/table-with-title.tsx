import { SurveyData } from "~/constants/types/data";
import { calculateTotalValues } from "~/utils/helpers";
import SurveyFinding from "./survey-finding";

export default function TableWithTitle({
  data,
  index,
}: {
  data: SurveyData;
  index: number;
}) {
  const { totalFrequency, totalPercentage } = calculateTotalValues(
    data.table_data,
  );

  return (
    <SurveyFinding data={data} index={index} isTable>
      <table className="mb-6 w-full border-1 text-center">
        <thead>
          <tr className="capitalize">
            {data.table_data.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            {index >= 46 && <th>Total (%)</th>}
          </tr>
        </thead>
        <tbody>
          {data.table_data.body.map((e, i: number) => {
            const total = e[1] + e[2];

            return (
              <tr key={i} className="border-t-1 last:border-b-1">
                {e.map((f: string | number, j: number) => (
                  <td key={f + j.toString()}>
                    {f}
                    {typeof f === "number" &&
                      index >= 46 &&
                      ` (${((Number(f) / total) * 100).toFixed(1)}%)`}
                  </td>
                ))}
                {index >= 46 && <td>{total} (100%)</td>}
              </tr>
            );
          })}
        </tbody>
        <tfoot className="font-bold">
          <tr>
            <td>Total</td>
            <td>{totalFrequency}</td>
            <td>{totalPercentage}</td>
          </tr>
        </tfoot>
      </table>
    </SurveyFinding>
  );
}
