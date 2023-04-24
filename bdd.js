const { cpSync } = require('fs');
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

console.log('1- Je me réveille');
console.log('2- Je prend mon petit Déjeuner');
setTimeout(() => {
  console.log("3- J'écoute un poadcast")
}, 1000);
console.log('4- Je travaille');

