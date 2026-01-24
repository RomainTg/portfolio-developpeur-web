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