const quotes = [
  "Hidup adalah petualangan.",
  "Belajar dari kesalahan.",
  "Jadilah versi terbaik dirimu."
];

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
}


