const fs = require('fs');

// createReadStream allows you to open up a file/stream and read the data present in it.
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8'}); // or chunk.toString();
// createWriteStream() lets us write data to a file using streams
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);

//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// Piping
// OR
readStream.pipe(writeStream);