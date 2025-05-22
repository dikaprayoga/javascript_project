const text = "Selamat datang!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("type").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();