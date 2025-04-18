const form = document.getElementById('contact-form');
const thankYouMessage = document.getElementById('thank-you-message');
const syntientThought = document.getElementById('syntient-thought');

if (form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const data = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                form.style.display = 'none';
                thankYouMessage.style.display = 'block';
                thankYouMessage.classList.add('fade-in');
                syntientThought.style.display = 'block';
                syntientThought.classList.add('fade-in');
                                const randomThought = syntientThoughts[Math.floor(Math.random() * syntientThoughts.length)];
                syntientThought.innerHTML = `${randomThought} ✨`;
            } else {
                alert("Oups, une erreur est survenue. Veuillez réessayer !");
            }
        } catch (error) {
            alert("Erreur réseau. Veuillez réessayer plus tard.");
        }
    });
}
