const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//écouteur de la flèche gauche
const leftArrow = document.querySelector(".arrow_left");
	console.log(leftArrow)

	leftArrow.addEventListener ("click", () => { 
		console.log("j'ai cliqué sur la flèche gauche")
})


//écouteur de la flèche droite
const rightArrow = document.querySelector(".arrow_right");
	console.log(rightArrow)

	rightArrow.addEventListener ("click", () => {
		console.log("j'ai cliqué sur la flèche droite")
})

// ajout des bullets

		// Récupération de la div parent
const ajoutBullets = document.querySelector(".dots")

for (let i = 0 ; i < slides.length; i++ ){

	const bullet = document.createElement("p") //Création d'un point enfant
	ajoutBullets.appendChild(bullet)//ajout a l'élement parent
	bullet.classList.add("dot") // ajout d'une class
	 
	if (i === 3){
		bullet.classList.add("dot_selected") //afficher le point blanc sur le bon bullet + encore modifier par la suite la valeur i
	}
}
