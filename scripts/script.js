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
	let i = 0;
	let listeProposition = listeMots
	let btnValiderMot = document.getElementById("btnValiderMot");
	let inputEcriture = document.getElementById("inputEcriture");

	afficherProposition(listeProposition[i]);

	btnValiderMot.addEventListener("click", () => {
		if (inputEcriture.value === listeProposition[i]) {
			score++;
		}
		i++;
		afficherResultat(score, i);
		inputEcriture.value = '';
		if (listeProposition[i] === undefined) {
			afficherProposition("Le jeu est fini");
			btnValiderMot.disabled = true;
		} else {
			afficherProposition(listeProposition[i]);
		}

		let listeBtnRadio = document.querySelectorAll(".optionSource input")
		for (let index = 0; index < listeBtnRadio.length; index++) {
			listeBtnRadio[index].addEventListener("change", (event) => {
				if (event.target.value === "1") {
					listeProposition = listeMots
				} else {
					listeProposition = listePhrases
				}
				afficherProposition(listeProposition[i])
			})
		}
	});
	afficherResultat(score, i);
}
