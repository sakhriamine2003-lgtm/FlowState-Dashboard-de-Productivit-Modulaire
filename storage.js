// جدول البيانات
let table = [
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
  },
  {
    categorie: "STUDY",
    temps: "40 min",
    titre: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/128/906/906175.png"
  },
  {
    categorie: "SPORT",
    temps: "30 min",
    titre: "Yoga",
    image: "https://cdn-icons-png.flaticon.com/128/2972/2972185.png"
  },
  {
    categorie: "LEISURE",
    temps: "1 h",
    titre: "Lecture",
    image: "https://cdn-icons-png.flaticon.com/128/2965/2965567.png"
  }
];

export function creeLocal() {
  localStorage.setItem("array", JSON.stringify(table));
}

export function afficherLocal() {
  const data = JSON.parse(localStorage.getItem("array"));
  return data || [];
}

creeLocal();
