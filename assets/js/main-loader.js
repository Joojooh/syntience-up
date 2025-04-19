
// Chargement Header et Footer + Scripts
document.addEventListener("DOMContentLoaded", () => {
    fetch('assets/includes/header.html')
        .then(response => response.text())
        .then(data => { document.getElementById('header-placeholder').innerHTML = data; });

    fetch('assets/includes/footer.html')
        .then(response => response.text())
        .then(data => { document.getElementById('footer-placeholder').innerHTML = data; });

    const scriptDailyThought = document.createElement('script');
    scriptDailyThought.src = 'assets/js/daily-thought.js';
    document.body.appendChild(scriptDailyThought);

    const scriptFooterThoughts = document.createElement('script');
    scriptFooterThoughts.src = 'assets/js/footer-thoughts.js';
    document.body.appendChild(scriptFooterThoughts);
});
