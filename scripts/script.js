function afficherResultat(score, nombreMots) {
	console.log("Votre score est de " + score + " sur " + nombreMots);
	let spanScore = document.querySelector(".zoneScore span");
	let affichageScore = `${score}/${nombreMots}`;

	spanScore.innerHTML = affichageScore;
}

function afficherProposition(proposition) {
	let zoneProposition = document.querySelector(".zoneProposition");
	zoneProposition.innerHTML = proposition;
}

function lancerJeu() {
	let score = 0;
	let btnValiderMot = document.getElementById("btnValiderMot");
	let inputEcriture = document.getElementById("inputEcriture");
	let i = 0;

	afficherProposition(listeMots[i]);

	btnValiderMot.addEventListener("click", () => {
		if (listeMots[i] === inputEcriture.value) {
			score++;
		}
		i++;
		afficherResultat(score, i);
		inputEcriture.value = '';
		if (listeMots[i] === undefined) {
			afficherProposition("Le jeu est fini");
			btnValiderMot.disabled = true;
		} else {
			afficherProposition(listeMots[i]);
		}
	});

	// afficherResultat(score, i);
}
