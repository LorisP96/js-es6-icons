// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box 
// per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per 
// visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari 
// tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo 
// dalla select, visualizzare solamente le icone corrispondenti.

const cardArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

cardArray.forEach((element) => {
	console.log(element)
	element.color = generateColor();
});

const container = document.querySelector('.container');

let categories = document.getElementById('icon-type');

scrollArrayElement(cardArray, container);

categories.addEventListener('change', 
	function() {
		container.innerHTML = '';
		categories = 'all'
		const currentValue = this.value;
		if (currentValue !== 'all') {
			const filteredArray = cardArray.filter((element) => {
				return element.type === currentValue;
			});
			scrollArrayElement(filteredArray, container);
		} else {
			scrollArrayElement(cardArray, container);
		}
	}
)

// function

function scrollArrayElement(Array, Container) {
	Array.forEach((element) => {

		let newCard = `
		<div class="card">
			<div class="icon" style="color: ${element.color}">
				<i class="${element.family} ${element.prefix}${element.name}"></i>
			</div>
			<div class="name">${element.name}</div>
		</div>
		`;
		Container.innerHTML += newCard;
	});
}
// prima del bonus: <div class="icon ${element.color}">

function generateColor() {
	let color = '#';
	const symbols = '0123456789abcdef';
	
	for(let i = 0; i < 6; i++) {
		const randomIndex = getRndInteger(0, symbols.length - 1);
		const randomSymbol = symbols[randomIndex];
		color += randomSymbol;
	}
	return color;
	
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}