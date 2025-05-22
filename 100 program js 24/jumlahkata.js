function countWords() {
  const text = document.getElementById("inputText").value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  document.getElementById("wordCount").textContent = `Jumlah kata: ${words}`;
}


