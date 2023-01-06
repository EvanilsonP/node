const fs = require('fs');

// // Blocking, synchronous way
// // Reading the content in input.txt
// const textIn = fs.readFileSync('input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `What do I like? ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('output.txt', textOut);
// console.log('File written!');

// Non-Blocking, asynchronous way
fs.readFile('output.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Will read this file!');