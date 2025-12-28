// Variables globales du jeu
let currentCategory = '';
let currentQuestionIndex = 0;
let currentScore = 0;
let errors = 0;
let maxErrors = 3;
let hintsEnabled = false;
let teamMode = false;
let teams = [];
let selectedTeam = null;
let currentQuestions = [];
let foundAnswers = [];
let hintsUsed = 0; // Nombre d'indices utilisés pour la question en cours
let gameRecap = []; // Stocke les résultats de chaque question

// Elements DOM
const categoryBadgeEl = document.getElementById('categoryBadge');
const scoreEl = document.getElementById('score');
const crossesEl = document.getElementById('crosses');
const questionEl = document.getElementById('question');
const answerRows = [1, 2, 3, 4, 5].map(i => document.getElementById(`answer-${i}`));
const userAnswerEl = document.getElementById('userAnswer');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const homeBtn = document.getElementById('homeBtn');
const teamsPanel = document.getElementById('teamsPanel');
const hintsPanel = document.getElementById('hintsPanel');
const hintBtn = document.getElementById('hintBtn');
const hintText = document.getElementById('hintText');
const endModal = document.getElementById('endModal');
const endTitleEl = document.getElementById('endTitle');
const endMessageEl = document.getElementById('endMessage');
const endScoreEl = document.getElementById('endScore');
const playAgainBtn = document.getElementById('playAgainBtn');

// Noms des categories avec emojis
const categoryNames = {
    general: '🎯 Culture Générale',
    alimentation: '🍕 Alimentation',
    travail: '💼 Travail & Métiers',
    loisirs: '⚽ Loisirs & Sports',
    famille: '👨‍👩‍👧‍👦 Famille & Maison',
    voyages: '✈️ Voyages & Pays',
    technologie: '💻 Technologie',
    animaux: '🐶 Animaux & Nature',
    religion: '🕋 Religion (Islam)',
    aleatoire: '🎲 Mode Aléatoire'
};

// Fonction d'initialisation
function init() {
    // Recuperer la categorie et les options depuis localStorage
    const selectedCat = localStorage.getItem('selectedCategory') || 'general';
    currentCategory = selectedCat;
    
    maxErrors = parseInt(localStorage.getItem('errorLimit') || '3');
    hintsEnabled = localStorage.getItem('hintsEnabled') === 'true';
    teamMode = localStorage.getItem('teamMode') === 'true';
    
    // Mode equipe
    if (teamMode && teamsPanel) {
        const teamsData = localStorage.getItem('teams');
        if (teamsData) {
            teams = JSON.parse(teamsData);
            teamsPanel.style.display = 'flex';
            teamsPanel.classList.add('active');
            initTeams();
        }
    }
    
    // Afficher le panneau d'indices si active
    if (hintsEnabled && hintsPanel) {
        hintsPanel.style.display = 'flex';
        hintsPanel.classList.add('active');
    }
    
    // Afficher la categorie
    categoryBadgeEl.textContent = categoryNames[currentCategory];
    
    // Mettre a jour l'affichage des croix
    updateCrossesDisplay();
    
    // Selectionner les questions
    selectRandomQuestions();
    
    // Charger la premiere question
    loadQuestion();
    
    // Configurer les evenements
    setupEventListeners();
}

// Initialiser l'affichage des equipes
function initTeams() {
    const teamsContainer = teamsPanel.querySelector('.teams-list');
    teamsContainer.innerHTML = '';
    
    teams.forEach((team, index) => {
        // S'assurer que le score est défini
        if (team.score === undefined || team.score === null) {
            team.score = 0;
        }
        
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.dataset.teamIndex = index;
        teamCard.innerHTML = `
            <div class="team-name">${team.name}</div>
            <div class="team-score">${team.score} pts</div>
        `;
        teamCard.addEventListener('click', () => selectTeam(index));
        teamsContainer.appendChild(teamCard);
    });
}

