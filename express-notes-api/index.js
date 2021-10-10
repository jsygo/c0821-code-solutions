const express = require('express');
const app = express();

const getNote = require('./get');
app.get('/api/notes', getNote.getAllNotes);
app.get('/api/notes/:id', getNote.getNoteById);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000! ahahaha');
});
