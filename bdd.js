const { cpSync, closeSync } = require('fs');
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: 'Bleu111111',
  database: 'postgres'
});

client.connect();

client.query('SELEC * FROM blagues;')
  .then((result) => {
    console.log(result.rows)
  })

  .catch((error) => {
    console.log(error)
  });

// console.log('1- Je me réveille');
// console.log('2- Je prend mon petit Déjeuner');
// setTimeout(() => {
//   console.log("3- J'écoute un poadcast")
// }, 1000);
// console.log('4- Je travaille');

