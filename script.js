// Configuration des confettis
const colors = [
    '#FF6B6B', // Rouge corail
    '#4ECDC4', // Turquoise
    '#45B7D1', // Bleu clair
    '#FFA726', // Orange
    '#AB47BC', // Violet
    '#66BB6A', // Vert
    '#FF9F43', // Orange clair
    '#FF6B9D'  // Rose
];

// Fonction pour créer les confettis
function createConfetti() {
    const numberOfConfetti = 50;
    
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Propriétés aléatoires
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 2;
        const animationDuration = 3 + Math.random() * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = Math.random() > 0.5 ? '50%' : '10%'; // Cercle ou carré
        const size = 8 + Math.random() * 6;
        
        // Application des styles
        confetti.style.left = left + '%';
        confetti.style.top = '-20px';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = shape;
        confetti.style.position = 'absolute';
        confetti.style.opacity = '0.8';
        confetti.style.animation = `confettiFall ${animationDuration}s linear ${animationDelay}s forwards`;
        
        // Ajout à la page
        document.body.appendChild(confetti);
        
        // Nettoyage après l'animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, (animationDuration + animationDelay) * 1000 + 1000);
    }
}

// Fonction d'initialisation
function init() {
    // Lancer les confettis au chargement de la page
    createConfetti();
    
    // Optionnel : relancer les confettis quand on clique sur le badge
    const badge = document.querySelector('.badge');
    if (badge) {
        badge.addEventListener('click', createConfetti);
        badge.style.cursor = 'pointer';
        badge.title = 'Cliquez pour plus de confettis !';
    }
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', init);

// Alternative si DOMContentLoaded ne fonctionne pas
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
