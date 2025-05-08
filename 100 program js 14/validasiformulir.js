function cek() {
  const nama = document.getElementById("nama").value;
  if (nama === "") {
    alert("Nama harus diisi");
  } else {
    alert("Halo, ${nama}");
  }
}
