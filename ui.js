

export function Creeheader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <div class="flex justify-between items-center w-full p-4">
      <div class="flex items-center gap-6">
        <img class="w-[40px]" 
          src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png">
        <h2>TODO-LISTES</h2>
      </div>

      <div>
        <img class="w-[40px]" 
          src="https://cdn-icons-png.flaticon.com/128/2645/2645890.png">
      </div>
    </div>
  `;
}


export function Creearticle() {
  const article = document.getElementById("challenge");

  article.innerHTML = `
  <div class="flex justify-between items-center w-full p-4">
    <h1 class="text-2xl font-bold">Daily challenges</h1>

    <label for="a" class="cursor-pointer">
      <img class="w-[40px]"
        src="https://cdn-icons-png.flaticon.com/128/2040/2040520.png">
    </label>
  </div>

  <input type="checkbox" id="a" class="peer hidden">

  <section class="hidden peer-checked:flex fixed inset-0 z-20
    bg-black/50 justify-center items-center">

    <div class="bg-white text-black w-[400px] rounded-[30px] p-6">

      <h1 class="text-center text-2xl font-bold mb-4">
        ADD TACHE
      </h1>

      <input id="Categorie" class="p-2 rounded w-full mb-2" placeholder="Categorie">
      <input id="Temps" class="p-2 rounded w-full mb-2" placeholder="Temps">
      <input id="Note" class="p-2 rounded w-full mb-2" placeholder="Note">

      <div class="flex justify-between">
        <button id="Enregistrer"
          class="bg-blue-600 text-white px-4 py-2 rounded-[20px]">
          Enregistrer
        </button>

        <label for="a"
          class="bg-red-600 text-white px-4 py-2 rounded-[20px] cursor-pointer">
          Annuler
        </label>
      </div>

    </div>
  </section>
  `;
}


export function CreeElement(data) {
  const main = document.getElementById("cards");

  main.innerHTML = ""; 

  data.forEach((x) => {
    main.innerHTML += `
      <section class="flex mt-8 items-center justify-between bg-[#2045EA] text-white p-4 rounded-[20px] mx-6">
        <div>
          <h2 class="font-bold text-lg">${x.categorie}</h2>
          <p class="font-bold">Category</p>
        </div>

        <div class="text-center">
          <p>${x.temps}</p>
          <p>${x.titre}</p>
        </div>

        <div>
          <button class="delete-btn bg-red-600 p-2 w-[50px] rounded-full"
            data-id="${x.id}">
            sp
          </button>
        </div>

      </section>
    `;
  });
}


export function CreeNav() {
  const nav = document.getElementById("nav");

  nav.innerHTML = `
  <nav class="fixed bottom-0 left-0 w-full flex justify-between items-center text-center bg-[#70A9F9]/50 text-white font-bold rounded-t-3xl p-2">

    <div class="flex flex-col items-center hover:bg-[#0011FF]/50 duration-700 w-full rounded-full">
      <a href="#" class="flex flex-col items-center">
        <img class="w-[30px] h-[30px]"
          src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png">
        <span>Home</span>
      </a>
    </div>

    <label for="b"
      class="flex flex-col items-center hover:bg-[#0011FF]/50 duration-700 w-full rounded-full cursor-pointer">
      <img class="w-[30px] h-[30px]"
        src="https://cdn-icons-png.flaticon.com/128/9764/9764472.png">
      <span>Pomodoro</span>
    </label>

    <input type="checkbox" id="b" class="peer hidden">

<section class="hidden peer-checked:flex fixed inset-0 z-20 
bg-blue-100 flex-col items-center justify-center 
px-4 sm:px-6">


  <div class="mb-8 text-center">
    <h1 class="text-2xl sm:text-3xl font-bold text-blue-900 flex items-center justify-center gap-2">
      <span>🎯</span> FlowState
    </h1>
  </div>

  <div class="w-full max-w-md bg-blue-200 p-6 sm:p-8 
  rounded-2xl shadow-xl flex flex-col items-center gap-6">
    
    <div class="bg-blue-300 px-4 py-2 rounded-full text-blue-900 text-sm sm:text-base">
      Pomodoro Timer
    </div>

    <div id="time" class="text-4xl sm:text-6xl font-bold text-blue-900 text-center">
      00:25:00
    </div>

    <button class="border border-blue-700 text-blue-700 
    px-6 sm:px-8 py-2 rounded-full hover:bg-blue-700 hover:text-white transition">
      FOCUS
    </button>

    <div class="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
      <button id="start" class="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto">
        ▶ stop
      </button>

      <button  id="return" class="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto">
        ⟳ RETURN
      </button>
    </div>
  </div>

  <div class="mt-8 flex flex-wrap justify-center gap-6 text-blue-900 text-sm sm:text-base">
    <span>Tasks</span>
    <span>Date</span>
    <span>Settings</span>
  </div>

</section>

  `;
}
CreeNav()