const data = require('./data');

module.exports = (id, text) => {
  data.notes[id] = text;
};
