const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const usersRoutes = require('./users');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', usersRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
