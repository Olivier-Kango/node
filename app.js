const express = require('express');

const app = express();

app.get('/accueil', (req, res) => {
  res.status(200).sendFile('IHM/accueil.html', { root: __dirname })
});


app.listen(3001, () => {
  console.log('en attente de la requête !')
})
