module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    project: "tsconfig.json",
  },
  extends: ["standard-with-typescript"],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.controller.ts"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
