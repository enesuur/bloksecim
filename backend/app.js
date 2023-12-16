const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())


// database connection
const dbURI = 'mongodb+srv://ninjaraidev:12345@cluster0.0id3au2.mongodb.net/node-auth';
mongoose.connect(dbURI)
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('selam'));
app.use(routes);

app.listen(5000,() => {
    console.log('App works on port 5000')
})