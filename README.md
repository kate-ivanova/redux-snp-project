# Скелет frontend проекта

## Особенности

* автоматическая сборка проекта с помощью [npm](https://www.npmjs.com) и [webpack](https://webpack.github.io/)
* поддерка [postcss](https://github.com/postcss/postcss) и cssnext(http://cssnext.io/)
* поддержка [ES6](http://www.ecma-international.org/ecma-262/6.0/)
* встроенный proxy-сервер, для доступа к удаленному backend api и также конфиг для использования внешнего [haproxy](http://www.haproxy.org/)
* проверка валидности  используемых *.js, *.css файлов
* [editorconfig](http://editorconfig.org/)


## Подготовка среды

Для работы текущей системы потребуется [Node.js](http://nodejs.org/) и его пакет [webpack](https://webpack.github.io/), установленный глобально.

## Быстрая справка по командам

Здесь приведены команы консоли для работы с проектом
`npm run dev` - запуск проекта в режиме разработки с использованием hot reload.
`npm run test` - прогон всех тестов проекта.
`npm run tdd` - запуск проекта в режиме TDD. При изменениях в тестовых файлах происходит прогон всех тестов проекта.
`npm run dist` - сборка проекта для тестового сервера, без старта сервера.
`npm run prod` - сборка проекта для боевого сервера, без старта сервера.
`bundle exec cap testing deploy` - деплой тестовой сборки на тестовый сервер.
`bundle exec cap production deploy` - деплой боевой сборки на боевой сервер.
