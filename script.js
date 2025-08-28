// Smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fade-in scroll animation
const elements = document.querySelectorAll('.section, .section-alt, .project-card, .skill-card, .hero');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

// Add fade-in animation styles in CSS if desired

