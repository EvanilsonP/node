const fs = require('fs');

// READING FILES
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) return err;
    console.log(data.toString());
});

// WRITING FILES
fs.writeFile('./docs/blog.txt', 'Hello, World!', () => {
    console.log('Content overwritten!');
});

fs.writeFile('./docs/blog.txt2', 'Hello, Again!', () => {
    console.log('New txt file');
});

// DIRECTORIES
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) return err;
        console.log('Folder created.');
    });

} else {
    fs.rmdir('./assets', (err) => {
        if(err) return err;
        console.log('Folder delete.');
    });
};

// DELETING FILES
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) return err;
        console.log('File deleted.');
    });
};