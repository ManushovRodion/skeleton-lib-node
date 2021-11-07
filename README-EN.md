Translated: [Язык:RU](https://github.com/ManushovRodion/skeleton-lib-node#readme)

# Skeleton Lib Node

> Skeleton for building TS-enabled node libraries

## Documentation

To make your library based on this skeleton, you need:

1. Change, _skeleton-lib-node_ to the desired name, in the package.json file
2. Change or remove _description_, in the package.json file
3. Change links to github or remove, in the package.json file
4. Change or remove _author_, in the package.json file
5. Change license
6. Change README
7. Write code in SRC and build bild or build: lib depending on the required build.

## Commands

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

## License

[MIT](https://github.com/ManushovRodion/skeleton-lib-node/blob/master/LICENSE)
