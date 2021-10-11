const data = require('./data.json');
const fs = require('fs');

module.exports = (req, res) => {
  if ((req.params.id < 1) || !(Number.isInteger(parseFloat(req.params.id)))) {
    const badRequest = {
      error: 'id must be a positive integer :('
    };

    res.status(400).json(badRequest);
  } else if (data.notes[req.params.id]) {
    delete data.notes[req.params.id];

    const dataJSON = JSON.stringify(data, null, 2);

    fs.writeFile('./data.json', dataJSON, err => {
      if (err) {
        const internalServerError = {
          error: 'Sorry! An unexpected error occurred :('
        };

        res.status(500).json(internalServerError);
      } else {
        res.sendStatus(204);
      }
    });
  } else {
    const notFound = {
      error: `cannot find note with id ${req.params.id} :(`
    };

    res.status(404).json(notFound);
  }
};
