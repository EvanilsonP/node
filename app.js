const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// register view engine
app.set('view engine', 'ejs');
app.use(morgan('dev'));

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consecteur'},
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consecteur'},
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consecteur'},
    ];

    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'} );
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
});

// 404 pages
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));