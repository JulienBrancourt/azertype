function afficherResultat(score, nombreMots) {
	console.log("Votre score est de " + score +" sur " + nombreMots);
}

function choisirPhrasesOuMots() {
	let choix = prompt("Voulez-vous copier les mots ou les phrases ?")

	while (choix !== "mots" && choix !== "phrases") {
		choix = prompt(
		"Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
		);
	}
	return choix
}

function lancerBoucleDeJeu(listePropositions) {
	let score = 0
	for (let i = 0; i < listePropositions.length; i++) {
		let motUtilisateur = prompt("Entrez le mot " + listePropositions[i]);
		if (motUtilisateur === listePropositions[i]) {
		score++;	
	}
	}
	return score
}

function lancerJeu() {
	let choix = choisirPhrasesOuMots()
	let score = 0
	let nombreMots = 0

	if (choix === 'mots') {
		score = lancerBoucleDeJeu(listeMots)
		nombreMots = listeMots.length
	} else {
		score = lancerBoucleDeJeu(listePhrases)
		nombreMots = listePhrases.length
	}

	afficherResultat(score, nombreMots)
}
