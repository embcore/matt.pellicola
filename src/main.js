const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Controlla se l'utente ha già una preferenza salvata
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "light";
}

// Cambia tema al click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Salva la preferenza dell'utente
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "light";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "dark";
  }
});
