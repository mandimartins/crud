const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

const connection = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'cadastro'
  }
});

const dependencies = {
  connection: connection
};

const pessoas = require('./routes/pessoas');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/pessoas', pessoas(dependencies));

app.listen(port, () => console.log('CRUD listening on port ' + port));
