const data = require('./data.json');
const fs = require('fs');

module.exports = (req, res) => {
  const dataJSON = JSON.stringify(data, null, 2);

  fs.writeFile('./data.json', dataJSON, err => {
    if (err) {
      const internalServerError = {
        error: 'Sorry! An unexpected error occurred :('
      };

      res.status(500).json(internalServerError);
    }
  });
};
