### readme: [Home](./../README.md) | [RU](./README-DEVELOP-RU.md)

# SKELETON-LIB-NODE

> Skeleton for building TS-enabled node libraries

## # Documentation

To make your own transport network based on this skeleton, you need to:

1. Walk through the project and change the masks to the required values:
   - {name-package}: Name of the package, in separate case
   - {NAME-PACKAGE}: Package name included in register
   - {description-package}: Description of the project
   - {url-repository}: Path to the git repository where the project is located
   - {url-issues}: Address where secondary
   - {url-home}: Project home page
   - {author}: Author of the project. You can write: "full name <email> (url)" - but you can use the full name
   - {copyright}: Copyright under license
2. Set of packages through the command **yarn**
3. Write code in **src/** and build the project with the **build** command

Location of the masks:

- {name-package}: package.json, bin/cli.js, docs/README-RU.md, docs/README-EN.md,
- {NAME-PACKAGE}: README.md, docs/README-RU.md, docs/README-EN.md, CHANGELOG.md, docs/CHANGELOG-RU.md и docs/CHANGELOG-EN.md
- {description-package}: package.json, docs/README-RU.md и docs/README-EN.md
- {url-repository}: package.json
- {url-issues}: package.json
- {url-home}: package.json
- {author}: package.json
- {copyright}: LICENSE

## # Commands

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| build       | Complete package build with CJS(CommonJS), UMD and ES  |
| lint        | Checking code for linter rules                         |
| lint:format | Corrects the code according to the airbnb linter rules |
| demo:cli    | Demonstration of the work of the library               |

## # TODO

- [x] TypeScript support
- [x] Linter/Prettier
- [x] Building a library for CJS(CommonJS), UMD and ES
- [x] Building cli library
- [x] Build one \* .d.ts file
- [x] Unit testing
- [ ] Remove message by plugins rollup

## # README Badge

Is the library created on this skeleton? Add a README icon to show this: [![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg?style=for-the-badge)](https://github.com/ManushovRodion/skeleton-lib-node)

```
[![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg?style=for-the-badge)](https://github.com/ManushovRodion/skeleton-lib-node)
```
