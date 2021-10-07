// const data = require('./data.json');

const read = require('./read');
const create = require('./create');

const command = process.argv[2];
const argument = process.argv[3];

if (command === 'read') {
  read();
} else if (command === 'create') {
  create(argument);
}
