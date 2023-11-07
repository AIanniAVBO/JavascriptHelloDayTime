//Aggiunge un evento che si attiva quando il DOM viene caricato
//	e richiama la funzione onAllLoaded
document.addEventListener("DOMContentLoaded", onAllLoaded);

//Definizione di una funzione che prende in input un argomento
function onAllLoaded(event) {
	
	//Ricerca il tasto helloButton e associa al click la funzione helloButtonClicked
	document.getElementById("helloButton").addEventListener("click", helloButtonClicked);
}

//Definizione di una funzione che prende in input un argomento
function helloButtonClicked(event) {
	//Ottiene il nome inserito
	let input_name = document.getElementById("fname").value;
	
	
}