const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: 'Bleu111111',
  database: 'postgres'
});

client.connect();
result = client.query('SELECT * FROM blagues WHERE id = 1;')
  .then((result) => {
    console.log(result.rows);
  })

  .catch((error) => {
    console.error('Erreur survenue:', error.message);
  });
// console.log(result);
// console.log(1)
// console.log(2)
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4)
