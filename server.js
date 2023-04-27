// URL (Uniform Resource Locator)

// Adresse qui précise la localisation d'une ressource d'un réseau 
// En indiquant : Le protocole adopté (http//), le nom de la machine sur le réseau: 162.145.115.14. port:3000 ainsi que le chemin d'accès de la ressource:/cours.

// L'adresse IP de la machine serveur et le port sont générallement masqué par c'est qu'on appelle le nom du domaine: www.drcmind.com.

// Le navigaeur, une fois l'utisateur valide l'adresse, envoie une requête via le protocole HTTP, c'est autour du serveur, c'est autour du serveur d'envoyer une réponse (JSON, HTML, JPEG, MP3) au client qui est le navigateur et celui se charge à faire la rendue à l'utilisateur.

// Node Js sert à créer des applications qui seront exécuté dans l'ordinateur qui joue le rôle du serveur pour qu'il soit en mesure d'écouter les requêtes de la partie client.
// Bref NodeJs fait qu'un ordinateur se comporte en Serveur.

const http = require('http');

const serveur = http.createServer((requete, response) => {
  // console.log("Serveur créé")

  // Définition de l'entête.
  response.setHeader("content-type", "text/plain");

  if(requete.url === '/accueil') {
    response.write("Bienvenue tres cher developpeur")
  } else if(requete.url === '/profil') {
    response.write("Vous un developer backend")
  } else {
    response.write("url non valid")
  }
  response.end();
});

serveur.listen(3001, 'localhost', () => {
  console.log("Connecté au port 3001")
});
