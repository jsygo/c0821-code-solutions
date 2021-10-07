const data = require('./data.json');

module.exports = id => {
  if (id === 'all') {
    data.notes = {};
  }
  delete data.notes[id];
};
