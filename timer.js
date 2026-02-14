let total = 1500;
let interval;

function update() {
  const timerEl = document.getElementById("timer");
  let m = Math.floor(total / 60);
  let s = total % 60;
  timerEl.textContent = (m<10?'0'+m:m) + ':' + (s<10?'0'+s:s);
}

function start() {
  if(interval) return;
  interval = setInterval(() => {
    total--;
    update();
    if(total <= 0){
      clearInterval(interval);
      interval = null;
      alert("Pomodoro terminé!");
    }
  },1000);
}

function reset() {
  clearInterval(interval);
  interval = null;
  total = 1500;
  update();
}

update(); 
