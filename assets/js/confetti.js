
// BibliothÃ¨que de confettis amÃ©liorÃ©e
function createConfetti() {
    const colors = ['#f093fb', '#f5576c', '#667eea', '#764ba2', '#ffd700', '#4ade80', '#22c55e', '#ff6b6b', '#4ecdc4', '#ffe66d'];
    const confettiCount = 150;
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Taille alÃ©atoire
        const size = Math.random() > 0.5 ? 'confetti-large' : (Math.random() > 0.5 ? 'confetti-small' : '');
        if (size) confetti.classList.add(size);
        
        // Position alÃ©atoire sur toute la largeur
        confetti.style.left = Math.random() * 100 + '%';
        
        // Couleur alÃ©atoire
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // DÃ©lai et durÃ©e alÃ©atoires
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Forme alÃ©atoire
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            confetti.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }
        
        document.body.appendChild(confetti);
        
        // Retirer immÃ©diatement aprÃ¨s l'animation
        setTimeout(() => {
            confetti.remove();
        }, parseFloat(confetti.style.animationDuration) * 1000 + parseFloat(confetti.style.animationDelay) * 1000);
    }
}

// Explosion de confettis depuis le centre
function createConfettiExplosion() {
    const colors = ['#f093fb', '#f5576c', '#667eea', '#764ba2', '#ffd700', '#4ade80', '#22c55e', '#ff6b6b', '#4ecdc4', '#ffe66d'];
    const confettiCount = 80;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Position centrale exacte
        confetti.style.position = 'fixed';
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.transform = 'translate(-50%, -50%)';
        
        // Couleur alÃ©atoire
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Forme alÃ©atoire
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        // Taille alÃ©atoire
        const size = Math.random() * 15 + 8;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Animation d'explosion avec disparition progressive
        const angle = (Math.PI * 2 * i) / confettiCount;
        const velocity = Math.random() * 300 + 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        const animation = confetti.animate([
            { 
                transform: 'translate(-50%, -50%) translate(0, 0) rotate(0deg)', 
                opacity: 1 
            },
            { 
                transform: `translate(-50%, -50%) translate(${tx}px, ${ty}px) rotate(${Math.random() * 720}deg)`, 
                opacity: 0 
            }
        ], {
            duration: Math.random() * 1000 + 1500,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            fill: 'forwards'
        });
        
        document.body.appendChild(confetti);
        
        // Retirer aprÃ¨s l'animation
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}


// Logique du jeu avec catÃ©gories et questions alÃ©atoires
// Variables retirées pour éviter les conflits avec game.js
// Ces variables sont maintenant définies uniquement dans game.js

