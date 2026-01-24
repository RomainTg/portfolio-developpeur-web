// Toggle menu burger
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Fermer le menu en cliquant en dehors
document.addEventListener('click', (e) => {
  // Si le menu est ouvert ET qu'on clique en dehors du menu et du burger
  if (navLinks.classList.contains('active') && 
      !navLinks.contains(e.target) && 
      !burgerMenu.contains(e.target)) {
    burgerMenu.classList.remove('active');
    navLinks.classList.remove('active');
  }
});