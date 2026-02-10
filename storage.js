
export let table = [
  {
    categorie: "SPORT",
    temps: "25 min",
    titre: "xxxxxxxx",
    image: "https://cdn-icons-png.flaticon.com/128/10/10699.png"
  },
  {  
    categorie: "STUDY",
    temps: "40 min",
    titre: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/128/906/906175.png"
  }
 
];
export function creeLocal() {
  localStorage.setItem("array", JSON.stringify(table));
}

export function afficherLocal() {
  const data = JSON.parse(localStorage.getItem("array"));
  if (data) {
    table.length = 0;
    table.push(...data);
  }
}
