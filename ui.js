

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
  // export default 
  function  Creearticle() {
  const article = document.getElementById('challenge');

  article.innerHTML = `
  <div class="flex justify-between items-center w-full p-4">
    <h1 class="text-2xl font-bold">Daily challenges</h1>

    <label for="a">
      <img class="w-[40px] "
        src="https://cdn-icons-png.flaticon.com/128/2040/2040520.png"
        alt="logo">
    </label>
  </div>

  <input type="checkbox" id="a" class="peer hidden">

  <section class="hidden peer-checked:flex fixed inset-0 z-20
    bg-black/50 justify-center items-center">

    <div class="bg-white text-black w-[400px] rounded-[30px] p-6">

      <h1 class="text-center text-2xl font-bold mb-4">ADD TACHE</h1>

      <input id="Categorie" class="p-2 rounded w-full mb-2" placeholder="Categorie">
      <input id="Temps" class="p-2 rounded w-full mb-2" placeholder="Temps">
      <input id="Note"  class="p-2 rounded w-full mb-2" placeholder="Note">
      <input id="Image"  class="p-2 rounded w-full mb-4" placeholder="Image URL">
      <div class="flex justify-between">
        <button id="Enregistrer" class="bg-blue-600 text-white px-4 py-2 rounded-[20px]">
          Enregistrer
        </button>

        <label for="a" class="bg-red-600 text-white px-4 py-2 rounded-[20px]">
          Annuler
        </label>
      </div>

    </div>
  </section>
  `;
  }

Creearticle();


 // -------------------------------------------------------------------------

