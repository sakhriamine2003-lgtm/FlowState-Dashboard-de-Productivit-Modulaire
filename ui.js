

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
// -------------------------------------------------------------------------
 function Creeheader() {
  const header = document.getElementById('header');

header.innerHTML =  `  
 <div class=" flex  justify-between items-center   w-full  p-4">
        <div class="flex  items-center  gap-6" >  
        <img class="w-[40px]" src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png " alt="logo">
        <h2>TODO-LISTES </h2></div>
        <div><img class="w-[40px]" src="https://cdn-icons-png.flaticon.com/128/2645/2645890.png " alt="logo"></div>

    </div> `
}Creeheader( )

// -------------------------------------------------------------------------
function Creearticle() {
  const div = document.getElementById('challenge');

  div.innerHTML = `
   <div class=" flex  justify-between items-center   w-full  p-4">
    <h1 class="text-2xl font-bold m-6">Daily challenges</h1>
    <img class="w-[40px] m-6"
      src="https://cdn-icons-png.flaticon.com/128/2040/2040520.png"
      alt="logo"
    /></div> 
  `;
}
Creearticle();


 // -------------------------------------------------------------------------

 
 function CreeElement( data = table) {
  const main = document.getElementById('cards');
  main.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    const x = data[i];

 
 main.innerHTML += `  

 <section class="flex mt-8 items-center justify-between bg-[#2045EA] text-white p-4 rounded-[20px] mx-6 " id="cards"> 

  <div>
    <h2 class="font-bold text-lg">${x.categorie}</h2>
    <p class="font-bold">Category</p>
  </div>

  <div class="text-center">
    <p >${x.temps}</p>
    <p >:  L'${x.titre}</p>
  </div>

  <div>
    <img
      class="w-[50px]"
      src=${x.image}
      alt="sport icon"
    />
  </div>
 </section>

 
 `}}
CreeElement();



 function creeNav() {
  const nav = document.getElementById('nav');

nav.innerHTML = `
 <footer id="footer" class="fixed bottom-0 left-0 w-full flex justify-between items-center text-center bg-[#70A9F9]/50  text-white font-bold rounded-t-3xl p-2">

    <div class=" flex flex-col items-center bg-[#0011FF]/50 duration-700 w-full  rounded-full">
      <img class="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" alt="home">
      <h1><a href="#">Home</a></h1>
    </div>
    <div class=" flex flex-col items-center hover:bg-[#0011FF]/50  duration-700 w-full  rounded-full">
      <img class="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="location">
      <h1><a href="#">location</a></h1>
    </div>
    <div class=" flex flex-col items-center hover:bg-[#0011FF]/50  duration-700 w-full  rounded-full">
      <img class="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/8718/8718268.png" alt="favorise">
      <h1> <a href="#">Pomodoro </a></h1>
    </div>
     <div class=" flex flex-col items-center hover:bg-[#0011FF]/50  duration-700 w-full  rounded-full">
      <img class="w-[50px] h-[50px] " src="https://cdn-icons-png.flaticon.com/128/9308/9308008.png" alt="profil">
      <h1><a href="profil.html">profil</a></h1>
    </div>
    </footer>  `  
 }
   creeNav()
