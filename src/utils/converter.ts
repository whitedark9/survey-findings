export function convertToChartData(arr: any[], labelName: string) {
  return {
    data: {
      labels: arr.map((item) => item.value),
      datasets: [
        {
          label: labelName,
          data: arr.map((item) => item.frequency),
        },
      ],
    },
  };
}

export function cleanName(name: string) {
  return name.replaceAll("_", " ");
}
