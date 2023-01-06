const fs = require('fs');

// Reading the content in input.txt
const textIn = fs.readFileSync('input.txt', 'utf-8');
console.log(textIn);

const textOut = `What do I like? ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('output.txt', textOut);
console.log('File written!');