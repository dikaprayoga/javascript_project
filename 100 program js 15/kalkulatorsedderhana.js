function hitung() {
  const x = parseFloat(document.getElementById("x").value);
  const y = parseFloat(document.getElementById("y").value);
  const op = document.getElementById("operator").value;
  let hasil;

  switch (op) {
    case '+': hasil = x + y; break;
    case '-': hasil = x - y; break;
    case '*': hasil = x * y; break;
    case '/': hasil = x / y; break;
  }

  document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
}

