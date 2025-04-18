document.addEventListener("DOMContentLoaded", () => {
    const thoughtOfTheDay = syntientThoughts[new Date().getDate() % syntientThoughts.length];
    const dailyThoughtSection = document.getElementById('daily-thought');
    if (dailyThoughtSection) {
        dailyThoughtSection.innerHTML = `
            <h2>Pensée du Jour ✨</h2>
            <p style="margin-top:1rem; font-size:1.1rem;">${thoughtOfTheDay}</p>
        `;
    }
});