function CreeElement( data = table) {
  const main = document.getElementById('cards');
  for (let i = 0; i < data.length; i++) {
    const x = data[i];

 
 main.innerHTML += `
      <section class="flex mt-8 items-center justify-between bg-[#2045EA] text-white p-4 rounded-[20px] mx-6">
        <div>
          <h2 class="font-bold text-lg">${x.categorie}</h2>
          <p class="font-bold">Category</p>
        </div>

        <div class="text-center">
          <p>${x.temps}</p>
          <p>L'${x.titre}</p>
        </div>

        <div>
          <img class="w-[50px]" src="${x.image}">
        </div>
      </section>
    `;
  }
};
CreeElement();


 function creeNav() {
  const nav = document.getElementById('nav');

  nav.innerHTML = `
  <!-- FOOTER -->
  <footer id="footer" class="fixed bottom-0 left-0 w-full flex justify-between items-center text-center bg-[#70A9F9]/50 text-white font-bold rounded-t-3xl p-2">

    <div class="flex flex-col items-center hover:bg-[#0011FF]/50 duration-700 w-full rounded-full">
      <a href="#" class="flex flex-col items-center">
        <img class="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" alt="home">
        <span>Home</span>
      </a>
    </div>

    <div class="flex flex-col items-center hover:bg-[#0011FF]/50 duration-700 w-full rounded-full">
      <a href="#" class="flex flex-col items-center">
        <img class="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="location">
        <span>Location</span>
      </a>
    </div>

    <div class="flex flex-col items-center hover:bg-[#0011FF]/50 duration-700 w-full rounded-full">
      <label for="b" class="cursor-pointer flex flex-col items-center">
        <img class="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/8718/8718268.png" alt="pomodoro">
        <span>Pomodoro</span>
      </label>
    </div>

    <div class="flex flex-col items-center hover:bg-[#0011FF]/50 duration-700 w-full rounded-full">
      <a href="profil.html" class="flex flex-col items-center">
        <img class="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/9308/9308008.png" alt="profil">
        <span>Profil</span>
      </a>
    </div>
  </footer>

  <!-- CHECKBOX TRIGGER -->
  <input type="checkbox" id="b" class="peer hidden">

  <!-- MODAL POMODORO -->
  <section class="hidden peer-checked:flex fixed inset-0 z-20 bg-black/50 justify-center items-center">

    <article class="bg-white rounded-2xl p-4 flex flex-col items-center gap-4">
      <button id="startPomodoro" class="bg-[#2045EA] w-[150px] h-[50px] rounded-[20px] text-white font-bold">
        SELECT TASK
      </button>

      <div class="flex justify-between items-center p-2 w-full">
        <div>
          <img class="w-[200px]" src="https://cdn-icons-png.flaticon.com/128/7853/7853226.png" alt="">
        </div>

        <div class="text-center">
          <img class="w-[50px] mx-auto" src="https://cdn-icons-png.flaticon.com/128/40/40204.png" alt="">
          <p id="timer" class="font-bold text-2xl">25:00</p>
        </div>
      </div>

      <div class="flex justify-center gap-4">
        <img class="w-[60px]" src="data:image/webp;base64,UklGRhgEAABXRUJQVlA4IAwEAADQKQCdASomASYBPp1OpkylpKQiIhdI4LATiWlu4XO3VdAI74m2JGnhb/MdqUiB2BBgSoIZd4pvzb/N+wJ5Unrf/bD2Iv12EDhpnwzFruhpnwzFruhpnwzFruhpnwzFruhpnwzFruhpnwzFruhpnwzFruhpntaLKOTBA50NM+GYtcNmcZrXd9EAh6Ysa9pd0NM+GOIDduB81NiJAqPd9oo0z4Zi1xo/2gkHt77QTXpTDRo5t0EwfTAC/dhF+7CL919TdxIw6kTuumfDMWu6Gl6ZQd0C0WA3zx3rZxoLsF+FFVw9R5xfuwi/dhF+7CL917FZEDcMCKJ1+frN0y4T5Z18BzmjqTk7oaYCE5Xk65eAR4ShVoi/oV1YaOpOTtkf41PjRJVDDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDL6AAP7+8YAAADDhaAwohHQimW5/hcQRYg8yyucBV5i9CES/0P198zgZSx3qIYakGidpEXnE9TttgwXh3yysDUCOfkaw5VUxQ1lAzT2+z8HUCK1gBOiQkDHYALzJf8q3+QEHOin/3JRPOHH867gdQkIdc7bF48mvn99CJfocVlOt3WYyzIS0jJes+zPbiEd/ofUDmq+Sch4B1+blBQAOQNN9y9rZLM8nMQU4XBYBR+znOA5WidtS5wAI//pKUeSK8u8d59wwAAt809QFWWloTAz+ajKfqJK58wLVkNV+Et4aNZzwAQ0t3WlCXNgLnUByzk2LEIX5UwO5c54RyivX/1gXEzNUfegL/DOqjs6zRoKu8ty+jq7tbWnAlXJ9Y6/nNJLE4Di/r4vufnBFu4XvHY8TwWrXSHxUu9WqIIVVPpM/nU7s4dGWBCEZvYyds+euA7EIv83l/QQDOJdZapYUf2bwhc+7DoyeK/VDuwahVNixIqieScAoY3aEYg1fNLQTUny5cZV+TITX+XFJd+OOFRuZrhexNK25R2DiaId4UWEH95STs96TjrWKcAjZGd6wDcOwc6bWB/kifbkGX4f8KwAdcu0isdTfSe3fQ+eLksGrasM798tx5YxY8Iai15x/KORuHutyh+gQIDUcsAt4TeXdAkIwk75mZu5OaJDIaXRhsWpsmpVXCjtLIYYRWdKG76XKzehZxaKq6eIp+NlfxwOMrQCo1yZk206k081BQPMJ8XjIBZYietBx5/lsfjboxA59Wj3tcO0QU29A56H04AB1+SAAJMEK06yRuBi3UonavxvFXOjJcq33XNu2eVKrFOY18ko/TfYSurd1G5pB0xdWTlGcRmshPvWhQrdooim0BLqCqAQhvosCptRx1PWszr1yS+2M7jK1fw3qNumShiaEAAAAAAAA" alt="">
        <img class="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/6529/6529049.png" alt="">
        <img class="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/4029/4029077.png" alt="">
        <img class="w-[60px]" src="https://tse3.mm.bing.net/th/id/OIP.vG7GOoexe_Gx0T-9pok-5gHaHa" alt="">
      </div>
    </article>
  </section>
  `;
}

