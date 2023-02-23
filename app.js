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

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find()
  .then((result) => {
    res.render('index', { title: 'All blogs ', blogs: result });
  })
  .catch((err) => {
    console.log(err);
  })
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
