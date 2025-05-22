let count = 0;
let interval;

function start() {
  interval = setInterval(() => {
    count++;
    document.getElementById("display").textContent = count;
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  count = 0;
  document.getElementById("display").textContent = count;
}

