
import { creeLocal, afficherLocal } from "./storage.js";
import { Creearticle, CreeElement, Creeheader } from "./ui.js";

let table = afficherLocal(); 

document.addEventListener("DOMContentLoaded", () => {
  Creeheader();
  Creearticle();
  CreeElement(table);

  const btn = document.getElementById("Enregistrer");
  const categorie = document.getElementById("Categorie");
  const temps = document.getElementById("Temps");
  const note = document.getElementById("Note");

  btn.addEventListener("click", () => {
    const newTask = {
      id: Date.now(),  
      categorie: categorie.value,
      temps: temps.value,
      titre: note.value,
    
    };

    table.push(newTask);

    creeLocal(table);       
    CreeElement(table);    

    categorie.value = "";
    temps.value = "";
    note.value = "";

    alert("La tâche a été ajoutée");
  });

  function supprimer(id) {
  table = table.filter(item => item.id !== id);
  creeLocal(table);
  CreeElement(table);
  alert("Element supprimé");
}


 
document.getElementById("cards").addEventListener("click", function (e) {

  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.dataset.id);
    supprimer(id);
  }

});

});
