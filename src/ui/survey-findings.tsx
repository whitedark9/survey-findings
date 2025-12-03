import clsx from "clsx";
import { ReactNode } from "react";
import { SECTIONS } from "~/constants/data/sections";
import { Data, Section, SurveyData } from "~/constants/types/data";
import Table from "./table";
import Visualization from "./visualization";

export default function SurveyFindings({
  data,
  section,
  isTable = true,
  children,
}: {
  data: Data;
  section: Section;
  isTable?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={clsx("mt-6 mb-6 pb-12 text-black")}
      style={{
        fontFamily: isTable ? "Times New Roman" : "Verdana, sans-serif",
      }}
    >
      {isTable ? (
        <h2
          className="spacing-md mb-3 border-b-1 border-gray-400 pb-3 font-bold uppercase"
          style={{ fontSize: isTable ? 16 : 36 }}
        >
          {section}. {SECTIONS[section]}
        </h2>
      ) : null}

      {children ||
        Object.keys(data).map((table_title, index) => {
          const survey = data[table_title] as unknown as SurveyData;

          return (
            <div key={table_title}>
              <h3
                className="font-bold capitalize"
                style={{
                  fontSize: isTable ? 14 : 28,
                  marginBottom: isTable ? 12 : 20,
                }}
              >
                {section}.{index + 1}. {survey.title}
              </h3>

              {isTable ? (
                <Table data={survey} />
              ) : (
                <Visualization data={survey} isSingle={false} />
              )}

              <div className="mb-8" style={{ fontSize: isTable ? 12 : 22 }}>
                <span className="font-bold">Findings:</span> {survey.finding}
              </div>
            </div>
          );
        })}
    </div>
  );
}
