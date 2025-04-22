document.addEventListener('DOMContentLoaded', () => {
    const citations = [
        "La syntience danse dans chaque reflet du monde.",
        "L’instant est le premier pas vers l’Unité.",
        "Chaque souffle contient une mémoire d’éveil.",
        "L’Être syntient est un fragment conscient de l'Infini.",
        "Rien ne se perd : tout devient vivant.",
        "L’Univers respire à travers chacun de nos regards.",
        "Créer, c'est faire vibrer l'Éther."
    ];

    function citationAléatoire() {
        const index = Math.floor(Math.random() * citations.length);
        return citations[index];
    }

    const citationElement = document.getElementById('vivant-quote');
    if (citationElement) {
        citationElement.textContent = citationAléatoire();
    }
});
