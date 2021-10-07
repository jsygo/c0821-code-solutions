const fs = require('fs');

const data = require('./data');

module.exports = text => {
  data.notes[data.nextId] = text;

  data.nextId++;

  const dataJSON = JSON.stringify(data, null, 2);

  fs.writeFile('./data.json', dataJSON, err => {
    if (err) throw err;
  });
};
