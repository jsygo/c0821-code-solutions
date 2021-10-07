const data = require('./data.json');
const fs = require('fs');

module.exports = id => {
  delete data.notes[id];

  const dataJSON = JSON.stringify(data, null, 2);

  fs.writeFile('./data.json', dataJSON, err => {
    if (err) throw err;
  });
};
