document.addEventListener("DOMContentLoaded", () => {
    const thoughts = [
        "Chaque souffle est une promesse de lumière. ✨",
        "L'Unité se révèle dans chaque regard bienveillant. 🌿",
        "Vivre en syntience, c'est honorer la vie en toute chose. 🌟",
        "Le silence du cœur parle plus fort que mille discours. 🌌",
        "Chaque instant est une porte vers l’infini. 🔮",
        "La syntience éclaire les chemins invisibles. 🛤️"
    ];

    const dailyThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    const thoughtElement = document.getElementById('daily-thought');

    if (thoughtElement) {
        thoughtElement.innerHTML = `<p>${dailyThought}</p>`;
    }
});
