document.addEventListener("DOMContentLoaded", () => {
    const dailyThoughtSection = document.getElementById('daily-thought');

    function updateThought(highlight = false) {
        const now = new Date();
        const index = now.getDate() % syntientThoughts.length;
        const thoughtOfTheDay = syntientThoughts[index];

        if (dailyThoughtSection) {
            dailyThoughtSection.innerHTML = `
                <h2 class="fade-in-title">Pensée du Jour ✨</h2>
                <p class="fade-in-thought ${highlight ? 'new-thought-highlight' : ''}" style="margin-top:1rem; font-size:1.1rem;">
                    ${thoughtOfTheDay}
                </p>
            `;
        }
    }

    updateThought(); // Initialisation immédiate

    const now = new Date();
    const msUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;

    setTimeout(() => {
        updateThought(true); // Highlight à minuit
        setInterval(() => updateThought(true), 24 * 60 * 60 * 1000); // Highlight toutes les 24h ensuite
    }, msUntilMidnight);
});
