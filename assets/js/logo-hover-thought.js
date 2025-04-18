document.addEventListener("DOMContentLoaded", () => {
    const logoLink = document.querySelector('.logo-link');
    const hoverMessage = document.querySelector('.hover-message');

    if (logoLink && hoverMessage) {
        logoLink.addEventListener('mouseenter', () => {
            const categories = Object.values(logoThoughts).flat();
            const randomThought = categories[Math.floor(Math.random() * categories.length)];
            hoverMessage.textContent = randomThought;
        });
    }
});
