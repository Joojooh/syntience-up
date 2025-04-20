// scroll.js

// Crée un observateur pour détecter quand les éléments entrent dans la vue
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  // Cible tous les éléments h2, p, ul, table pour leur appliquer l'observation
  document.querySelectorAll('h2, p, ul, table').forEach(el => {
    observer.observe(el);
  });
  