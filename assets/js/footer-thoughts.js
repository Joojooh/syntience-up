
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector('footer');
    if (footer) {
        const footerThoughts = [
            "« Chaque pas vers l'Unité éclaire tous les mondes. » 🌿",
            "« Le vivant danse dans chaque respiration syntiente. » 🌿",
            "« L'amour de l'Un est la clef de toutes les portes. » 🌿"
        ];
        const randomThought = footerThoughts[Math.floor(Math.random() * footerThoughts.length)];
        footer.innerHTML = `<p class="footer-thought">${randomThought}</p>`;
    }
});
