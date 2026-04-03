// Smooth scrolling when clicking nav links
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Slide-in animation when scrolling
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // add class when visible
    }
  });
}, { threshold: 0.2 }); // triggers when 20% visible

sections.forEach(section => {
  observer.observe(section);
});

const headers = document.querySelectorAll('.section-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const section = header.parentElement;

    // Toggle active class
    section.classList.toggle('active');
  });
});

