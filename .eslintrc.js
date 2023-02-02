path = require("path");

module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 9,
  },
  env: {
    es6: true,
  },
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
      extends: [
        "plugin:@angular-eslint/template/process-inline-templates", // Unique to angular projects
      ],
    },
    {
      files: ["*.html"],
      parser: "@angular-eslint/template-parser",
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
  ],
};
