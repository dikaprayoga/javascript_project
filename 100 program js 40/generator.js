function buatEmail() {
  const nama = document.getElementById("nama").value.toLowerCase().replace(/\s+/g, ".");
  const email = `${nama}@mail.com`;
  document.getElementById("email").textContent = email;
}


