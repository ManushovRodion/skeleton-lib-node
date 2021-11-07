Переведено: [EN](https://github.com/ManushovRodion/skeleton-lib-node/blob/master/README-EN.md)

# Skeleton Lib Node

![status] ![license] ![node] ![yarn]

[license]: https://img.shields.io/github/license/ManushovRodion/skeleton-lib-node
[node]: https://img.shields.io/badge/node-%5E12.22.0%20%7C%7C%20%5E14.17.0%20%7C%7C%20%3E%3D16.0.0-red
[yarn]: https://img.shields.io/badge/yarn-%3E%3D1.22.10-blue
[status]: https://img.shields.io/badge/template-skeleton-9cf

> Скелет для создания node библиотек с поддержкой TS

## # TODO

- [x] Поддержка TypeScript
- [x] Linter/Prettier
- [x] Сборка библиотеки для CJS(CommonJS), UMD и ES
- [x] Сборка cli библиотеки
- [x] Сборка одного файла \*.d.ts
- [x] Публикация NPM
- [ ] Unit тестирование
- [ ] e2e тестирование

## # Документация

Чтобы сделать свою библиотеку на базе данного скелета, необходимо:

1. Переменовать, **skeleton-lib-node** на нужное название, в файле **package.json**
2. Изменить или убрать **description**, в файле **package.json**
3. Изменить ссылки на **github** или убрать, в файле **package.json**
4. Изменить или убрать **author**, в файле **package.json**
5. Изменить **LICENSE**
6. Изменить **README**
7. Установить пакеты через команду **yarn**
8. Писать код в **src/** и собирать **build** или **build:lib**, в зависимости от нужной сборки.

## # Команды

| Название              | Описание                                                   |
| --------------------- | ---------------------------------------------------------- |
| lint                  | Проверка кода, на правила линтера                          |
| lint:fix              | Проверка и авто правка кода, по правилам линтера от airbnb |
| prettier              | Корректирует код по правилам линтера от airbnb             |
| prettier:watch        | Вотчер prettier, если нет вотчера IDE                      |
| build                 | Полная сборка пакета с CJS(CommonJS), UMD и ES             |
| build:lib             | Сборка в виде cli пакета                                   |
| build:clear           | Убирает все следы сборки                                   |
| rollup:cjs            | Компиляция исходников к формату CJS                        |
| rollup:es             | Компиляция исходников к формату ES                         |
| rollup:umd            | Компиляция исходников к формату UMD                        |
| rollup:lib            | Компиляция исходников для cli библиотеке                   |
| rollup:types          | Компиляция типов                                           |
| publish:standart      | npm публикация пакета                                      |
| publish:standart-beta | npm публикация пакета, beta версией                        |
| publish:lib           | npm публикация cli пакета                                  |
| publish:lib-beta      | npm публикация cli пакета, beta версией                    |

## # Значек для README

Библиотека создана на данном скелете? Добавьте значок в README, чтобы показать это: [![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg)](https://github.com/ManushovRodion/skeleton-lib-node)

```
[![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg)](https://github.com/ManushovRodion/skeleton-lib-node)
```

## # Лицензия

[MIT](https://github.com/ManushovRodion/skeleton-lib-node/blob/master/LICENSE)
