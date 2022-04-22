// Подключаем библиотеку для работы с WebSocket
import { Server } from 'ws';
// Создаём подключение к WS
let wsServer = new Server({
    port: 8081
});
// Создание базы для пользователей
let users = []
 
wsServer.on('connection', function (ws) {
    let user = {
        connection: ws
    }
    // Добавляем нового пользователя ко всем остальным 
    users.push(user)
    ws.on('message', function (message) {

        for (let u of users) {
            u.connection.send(message)
        }
    })
    // Делаем действие при выходе пользователя из чата
    ws.on('close', function () {
        let id = users.indexOf(user)
        users.splice(id, 1)
    })
})