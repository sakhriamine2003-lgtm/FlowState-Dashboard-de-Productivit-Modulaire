let array = [];

const btn = document.getElementById("Enregistrer");
const categorie = document.getElementById("Categorie");
const temps = document.getElementById("Temps");
const note = document.getElementById("Note");
const image = document.getElementById("Image");

btn.addEventListener("click", () => {
  let newtable = {
    id: array.length + 1,
    categorie: categorie.value,
    temps: temps.value,
    note: note.value,
    image: image.value
  };bf

  array.push(newtable);

  console.log(array); 
  alert("La tâche a été ajoutée ");

  categorie.value = "";
  temps.value = "";
  note.value = "";
  image.value = "";
});
