# Eslint config for dataware-tools
## How to use this config

1. Install this package
```bash
npm install -D @dataware-tools/eslint-config
```

2. Configure eslint config like below
```js
module.exports = {
  extends: [
    "@dataware-tools/eslint-config",
    "@dataware-tools/eslint-config/typescript",
    "@dataware-tools/eslint-config/react",
    "@dataware-tools/eslint-config/vite",
    // You should specify prettier after @dataware-tools/eslint-config*
    "prettier",
  ],
};
```