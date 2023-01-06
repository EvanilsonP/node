const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from the server.');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});

// // // Blocking, synchronous way
// // // Reading the content in input.txt
// // const textIn = fs.readFileSync('input.txt', 'utf-8');
// // console.log(textIn);

// // const textOut = `What do I like? ${textIn}.\nCreated on ${Date.now()}`;
// // fs.writeFileSync('output.txt', textOut);
// // console.log('File written!');

// // Non-Blocking, asynchronous way
// fs.readFile('output.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log('Will read this file!');
