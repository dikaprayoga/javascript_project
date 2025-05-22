function calculateAge() {
  const birth = new Date(document.getElementById("birthdate").value);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();

  document.getElementById("age").textContent = `Umur: ${age} tahun`;
}