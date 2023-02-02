import { eslint } from "@betterer/eslint";
const eslintConfig = require("./.eslintrc.js");

export default {
  "ts lint": () =>
    eslint({
      "@typescript-eslint/dot-notation": "error",
    }).include("src/app/inline-html/inline-html.component.ts"),
};
