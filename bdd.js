const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: 'Bleu111111',
  database: 'postgres'
});

client.connect();
result = client.query('SELECT * FROM blagues;')
  .then((result) => {
    console.log(result);
  })


// console.log(result);
// console.log(1)
// console.log(2)
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4)
