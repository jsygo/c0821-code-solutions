const data = require('./data.json');

module.exports = () => {
  const entries = [];
  // eslint-disable-next-line no-unused-vars
  for (const indexes in data.notes) {
    entries.push(null);
  }

  for (const indexes in data.notes) {
    entries[parseInt(indexes) - 1] = data.notes[indexes];
  }

  let allNotes = '';

  for (let i = 0; i < entries.length; i++) {
    allNotes += `${i + 1}: ${entries[i]}\n`;
  }

  console.log(allNotes);
};
