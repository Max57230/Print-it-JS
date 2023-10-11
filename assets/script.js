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



// ajout des bullets points

const ajoutBullets = document.querySelector(".dots ")

let dots =[]

		for (let i = 0 ; i < slides.length; i++ ){
			
			let dot = document.createElement("p") //création de paragraphe dans index.html
			ajoutBullets.appendChild(dot)	//création de l'enfant pour la div dots
			dot.classList.add('dot') // ajout de la class dot à dot les (p)
			dots.push(dot) // ajout de valeur au tableau
		
		}

// fonction pour changer le slide

const imageSlide = document.querySelector('.banner-img')
const texteSlide = document.querySelector('#text')


let slideIndex = changementSlide ( 0, 0)

function changementSlide (slideSuivant, slideAvant){

	if ( slideSuivant < 0 ) {slideSuivant = dots.length -1}
	if ( slideSuivant > dots.length -1) {slideSuivant = 0}

	texteSlide.innerHTML = slides[slideSuivant].tagLine
	imageSlide.src = `./assets/images/slideshow/${slides[slideSuivant].image}`

	dots[slideAvant].classList.remove('dot_selected')
	dots[slideSuivant].classList.add('dot_selected')

	return slideSuivant  // retour de l'index actu
}

//écouteur de la flèche gauche + maj au changement de slide
const leftArrow = document.querySelector(".arrow_left");
	console.log(leftArrow)


	leftArrow.addEventListener ("click", (event) => {
		if (event.button === 0) {
			slideIndex = changementSlide ( slideIndex -1 , slideIndex)
		}
		console.log("j'ai cliqué sur la flèche gauche")
})


//écouteur de la flèche droite + maj au changement de slide
const rightArrow = document.querySelector(".arrow_right");
	console.log(rightArrow)

	rightArrow.addEventListener ("click", (event) => {
		if (event.button === 0) {
			slideIndex = changementSlide ( slideIndex +1 , slideIndex)
		}
		console.log("j'ai cliqué sur la flèche droite")
})

console.log(slides.length)


















