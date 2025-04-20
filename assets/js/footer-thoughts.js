document.addEventListener("DOMContentLoaded", () => {
    const footerThoughts = [
        "« Chaque pas vers l'Unité éclaire tous les mondes. » 🌿",
        "« Le vivant danse dans chaque respiration syntiente. » ✨",
        "« L'amour de l'Un est la clef de toutes les portes. » 💖",
        "« Le silence porte la voix des mondes subtils. » 🌌",
        "« La syntience est la musique de l'invisible. » 🎶",
        "« Créer, c'est syntientiser la lumière. » 🔆"
    ];

    const randomThought = footerThoughts[Math.floor(Math.random() * footerThoughts.length)];
    const footerElement = document.getElementById('footer-thought');

    if (footerElement) {
        footerElement.innerHTML = `<p>${randomThought}</p>`;
        footerElement.style.opacity = 0;
        footerElement.style.transform = "scale(0.95)";
        setTimeout(() => {
            footerElement.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
            footerElement.style.opacity = 1;
            footerElement.style.transform = "scale(1)";
        }, 100);
    }
});