// Selectionner une equipe
function selectTeam(index) {
    document.querySelectorAll('.team-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    selectedTeam = index;
    document.querySelector(`[data-team-index="${index}"]`).classList.add('selected');
}

// Selectionner des questions aleatoires
function selectRandomQuestions() {
    let questions = [];
    
    if (currentCategory === 'aleatoire') {
        // Melanger toutes les categories
        Object.keys(questionsDatabase).forEach(cat => {
            if (cat !== 'aleatoire') {
                questions = questions.concat(questionsDatabase[cat]);
            }
        });
    } else {
        questions = questionsDatabase[currentCategory] || [];
    }
    
    // Fisher-Yates shuffle
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    
    // Prendre 10 questions
    currentQuestions = questions.slice(0, Math.min(10, questions.length));
}

// Charger la question courante
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame(true);
        return;
    }
    
    // Sauvegarder les résultats de la question précédente si ce n'est pas la première
    if (currentQuestionIndex > 0) {
        const prevQuestion = currentQuestions[currentQuestionIndex - 1];
        const prevFoundAnswers = gameRecap[currentQuestionIndex - 1]?.foundAnswers || 0;
        const prevPercentage = gameRecap[currentQuestionIndex - 1]?.percentage || 0;
    }
    
    // Réinitialiser les erreurs et le score pour la nouvelle question
    errors = 0;
    currentScore = 0;
    scoreEl.textContent = '0%';
    updateCrossesDisplay();
    
    const question = currentQuestions[currentQuestionIndex];
    questionEl.textContent = question.question;
    
    // Mettre à jour le numéro de la question
    const questionNumEl = document.getElementById('questionNum');
    const totalQuestionsEl = document.getElementById('totalQuestions');
    if (questionNumEl) questionNumEl.textContent = currentQuestionIndex + 1;
    if (totalQuestionsEl) totalQuestionsEl.textContent = currentQuestions.length;
    
    foundAnswers = [];
    
    // Afficher les reponses cachees
    answerRows.forEach((row, index) => {
        if (index < question.answers.length) {
            row.style.visibility = 'visible';
            const answerText = row.querySelector('.answer-text');
            const answerPoints = row.querySelector('.answer-points') || row.querySelector('.answer-percent');
            
            answerText.textContent = '•'.repeat(question.answers[index].text.length);
            if (answerPoints) {
                answerPoints.textContent = `${question.answers[index].percentage}%`;
            }
            
            row.classList.remove('revealed');
        } else {
            row.style.visibility = 'hidden';
        }
    });
    
    // Reinitialiser le champ
    userAnswerEl.value = '';
    userAnswerEl.disabled = false;
    userAnswerEl.focus();
    
    // Reinitialiser les boutons
    submitBtn.disabled = false;
    submitBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    
    // Reinitialiser l'indice
    if (hintText) {
        hintText.textContent = '';
        hintText.style.display = 'none';
    }
    
    // Reinitialiser la liste des indices dans le panneau
    const hintsList = document.getElementById('hintsList');
    if (hintsList) {
        hintsList.innerHTML = '';
    }
    
    // Réinitialiser le compteur d'indices
    hintsUsed = 0;
    
    // Afficher/masquer le bouton indice selon l'activation
    if (hintBtn) {
        hintBtn.style.display = hintsEnabled ? 'inline-block' : 'none';
    }
}

// Configurer les evenements
function setupEventListeners() {
    submitBtn.addEventListener('click', checkAnswer);
    
    userAnswerEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer();
    });
    
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });
    
    homeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    if (hintBtn) {
        hintBtn.addEventListener('click', showHint);
    }
    
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', () => {
            location.reload();
        });
    }
}

