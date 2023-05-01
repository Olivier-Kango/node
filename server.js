// URL (Uniform Resource Locator)

// Adresse qui précise la localisation d'une ressource d'un réseau 
// En indiquant : Le protocole adopté (http//), le nom de la machine sur le réseau: 162.145.115.14. port:3000 ainsi que le chemin d'accès de la ressource:/cours.

// L'adresse IP de la machine serveur et le port sont générallement masqué par c'est qu'on appelle le nom du domaine: www.drcmind.com.

// Le navigaeur, une fois l'utisateur valide l'adresse, envoie une requête via le protocole HTTP, c'est autour du serveur, c'est autour du serveur d'envoyer une réponse (JSON, HTML, JPEG, MP3) au client qui est le navigateur et celui se charge à faire la rendue à l'utilisateur.

// Node Js sert à créer des applications qui seront exécuté dans l'ordinateur qui joue le rôle du serveur pour qu'il soit en mesure d'écouter les requêtes de la partie client.
// Bref NodeJs fait qu'un ordinateur se comporte en Serveur.

const { readFile, write } = require('fs');
const http = require('http');
const { v4 } = require('uuid')


const serveur = http.createServer((requete, reponse) => {
  console.log(v4())
  // reponse.setHeader("content-type", "text/html");
  // reponse.write("<header><meta charset='utf8'></header>")
  

  reponse.setHeader('content-type', 'text/html')

  let fichier = "";

  if(requete.url === "/accueil") {
    fichier = './IHM/accueil.html';
  } else if(requete.url === "/profile") {
    // reponse.write("<h2>Profil</h2><p>Développeurs Backend</p>")
    fichier = './IHM/profile.html';
  } else {
    // reponse.write("<h2>Error</h2><p>Url invalid</p>")
    fichier = './IHM/erreur.html';
  }

  readFile(fichier, (err, donnee) => {
    if(err) {
      console.log(err.message)
      reponse.end()
    } else {
      reponse.write(donnee)
      reponse.end()
    }
  })
  // reponse.end(fichier);
})

serveur.listen(3001, 'localhost', () => {
  console.log('Connecté au port 3001')
})
