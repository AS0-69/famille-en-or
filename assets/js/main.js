/* ================================================================================================
   LA FAMILLE EN OR - SCRIPT PRINCIPAL
   ================================================================================================ */

// Détecter quelle page on est
const isGamePage = document.getElementById('gameContainer') !== null || document.getElementById('userAnswer') !== null;
const isHomePage = document.querySelector('.category-card') !== null;

// ================================================================================================
// Charger le bon code selon la page
// ================================================================================================

if (isHomePage) {
    // CODE PAGE D'ACCUEIL
    document.addEventListener('DOMContentLoaded', () => {
        const categoryCards = document.querySelectorAll('.category-card');
        const errorLimitSelect = document.getElementById('errorLimit');
        const hintsCheckbox = document.getElementById('hintsEnabled');
        const teamModeCheckbox = document.getElementById('teamMode');
        const teamConfig = document.getElementById('teamConfig');
        const addTeamBtn = document.getElementById('addTeamBtn');
        const extraTeams = document.getElementById('extraTeams');
        let teamCount = 2;
        
        // Vérifier que les éléments existent
        if (!teamModeCheckbox || !teamConfig) return;
        
        // Afficher/masquer la config des équipes
        teamModeCheckbox.addEventListener('change', () => {
            teamConfig.style.display = teamModeCheckbox.checked ? 'block' : 'none';
        });
        
        // Ajouter une équipe
        if (addTeamBtn) {
            addTeamBtn.addEventListener('click', () => {
                if (teamCount >= 6) {
                    alert('Maximum 6 équipes !');
                    return;
                }
                teamCount++;
                const teamInput = document.createElement('div');
                teamInput.className = 'team-input-group';
                teamInput.innerHTML = `
                    <label>Équipe ${teamCount} :</label>
                    <input type="text" id="team${teamCount}Name" placeholder="Nom de l'équipe ${teamCount}" value="Équipe ${teamCount}">
                    <button class="remove-team-btn" onclick="this.parentElement.remove()">❌</button>
                `;
                extraTeams.appendChild(teamInput);
            });
        }
        
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                
                // Récupérer les noms des équipes si mode équipe activé
                const teams = [];
                if (teamModeCheckbox && teamModeCheckbox.checked) {
                    for (let i = 1; i <= teamCount; i++) {
                        const teamInput = document.getElementById(`team${i}Name`);
                        if (teamInput && teamInput.value.trim()) {
                            teams.push({
                                name: teamInput.value.trim(),
                                points: 0
                            });
                        }
                    }
                }
                
                // Sauvegarder toutes les options
                localStorage.setItem('selectedCategory', category);
                localStorage.setItem('errorLimit', errorLimitSelect ? errorLimitSelect.value : '3');
                localStorage.setItem('hintsEnabled', hintsCheckbox ? hintsCheckbox.checked : 'false');
                localStorage.setItem('teamMode', teamModeCheckbox ? teamModeCheckbox.checked : 'false');
                localStorage.setItem('teams', JSON.stringify(teams));
                
                // Rediriger vers la page de jeu
                window.location.href = 'game.html';
            });

            // Effet visuel au survol
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.category-icon');
                if (icon) icon.style.transform = 'scale(1.2) rotate(10deg)';
            });

            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.category-icon');
                if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    });
}
