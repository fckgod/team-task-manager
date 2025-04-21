const http = require('http');

const tasks = [
  { id: 1, title: "Изучить Git" },
  { id: 2, title: "Написать код" }
];

const server = http.createServer((req, res) => {
  // Разрешаем запросы с любого источника
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (req.url === '/api/tasks' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Task Manager Backend</h1><p>Используйте <code>/api/tasks</code> для данных</p>');
  }
});

server.listen(5000, () => console.log('Сервер запущен на http://localhost:5000'));