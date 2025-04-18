document.addEventListener("DOMContentLoaded", () => {
    const logoLink = document.querySelector('.logo-link');
    const hoverMessage = document.querySelector('.hover-message');

    if (logoLink && hoverMessage) {
        logoLink.addEventListener('mouseenter', () => {
            const randomThought = logoThoughts[Math.floor(Math.random() * logoThoughts.length)];
            hoverMessage.textContent = randomThought;
        });
    }
});
