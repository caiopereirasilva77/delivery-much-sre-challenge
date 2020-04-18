require('dotenv').config()

// uso de package knex para criacao da base de dados
const knex = require('knex');
const configuration = require('../knexfile');
const connection  = knex(configuration.development);


module.exports = connection;