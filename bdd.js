const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: 'Bleu111111',
  database: 'postgres'
});

client.connect();
