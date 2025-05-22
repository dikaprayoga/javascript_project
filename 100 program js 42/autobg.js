const colors = ["red", "blue", "green", "purple", "orange"];
let i = 0;
setInterval(() => {
  document.body.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}, 2000);

