import { table, creeLocal, afficherLocal } from "./storage.js";
import { Creearticle } from "./ui.js";

document.addEventListener("cards", () => {
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
      note: note.value,
      image: image.value,
    };

    table.push(newtable);
    creeLocal();

    alert("La tâche a été ajoutée");

    categorie.value = "";
    temps.value = "";
    note.value = "";
    image.value = "";
  });
});


