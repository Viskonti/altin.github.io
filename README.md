# Чат на JavaScript и Node.js
Предупреждение! Прошу поверить на слово что всё работает. Ведь так и есть. Скрипт сделан с помощью интернета и других интересных ютуб каналов.

Что бы воспользоваться данным чатом нужно использовать Node.JS. Принцип похож на использование простейшего TCP/IP.
Чат работает на принципе локального сервера основаного на Node.JS.

Первым делом на Front-end стороне сайта сделана оболочка чата то есть в файле chat.html(Логично).
В этом файле содержится чат и JS в котором содержится.
1. Создание чата.
2. Подключение WebSocket'а
3. Парсинг базы данных(JSON) и вывод из неё
4. Отправка сообщение через websocket

Вторым делом на Back-end стороне сайта сделан сам сервер как ни странно.App.js
1. Создаётся подключение к WS
2. Создание базы данных пользователей(JSON).
3. Добавление нового пользователя.
4. Выход пользователя из чата.

Всё это держиться на честном слове. Но чат великолепно выполняет свою функцию общения, да и в целом TCP/IP.
