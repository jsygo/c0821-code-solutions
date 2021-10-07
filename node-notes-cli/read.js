module.exports = notes => {
  const entries = [];
  // eslint-disable-next-line no-unused-vars
  for (const indexes in notes) {
    entries.push(null);
  }

  for (const indexes in notes) {
    entries[parseInt(indexes) - 1] = notes[indexes];
  }

  let allNotes = '';

  for (let i = 0; i < entries.length; i++) {
    allNotes += `${i + 1}: ${entries[i]}\n`;
  }

  console.log(allNotes);
};
