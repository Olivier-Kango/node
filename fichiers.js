// Create and remove folder et file

const { error } = require("console");
const { mkdir, existsSync, rmdir } = require("fs");

// CREATE FOLDER

if (existsSync('./mesFichiers')) {
  // console.log('le fichier existe déjà !!!')
  rmdir('./mesFichiers', (error) => {
    if(error) {
      console.log(error.message)
    } else {
      console.log('Fichier effacé avec succès !')
    }
  })
} else {
  mkdir('./mesFichiers', (error) => {
    if(error) {
      console.log(error.message);
    } else {
      console.log('Fichier créé avec succès')
    }
  });
}

