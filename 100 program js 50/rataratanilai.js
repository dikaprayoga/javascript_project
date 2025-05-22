document.getElementById("hitung").addEventListener("click", function() {
  var nilai1 = parseFloat(document.getElementById("nilai1").value);
  var nilai2 = parseFloat(document.getElementById("nilai2").value);
  var nilai3 = parseFloat(document.getElementById("nilai3").value);
  var rataRata = (nilai1 + nilai2 + nilai3) / 3;
  document.getElementById("hasil").innerHTML = "Rata-rata nilai adalah " + rataRata;
});

