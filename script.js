// Imports the express modules and sets it to variables 
const express = require('express');
const app = express();
app.use(express.json());
const tasks = require('./tasks.json');
const cors = require('cors');

app.use(cors());

//Grabbing the information that is held within the 'employee' JSON file
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const task = tasks.tasks.find(tsk => tsk.taskId === taskId);
  
//   If thwe employee information is found then their info will appear, if not an error message will appear
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'task not found.' });
  }
});

app.post('/tasks', (req, res) => {
    let data = req.body;
    console.log(data)
    res.send('Data Received: ' + JSON.stringify(data));
});

// Shows what port the server is running on 
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

fetch('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ /* your data here */ })
  })
  