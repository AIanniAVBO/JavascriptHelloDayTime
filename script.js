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
	//Ottiene l'oggetto di output
	let output_p = getOutputP();
	//Ottiene l'ora corrente
	let hourValue = date.getHours();
	//Caso escluso dagli if-else seguenti (>=18)
	let helloMessage = "Buona sera";
	//Se minore di 6
	if (hourValue < 6)
		helloMessage = "Buona notte";
	//Se compreso fra 6 e 12
	else if (hourValue < 12)
		helloMessage = "Buon d\xEC";
	//Se compreso fra 12 e 18
	else if (hourValue < 18)
		helloMessage = "Buon pomeriggio";
	//Scrive il messaggio di saluto
	output_p.innerHTML = helloMessage + " " + input_name + " solo le " + 
							hourValue + " e " + date.getMinutes();
}

//Definizione di una funzione che prende in input un argomento
function resetButtonClicked(event) {
	let output_p = getOutputP();
	output_p.innerHTML = "";
}
//Funzione che restituisce il paragrafo di output
function getOutputP() {
	let output_p = document.getElementById("message_p");
	return output_p;
}
