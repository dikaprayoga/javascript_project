let current = 0;
const colors = ["red", "yellow", "green"];

function changeLight() {
  colors.forEach(id => document.getElementById(id).style.background = "#ccc");
  document.getElementById(colors[current]).style.background = colors[current];
  current = (current + 1) % 3;
}



