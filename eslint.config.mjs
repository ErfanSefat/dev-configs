import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "coverage/**",
    ],
  },

  ...compat.extends("next/core-web-vitals", "next/typescript"),

  eslintConfigPrettier,

  {
    plugins: {
      import: importPlugin,
    },

    rules: {
      // Ensure imports are grouped and sorted.
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Prevent duplicate imports.
      "import/no-duplicates": "error",

      // Require a blank line after imports.
      "import/newline-after-import": "error",

      // Imports must appear before other statements.
      "import/first": "error",

      // Prefer === and !==.
      "eqeqeq": "error",

      // Remove unnecessary else after return.
      "no-else-return": "error",

      // Prefer object shorthand.
      "object-shorthand": "error",

      // Prefer const whenever possible.
      "prefer-const": "error",

      // Warn about unused variables.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
];
export default eslintConfig;
