//const fs = require('fs');
// to avoid callback hell, use promises instead of fs:
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    // reading to new file, appending to new file, renaming new file, reading new file, and logging the data from that file using async/await
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data);
    // unlink = delete file
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));

    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n\nNice to meet you');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
}

fileOps();

 // read from file and print in terminal
/*
 fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
}) */

// write text to new file
/* fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
  if (err) throw err;
  console.log('Write complete');

  // append to file
  fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n\nYes it is.', (err) => {
    if (err) throw err;
    console.log('Append complete');
  })
    // rename file
    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
      if (err) throw err;
      console.log('Rename complete');
    })
}) */


// exit on uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})