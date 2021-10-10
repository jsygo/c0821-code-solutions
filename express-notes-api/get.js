const data = require('./data.json');

module.exports = {
  getAllNotes: (req, res) => {
    const notesArr = [];
    for (const note in data.notes) {
      notesArr.push(data.notes[note]);
    }

    res.status(200).json(notesArr);
  },
  getNoteById: (req, res) => {
    if ((req.params.id < 1) || !(Number.isInteger(parseFloat(req.params.id)))) {
      const badRequest = {
        error: 'id must be a positive integer'
      };

      res.status(400).json(badRequest);
    } else if (data.notes[req.params.id]) {
      res.status(200).json(data.notes[req.params.id]);
    } else {
      const notFound = {
        error: `cannot find note with id ${req.params.id} :(`
      };

      res.status(404).json(notFound);
    }
  }
};
