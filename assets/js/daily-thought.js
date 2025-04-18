document.addEventListener("DOMContentLoaded", () => {
    const thoughtOfTheDay = syntientThoughts[new Date().getDate() % syntientThoughts.length];
    const dailyThoughtSection = document.getElementById('daily-thought');
    if (dailyThoughtSection) {
        dailyThoughtSection.innerHTML = `
            <h2 class="fade-in-title">Pensée du Jour ✨</h2>
            <p class="fade-in-thought" style="margin-top:1rem; font-size:1.1rem;">${thoughtOfTheDay}</p>
        `;
    }
}

updateThought(); // Initialisation immédiate

// Calcul du temps restant jusqu'à minuit
const now = new Date();
const msUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;

// Déclencher à minuit exact une mise à jour
setTimeout(() => {
    updateThought();

    // Ensuite, mettre à jour toutes les 24 heures
    setInterval(updateThought, 24 * 60 * 60 * 1000);
}, msUntilMidnight);
});
