Translated: [RU](https://github.com/ManushovRodion/skeleton-lib-node#readme)

# Skeleton Lib Node

![status] ![license] ![node] ![yarn]

[license]: https://img.shields.io/github/license/ManushovRodion/skeleton-lib-node
[node]: https://img.shields.io/badge/node-%5E12.22.0%20%7C%7C%20%5E14.17.0%20%7C%7C%20%3E%3D16.0.0-red
[yarn]: https://img.shields.io/badge/yarn-%3E%3D1.22.10-blue
[status]: https://img.shields.io/badge/template-skeleton-9cf

> Skeleton for building TS-enabled node libraries

## # TODO

- [x] TypeScript support
- [x] Linter/Prettier
- [x] Building a library for CJS(CommonJS), UMD and ES
- [x] Building cli library
- [x] Build one \* .d.ts file
- [x] Publish NPM
- [ ] Unit testing
- [ ] e2e testing

## # Documentation

To make your library based on this skeleton, you need:

1. Change, **skeleton-lib-node** to the desired name, in the **package.json** file
2. Change or remove **description**, in the **package.json** file
3. Change links to **github** or remove, in the **package.json** file
4. Change or remove **author**, in the **package.json** file
5. Change **LICENSE**
6. Change **README**
7. Install packages via **yarn** command
8. Write code in **src/** and build **build** or **build:lib** depending on the required build.

## # Commands

| Name                  | Description                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| lint                  | Checking code for linter rules                                                        |
| lint:fix              | Checking and auto-editing of the code, according to the rules of the linter by airbnb |
| prettier              | Corrects the code according to the airbnb linter rules                                |
| prettier:watch        | Watch prettier if there is no watch IDE                                               |
| build                 | Complete package build with CJS(CommonJS), UMD and ES                                 |
| build:lib             | Building as a cli package                                                             |
| build:clear           | Removes all build traces                                                              |
| rollup:cjs            | Compilation of sources to CJS format                                                  |
| rollup:es             | Compilation of sources to ES format                                                   |
| rollup:umd            | Compilation of sources to UMD format                                                  |
| rollup:lib            | Compiling sources for the cli library                                                 |
| rollup:types          | Compiling types                                                                       |
| publish:standart      | npm package publishing                                                                |
| publish:standart-beta | npm cli package publishing                                                            |
| publish:lib           | npm publish package, beta version                                                     |
| publish:lib-beta      | npm publish cli package, beta version                                                 |

## # README Badge

Is the library created on this skeleton? Add a README icon to show this: [![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg)](https://github.com/ManushovRodion/skeleton-lib-node)

```
[![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg)](https://github.com/ManushovRodion/skeleton-lib-node)
```

## # License

[MIT](https://github.com/ManushovRodion/skeleton-lib-node/blob/master/LICENSE)
