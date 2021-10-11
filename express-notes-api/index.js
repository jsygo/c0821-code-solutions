const express = require('express');
const app = express();

// read note
const getNote = require('./get');
app.get('/api/notes', getNote.getAllNotes);
app.get('/api/notes/:id', getNote.getNoteById);

// delete note
const deleteNote = require('./delete');
app.delete('/api/notes/:id', deleteNote);

// create note
const postNote = require('./post');
app.use(express.json());
app.post('/api/notes', postNote);

// edit note
const putNote = require('./put');
app.put('/api/notes/:id', putNote);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000! ahahaha');
});
