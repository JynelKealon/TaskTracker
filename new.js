const fs = require('fs');
const tasks = require('tasks.json');

const taskId = '2'; // Example task ID
const taskIndex = tasks.findIndex(task => task.id === taskId);

if (taskIndex !== -1) {
  tasks.splice(taskIndex, 1);
  saveTasksToFile();
}

function saveTasksToFile() {
  const data = JSON.stringify(tasks, null, 2);
  fs.writeFileSync('tasks.json', data);
}
