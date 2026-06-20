/** @type {import('prettier').Config} */
export default {
  // Quotes & punctuation
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  quoteProps: "consistent",

  // Indentation & line length
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,

  // Code structure
  arrowParens: "always",
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,

  // JSX formatting
  singleAttributePerLine: true,

  // Text/HTML formatting
  htmlWhitespaceSensitivity: "css",
  proseWrap: "always",

  // Prettier behavior
  requirePragma: false,
};
