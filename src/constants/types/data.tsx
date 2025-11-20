export type Section =
  | "household identification"
  | "household socio-economic status"
  | "individual demographic information"
  | "exposure circumstances during earthquake"
  | "injury clinical outcome"
  | "deceased persons"
  | "household preparedness response"
  | "perception suggestions"
  | "damage economic impact"
  | "interviewer observations"
  | "association between injured members and other conditions";

export type TableData = {
  headers: string[];
  body: ReChartData[];
};

export type SurveyData = {
  id: number;
  title: string;
  table_data: TableData;
  p_value?: number;
  findings: string[];
  section: Section;
};

export type ReChartData = { x: string; frequency: number; percentage: number };
