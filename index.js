module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import", "unused-imports"],
  rules: {
    "eslint-comments/no-unused-disable": "error",
    "import/no-named-as-default-member": "off",
    indent: "off",
    // API response is snake case.
    camelcase: "off",
    "sort-imports": "off",
    "import/order": ["warn", { alphabetize: { order: "asc" } }],
    "unused-imports/no-unused-imports": "error",
    "import/no-anonymous-default-export": [
      "warn",
      {
        allowCallExpression: false, // The true value here is for backward compatibility
        allowObject: true, // storybook may have unnamed object export
      },
    ],
  },
};
