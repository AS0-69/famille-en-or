// Définir questionsDatabase comme variable globale
window.questionsDatabase = {
    general: [
        {
            question: "Citez un métier dangereux",
            answers: [
                { text: "Pompier", percentage: 38, variants: ["Sapeur pompier", "Sapeur"] },
                { text: "Policier", percentage: 27, variants: ["Police", "Gendarme", "Flic", "Agent de police"] },
                { text: "Militaire", percentage: 18, variants: ["Soldat", "Armée"] },
                { text: "Cascadeur", percentage: 10, variants: ["Stuntman"] },
                { text: "Mineur", percentage: 7, variants: ["Ouvrier minier"] }
            ]
        },
        {
            question: "Citez quelque chose qu'on trouve à la plage",
            answers: [
                { text: "Sable", percentage: 42 },
                { text: "Eau", percentage: 28, variants: ["Mer", "Océan"] },
                { text: "Parasol", percentage: 15, variants: ["Ombrelle"] },
                { text: "Serviette", percentage: 10, variants: ["Drap de bain"] },
                { text: "Crème solaire", percentage: 5, variants: ["Creme", "Protection solaire", "Ecran solaire"] }
            ]
        },
        {
            question: "Citez une raison d'être en retard",
            answers: [
                { text: "Embouteillage", percentage: 45, variants: ["Bouchon", "Traffic", "Circulation"] },
                { text: "Réveil cassé", percentage: 23, variants: ["Reveil", "Pas entendu réveil", "Dormi"] },
                { text: "Transport en retard", percentage: 17, variants: ["Bus en retard", "Train en retard", "Metro en retard", "Retard bus", "Retard train"] },
                { text: "Oublié l'heure", percentage: 10, variants: ["Perte notion temps", "Pas vu l'heure"] },
                { text: "Maladie", percentage: 5, variants: ["Malade", "Souffrant"] }
            ]
        },
        {
            question: "Citez quelque chose qu'on perd souvent",
            answers: [
                { text: "Clés", percentage: 40, variants: ["Clef", "Clefs", "Cle"] },
                { text: "Téléphone", percentage: 28, variants: ["Telephone", "Tel", "Portable", "Mobile", "Smartphone", "Iphone", "Samsung"] },
                { text: "Lunettes", percentage: 15, variants: ["Lunette"] },
                { text: "Portefeuille", percentage: 12, variants: ["Porte feuille", "Porte monnaie"] },
                { text: "Chaussettes", percentage: 5, variants: ["Chaussette"] }
            ]
        },
        {
            question: "Citez un endroit où il y a toujours la queue",
            answers: [
                { text: "Supermarché", percentage: 35, variants: ["Supermarche", "Magasin", "Courses", "Centre commercial"] },
                { text: "Poste", percentage: 25, variants: ["Bureau de poste", "La poste"] },
                { text: "Banque", percentage: 20 },
                { text: "Cinéma", percentage: 12, variants: ["Cinema", "Film"] },
                { text: "Aéroport", percentage: 8, variants: ["Aeroport"] }
            ]
        },
        {
            question: "Citez quelque chose qu'on fait le matin",
            answers: [
                { text: "Se laver", percentage: 38, variants: ["Se doucher", "Douche", "Toilette"] },
                { text: "Prendre le petit-déjeuner", percentage: 30, variants: ["Petit dejeuner", "Dejeuner", "Manger", "Breakfast"] },
                { text: "S'habiller", percentage: 18, variants: ["Se vetir", "Mettre des vetements"] },
                { text: "Se brosser les dents", percentage: 10, variants: ["Brosser dents", "Dents", "Se laver les dents"] },
                { text: "Faire son lit", percentage: 4, variants: ["Lit"] }
            ]
        },
        {
            question: "Citez un objet qu'on trouve dans un sac à main",
            answers: [
                { text: "Portefeuille", percentage: 35, variants: ["Porte feuille", "Porte monnaie"] },
                { text: "Téléphone", percentage: 30, variants: ["Telephone", "Tel", "Portable", "Mobile", "Smartphone"] },
                { text: "Clés", percentage: 20, variants: ["Clef", "Clefs", "Cle"] },
                { text: "Rouge à lèvres", percentage: 10, variants: ["Rouge levres", "Rossetti", "Lipstick", "Maquillage"] },
                { text: "Mouchoirs", percentage: 5, variants: ["Mouchoir", "Kleenex"] }
            ]
        },
        {
            question: "Citez une excuse pour ne pas aller travailler",
            answers: [
                { text: "Maladie", percentage: 50, variants: ["Malade", "Grippe", "Fievre", "Souffrant"] },
                { text: "Problème de voiture", percentage: 20, variants: ["Panne", "Voiture en panne", "Accident voiture"] },
                { text: "Problème familial", percentage: 15, variants: ["Famille", "Urgence familiale", "Deces"] },
                { text: "Météo", percentage: 10, variants: ["Meteo", "Neige", "Tempête", "Intemperies"] },
                { text: "Coupure d'électricité", percentage: 5, variants: ["Electricite", "Panne electrique", "Plus d'electricite"] }
            ]
        },
        {
            question: "Citez quelque chose de rouge",
            answers: [
                { text: "Tomate", percentage: 32 },
                { text: "Sang", percentage: 28 },
                { text: "Rose", percentage: 20, variants: ["Fleur"] },
                { text: "Voiture", percentage: 12, variants: ["Auto", "Bagnole"] },
                { text: "Pomme", percentage: 8 }
            ]
        },
        {
            question: "Citez un cadeau de Noël classique",
            answers: [
                { text: "Jouet", percentage: 35, variants: ["Jouets", "Jeu"] },
                { text: "Livre", percentage: 25, variants: ["Livres", "Bouquin"] },
                { text: "Parfum", percentage: 20 },
                { text: "Vêtement", percentage: 15, variants: ["Vetement", "Vetements", "Habits", "Pull", "Chandail"] },
                { text: "Chocolat", percentage: 5, variants: ["Chocolats", "Bonbons", "Sucreries"] }
            ]
        },
        {
            question: "Citez quelque chose qu'on fait sous la douche",
            answers: [
                { text: "Se laver", percentage: 45, variants: ["Se doucher", "Savonner", "Frotter", "Nettoyer"] },
                { text: "Chanter", percentage: 25, variants: ["Chanson", "Musique"] },
                { text: "Se raser", percentage: 15, variants: ["Rasage"] },
                { text: "Réfléchir", percentage: 10, variants: ["Penser", "Méditer", "Pleurer"] },
                { text: "Shampoing", percentage: 5, variants: ["Laver cheveux", "Cheveux", "Se laver la tête"] }
            ]
        },
        {
            question: "Citez un jour férié populaire",
            answers: [
                { text: "Noël", percentage: 40, variants: ["25 décembre", "Reveillon"] },
                { text: "Jour de l'an", percentage: 25, variants: ["Nouvel an", "1er janvier", "Premier de l'an"] },
                { text: "14 juillet", percentage: 18, variants: ["Fête nationale", "Bastille day", "Feu d'artifice"] },
                { text: "1er mai", percentage: 12, variants: ["Fête du travail", "Muguet"] },
                { text: "Pâques", percentage: 5, variants: ["Lundi de pâques"] }
            ]
        },
        {
            question: "Citez quelque chose de lourd à porter",
            answers: [
                { text: "Valise", percentage: 35, variants: ["Bagage", "Sac de voyage"] },
                { text: "Meuble", percentage: 30, variants: ["Canapé", "Armoire", "Lit", "Table", "Piano"] },
                { text: "Courses", percentage: 20, variants: ["Sac de courses", "Sacs"] },
                { text: "Carton", percentage: 10, variants: ["Boite", "Colis", "Déménagement"] },
                { text: "Pierre", percentage: 5, variants: ["Rocher", "Caillou", "Parpaing"] }
            ]
        },
        {
            question: "Citez un vêtement d'hiver",
            answers: [
                { text: "Manteau", percentage: 40, variants: ["Veste", "Blouson", "Parka", "Doudoune", "Anorak"] },
                { text: "Écharpe", percentage: 25, variants: ["Foulard", "Cache-col", "Cache nez"] },
                { text: "Bonnet", percentage: 18, variants: ["Chapka"] },
                { text: "Gants", percentage: 12, variants: ["Moufles"] },
                { text: "Pull", percentage: 5, variants: ["Chandail", "Sweat", "Tricot", "Gilet"] }
            ]
        },
        {
            question: "Citez quelque chose qui fait du bruit la nuit",
            answers: [
                { text: "Voisins", percentage: 35, variants: ["Fête", "Gens", "Musique voisins"] },
                { text: "Chat", percentage: 25, variants: ["Matou", "Miaou", "Bagarre chat"] },
                { text: "Voiture", percentage: 20, variants: ["Circulation", "Moto", "Klaxon", "Trafic", "Camion"] },
                { text: "Horloge", percentage: 12, variants: ["Réveil", "Tic tac", "Pendule"] },
                { text: "Vent", percentage: 8, variants: ["Tempête", "Orage", "Pluie"] }
            ]
        }
    ],
    
    alimentation: [
        {
            question: "Citez un fruit rouge",
            answers: [
                { text: "Fraise", percentage: 45 },
                { text: "Cerise", percentage: 25 },
                { text: "Framboise", percentage: 15 },
                { text: "Pomme", percentage: 10, variants: ["Pomme rouge"] },
                { text: "Tomate", percentage: 5 }
            ]
        },
        {
            question: "Citez un plat italien",
            answers: [
                { text: "Pizza", percentage: 50, variants: ["Margherita", "Calzone"] },
                { text: "Pâtes", percentage: 30, variants: ["Spaghetti", "Macaroni", "Penne", "Tagliatelle", "Pasta"] },
                { text: "Lasagne", percentage: 12, variants: ["Lasagnes"] },
                { text: "Risotto", percentage: 5, variants: ["Riz"] },
                { text: "Tiramisu", percentage: 3, variants: ["Dessert"] }
            ]
        },
        {
            question: "Citez un ingrédient d'une salade",
            answers: [
                { text: "Salade verte", percentage: 38, variants: ["Laitue", "Mâche", "Roquette", "Batavia", "Feuilles"] },
                { text: "Tomate", percentage: 30, variants: ["Tomates cerises"] },
                { text: "Concombre", percentage: 18 },
                { text: "Carotte", percentage: 10, variants: ["Carottes râpées"] },
                { text: "Oignon", percentage: 4, variants: ["Oignon rouge", "Echalote"] }
            ]
        },
        {
            question: "Citez un dessert français",
            answers: [
                { text: "Crêpe", percentage: 32, variants: ["Crêpes"] },
                { text: "Éclair", percentage: 28, variants: ["Éclair au chocolat", "Éclair au café"] },
                { text: "Tarte", percentage: 20, variants: ["Tarte aux pommes", "Tarte au citron", "Tarte tatin"] },
                { text: "Macaron", percentage: 15 },
                { text: "Mousse au chocolat", percentage: 5, variants: ["Mousse"] }
            ]
        },
        {
            question: "Citez un fromage français",
            answers: [
                { text: "Camembert", percentage: 35, variants: ["Caldos"] },
                { text: "Roquefort", percentage: 25, variants: ["Bleu", "Fromage bleu"] },
                { text: "Brie", percentage: 20 },
                { text: "Comté", percentage: 15 },
                { text: "Chèvre", percentage: 5, variants: ["Bûche de chèvre", "Crottin", "Sainte-Maure"] }
            ]
        },
        {
            question: "Citez une boisson chaude",
            answers: [
                { text: "Café", percentage: 45, variants: ["Expresso", "Kawa", "Petit noir", "Allongé"] },
                { text: "Thé", percentage: 35, variants: ["Thé vert", "Thé noir", "Earl Grey"] },
                { text: "Chocolat chaud", percentage: 12, variants: ["Cacao", "Nesquik", "Benco", "Chocolat"] },
                { text: "Tisane", percentage: 5, variants: ["Infusion", "Verveine", "Camomille"] },
                { text: "Lait chaud", percentage: 3, variants: ["Lait"] }
            ]
        },
        {
            question: "Citez un fast-food célèbre",
            answers: [
                { text: "McDonald's", percentage: 50, variants: ["McDo", "Macdo", "Macdonald", "Ronald"] },
                { text: "KFC", percentage: 22, variants: ["Kentucky", "Poulet frit"] },
                { text: "Burger King", percentage: 15, variants: ["BK", "Burger king"] },
                { text: "Quick", percentage: 8 },
                { text: "Subway", percentage: 5 }
            ]
        },
        {
            question: "Citez un légume vert",
            answers: [
                { text: "Haricot vert", percentage: 32, variants: ["Haricots"] },
                { text: "Salade", percentage: 28, variants: ["Laitue", "Mâche"] },
                { text: "Courgette", percentage: 20 },
                { text: "Brocoli", percentage: 15, variants: ["Chou"] },
                { text: "Concombre", percentage: 5 }
            ]
        },
        {
            question: "Citez une épice ou herbe aromatique",
            answers: [
                { text: "Sel", percentage: 35 },
                { text: "Poivre", percentage: 30, variants: ["Poivre noir"] },
                { text: "Thym", percentage: 18 },
                { text: "Persil", percentage: 12 },
                { text: "Basilic", percentage: 5, variants: ["Pesto"] }
            ]
        },
        {
            question: "Citez un petit-déjeuner typique",
            answers: [
                { text: "Croissant", percentage: 35, variants: ["Viennoiserie", "Pain au chocolat"] },
                { text: "Pain et confiture", percentage: 30, variants: ["Tartine", "Beurre", "Toast", "Pain beurre"] },
                { text: "Céréales", percentage: 20, variants: ["Corn flakes", "Muesli", "Bol de céréales"] },
                { text: "Œufs", percentage: 10, variants: ["Brouillés", "Au plat", "Omelette", "Coque"] },
                { text: "Yaourt", percentage: 5, variants: ["Laitage", "Fromage blanc"] }
            ]
        },
        {
            question: "Citez une viande blanche",
            answers: [
                { text: "Poulet", percentage: 50, variants: ["Volaille", "Colet"] },
                { text: "Dinde", percentage: 25, variants: ["Volaille"] },
                { text: "Porc", percentage: 15, variants: ["Cochon", "Jambon", "Rôti de porc"] },
                { text: "Veau", percentage: 7, variants: ["Escalope de veau"] },
                { text: "Lapin", percentage: 3 }
            ]
        },
        {
            question: "Citez un agrume",
            answers: [
                { text: "Orange", percentage: 40, variants: ["Jus d'orange"] },
                { text: "Citron", percentage: 30, variants: ["Citron jaune"] },
                { text: "Pamplemousse", percentage: 15, variants: ["Pomelo"] },
                { text: "Mandarine", percentage: 10, variants: ["Clémentine", "Tangerine"] },
                { text: "Citron vert", percentage: 5, variants: ["Lime"] }
            ]
        }
    ],

    travail: [
        {
            question: "Citez un métier médical",
            answers: [
                { text: "Médecin", percentage: 45, variants: ["Docteur", "Toubib", "Généraliste", "Praticien"] },
                { text: "Infirmier", percentage: 30, variants: ["Infirmière"] },
                { text: "Dentiste", percentage: 15, variants: ["Chirurgien dentiste"] },
                { text: "Pharmacien", percentage: 7, variants: ["Pharmacie"] },
                { text: "Kinésithérapeute", percentage: 3, variants: ["Kiné", "Ostéopathe"] }
            ]
        },
        {
            question: "Citez un outil de bricolage",
            answers: [
                { text: "Marteau", percentage: 40, variants: ["Massette"] },
                { text: "Tournevis", percentage: 28, variants: ["Cruciforme", "Plat"] },
                { text: "Perceuse", percentage: 18, variants: ["Visseuse", "Chignole"] },
                { text: "Scie", percentage: 10, variants: ["Scie sauteuse", "Scie circulaire", "Scie à métaux"] },
                { text: "Clé", percentage: 4, variants: ["Clé à molette", "Clé plate", "Clé allen"] }
            ]
        },
        {
            question: "Citez un métier créatif",
            answers: [
                { text: "Artiste peintre", percentage: 32, variants: ["Peintre", "Artiste"] },
                { text: "Designer", percentage: 28, variants: ["Graphiste", "Styliste", "Webdesigner"] },
                { text: "Photographe", percentage: 20, variants: ["Photo"] },
                { text: "Architecte", percentage: 15, variants: ["Archi"] },
                { text: "Musicien", percentage: 5, variants: ["Chanteur", "Compositeur"] }
            ]
        },
        {
            question: "Citez une raison de démissionner",
            answers: [
                { text: "Mauvaise ambiance", percentage: 35, variants: ["Collègues", "Ambiance", "Stress", "Harcèlement", "Burnout"] },
                { text: "Salaire insuffisant", percentage: 30, variants: ["Argent", "Augmentation", "Paie", "Rémunération", "Pas assez payé"] },
                { text: "Meilleure opportunité", percentage: 20, variants: ["Nouveau job", "Ailleurs", "Offre", "Autre travail"] },
                { text: "Trop loin", percentage: 10, variants: ["Transport", "Trajet", "Distance", "Route"] },
                { text: "Patron difficile", percentage: 5, variants: ["Chef", "Manager", "Direction", "Boss"] }
            ]
        },
        {
            question: "Citez un métier de la télévision",
            answers: [
                { text: "Présentateur", percentage: 35, variants: ["Animateur", "Host", "Présentatrice"] },
                { text: "Journaliste", percentage: 28, variants: ["Reporter", "JRI", "Chroniqueur"] },
                { text: "Acteur", percentage: 20, variants: ["Comédien", "Star"] },
                { text: "Cameraman", percentage: 12, variants: ["Cadreur"] },
                { text: "Réalisateur", percentage: 5, variants: ["Metteur en scène", "Prod"] }
            ]
        },
        {
            question: "Citez une qualité professionnelle",
            answers: [
                { text: "Ponctualité", percentage: 30, variants: ["A l'heure", "Ponctuel"] },
                { text: "Sérieux", percentage: 25, variants: ["Rigueur", "Rigoureux", "Appliqué"] },
                { text: "Motivation", percentage: 22, variants: ["Dynamisme", "Envie", "Volonté", "Ambitieux"] },
                { text: "Compétence", percentage: 18, variants: ["Expertise", "Savoir-faire", "Talent", "Intelligent"] },
                { text: "Sociabilité", percentage: 5, variants: ["Relationnel", "Sympa", "Esprit d'équipe", "Social"] }
            ]
        },
        {
            question: "Citez un métier manuel",
            answers: [
                { text: "Plombier", percentage: 32, variants: ["Tuyauterie"] },
                { text: "Électricien", percentage: 28, variants: ["Elec"] },
                { text: "Menuisier", percentage: 20, variants: ["Bois", "Charpentier", "Ebéniste"] },
                { text: "Maçon", percentage: 15, variants: ["Bâtiment", "Brique"] },
                { text: "Peintre", percentage: 5, variants: ["Peinture", "Peintre en bâtiment"] }
            ]
        },
        {
            question: "Citez un lieu de travail",
            answers: [
                { text: "Bureau", percentage: 40, variants: ["Open space", "Cabinet", "Agence"] },
                { text: "Usine", percentage: 25, variants: ["Entreprise", "Atelier", "Fabrique", "Chantier"] },
                { text: "Magasin", percentage: 18, variants: ["Boutique", "Commerce", "Supermarché"] },
                { text: "Hôpital", percentage: 12, variants: ["Clinique", "Cabinet médical"] },
                { text: "École", percentage: 5, variants: ["Lycée", "Collège", "Fac", "Université", "Classe"] }
            ]
        },
        {
            question: "Citez un métier de l'enfance",
            answers: [
                { text: "Maître/Maîtresse", percentage: 40, variants: ["Professeur", "Prof", "Enseignant", "Instit", "Instituteur"] },
                { text: "Nounou", percentage: 25, variants: ["Assistante maternelle", "Baby-sitter", "Garde d'enfant"] },
                { text: "Pédiatre", percentage: 18, variants: ["Docteur"] },
                { text: "Animateur", percentage: 12, variants: ["Centre aéré", "Colo", "Moniteur"] },
                { text: "Puéricultrice", percentage: 5, variants: ["Crèche", "Auxiliaire"] }
            ]
        },
        {
            question: "Citez un avantage du télétravail",
            answers: [
                { text: "Pas de trajet", percentage: 40, variants: ["Pas de transport", "Gain de temps", "Pas de bouchons", "Pas de voiture"] },
                { text: "Flexibilité", percentage: 28, variants: ["Horaires", "Organisation", "Liberté"] },
                { text: "Confort", percentage: 18, variants: ["Maison", "Pyjama", "Canapé", "Chez soi"] },
                { text: "Économies", percentage: 10, variants: ["Essence", "Repas", "Argent"] },
                { text: "Temps libre", percentage: 4, variants: ["Famille", "Repos", "Dormir plus"] }
            ]
        }
    ],

    loisirs: [
        {
            question: "Citez un sport d'équipe",
            answers: [
                { text: "Football", percentage: 50, variants: ["Foot", "Soccer"] },
                { text: "Basketball", percentage: 22, variants: ["Basket"] },
                { text: "Volleyball", percentage: 15, variants: ["Volley"] },
                { text: "Rugby", percentage: 8, variants: ["XV"] },
                { text: "Handball", percentage: 5, variants: ["Hand"] }
            ]
        },
        {
            question: "Citez un instrument de musique",
            answers: [
                { text: "Piano", percentage: 35, variants: ["Synthétiseur", "Clavier", "Orgue"] },
                { text: "Guitare", percentage: 30, variants: ["Électrique", "Sèche", "Basse", "Gratte"] },
                { text: "Batterie", percentage: 18, variants: ["Percussion", "Tam tam"] },
                { text: "Violon", percentage: 12, variants: ["Violoncelle"] },
                { text: "Flûte", percentage: 5, variants: ["Flûte à bec", "Flûte traversière"] }
            ]
        },
        {
            question: "Citez un jeu de cartes",
            answers: [
                { text: "Poker", percentage: 35, variants: ["Texas Holdem"] },
                { text: "Belote", percentage: 28, variants: ["Coinche", "Contrée"] },
                { text: "Tarot", percentage: 20 },
                { text: "Uno", percentage: 12 },
                { text: "Bridge", percentage: 5, variants: ["Rami", "Bataille"] }
            ]
        },
        {
            question: "Citez un sport olympique d'été",
            answers: [
                { text: "Natation", percentage: 32, variants: ["Nager", "Piscine"] },
                { text: "Athlétisme", percentage: 28, variants: ["Course", "Saut", "Marathon", "Sprint"] },
                { text: "Gymnastique", percentage: 20, variants: ["Gym"] },
                { text: "Tennis", percentage: 15 },
                { text: "Cyclisme", percentage: 5, variants: ["Vélo", "VTT", "Piste"] }
            ]
        },
        {
            question: "Citez une activité de plein air",
            answers: [
                { text: "Randonnée", percentage: 35, variants: ["Marche", "Balade", "Promenade", "Trekking"] },
                { text: "Pique-nique", percentage: 25, variants: ["Manger dehors", "Déjeuner sur l'herbe"] },
                { text: "Vélo", percentage: 20, variants: ["Cyclisme", "VTT", "Balade à vélo"] },
                { text: "Camping", percentage: 15, variants: ["Tente", "Bivouac"] },
                { text: "Pêche", percentage: 5, variants: ["Pêcher"] }
            ]
        },
        {
            question: "Citez un type de film",
            answers: [
                { text: "Comédie", percentage: 35, variants: ["Drôle", "Rire", "Humour"] },
                { text: "Action", percentage: 28, variants: ["Bagarre", "Aventure", "Guerre"] },
                { text: "Drame", percentage: 18, variants: ["Triste", "Emotion", "Romantique"] },
                { text: "Horreur", percentage: 12, variants: ["Peur", "Epouvante", "Thriller"] },
                { text: "Science-fiction", percentage: 7, variants: ["SF", "Sci-fi", "Espace", "Fantastique"] }
            ]
        },
        {
            question: "Citez un jeu de société",
            answers: [
                { text: "Monopoly", percentage: 40 },
                { text: "Scrabble", percentage: 25, variants: ["Mots croisés"] },
                { text: "Trivial Pursuit", percentage: 18, variants: ["Culture G", "Quizz", "Question"] },
                { text: "Échecs", percentage: 12 },
                { text: "Dames", percentage: 5 }
            ]
        },
        {
            question: "Citez un sport de combat",
            answers: [
                { text: "Boxe", percentage: 40, variants: ["Boxe anglaise", "Kick boxing", "Ring"] },
                { text: "Judo", percentage: 28, variants: ["Tatami", "Kimono"] },
                { text: "Karaté", percentage: 18, variants: ["Arts martiaux"] },
                { text: "Taekwondo", percentage: 10 },
                { text: "Lutte", percentage: 4, variants: ["Catch"] }
            ]
        },
        {
            question: "Citez une console de jeux vidéo",
            answers: [
                { text: "PlayStation", percentage: 38, variants: ["PS5", "PS4", "Sony", "PS3", "PS2"] },
                { text: "Xbox", percentage: 28, variants: ["Microsoft", "Series X", "One"] },
                { text: "Nintendo Switch", percentage: 20, variants: ["Switch", "Nintendo"] },
                { text: "PC", percentage: 10, variants: ["Ordinateur", "Steam"] },
                { text: "Wii", percentage: 4, variants: ["Nintendo"] }
            ]
        },
        {
            question: "Citez un sport nautique",
            answers: [
                { text: "Natation", percentage: 35, variants: ["Piscine", "Mer", "Nage"] },
                { text: "Surf", percentage: 28, variants: ["Planche"] },
                { text: "Plongée", percentage: 18, variants: ["Sous-marin", "Snorkeling", "Masque tuba"] },
                { text: "Voile", percentage: 14, variants: ["Bateau", "Catamaran", "Optimist"] },
                { text: "Ski nautique", percentage: 5, variants: ["Wakeboard"] }
            ]
        },
        {
            question: "Citez un genre musical",
            answers: [
                { text: "Pop", percentage: 32, variants: ["Variété"] },
                { text: "Rock", percentage: 28, variants: ["Metal", "Hard rock", "Punk"] },
                { text: "Rap", percentage: 20, variants: ["Hip hop", "Urbain", "RnB"] },
                { text: "Jazz", percentage: 15, variants: ["Blues", "Soul"] },
                { text: "Classique", percentage: 5, variants: ["Opéra", "Symphonie"] }
            ]
        },
        {
            question: "Citez une activité en salle de sport",
            answers: [
                { text: "Musculation", percentage: 35, variants: ["Muscu", "Poids", "Haltères", "Fonte", "Machines"] },
                { text: "Course sur tapis", percentage: 28, variants: ["Cardio", "Courir", "Tapis"] },
                { text: "Yoga", percentage: 18, variants: ["Pilates", "Stretching"] },
                { text: "Zumba", percentage: 14, variants: ["Danse", "Fitness"] },
                { text: "Spinning", percentage: 5, variants: ["Vélo", "RPM", "Biking"] }
            ]
        }
    ],

    famille: [
        {
            question: "Citez un membre de la famille",
            answers: [
                { text: "Mère", percentage: 35, variants: ["Maman", "Daronne"] },
                { text: "Père", percentage: 30, variants: ["Papa", "Daron"] },
                { text: "Frère", percentage: 18, variants: ["Frangin"] },
                { text: "Sœur", percentage: 12, variants: ["Frangine"] },
                { text: "Grand-parent", percentage: 5, variants: ["Papy", "Mamie", "Grand-mère", "Grand-père"] }
            ]
        },
        {
            question: "Citez une pièce de la maison",
            answers: [
                { text: "Salon", percentage: 35, variants: ["Séjour", "Salle à manger", "Living"] },
                { text: "Chambre", percentage: 30, variants: ["Suite parentale", "Chambre à coucher"] },
                { text: "Cuisine", percentage: 20, variants: ["Kitchenette"] },
                { text: "Salle de bain", percentage: 10, variants: ["Douche", "SDB", "Salle d'eau"] },
                { text: "Toilettes", percentage: 5, variants: ["WC", "Petit coin", "Cabinet"] }
            ]
        },
        {
            question: "Citez un appareil électroménager",
            answers: [
                { text: "Lave-linge", percentage: 35, variants: ["Machine à laver", "Lave linge"] },
                { text: "Réfrigérateur", percentage: 30, variants: ["Frigo", "Congélateur", "Frigidaire"] },
                { text: "Four", percentage: 18, variants: ["Cuisinière", "Gazinière"] },
                { text: "Aspirateur", percentage: 12, variants: ["Robot aspirateur", "Dyson"] },
                { text: "Micro-ondes", percentage: 5, variants: ["Micro onde"] }
            ]
        },
        {
            question: "Citez une tâche ménagère",
            answers: [
                { text: "Faire la vaisselle", percentage: 35, variants: ["Laver assiettes", "Remplir lave vaisselle", "Vaisselle"] },
                { text: "Passer l'aspirateur", percentage: 28, variants: ["Aspirer", "Aspirateur"] },
                { text: "Faire le ménage", percentage: 20, variants: ["Nettoyer", "Ranger", "Laver le sol"] },
                { text: "Faire la lessive", percentage: 12, variants: ["Laver linge", "Machine", "Étendre linge"] },
                { text: "Repasser", percentage: 5, variants: ["Repassage", "Fer à repasser"] }
            ]
        },
        {
            question: "Citez un meuble du salon",
            answers: [
                { text: "Canapé", percentage: 40, variants: ["Sofa", "Divan", "Banquette", "Clic-clac"] },
                { text: "Table basse", percentage: 25, variants: ["Table"] },
                { text: "Télévision", percentage: 18, variants: ["TV", "Écran", "Poste", "Télé"] },
                { text: "Bibliothèque", percentage: 12, variants: ["Étagère", "Livres", "Meuble TV"] },
                { text: "Fauteuil", percentage: 5, variants: ["Siège", "Pouf"] }
            ]
        },
        {
            question: "Citez un animal de compagnie",
            answers: [
                { text: "Chien", percentage: 45, variants: ["Toutou", "Chiot"] },
                { text: "Chat", percentage: 40, variants: ["Chaton", "Minou"] },
                { text: "Poisson", percentage: 8, variants: ["Poisson rouge", "Aquarium"] },
                { text: "Hamster", percentage: 5, variants: ["Rongeur", "Cochon d'inde", "Lapin", "Souris"] },
                { text: "Oiseau", percentage: 2, variants: ["Perroquet", "Canari"] }
            ]
        },
        {
            question: "Citez une occasion de réunion de famille",
            answers: [
                { text: "Noël", percentage: 40, variants: ["Réveillon", "Fêtes", "25 décembre"] },
                { text: "Anniversaire", percentage: 28, variants: ["Fête"] },
                { text: "Mariage", percentage: 18, variants: ["Fiançailles"] },
                { text: "Baptême", percentage: 10, variants: ["Communion"] },
                { text: "Dimanche", percentage: 4, variants: ["Repas du dimanche", "Weekend", "Déjeuner"] }
            ]
        },
        {
            question: "Citez quelque chose dans une cuisine",
            answers: [
                { text: "Réfrigérateur", percentage: 32, variants: ["Frigo", "Congélo"] },
                { text: "Four", percentage: 28, variants: ["Micro-ondes", "Cuisinière", "Plaques"] },
                { text: "Évier", percentage: 20, variants: ["Lavabo", "Robinet", "Eau"] },
                { text: "Table", percentage: 15, variants: ["Plan de travail", "Ilot", "Chaise"] },
                { text: "Placard", percentage: 5, variants: ["Buffet", "Garde-manger", "Tiroir", "Vaisselle"] }
            ]
        },
        {
            question: "Citez un jouet d'enfant",
            answers: [
                { text: "Poupée", percentage: 32, variants: ["Barbie", "Action Man", "Figurine"] },
                { text: "Voiture", percentage: 28, variants: ["Petite voiture", "Camion", "Hot wheels"] },
                { text: "Lego", percentage: 20, variants: ["Briques", "Construction", "Playmobil"] },
                { text: "Ballon", percentage: 15, variants: ["Balle"] },
                { text: "Peluche", percentage: 5, variants: ["Doudou", "Ours en peluche", "Nounours"] }
            ]
        },
        {
            question: "Citez un produit de nettoyage",
            answers: [
                { text: "Javel", percentage: 35, variants: ["Eau de javel"] },
                { text: "Produit vaisselle", percentage: 28, variants: ["Liquide vaisselle", "Paic", "Savon"] },
                { text: "Éponge", percentage: 18, variants: ["Grattoir", "Chiffon"] },
                { text: "Lessive", percentage: 14, variants: ["Pods", "Poudre", "Adoucissant", "Soupline"] },
                { text: "Vinaigre blanc", percentage: 5, variants: ["Vinaigre", "Alcool ménager"] }
            ]
        }
    ],

    voyages: [
        {
            question: "Citez un pays européen",
            answers: [
                { text: "Espagne", percentage: 35 },
                { text: "Italie", percentage: 30 },
                { text: "Allemagne", percentage: 18 },
                { text: "Angleterre", percentage: 12, variants: ["Royaume-Uni", "Grande-Bretagne"] },
                { text: "Portugal", percentage: 5 }
            ]
        },
        {
            question: "Citez une capitale mondiale",
            answers: [
                { text: "Paris", percentage: 38, variants: ["France"] },
                { text: "Londres", percentage: 25, variants: ["London", "Angleterre"] },
                { text: "Rome", percentage: 18, variants: ["Italie"] },
                { text: "New York", percentage: 14, variants: ["NY", "USA"] },
                { text: "Tokyo", percentage: 5, variants: ["Japon"] }
            ]
        },
        {
            question: "Citez un moyen de transport",
            answers: [
                { text: "Voiture", percentage: 40, variants: ["Auto", "Bagnole", "Véhicule"] },
                { text: "Train", percentage: 25, variants: ["TGV", "TER", "Métro", "RER", "Chemin de fer"] },
                { text: "Avion", percentage: 20, variants: ["Vol", "Aéroport"] },
                { text: "Bus", percentage: 10, variants: ["Autocar", "Car"] },
                { text: "Vélo", percentage: 5, variants: ["Bicyclette", "VTT", "Cyclisme", "Moto"] }
            ]
        },
        {
            question: "Citez une langue étrangère",
            answers: [
                { text: "Anglais", percentage: 45, variants: ["English", "Américain"] },
                { text: "Espagnol", percentage: 25, variants: ["Castillan"] },
                { text: "Allemand", percentage: 15 },
                { text: "Italien", percentage: 10 },
                { text: "Chinois", percentage: 5, variants: ["Mandarin"] }
            ]
        },
        {
            question: "Citez un monument célèbre",
            answers: [
                { text: "Tour Eiffel", percentage: 40, variants: ["Paris", "La dame de fer"] },
                { text: "Statue de la Liberté", percentage: 25, variants: ["New York", "USA"] },
                { text: "Colisée", percentage: 18, variants: ["Rome"] },
                { text: "Big Ben", percentage: 12, variants: ["Londres", "Horloge"] },
                { text: "Pyramides", percentage: 5, variants: ["Egypte", "Gizeh", "Sphinx"] }
            ]
        },
        {
            question: "Citez une île paradisiaque",
            answers: [
                { text: "Maldives", percentage: 35 },
                { text: "Tahiti", percentage: 28, variants: ["Polynésie", "Bora Bora"] },
                { text: "Hawaï", percentage: 20, variants: ["Honolulu"] },
                { text: "Bali", percentage: 12, variants: ["Indonésie"] },
                { text: "Seychelles", percentage: 5 }
            ]
        },
        {
            question: "Citez ce qu'on emporte en vacances",
            answers: [
                { text: "Valise", percentage: 35, variants: ["Sac", "Bagage", "Affaires", "Vêtements"] },
                { text: "Maillot de bain", percentage: 25, variants: ["Maillot", "Bikini", "Short de bain"] },
                { text: "Crème solaire", percentage: 20, variants: ["Protection", "Solaire", "Spray", "Huile"] },
                { text: "Appareil photo", percentage: 15, variants: ["Camera", "GoPro", "Téléphone"] },
                { text: "Passeport", percentage: 5, variants: ["Carte d'identité", "Papiers", "Visa"] }
            ]
        },
        {
            question: "Citez un type de logement de vacances",
            answers: [
                { text: "Hôtel", percentage: 40, variants: ["Palace", "Chambre", "Club"] },
                { text: "Camping", percentage: 25, variants: ["Tente", "Mobil-home", "Bungalow", "Caravane"] },
                { text: "Location", percentage: 20, variants: ["Airbnb", "Appartement", "Maison", "Villa"] },
                { text: "Gîte", percentage: 10, variants: ["Chambres d'hôtes"] },
                { text: "Auberge", percentage: 5, variants: ["Auberge de jeunesse"] }
            ]
        },
        {
            question: "Citez un continent",
            answers: [
                { text: "Europe", percentage: 30 },
                { text: "Asie", percentage: 25 },
                { text: "Amérique", percentage: 22, variants: ["Amérique du nord", "Amérique du sud", "USA"] },
                { text: "Afrique", percentage: 18 },
                { text: "Océanie", percentage: 5, variants: ["Australie"] }
            ]
        },
        {
            question: "Citez une activité touristique",
            answers: [
                { text: "Visite de musée", percentage: 32, variants: ["Culture", "Expo", "Monument", "Visite"] },
                { text: "Plage", percentage: 28, variants: ["Bronzette", "Baignade", "Mer", "Sable"] },
                { text: "Randonnée", percentage: 20, variants: ["Marche", "Balade", "Montagne"] },
                { text: "Shopping", percentage: 15, variants: ["Magasins", "Souvenirs", "Boutiques", "Achats"] },
                { text: "Restaurant", percentage: 5, variants: ["Manger", "Gastronomie", "Bar", "Sortir"] }
            ]
        }
    ],

    technologie: [
        {
            question: "Citez une marque de téléphone",
            answers: [
                { text: "Apple", percentage: 40, variants: ["iPhone"] },
                { text: "Samsung", percentage: 30, variants: ["Galaxy", "Android"] },
                { text: "Huawei", percentage: 15 },
                { text: "Xiaomi", percentage: 10, variants: ["Redmi", "Mi"] },
                { text: "Nokia", percentage: 5, variants: ["3310"] }
            ]
        },
        {
            question: "Citez un réseau social",
            answers: [
                { text: "Facebook", percentage: 35, variants: ["FB", "Meta"] },
                { text: "Instagram", percentage: 28, variants: ["Insta"] },
                { text: "Twitter", percentage: 18, variants: ["X"] },
                { text: "TikTok", percentage: 14 },
                { text: "LinkedIn", percentage: 5, variants: ["Pro"] }
            ]
        },
        {
            question: "Citez un navigateur internet",
            answers: [
                { text: "Google Chrome", percentage: 45, variants: ["Chrome", "Google"] },
                { text: "Firefox", percentage: 25, variants: ["Mozilla"] },
                { text: "Safari", percentage: 15, variants: ["Apple"] },
                { text: "Edge", percentage: 10, variants: ["Internet Explorer", "Microsoft"] },
                { text: "Opera", percentage: 5 }
            ]
        },
        {
            question: "Citez une application de messagerie",
            answers: [
                { text: "WhatsApp", percentage: 40, variants: ["Whats"] },
                { text: "Messenger", percentage: 28, variants: ["Facebook Messenger"] },
                { text: "Telegram", percentage: 18 },
                { text: "Snapchat", percentage: 10, variants: ["Snap"] },
                { text: "Signal", percentage: 4 }
            ]
        },
        {
            question: "Citez un moteur de recherche",
            answers: [
                { text: "Google", percentage: 70 },
                { text: "Bing", percentage: 15, variants: ["Microsoft"] },
                { text: "Yahoo", percentage: 8 },
                { text: "DuckDuckGo", percentage: 5 },
                { text: "Ecosia", percentage: 2 }
            ]
        },
        {
            question: "Citez une marque d'ordinateur",
            answers: [
                { text: "Apple", percentage: 35, variants: ["Mac", "Macbook"] },
                { text: "HP", percentage: 28, variants: ["Hewlett Packard"] },
                { text: "Dell", percentage: 18 },
                { text: "Asus", percentage: 14 },
                { text: "Lenovo", percentage: 5 }
            ]
        },
        {
            question: "Citez un système d'exploitation",
            answers: [
                { text: "Windows", percentage: 50, variants: ["PC", "Microsoft"] },
                { text: "MacOS", percentage: 25, variants: ["Mac", "Apple"] },
                { text: "Linux", percentage: 15, variants: ["Ubuntu", "Debian"] },
                { text: "Android", percentage: 7, variants: ["Google", "Telephone"] },
                { text: "iOS", percentage: 3, variants: ["iPhone", "iPad"] }
            ]
        },
        {
            question: "Citez une plateforme de streaming vidéo",
            answers: [
                { text: "Netflix", percentage: 40, variants: ["Net"] },
                { text: "YouTube", percentage: 30, variants: ["YT"] },
                { text: "Disney+", percentage: 15, variants: ["Disney"] },
                { text: "Prime Video", percentage: 10, variants: ["Amazon", "Prime"] },
                { text: "Twitch", percentage: 5 }
            ]
        }
    ],

    animaux: [
        {
            question: "Citez un animal de la ferme",
            answers: [
                { text: "Vache", percentage: 35, variants: ["Taureau", "Veau", "Bœuf"] },
                { text: "Poule", percentage: 30, variants: ["Coq", "Poulet", "Poussin"] },
                { text: "Cochon", percentage: 18, variants: ["Porc", "Truie"] },
                { text: "Mouton", percentage: 12, variants: ["Brebis", "Agneau", "Bélier"] },
                { text: "Chèvre", percentage: 5, variants: ["Bouc", "Chevreau"] }
            ]
        },
        {
            question: "Citez un animal d'Afrique",
            answers: [
                { text: "Lion", percentage: 40, variants: ["Roi lion"] },
                { text: "Éléphant", percentage: 28 },
                { text: "Girafe", percentage: 18 },
                { text: "Zèbre", percentage: 10 },
                { text: "Rhinocéros", percentage: 4, variants: ["Rhino"] }
            ]
        },
        {
            question: "Citez un oiseau",
            answers: [
                { text: "Aigle", percentage: 30, variants: ["Faucon", "Rapace"] },
                { text: "Pigeon", percentage: 28, variants: ["Colombe"] },
                { text: "Moineau", percentage: 20 },
                { text: "Corbeau", percentage: 17, variants: ["Corneille"] },
                { text: "Hibou", percentage: 5, variants: ["Chouette"] }
            ]
        },
        {
            question: "Citez un poisson",
            answers: [
                { text: "Requin", percentage: 35 },
                { text: "Thon", percentage: 25 },
                { text: "Saumon", percentage: 20 },
                { text: "Poisson rouge", percentage: 15, variants: ["Nemo"] },
                { text: "Truite", percentage: 5 }
            ]
        },
        {
            question: "Citez un insecte",
            answers: [
                { text: "Abeille", percentage: 35, variants: ["Guêpe", "Bourdon"] },
                { text: "Fourmi", percentage: 28 },
                { text: "Papillon", percentage: 20 },
                { text: "Mouche", percentage: 12, variants: ["Moucheron"] },
                { text: "Coccinelle", percentage: 5, variants: ["Bête à bon dieu"] }
            ]
        },
        {
            question: "Citez un animal qui hiberne",
            answers: [
                { text: "Ours", percentage: 45, variants: ["Ours brun"] },
                { text: "Marmotte", percentage: 25 },
                { text: "Hérisson", percentage: 15 },
                { text: "Chauve-souris", percentage: 10 },
                { text: "Grenouille", percentage: 5 }
            ]
        },
        {
            question: "Citez un animal marin",
            answers: [
                { text: "Dauphin", percentage: 35 },
                { text: "Baleine", percentage: 28, variants: ["Orque"] },
                { text: "Requin", percentage: 20 },
                { text: "Pieuvre", percentage: 12, variants: ["Poulpe", "Calamar"] },
                { text: "Tortue", percentage: 5, variants: ["Tortue de mer"] }
            ]
        },
        {
            question: "Citez un reptile",
            answers: [
                { text: "Serpent", percentage: 40, variants: ["Vipère", "Cobra", "Boa", "Python"] },
                { text: "Crocodile", percentage: 28, variants: ["Alligator", "Caïman"] },
                { text: "Lézard", percentage: 18, variants: ["Gecko", "Caméléon"] },
                { text: "Tortue", percentage: 10 },
                { text: "Iguane", percentage: 4 }
            ]
        },
        {
            question: "Citez un animal nocturne",
            answers: [
                { text: "Hibou", percentage: 35, variants: ["Chouette"] },
                { text: "Chauve-souris", percentage: 30, variants: ["Batman"] },
                { text: "Chat", percentage: 18 },
                { text: "Renard", percentage: 12 },
                { text: "Hérisson", percentage: 5 }
            ]
        },
        {
            question: "Citez un animal qui vit dans la forêt",
            answers: [
                { text: "Cerf", percentage: 32, variants: ["Biche", "Faon", "Daim"] },
                { text: "Sanglier", percentage: 28, variants: ["Cochon sauvage"] },
                { text: "Écureuil", percentage: 20 },
                { text: "Renard", percentage: 15 },
                { text: "Loup", percentage: 5 }
            ]
        }
    ],
    
    religion: [
        {
            question: "Citez un des 5 piliers de l'Islam",
            answers: [
                { text: "Prière", percentage: 30, variants: ["Salat", "Salah", "Priere", "5 prieres"] },
                { text: "Jeûne", percentage: 25, variants: ["Ramadan", "Jeuner", "Siyam"] },
                { text: "Aumône", percentage: 20, variants: ["Zakat", "Zakât", "Charite", "Don"] },
                { text: "Pèlerinage", percentage: 15, variants: ["Hajj", "Hadj", "Pelerinage", "La Mecque"] },
                { text: "Profession de foi", percentage: 10, variants: ["Chahada", "Shahada", "Temoignage"] }
            ]
        },
        {
            question: "Citez un prophète en Islam",
            answers: [
                { text: "Muhammad ﷺ", percentage: 35, variants: ["Mohammed", "Mohamed", "Mahomet", "Prophete Muhammad", "Muhammad saws", "Muhammad saw", "Muhammad pbuh"] },
                { text: "Issa (AS)", percentage: 25, variants: ["Jesus", "Jésus", "Isa", "Issa aleyhi salam"] },
                { text: "Moussa (AS)", percentage: 20, variants: ["Moise", "Moïse", "Musa", "Moussa aleyhi salam"] },
                { text: "Ibrahim (AS)", percentage: 12, variants: ["Abraham", "Ibraheem", "Ibrahim aleyhi salam"] },
                { text: "Nouh (AS)", percentage: 8, variants: ["Noe", "Noé", "Nuh", "Nouh aleyhi salam"] }
            ]
        },
        {
            question: "Citez un mois sacré en Islam",
            answers: [
                { text: "Ramadan", percentage: 50, variants: ["Ramadhan", "Mois du jeune"] },
                { text: "Dhul Hijjah", percentage: 20, variants: ["Dhoul hijja", "Mois du hajj", "Dhou al-hijja"] },
                { text: "Muharram", percentage: 15, variants: ["Moharram", "Premier mois"] },
                { text: "Rajab", percentage: 10, variants: ["Radjab"] },
                { text: "Sha'ban", percentage: 5, variants: ["Chaaban", "Chaban"] }
            ]
        },
        {
            question: "Citez un ange en Islam",
            answers: [
                { text: "Jibril", percentage: 40, variants: ["Gabriel", "Djibril", "Jibreel"] },
                { text: "Mikaël", percentage: 25, variants: ["Mikael", "Michael", "Mikail"] },
                { text: "Azraël", percentage: 20, variants: ["Azrael", "Izrail", "Ange de la mort"] },
                { text: "Israfil", percentage: 10, variants: ["Israfel", "Ange de la trompette"] },
                { text: "Malik", percentage: 5, variants: ["Gardien enfer"] }
            ]
        },
        {
            question: "Citez une sourate du Coran",
            answers: [
                { text: "Al-Fatiha", percentage: 35, variants: ["Fatiha", "Ouverture", "Sourate 1"] },
                { text: "Al-Baqara", percentage: 25, variants: ["Baqara", "Vache", "Sourate 2"] },
                { text: "Yasin", percentage: 20, variants: ["Ya-Sin", "Ya Sin", "Sourate 36"] },
                { text: "Al-Ikhlas", percentage: 12, variants: ["Ikhlas", "Sincerite", "Sourate 112"] },
                { text: "An-Nas", percentage: 8, variants: ["Nas", "Les hommes", "Sourate 114"] }
            ]
        },
        {
            question: "Citez un jour sacré en Islam",
            answers: [
                { text: "Vendredi", percentage: 40, variants: ["Joumouaa", "Joumou'a", "Jumu'ah", "Priere du vendredi"] },
                { text: "Aïd al-Fitr", percentage: 25, variants: ["Aid el fitr", "Fete fin ramadan", "Petit aid"] },
                { text: "Aïd al-Adha", percentage: 20, variants: ["Aid el adha", "Aid el kebir", "Grand aid", "Fete sacrifice"] },
                { text: "Laylat al-Qadr", percentage: 10, variants: ["Nuit du destin", "Laylatul qadr"] },
                { text: "Jour d'Arafat", percentage: 5, variants: ["Arafat", "Jour Arafa"] }
            ]
        },
        {
            question: "Citez une pratique quotidienne en Islam",
            answers: [
                { text: "Prière", percentage: 45, variants: ["Salat", "Salah", "5 prieres"] },
                { text: "Ablutions", percentage: 25, variants: ["Wudu", "Woudou", "Se laver"] },
                { text: "Invocations", percentage: 15, variants: ["Dua", "Douaa", "Invoquer Allah"] },
                { text: "Lecture Coran", percentage: 10, variants: ["Lire coran", "Reciter coran", "Tilawa"] },
                { text: "Dhikr", percentage: 5, variants: ["Dikr", "Rappel Allah", "Invocation"] }
            ]
        },
        {
            question: "Citez un livre sacré reconnu en Islam",
            answers: [
                { text: "Coran", percentage: 50, variants: ["Quran", "Qur'an", "Al-Quran"] },
                { text: "Torah", percentage: 22, variants: ["Tawrat", "Ancien testament"] },
                { text: "Évangile", percentage: 20, variants: ["Evangile", "Injil", "Nouveau testament"] },
                { text: "Psaumes", percentage: 8, variants: ["Zabur", "Zabour", "Psaume"] }
            ]
        },
        {
            question: "Citez une mosquée célèbre",
            answers: [
                { text: "La Mecque", percentage: 40, variants: ["Masjid al-Haram", "Mosquee sacree", "Kaaba", "Ka'ba"] },
                { text: "Médine", percentage: 25, variants: ["Masjid Nabawi", "Mosquee prophete", "Medine"] },
                { text: "Al-Aqsa", percentage: 20, variants: ["Aqsa", "Jerusalem", "Masjid al-Aqsa"] },
                { text: "Hassan II", percentage: 10, variants: ["Casablanca", "Maroc"] },
                { text: "Mosquée bleue", percentage: 5, variants: ["Istanbul", "Turquie", "Sultanahmet"] }
            ]
        },
        {
            question: "Citez un compagnon du Prophète",
            answers: [
                { text: "Abu Bakr", percentage: 30, variants: ["Abou bakr", "Premier calife"] },
                { text: "Omar", percentage: 25, variants: ["Umar", "Omar ibn al-Khattab"] },
                { text: "Ali", percentage: 22, variants: ["Ali ibn Abi Talib"] },
                { text: "Othman", percentage: 15, variants: ["Uthman", "Osman"] },
                { text: "Bilal", percentage: 8, variants: ["Bilal ibn Rabah", "Muezzin"] }
            ]
        },
        {
            question: "Citez une qualité importante en Islam",
            answers: [
                { text: "Patience", percentage: 30, variants: ["Sabr", "Sabir"] },
                { text: "Charité", percentage: 25, variants: ["Generosite", "Sadaqa"] },
                { text: "Honnêteté", percentage: 20, variants: ["Honnetete", "Verite", "Sincere"] },
                { text: "Respect", percentage: 15, variants: ["Politesse"] },
                { text: "Pardon", percentage: 10, variants: ["Misericorde", "Clemence"] }
            ]
        },
        {
            question: "Citez un interdit en Islam",
            answers: [
                { text: "Alcool", percentage: 35, variants: ["Vin", "Boisson alcoolisee", "Khamr"] },
                { text: "Porc", percentage: 30, variants: ["Viande porc", "Cochon"] },
                { text: "Mensonge", percentage: 18, variants: ["Mentir", "Faux temoignage"] },
                { text: "Vol", percentage: 12, variants: ["Voler", "Voleur"] },
                { text: "Médisance", percentage: 5, variants: ["Calomnie", "Ghiba", "Parler mal"] }
            ]
        },
        {
            question: "Citez une catégorie de la jurisprudence islamique",
            answers: [
                { text: "Halal", percentage: 30, variants: ["Licite", "Permis", "Autorise"] },
                { text: "Haram", percentage: 28, variants: ["Illicite", "Interdit", "Defendu"] },
                { text: "Makruh", percentage: 18, variants: ["Mekruh", "Detestable", "Deconseille"] },
                { text: "Mustahabb", percentage: 14, variants: ["Mustahab", "Recommande", "Souhaitable"] },
                { text: "Wajib", percentage: 10, variants: ["Fard", "Obligatoire", "Necessaire"] }
            ]
        },
        {
            question: "Citez un moment de prière quotidienne",
            answers: [
                { text: "Fajr", percentage: 25, variants: ["Aube", "Matin", "Priere matin"] },
                { text: "Dhuhr", percentage: 22, variants: ["Dohr", "Midi", "Priere midi"] },
                { text: "Asr", percentage: 20, variants: ["Acer", "Apres-midi", "Priere apres midi"] },
                { text: "Maghrib", percentage: 18, variants: ["Maghreb", "Coucher soleil", "Priere soir"] },
                { text: "Isha", percentage: 15, variants: ["Icha", "Nuit", "Priere nuit"] }
            ]
        },
        {
            question: "Citez une invocation courante en Islam",
            answers: [
                { text: "Bismillah", percentage: 35, variants: ["Au nom Allah", "Bismillah ar-rahman ar-rahim"] },
                { text: "Alhamdulillah", percentage: 30, variants: ["Louange Allah", "Al hamdoulillah"] },
                { text: "Inshallah", percentage: 20, variants: ["Si Allah veut", "Inch'Allah"] },
                { text: "Subhanallah", percentage: 10, variants: ["Gloire Allah", "Soubhanallah"] },
                { text: "Allahu Akbar", percentage: 5, variants: ["Allah plus grand", "Allahou akbar"] }
            ]
        }
    ]
};
