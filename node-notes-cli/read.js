const data = require('./data.json');

module.exports = () => {
  let allNotes = '';

  for (const index in data.notes) {
    allNotes += `${index}: ${data.notes[index]}\n`;
  }

  console.log(allNotes);
};
