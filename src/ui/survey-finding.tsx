import clsx from "clsx";
import { Callout } from "nextra/components";
import { ReactNode } from "react";
import { sectionIndex, sections } from "~/constants/data/sections";
import { SurveyData } from "~/constants/types/data";

export default function SurveyFinding({
  data,
  index,
  children,
  isTable = true,
  hideSection = false,
  hideTitle = false,
}: {
  data: SurveyData;
  index: number;
  children: ReactNode;
  isTable?: boolean;
  hideSection?: boolean;
  hideTitle?: boolean;
}) {
  return (
    <div className={clsx("mt-6 mb-80 border-b-1 pb-12")}>
      {hideSection ? null : sectionIndex.includes(index) ? (
        <h2 className="spacing-md mb-3 text-2xl font-bold uppercase">
          {sections[data.section]}. {data.section}
        </h2>
      ) : null}
      {hideTitle ? null : (
        <h3 className="mb-6 text-xl font-bold capitalize">
          {isTable ? "Table" : "Chart"} {sections[data.section]}.{data.id}{" "}
          {data.title}
        </h3>
      )}

      {children}

      {data.p_value !== undefined ? (
        <Callout type={"error"}>P Value: {data.p_value}</Callout>
      ) : null}

      {data.findings.map((finding, idx) => (
        <Callout type={idx === 0 ? "info" : "important"} key={idx}>
          {finding}
        </Callout>
      ))}
    </div>
  );
}
