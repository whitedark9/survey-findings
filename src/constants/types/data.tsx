export type Section =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K";
// | "household identification"
// | "household socio-economic status"
// | "individual demographic information"
// | "exposure circumstances during earthquake"
// | "injury clinical outcome"
// | "deceased persons"
// | "household preparedness response"
// | "perception suggestions"
// | "damage economic impact"
// | "interviewer observations"
// | "association between injured members and other conditions";

export type ReChartData = {
  x: string;
  frequency: number;
  percentage: number | null;
};

export type TableData = {
  head: string[];
  body: ReChartData[];
};

export type Data = {
  [key: string]: { [key: string]: SurveyData };
};

export type SurveyData = {
  id: number;
  title: string;
  table_data: TableData;
  finding: string;
};
