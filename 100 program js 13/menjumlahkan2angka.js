function jumlah() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  document.getElementById("hasil").innerText = `Hasil: ${a + b}`;
}
