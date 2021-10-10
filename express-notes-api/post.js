const data = require('./data.json');
const fs = require('fs');

module.exports = (req, res) => {
  if (!req.body.content) {
    const badRequest = {
      error: 'content is a required field'
    };

    res.status(400).json(badRequest);
  } else {
    const newNote = {
      id: data.nextId,
      content: req.body.content
    };

    data.notes[data.nextId] = newNote;

    data.nextId++;

    const dataJSON = JSON.stringify(data, null, 2);

    fs.writeFile('./data.json', dataJSON, err => {
      if (err) {
        const internalServerError = {
          error: 'Sorry! An unexpected error occurred :('
        };

        res.status(500).json(internalServerError);
      } else {
        res.status(201).json(newNote);
      }
    });
  }
};
