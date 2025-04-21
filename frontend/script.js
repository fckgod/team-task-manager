fetch('http://localhost:5000/api/tasks')
  .then(response => response.json())
  .then(tasks => {
    document.getElementById('status').textContent = `Задач: ${tasks.length}`;
    console.log(tasks);
  })
  .catch(error => console.error('Ошибка:', error));