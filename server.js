const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Hello, ninjas!</p>');
    res.write('<p>Hello, again!</p>');
    res.end();
});

server.listen(3000, () => { console.log('Listening for requests on port 3000.') });