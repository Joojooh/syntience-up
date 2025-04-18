document.addEventListener("DOMContentLoaded", () => {
    const logoLink = document.querySelector('.logo-link');
    const hoverMessage = document.querySelector('.hover-message');

    if (logoLink && hoverMessage) {
        logoLink.addEventListener('mouseenter', () => {
            const randomThought = logoTThoughts[Math.floor(Math.random() * logoThoughts.length)];
            hoverMessage.innerHTML = randomThought;
        });
    }
});
