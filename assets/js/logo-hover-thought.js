document.addEventListener("DOMContentLoaded", () => {
    let lastThoughtIndex = -1;

    document.addEventListener('mouseenter', (event) => {
        const logoLink = document.querySelector('.logo-link');
        const hoverMessage = document.querySelector('.hover-message');

        if (logoLink && hoverMessage && logoLink.contains(event.target)) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * logoThoughts.length);
            } while (randomIndex === lastThoughtIndex);

            lastThoughtIndex = randomIndex;
            hoverMessage.textContent = logoThoughts[randomIndex];
        }
    }, true);
});
