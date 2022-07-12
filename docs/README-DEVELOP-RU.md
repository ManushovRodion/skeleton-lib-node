### readme: [Главная](./../README.md) | [EN](./README-DEVELOP-EN.md)

# SKELETON-LIB-NODE

> Скелет для создания node библиотек с поддержкой TS

## # Документация

Чтобы сделать свою библиотеку на базе данного скелета, необходимо заменить маски по проекту или воспользоваться утилитой [skeleton-lib-node-cli](https://github.com/ManushovRodion/skeleton-lib-node-cli/blob/master/docs/README-RU.md).

Ручная замена масок, если не планируете использовать [skeleton-lib-node-cli](https://github.com/ManushovRodion/skeleton-lib-node-cli/blob/master/docs/README-RU.md):

1. Пройтись по проекту и переменовать маски, на нужные значения:
   - {name-package}: Название пакета, в нижнем регистре
   - {NAME-PACKAGE}: Название пакета, в верхнем регистре
   - {description-package}: Описание проекта
   - {url-repository}: Путь до репозитория git, где расположен проект
   - {url-issues}: Адрес, где доступны обращения
   - {url-home}: Домашняя страница проекта
   - {author}: Автор проекта. Можно написать: "ФИО <email> (url)" - но можно обойтись ФИО
   - {copyright}: Копирайт для лицензии
2. Установить пакеты через команду **yarn**
3. Писать код в **src/** и собирать проект командой **build**

Расположение масок:

- {name-package}: package.json, bin/cli.js, docs/README-RU.md, docs/README-EN.md,
- {NAME-PACKAGE}: README.md, docs/README-RU.md, docs/README-EN.md, CHANGELOG.md, docs/CHANGELOG-RU.md и docs/CHANGELOG-EN.md
- {description-package}: package.json, docs/README-RU.md и docs/README-EN.md
- {url-repository}: package.json
- {url-issues}: package.json
- {url-home}: package.json
- {author}: package.json
- {copyright}: LICENSE

## # Команды

| Название    | Описание                                   |
| ----------- | ------------------------------------------ |
| build       | Сборка проекта                             |
| lint        | Проверка скриптов по правилам линтера      |
| lint:format | Корректировка скриптов по правилам линтера |
| demo:cli    | Демо работы cli библиотеки                 |

## # TODO

- [x] Поддержка TypeScript
- [x] Linter/Prettier
- [x] Сборка библиотеки для CJS(CommonJS), UMD и ES
- [x] Сборка cli библиотеки
- [x] Сборка одного файла \*.d.ts
- [x] Unit тестирование
- [ ] Удалить сообщения плагинов rollup

## # Значек для README

Библиотека создана на данном скелете? Добавьте значок в README, чтобы показать это: [![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg?style=for-the-badge)](https://github.com/ManushovRodion/skeleton-lib-node)

```
[![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg?style=for-the-badge)](https://github.com/ManushovRodion/skeleton-lib-node)
```
