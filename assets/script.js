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

let numero =0 // permet d'itentifier le texte et l'image affichés

//écouteur de la flèche gauche
const leftArrow = document.querySelector(".arrow_left");
	console.log(leftArrow)

	leftArrow.addEventListener ("click", function () { majSlide(-1)
		console.log("j'ai cliqué sur la flèche gauche")
})


//écouteur de la flèche droite
const rightArrow = document.querySelector(".arrow_right");
	console.log(rightArrow)

	rightArrow.addEventListener ("click", function () { majSlide(1)
		console.log("j'ai cliqué sur la flèche droite")
})

console.log(slides.length)

// ajout des bullets

		// Récupération de la div parent
const ajoutBullets = document.querySelector(".dots")

for (let i = 0 ; i < slides.length; i++ ){

	const bullet = document.createElement("p") //Création d'un point enfant
	ajoutBullets.appendChild(bullet)//ajout a l'élement enfant
	bullet.classList.add("dot") // ajout d'une class

	if (i === numero){
		bullet.classList.add('dot_selected')
	}

	console.log(ajoutBullets)
}


// fonction pour l'image et le texte

function majSlide(sens) {
	numero = numero + sens
	if (numero > slides.length -1)
		numero = 0
	if (numero < 0)
		numero = slides.length -1
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[numero]['image'] // changement de l'image en fonction du numero
	document.getElementById("text").innerHTML = slides[numero]['tagLine'] // changement du texte en fonction du numero

	{console.log(sens)}
}