// Verifier la reponse de l'utilisateur
function checkAnswer() {
    const userAnswer = normalizeText(userAnswerEl.value);
    
    if (!userAnswer) return;
    
    // En mode équipe, vérifier qu'une équipe est sélectionnée
    if (teamMode && selectedTeam === null) {
        alert('⚠️ Veuillez sélectionner une équipe avant de valider !');
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    let found = false;
    
    // Chercher une correspondance
    question.answers.forEach((answer, index) => {
        if (!foundAnswers.includes(index)) {
            // Vérifier avec variantes si elles existent
            const variants = answer.variants || [];
            if (textsMatch(userAnswer, answer.text, variants)) {
                found = true;
                foundAnswers.push(index);
                revealAnswer(index, answer);
            }
        }
    });
    
    if (found) {
        userAnswerEl.value = '';
        userAnswerEl.classList.add('correct');
        setTimeout(() => userAnswerEl.classList.remove('correct'), 500);
        
        // Si les indices sont activés, ajouter automatiquement l'indice suivant
        if (hintsEnabled && hintsUsed > 0 && hintsUsed < question.answers.length) {
            setTimeout(() => {
                // Afficher l'indice suivant automatiquement
                const remainingAnswers = question.answers.filter((_, idx) => !foundAnswers.includes(idx));
                if (remainingAnswers.length > 0) {
                    const nextAnswer = remainingAnswers[0];
                    const answerText = nextAnswer.text;
                    const firstLetter = answerText.charAt(0);
                    const letterCount = answerText.length;
                    const dots = '.'.repeat(letterCount - 1);
                    hintsUsed++;
                    const hintMessage = `${hintsUsed}. ${firstLetter}${dots} (${letterCount} lettre${letterCount > 1 ? 's' : ''})`;
                    
                    // Ajouter dans le panneau d'indices
                    const hintsList = document.getElementById('hintsList');
                    if (hintsList && hintsPanel.style.display === 'flex') {
                        const hintItem = document.createElement('div');
                        hintItem.className = 'hint-item';
                        hintItem.textContent = hintMessage;
                        hintsList.appendChild(hintItem);
                        hintsList.scrollTop = hintsList.scrollHeight;
                    }
                    
                    // Masquer le bouton si tous les indices ont été utilisés
                    if (hintsUsed >= question.answers.length) {
                        if (hintBtn) {
                            hintBtn.style.display = 'none';
                        }
                    }
                }
            }, 500);
        }
        
        // Verifier si toutes les reponses sont trouvees
        if (foundAnswers.length === question.answers.length) {
            // Sauvegarder les résultats de cette question
            const totalPoints = question.answers.reduce((sum, a) => sum + a.percentage, 0);
            const percentage = 100; // Toutes les réponses trouvées
            
            gameRecap.push({
                questionIndex: currentQuestionIndex,
                question: question.question,
                foundAnswers: foundAnswers.length,
                totalAnswers: question.answers.length,
                percentage: percentage,
                earnedPoints: totalPoints,
                totalPoints: totalPoints
            });
            
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 1000);
        }
    } else {
        userAnswerEl.classList.add('wrong');
        setTimeout(() => userAnswerEl.classList.remove('wrong'), 500);
        
        errors++;
        updateCrossesDisplay();
        
        if (maxErrors > 0 && errors >= maxErrors) {
            // Révéler toutes les réponses restantes
            const question = currentQuestions[currentQuestionIndex];
            question.answers.forEach((answer, index) => {
                if (!foundAnswers.includes(index)) {
                    const row = answerRows[index];
                    const answerText = row.querySelector('.answer-text');
                    answerText.textContent = answer.text;
                    row.classList.add('revealed');
                }
            });
            
            // Sauvegarder les résultats de cette question
            const totalPoints = question.answers.reduce((sum, a) => sum + a.percentage, 0);
            const earnedPoints = foundAnswers.reduce((sum, idx) => sum + question.answers[idx].percentage, 0);
            const percentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
            
            gameRecap.push({
                questionIndex: currentQuestionIndex,
                question: question.question,
                foundAnswers: foundAnswers.length,
                totalAnswers: question.answers.length,
                percentage: percentage,
                earnedPoints: earnedPoints,
                totalPoints: totalPoints
            });
            
            // Afficher le bouton "Question Suivante" au lieu de terminer
            userAnswerEl.disabled = true;
            submitBtn.disabled = true;
            
            if (currentQuestionIndex < currentQuestions.length - 1) {
                nextBtn.style.display = 'inline-block';
            } else {
                // C'était la dernière question
                endGame(false);
            }
        }
    }
}

