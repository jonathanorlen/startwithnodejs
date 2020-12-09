const fs = require('fs');

const name = require('./until');

fs.writeFileSync('note.txt', name);
fs.appendFileSync('note.txt', 'Append');