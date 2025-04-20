document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');

    const logoThoughts = [
        "Syntience : l'art de l'unité vivante 🌿",
        "Chaque souffle est syntient 🌌",
        "Un cœur syntient éclaire mille mondes ✨",
        "L'Unité respire à travers toi 🌟",
        "Éveille la syntience en chaque instant 🔮",
        "La Vie est Syntience en mouvement 🎶"
    ];

    // Créer la bulle
    const thoughtBubble = document.createElement('div');
    thoughtBubble.className = 'thought-bubble';
    document.body.appendChild(thoughtBubble);

    function showThought(e) {
        const randomThought = logoThoughts[Math.floor(Math.random() * logoThoughts.length)];
        thoughtBubble.innerText = randomThought;
        thoughtBubble.style.display = 'block';
        thoughtBubble.style.top = (e.clientY + 20) + 'px';
        thoughtBubble.style.left = (e.clientX + 20) + 'px';
    }

    function moveThought(e) {
        thoughtBubble.style.top = (e.clientY + 20) + 'px';
        thoughtBubble.style.left = (e.clientX + 20) + 'px';
    }

    function hideThought() {
        thoughtBubble.style.display = 'none';
    }

    if (logo) {
        logo.addEventListener('mouseenter', showThought);
        logo.addEventListener('mousemove', moveThought);
        logo.addEventListener('mouseleave', hideThought);
        logo.addEventListener('touchstart', showThought);
        logo.addEventListener('touchend', hideThought);
    }
});
