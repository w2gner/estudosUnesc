const knex = require('knex');
const configuracao = require('../../knexfile');
const connection = knex(configuracao);

module.exports = connection;
