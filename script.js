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

// Animation des jauges au scroll
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px'
};

const animateSkills = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillItems = entry.target.querySelectorAll('.skill-item');
      
      skillItems.forEach((item, index) => {
        const fill = item.querySelector('.skill-fill');
        const percentage = fill.getAttribute('data-percentage');
        const percentageText = item.querySelector('.skill-percentage');
        
        // Animation avec délai progressif
        setTimeout(() => {
          fill.style.width = percentage + '%';
          
          // Animation du compteur
          animateCounter(percentageText, 0, percentage, 1500);
        }, index * 200); // Délai de 200ms entre chaque jauge
      });
      
      // On observe qu'une seule fois
      observer.unobserve(entry.target);
    }
  });
};

// Animation du compteur de pourcentage
function animateCounter(element, start, end, duration) {
  let startTime = null;
  
  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    
    element.textContent = current + '%';
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  
  requestAnimationFrame(step);
}

// Observer la section soft skills
const skillsSection = document.querySelector('.softSkills');
const observer = new IntersectionObserver(animateSkills, observerOptions);

if (skillsSection) {
  observer.observe(skillsSection);
}