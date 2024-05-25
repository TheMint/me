import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:8000/api/?format=openapi",
  apiFile: "./emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "./meApi.ts",
  exportName: "meApi",
  hooks: true,
};

export default config;
