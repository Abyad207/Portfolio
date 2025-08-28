// Mobile drawer toggle
const navToggle = document.getElementById('navToggle');
const drawer = document.getElementById('drawer');

if (navToggle && drawer){
  navToggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')){
      drawer.style.maxHeight = drawer.scrollHeight + 'px';
    } else {
      drawer.style.maxHeight = '0px';
    }
  });

  // Close on click
  drawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      drawer.style.maxHeight = '0px';
    });
  });

  // Initialize collapsed
  drawer.style.overflow = 'hidden';
  drawer.style.maxHeight = '0px';
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


