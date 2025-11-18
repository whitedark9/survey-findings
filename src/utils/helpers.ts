import { ReChartData, TableData } from "~/constants/types/data";

export function calculateTotalValues(table_data: TableData) {
  let totalFrequency = 0;
  let totalPercentage = 0;

  table_data.body.map((e) => {
    totalFrequency += e[1]; // index 2 is frequency
    totalPercentage += e[2]; // index 3 is percentage;
  });

  return {
    totalFrequency: totalFrequency.toFixed(1),
    totalPercentage: totalPercentage.toFixed(1),
  };
}

export function convertToReChartData(table_data: TableData): ReChartData[] {
  return table_data.body.map((e) => ({
    x: e[0],
    frequency: e[1],
    percentage: e[2],
  }));
}
