/**
 * 
 */
var numero;
var numeroChiamate=0;
var timer;

onmessage = function(event){
	if(event.data) //verifico che il campo non è vuoto
	{
		if(numeroChiamate>0)
			clearInterval(timer);
		
		numeroChiamate++;
		numero = event.data;
		setInterval(aggiornaNumero,300);
	}
	else
		alert("campo vuoto");
}

function aggiornaNumero()
{
		numero *=2;
		self.postMessage(numero);
}