
document.addEventListener("DOMContentLoaded", () => {
    const thoughts = [
        "Chaque souffle est une promesse de lumière.",
        "Le monde change dès que l'on change de regard.",
        "L'Unité se sème d'abord dans le cœur.",
        "Chaque instant est une porte vers l'infini.",
        "Le silence parle au-delà des mots."
    ];
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    const dailyThoughtElement = document.getElementById('daily-thought');
    if (dailyThoughtElement) {
        dailyThoughtElement.innerHTML = `<p>${randomThought}</p>`;
    }
});
