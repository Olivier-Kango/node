// Un module est une fonctionnalite organise dans un ou plusieurs fichier et qui peuvent être réutiliser

const etudiants = [
  {
    nom: "Yvette Baruti",
    niveau: 1
  },
  {
    nom: "Jean Dupont",
    niveau: 2
  }
];

// console.log(etudiants);

const cours = ["Geo", "Math", "Francais"];

module.exports = {
  etudiants,
  cours
};
