const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Server running!');
});

const port = 4000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
