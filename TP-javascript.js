// EXERCICE 1:
// 1.
function calculerMoyenne(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

// 2.
function estAdmis(moyenne) {
  return moyenne >= 10;
}

// 3. 
function calculerPrixTTC(prixHT, tauxTVA = 0.18) {
  return prixHT * (1 + tauxTVA);
}

// 4. 
const convertirEnMinutes = heures => heures * 60;

// 5.
console.log(calculerMoyenne(12, 14, 16));
console.log(calculerMoyenne(10, 10, 10));    
console.log(estAdmis(9.5));              
console.log(estAdmis(10));               
console.log(calculerPrixTTC(10000));      
console.log(calculerPrixTTC(10000, 0));   
console.log(convertirEnMinutes(2));       
console.log(convertirEnMinutes(0));     

//EXERCICE 2
const etudiant = {
  id: 2026,
  nom: "Ndiaye",
  prenom: "Moussa",
  filiere: "IAGE",
  niveau: "L2",
  ville: "Dakar"
};

const resultats = [15, 11, 17, 13, 16];
// 1.
const { nom, prenom, filiere } = etudiant;

console.log(nom);      
console.log(prenom);   
console.log(filiere);  

// 2.
const { niveau: classe } = etudiant;

console.log(classe); 

// 3.
const [premiereNote, deuxiemeNote, ...autresNotes] = resultats;

const derniereNote = autresNotes[autresNotes.length - 1];

console.log(premiereNote); 
console.log(deuxiemeNote); 
console.log(derniereNote); 

// 4.
const [premiere, , troisieme] = resultats;

console.log(premiere);  
console.log(troisieme); 

// 5.
const { email = "Non renseigné" } = etudiant;

console.log(email);

// 6.
console.log(
    `Je m'appelle ${prenom} ${nom}, je suis en filière ${filiere}, classe ${classe}.`
);

// EXERCICE 3 :
// 1.
const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];

const tousLesEtudiants = [...groupeA, ...groupeB];

console.log(tousLesEtudiants);

// 2.
const copieGroupeA = [...groupeA, "Cheikh"];

console.log(copieGroupeA);
console.log(groupeA);

// 3.
const etudiantBase = {
  nom: "Diop",
  filiere: "IAGE",
  niveau: "L2"
};

const etudiantComplet = {
  ...etudiantBase,
  age: 22,
  ville: "Dakar"
};

console.log(etudiantComplet);

// 4.
const etudiantL3 = {
  ...etudiantBase,
  niveau: "L3"
};

console.log(etudiantL3);
console.log(etudiantBase);

// 5.
const coordonnees = {
  ville: "Dakar",
  pays: "Sénégal"
};

const contact = {
  telephone: "771234567",
  ville: "Thiès"
};

const profil = {
  ...coordonnees,
  ...contact
};

console.log(profil);

// EXERCICE 4:
// 1.
function additionner(...nombres) {
  let somme = 0;

  for (let nombre of nombres) {
    somme += nombre;
      
  }

  return somme;
}

console.log(additionner(2, 3));     
console.log(additionner(1, 2, 3));       
console.log(additionner(1, 2, 3, 4, 5));

// 2.
function afficherPremierEtAutres(premier, ...autres) {
  console.log("Premier argument :", premier);
  console.log("Autres arguments :", autres);
}

afficherPremierEtAutres("Awa", "Moussa", "Fatou", "Ibra");

// 3.
function creerFiche(nom, filiere, ...competences) {
  return {
    nom: nom,
    filiere: filiere,
    competences: competences
  };
}

console.log(creerFiche("Awa", "IAGE", "JavaScript", "SQL"));

// 4.

// Parce que rest doit récupérer tous les arguments restants.
// S'il était placé avant les autres paramètres, 
// JavaScript ne saurait pas quels arguments 
// attribuer aux paramètres suivants.

// EXERCICE 5 :
const etudiantL2 = {
  id: 104,
  prenom: "Aminata",
  nom: "Fall",
  notes: [13, 16, 12],
  filiere: "IAGE"
};
// 1.
function extraireIdentite(etudiant) {
  const { prenom, nom, filiere } = etudiant;

  return {
    prenom,
    nom,
    filiere
  };
}

console.log(extraireIdentite(etudiantL2));

// 2.
function calculerMoyenneNotes(notes) {
  if (notes.length === 0) {
    return 0;
  }

  const somme = notes.reduce((total, note) => total + note, 0);

  return somme / notes.length;
}

console.log(calculerMoyenneNotes([13, 16, 12]));
console.log(calculerMoyenneNotes([]));       

// 3.
function ajouterNote(etudiant, nouvelleNote) {
  return {
    ...etudiant,
    notes: [...etudiant.notes, nouvelleNote]
  };
}

const nouvelEtudiant = ajouterNote(etudiantL2, 18);

console.log(nouvelEtudiant);
console.log(etudiantL2.notes);

// 4.
function creerResume(etudiant, ...options) {
  return {
    identite: extraireIdentite(etudiant),
    moyenne: calculerMoyenneNotes(etudiant.notes),
    options: options
  };
}

console.log(
  creerResume(etudiantL2, "Avec photo", "Afficher les notes")
);

// 5.
console.log(etudiantL2.notes);
console.log(etudiantL2.nom);   