import { table, creeLocal, afficherLocal } from "./storage.js";
import { Creearticle, CreeElement } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  Creearticle();

  const btn = document.getElementById("Enregistrer");
  const categorie = document.getElementById("Categorie");
  const temps = document.getElementById("Temps");
  const note = document.getElementById("Note");
  const image = document.getElementById("Image");

 
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let newtable = {
      id: table.length + 1,
      categorie: categorie.value,
      temps: temps.value,
      titre: note.value,
      image: image.value,
    };

    table.push(newtable);
    creeLocal();
    CreeElement(table); 

    alert("La tâche a été ajoutée");

    categorie.value = "";
    temps.value = "";
    note.value = "";
    image.value = "";
  });
});