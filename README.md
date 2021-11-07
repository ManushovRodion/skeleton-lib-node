Переведено: [Lang:EN](https://github.com/ManushovRodion/skeleton-lib-node/blob/master/README-EN.md)

# Skeleton Lib Node

> Скелет для создания node библиотек с поддержкой TS

## Документация

Чтобы сделать свою библиотеку на базе данного скелете, необходимо:

1. Переменовать, _skeleton-lib-node_ на нужное название, в файле package.json
2. Изменить или убрать _description_, в файле package.json
3. Изменить ссылки на github или убрать, в файле package.json
4. Изменить или убрать _author_, в файле package.json
5. Изменить лицензию
6. Изменить README
7. Писать код в SRC и собирать bild или build:lib, в зависимости от нужной сборки.

## Команды

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

## Лицензия

[MIT](https://github.com/ManushovRodion/skeleton-lib-node/blob/master/LICENSE)
