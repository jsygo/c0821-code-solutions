const fs = require('fs');

fs.readFile(`./${process.argv[2]}`, 'utf-8', (err, text) => {
  if (err) throw err;
  fs.writeFile(process.argv[3], text, err => {
    if (err) throw err;
  });
});
