"use strict"; 

function f1() {
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

  for (const etudiant of etudiants) {
    console.log(etudiant);
  }
}

function f2() {
  const etudiant = { nom: "John", prenom: "DOE", age: 30 };
  console.log(etudiant);
}

function f3() {
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];

  for (const objE of etudiants) {
    console.log(objE.nom + "-" + objE.prenom + "-" + objE.age);
  }
}
