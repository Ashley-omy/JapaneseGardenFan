// changeFontSize.js
document.getElementById('fontSizeSelector').addEventListener('change', function() {
  const selectedFontSize = this.value; 
  document.body.style.fontSize = selectedFontSize; 
});
