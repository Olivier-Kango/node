const express = require('express');

const app = express();

app.get('/accueil', (req, res) => {
  res.status(200).sendFile('IHM/accueil.html', { root: __dirname })
});

app.get('/profile', (req, res) => {
  res.status(200).sendFile('IHM/profile.html', { root: __dirname })
});

app.get('/', (req, res) => {
  res.status(300).redirect('/accueil')
});

app.use((req, res) => {
  res.status(404).sendFile('IHM/erreur.html', { root: __dirname })
});


app.listen(3001, () => {
  console.log('en attente de la requête !')
})
