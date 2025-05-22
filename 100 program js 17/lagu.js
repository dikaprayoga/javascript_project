function toggleLyrics() {
  const lyrics = document.getElementById('lyrics');
  if (lyrics.style.display === 'none' || lyrics.style.display === '') {
    lyrics.style.display = 'block';
  } else {
    lyrics.style.display = 'none';
  }
}

