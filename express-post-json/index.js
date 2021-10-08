const express = require('express');
const app = express();
const expressJSON = express.json();
app.use(expressJSON);

let nextId = 1;

const grades = {};

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;

  res.status(201).json(req.body);
});

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }

  res.json(gradesArr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000! ahaha');
});