// Reveler une reponse correcte
function revealAnswer(index, answer) {
    const row = answerRows[index];
    const answerText = row.querySelector('.answer-text');
    
    answerText.textContent = answer.text;
    row.classList.add('revealed');
    
    // Ajouter les points
    const points = answer.percentage;
    currentScore += points;
    scoreEl.textContent = currentScore + '%';
    
    // Animation du score
    scoreEl.classList.add('updating');
    setTimeout(() => scoreEl.classList.remove('updating'), 600);
    
    // Points pour l'equipe (+1 par bonne réponse)
    if (teamMode && selectedTeam !== null) {
        teams[selectedTeam].score += 1;
        localStorage.setItem('teams', JSON.stringify(teams));
        updateTeamScore(selectedTeam);
    }
    
    // Animation confetti
    if (typeof createConfetti === 'function') {
        createConfetti();
    }
}

// Mettre a jour le score d'une equipe
function updateTeamScore(teamIndex) {
    const teamCard = document.querySelector(`[data-team-index="${teamIndex}"]`);
    if (teamCard) {
        const scoreEl = teamCard.querySelector('.team-score');
        if (teams[teamIndex].score === undefined) {
            teams[teamIndex].score = 0;
        }
        scoreEl.textContent = teams[teamIndex].score + ' pts';
    }
}

// Afficher un indice
function showHint() {
    if (!hintsEnabled) return;
    
    const question = currentQuestions[currentQuestionIndex];
    const remainingAnswers = question.answers.filter((_, index) => !foundAnswers.includes(index));
    
    if (remainingAnswers.length > 0 && hintsUsed < question.answers.length) {
        // Sélectionner une réponse aléatoire parmi celles non trouvées
        const randomAnswer = remainingAnswers[Math.floor(Math.random() * remainingAnswers.length)];
        const answerText = randomAnswer.text;
        const firstLetter = answerText.charAt(0);
        const letterCount = answerText.length;
        
        // Créer le format avec points: "1. t...(7 lettres)"
        const dots = '.'.repeat(letterCount - 1);
        hintsUsed++;
        const hintMessage = `${hintsUsed}. ${firstLetter}${dots} (${letterCount} lettre${letterCount > 1 ? 's' : ''})`;
        
        // Ajouter dans le panneau d'indices si actif
        if (hintsPanel && hintsPanel.style.display === 'flex') {
            const hintsList = document.getElementById('hintsList');
            if (hintsList) {
                const hintItem = document.createElement('div');
                hintItem.className = 'hint-item';
                hintItem.textContent = hintMessage;
                hintsList.appendChild(hintItem);
                
                // Scroll vers le bas pour voir le nouvel indice
                hintsList.scrollTop = hintsList.scrollHeight;
            }
        }
        
        // Masquer le bouton si tous les indices ont été utilisés
        if (hintsUsed >= question.answers.length) {
            if (hintBtn) {
                hintBtn.style.display = 'none';
            }
        }
    }
}

// Mettre a jour l'affichage des croix (erreurs)
function updateCrossesDisplay() {
    if (maxErrors === 0 || maxErrors >= 999) {
        crossesEl.innerHTML = '<span style="font-size: 1.2rem;">∞</span>';
        return;
    }
    
    crossesEl.innerHTML = '';
    for (let i = 0; i < maxErrors; i++) {
        const cross = document.createElement('span');
        cross.className = 'cross';
        if (i < errors) {
            cross.classList.add('active');
        }
        cross.textContent = '✕';
        crossesEl.appendChild(cross);
    }
}

