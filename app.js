const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const dbURI = 'mongodb+srv://88813091a:88813091a@cluster0.rq4v2yp.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// listening for requests after the connection to database is completed
  .then(result => app.listen(3000))
  .catch(err => console.log(err))

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });
    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/single-blog', (req, res) => {
    Blog.findById('63f6449f08d0654c3d6b5e99')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
