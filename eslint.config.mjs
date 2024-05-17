import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"], // Specify TypeScript files
    rules: {
      "no-console": "error", // Disallow the use of console.log
      "no-unused-vars": "warn", // Warn about unused variables
    },
  },
];
