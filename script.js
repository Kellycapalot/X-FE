function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* Optional: close when clicking outside */
window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
}
