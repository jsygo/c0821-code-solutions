const data = require('./data.json');

const read = require('./read');

const command = process.argv[2];

if (command === 'read') {
  read(data.notes);
}
