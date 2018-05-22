const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { Review } = require('../database/db');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server running!');
});

const port = 4000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get('search/:query', (req, res) => {
  const query = req.params;
  Review.find(`{company: ${query}}`)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      throw err;
    });
});

app.post('/form', (req, res) => {
  Review.create(req.body.data);
  res.status(201).send('form data added to database');
});
