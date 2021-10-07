const data = require('./data');

module.exports = text => {
  data.notes[data.nextId] = text;

  data.nextId++;
};
