// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Formulaire
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Merci ! Votre message a bien été envoyé.");
  e.target.reset();
});
