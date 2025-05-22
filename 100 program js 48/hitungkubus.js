document.getElementById("hitung").addEventListener("click", function() {
  var sisi = parseFloat(document.getElementById("sisi").value);
  var luasPermukaan = 6 * sisi * sisi;
  document.getElementById("hasil").innerHTML = "Luas permukaan kubus adalah " + luasPermukaan;
});


