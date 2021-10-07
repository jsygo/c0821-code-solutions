// commands
const read = require('./read');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');

// utility
const updateData = require('./update-data');

// process arguments
const command = process.argv[2];
const argument1 = process.argv[3];
const argument2 = process.argv[4];

// command calls
if (command === 'read') {
  read();
} else if (command === 'create') {
  create(argument1);
  updateData();
} else if (command === 'delete') {
  remove(argument1);
  updateData();
} else if (command === 'update') {
  update(argument1, argument2);
  updateData();
}
