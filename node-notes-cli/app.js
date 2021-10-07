// const data = require('./data.json');

const read = require('./read');
const create = require('./create');
const remove = require('./remove');

const command = process.argv[2];
const argument1 = process.argv[3];

if (command === 'read') {
  read();
} else if (command === 'create') {
  create(argument1);
} else if (command === 'delete') {
  remove(argument1);
}
