function convert() {
  const km = parseFloat(document.getElementById("km").value);
  const mile = km * 0.621371;
  document.getElementById("mile").textContent = `${mile.toFixed(2)} mil`;
}

