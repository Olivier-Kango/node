const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: 'Bleu111111',
  database: 'postgres'
});

client.connect();

client.query('SELECT * FROM blagues;')
  .then((result) => {
    console.log(result.rows)
  })

  .catch((error) => {
    console.error('Erreur survenue: ', error.message)
  })

