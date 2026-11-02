"use strict"; 

const Students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     n1: 14, n2: 5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", n1: 7,  n2: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   n1: 13, n2: 3 }
];

function B(moyenne) {
  return moyenne >= 10; 
}

function A() {
  for (const s of Students) {

    const moyenne = (s.n1 *3 + s.n2) / 4;
    const decision = B(moyenne) ? "ADMIS" : "AJOURNÉ";
    console.log(s.id + " : " + decision);
  }
}
