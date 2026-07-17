module.exports = {
  "*.{mjs,js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],
  "*.{css,scss,html,json,md,yml,yaml}": ["prettier --write"],
};
