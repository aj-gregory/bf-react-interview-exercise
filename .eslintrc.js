module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "security", "react"],
  extends: ["eslint:recommended", "plugin:security/recommended"],
  env: {
    node: true,
    browser: true,
    jest: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-explicit-any": 0
      }
    }
  ],

  rules: {
    "react/jsx-uses-vars": 1
  }
};
