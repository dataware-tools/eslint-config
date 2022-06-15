module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "standard-jsx",
    "standard-react",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // This rule make mean only when using "prop-type" library(https://ja.reactjs.org/docs/typechecking-with-proptypes.html)
    "react/prop-types": "off",
    "react/display-name": "off",
  },
  overrides: [
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest/all"],
      rules: {
        // Config for plugin-jest
        // force to use single name
        "jest/consistent-test-it": ["error", { fn: "test" }],
        // incompatible waitFor in @testing-library/react
        "jest/prefer-expect-assertions": "off",
        // Too strict
        "jest/prefer-lowercase-title": "off",
        "jest/no-hooks": "off",
        "jest/require-top-level-describe": "off",
        // Config for plugin-testing-library
        // Too strict
        "testing-library/prefer-screen-queries": "off",
      },
    },
  ],
};