creeNav();


   function promodo(){
      const promo = document.getElementById('promodo');

nav.innerHTML = `

    <section class="flex flex-col items-center gap-10 mt-10">

  
  <article>
    <button class="bg-[#2045EA] w-[150px] h-[50px] rounded-[20px] text-white font-bold">
      SELECT TASK
    </button>
  </article>


  <article class="flex justify-between items-center  p-2">
    <div>
      <img class="w-[200px]" src="https://cdn-icons-png.flaticon.com/128/7853/7853226.png" alt="">
    </div>

    <div class="text-center">
      <img class="w-[50px] mx-auto" src="https://cdn-icons-png.flaticon.com/128/40/40204.png" alt="">
      <p class="font-bold text-2xl">25:00</p>
    </div>
  </article>

  
  <article class="flex justify-center gap-4">
    <img class="w-[60px]" src="data:image/webp;base64,UklGRhgEAABXRUJQVlA4IAwEAADQKQCdASomASYBPp1OpkylpKQiIhdI4LATiWlu4XO3VdAI74m2JGnhb/MdqUiB2BBgSoIZd4pvzb/N+wJ5Unrf/bD2Iv12EDhpnwzFruhpnwzFruhpnwzFruhpnwzFruhpnwzFruhpnwzFruhpnwzFruhpntaLKOTBA50NM+GYtcNmcZrXd9EAh6Ysa9pd0NM+GOIDduB81NiJAqPd9oo0z4Zi1xo/2gkHt77QTXpTDRo5t0EwfTAC/dhF+7CL919TdxIw6kTuumfDMWu6Gl6ZQd0C0WA3zx3rZxoLsF+FFVw9R5xfuwi/dhF+7CL917FZEDcMCKJ1+frN0y4T5Z18BzmjqTk7oaYCE5Xk65eAR4ShVoi/oV1YaOpOTtkf41PjRJVDDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDMWu6GmfDL6AAP7+8YAAADDhaAwohHQimW5/hcQRYg8yyucBV5i9CES/0P198zgZSx3qIYakGidpEXnE9TttgwXh3yysDUCOfkaw5VUxQ1lAzT2+z8HUCK1gBOiQkDHYALzJf8q3+QEHOin/3JRPOHH867gdQkIdc7bF48mvn99CJfocVlOt3WYyzIS0jJes+zPbiEd/ofUDmq+Sch4B1+blBQAOQNN9y9rZLM8nMQU4XBYBR+znOA5WidtS5wAI//pKUeSK8u8d59wwAAt809QFWWloTAz+ajKfqJK58wLVkNV+Et4aNZzwAQ0t3WlCXNgLnUByzk2LEIX5UwO5c54RyivX/1gXEzNUfegL/DOqjs6zRoKu8ty+jq7tbWnAlXJ9Y6/nNJLE4Di/r4vufnBFu4XvHY8TwWrXSHxUu9WqIIVVPpM/nU7s4dGWBCEZvYyds+euA7EIv83l/QQDOJdZapYUf2bwhc+7DoyeK/VDuwahVNixIqieScAoY3aEYg1fNLQTUny5cZV+TITX+XFJd+OOFRuZrhexNK25R2DiaId4UWEH95STs96TjrWKcAjZGd6wDcOwc6bWB/kifbkGX4f8KwAdcu0isdTfSe3fQ+eLksGrasM798tx5YxY8Iai15x/KORuHutyh+gQIDUcsAt4TeXdAkIwk75mZu5OaJDIaXRhsWpsmpVXCjtLIYYRWdKG76XKzehZxaKq6eIp+NlfxwOMrQCo1yZk206k081BQPMJ8XjIBZYietBx5/lsfjboxA59Wj3tcO0QU29A56H04AB1+SAAJMEK06yRuBi3UonavxvFXOjJcq33XNu2eVKrFOY18ko/TfYSurd1G5pB0xdWTlGcRmshPvWhQrdooim0BLqCqAQhvosCptRx1PWszr1yS+2M7jK1fw3qNumShiaEAAAAAAAA" alt="">
    <img class="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/6529/6529049.png" alt="">
    <img class="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/4029/4029077.png" alt="">
    <img class="w-[60px]" src="https://tse3.mm.bing.net/th/id/OIP.vG7GOoexe_Gx0T-9pok-5gHaHa" alt="">
  </article>

</section>`
   }



