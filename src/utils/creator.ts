// import fs from "fs";
// import path from "path";
// import data from "~/constants/data/data";
// import { cleanName } from "./converter";

// export function metaCreator() {
//   Object.keys(data).map((section) => {
//     let text = `export default {`;

//     Object.keys(data[section]).map((table_title) => {
//       if (Array.isArray(data[section][table_title])) {
//         text += `${table_title}: "${table_title.replaceAll("_", " ")}",`;
//       }
//     });
//     console.log(text + "};");
//   });
// }

// export function mdxCreator() {
//   let i = 1;
//   Object.keys(data).map((section, idx) => {
//     Object.keys(data[section]).map((table_title) => {
//       if (Array.isArray(data[section][table_title])) {
//         const written_data = `
// import data from "~/constants/data/data";
// import SimpleBarChart from "~/ui/simple-bar-chart";
// import PieChartWithLabel from "~/ui/pie-chart-with-label";
// import findings from "~/constants/data/findings";
// import { Callout } from "nextra/components";

// # TABLE (${idx + 1}.${i}) ${cleanName(table_title).toUpperCase()}

// <div className={"flex flex-col lg:flex-row items-start py-6 gap-4 lg:gap-0"}>

// <SimpleBarChart data={data["${section}"]["${table_title}"]} />

// <PieChartWithLabel
//   data={data["${section}"]["${table_title}"]}
// />

// </div>

// <Callout type={"info"}>FINDINGS: {findings["${table_title}"]}</Callout>

// `;

//         fs.writeFileSync(
//           path.join(
//             "./src/content/visualization",
//             section,
//             `${table_title}.mdx`,
//           ),
//           written_data,
//         );

//         i++;
//       }
//     });
//   });
// }
