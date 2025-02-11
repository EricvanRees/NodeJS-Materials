const fs = require('fs');

// create new directory if it does not exist;
if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory created');
  });
}

// if dir exists, delete it:
if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory removed');
  });
}

