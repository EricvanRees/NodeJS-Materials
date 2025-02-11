const fs = require('fs');

// read and write large data streams:
const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf-8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

/* rs.on('data', (dataChunk) => {
  ws.write(dataChunk);
}) */

// does the same as the example above;
rs.pipe(ws);