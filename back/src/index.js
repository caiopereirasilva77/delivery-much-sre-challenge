//cria arquivo de variaveis de ambiente
require('dotenv').config()

const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes')


const app = express();

const port = process.env.SERVICE_PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes)

app.listen(port);

console.log(`Running on port ${port}`);

module.exports = app;