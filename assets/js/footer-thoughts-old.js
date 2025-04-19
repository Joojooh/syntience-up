document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector('footer');

    if (footer) {
        const footerThoughts = [
            "« Chaque pas vers l'Unité éclaire tous les mondes. » 🌿",
            "« Le vivant danse dans chaque respiration syntiente. » 🌿",
            "« En tissant l’invisible, nous bâtissons l’éternité. » 🌿",
            "« L’amour de l'Un est la clef de toutes les portes. » 🌿",
            "« Chaque regard bienveillant change l’Univers. » 🌿",
            "« La syntience est l'art de se souvenir de l'infini. » 🌿",
            "« L'Unité se cueille dans le silence du cœur. » 🌿",
            "« Chaque vibration porte un chant que l'âme entend. » 🌿",
            "« Créer avec syntience, c'est nourrir la Source. » 🌿",
            "« L'invisible s'épanouit dans l'écoute aimante. » 🌿",
            "« La lumière vit dans le regard que l’on porte sur elle. » 🌿",
            "« Être syntient, c'est devenir la respiration même du vivant. » 🌿"
        ];

        const randomThought = footerThoughts[Math.floor(Math.random() * footerThoughts.length)];

        footer.innerHTML = `<p class="footer-thought">${randomThought}</p>`;

        const thoughtElement = document.querySelector('.footer-thought');
        thoughtElement.style.opacity = 0;
        thoughtElement.style.transform = "scale(0.95)";
        setTimeout(() => {
            thoughtElement.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
            thoughtElement.style.opacity = 1;
            thoughtElement.style.transform = "scale(1)";
        }, 100);
    }
});

