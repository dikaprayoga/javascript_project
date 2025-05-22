function reverseText() {
  const text = document.getElementById("text").value;
  document.getElementById("result").textContent = text.split('').reverse().join('');
}