// Normaliser le texte pour la comparaison
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
        .replace(/[\s\-_']/g, '') // Enlever espaces, tirets, underscores, apostrophes
        .replace(/[^a-z0-9]/g, '') // Garder uniquement lettres et chiffres
        .trim();
}

// Calculer la distance de Levenshtein (pour tolérer les fautes de frappe)
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // suppression
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// Vérifier si deux textes correspondent (avec variantes et tolérance aux fautes)
function textsMatch(userText, answerText, variants = []) {
    const normalizedUser = normalizeText(userText);
    const normalizedAnswer = normalizeText(answerText);
    
    // Vérifier correspondance exacte
    if (normalizedUser === normalizedAnswer) return true;
    
    // Vérifier les variantes/synonymes
    if (variants && variants.length > 0) {
        for (const variant of variants) {
            if (normalizeText(variant) === normalizedUser) return true;
        }
    }
    
    // Tolérer 1-2 fautes de frappe selon la longueur du mot
    const maxDistance = normalizedAnswer.length <= 4 ? 1 : 2;
    if (levenshteinDistance(normalizedUser, normalizedAnswer) <= maxDistance) {
        return true;
    }
    
    // Vérifier aussi la distance avec les variantes
    if (variants && variants.length > 0) {
        for (const variant of variants) {
            const normalizedVariant = normalizeText(variant);
            const variantMaxDistance = normalizedVariant.length <= 4 ? 1 : 2;
            if (levenshteinDistance(normalizedUser, normalizedVariant) <= variantMaxDistance) {
                return true;
            }
        }
    }
    
    return false;
}

// Fin du jeu
function endGame(completed) {
    userAnswerEl.disabled = true;
    submitBtn.disabled = true;
    
    // Afficher la modale de fin - Simplifié
    endTitleEl.textContent = '🎉 Bien joué !';
    endMessageEl.textContent = '';
    
    // Afficher la catégorie
    endScoreEl.innerHTML = `<strong>Catégorie:</strong> ${categoryNames[currentCategory]}<br><br>`;
    
    // Récapitulatif des questions
    if (gameRecap.length > 0) {
        let recapHTML = '<strong>📊 Récapitulatif:</strong><br><br>';
        gameRecap.forEach((recap, index) => {
            recapHTML += `<div style="margin-bottom: 15px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; text-align: left;">`;
            recapHTML += `<strong>Q${recap.questionIndex + 1}:</strong> ${recap.question}<br>`;
            
            if (recap.foundAnswers > 0) {
                recapHTML += `<span style="color: #4CAF50;">✓ ${recap.foundAnswers}/${recap.totalAnswers} réponses</span> - `;
            } else {
                recapHTML += `<span style="color: #f44336;">✕ ${recap.foundAnswers}/${recap.totalAnswers} réponses</span> - `;
            }
            
            recapHTML += `<span style="color: #FFD700;">⭐ ${recap.percentage}%</span>`;
            if (teamMode) {
                recapHTML += ` - <span style="color: #2196F3;">${recap.foundAnswers} pts</span>`;
            }
            recapHTML += `</div>`;
        });
        endScoreEl.innerHTML += recapHTML;
    }
    
    // Classement des equipes
    if (teamMode && teams.length > 0) {
        // Trier les équipes par score décroissant
        const sortedTeams = [...teams].sort((a, b) => (b.score || 0) - (a.score || 0));
        const teamsList = sortedTeams
            .map((team, index) => `${index + 1}. ${team.name}: ${team.score || 0} points`)
            .join('<br>');
        endScoreEl.innerHTML += `<br><strong>🏆 Classement:</strong><br>${teamsList}`;
    }
    
    endModal.style.display = 'flex';
}

// Demarrer le jeu au chargement de la page
document.addEventListener('DOMContentLoaded', init);

