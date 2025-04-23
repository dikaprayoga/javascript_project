function updateJam() {
  let sekarang = new Date();
  let jam = sekarang.getHours().toString().padStart(2, '0');
  let menit = sekarang.getMinutes().toString().padStart(2, '0');
  let detik = sekarang.getSeconds().toString().padStart(2, '0');
  document.getElementById("jam").textContent = jam + ":" + menit + ":" + detik;
}
setInterval(updateJam, 1000);
