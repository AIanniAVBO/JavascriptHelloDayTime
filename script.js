//Aggiunge un evento che si attiva quando il DOM viene caricato
//	e richiama la funzione onAllLoaded
document.addEventListener("DOMContentLoaded", onAllLoaded);

//Definizione di una funzione che prende in input un argomento
function onAllLoaded(event) {
	
	//Ricerca il tasto helloButton e associa al click la funzione helloButtonClicked
	document.getElementById("helloButton").addEventListener("click", helloButtonClicked);
	
	
	//Ricerca il tasto resetButton e associa al click la funzione resetButtonClicked
	document.getElementById("resetButton").addEventListener("click", resetButtonClicked);
}

//Definizione di una funzione che prende in input un argomento
function helloButtonClicked(event) {
	//Ottiene il nome inserito
	let input_name = document.getElementById("fname").value;
	//Crea un oggetto Date relativo all'ora corrente
	let date = new Date();
	
	let output_p = getOutputP();
	
	output_p.innerHTML = "Buona sera " + input_name + " solo le " + date.getHours() + " e " + date.getMinutes();
}

//Definizione di una funzione che prende in input un argomento
function resetButtonClicked(event) {
	let output_p = getOutputP();
	output_p.innerHTML = "";
}

function getOutputP() {
	let output_p = document.getElementById("message_p");
	return output_p;
}
