# typescript-base

```shell
tsc -v
# 5.7.2
```

```shell
cd typescript-base

npm install -g typescript

tsc index.ts # or tsc index.ts --outFile index.js
```

or

```shell
npm install typescript --save-dev

npx tsc index.ts # or npx tsc index.ts --outFile index.js
```

使用 `tsc` 命令默认使用 `tsconfig.json` 配置文件。如果没有 `tsconfig.json` 配置文件，`tsc` 命令会使用默认配置。

默认配置如下：也就是 `tsc --init` 命令生成的配置文件。

```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```
