// Shuffle the overlay once per page load; CSS keeps the marks non-interactive.
document.querySelectorAll('.scratch-experiment .print-mark').forEach((mark) => {
  // Keep light ink within the central artwork area so it remains visible.
  const light = mark.classList.contains('light-ink');
  const left = light ? 20 + Math.random() * 60 : 3 + Math.random() * 92;
  const top = light ? 18 + Math.random() * 60 : 4 + Math.random() * 88;
  mark.style.left = `${left.toFixed(1)}%`;
  mark.style.top = `${top.toFixed(1)}%`;
});
