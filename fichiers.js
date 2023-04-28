// Create and remove folder et file

const { error } = require("console");
const { mkdir, existsSync, writeFile } = require("fs");

// CREATE FOLDER

if (existsSync('./mesFichiers')) {
  // console.log('le fichier existe déjà !!!')
  // rmdir('./mesFichiers', (error) => {
  //   if(error) {
  //     console.log(error.message)
  //   } else {
  //     console.log('Fichier effacé avec succès !')
  //   }
  // })
  writeFile('./mesFichiers/file.txt', 'Bonjour Olivier, ceci est un message dessais',(error) => {
    if(error) {
      console.log(error.message);
    } else {
      console.log('Le fichier a été créé avec succès !!!')
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
