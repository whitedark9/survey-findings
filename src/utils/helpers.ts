import { TableData } from "~/constants/types/data";

export function calculateTotalValues(table_data: TableData) {
  let totalFrequency = 0;
  let totalPercentage = 0;

  table_data.body.map((e) => {
    totalFrequency += e.frequency; // index 2 is frequency
    totalPercentage += e.percentage; // index 3 is percentage;
  });

  return {
    totalFrequency: totalFrequency.toFixed(1),
    totalPercentage: totalPercentage.toFixed(1),
  };
}
