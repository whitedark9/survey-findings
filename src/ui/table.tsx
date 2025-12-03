import { ReChartData, SurveyData } from "~/constants/types/data";
import { calculateTotalValues } from "~/utils/helpers";

export default function Table({ data }: { data: SurveyData }) {
  const { totalFrequency, totalPercentage } = calculateTotalValues(
    data.table_data,
  );

  const no_percentage = data.id === 45;

  return (
    <table
      className="mb-6 w-full border-1 text-center capitalize"
      style={{ fontSize: 12 }}
    >
      <thead>
        <tr className="">
          {data.table_data.head.map((e, i) =>
            no_percentage && i === 2 ? null : (
              <th className="border-r-1" key={e}>
                {Boolean(e) ? e : "label"}
              </th>
            ),
          )}
        </tr>
      </thead>
      <tbody>
        {data.table_data.body.map((e: ReChartData, i: number) => {
          return (
            <tr key={i} className="border-t-1 last:border-b-1">
              <td className="border-r-1 font-bold">{e.x}</td>
              <td className="border-r-1 text-end">{e.frequency}</td>
              {no_percentage ? null : (
                <td className="text-end">{e.percentage}</td>
              )}
            </tr>
          );
        })}
      </tbody>
      <tfoot className="font-bold">
        <tr>
          <td className="border-r-1">Total</td>
          <td className="border-r-1 text-end">
            {Math.round(Number(totalFrequency))}
          </td>
          {no_percentage ? null : <td className="text-end">100</td>}
        </tr>
      </tfoot>
    </table>
  );
}
