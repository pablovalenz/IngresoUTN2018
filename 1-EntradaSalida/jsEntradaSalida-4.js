/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	//asigno la variable
	var nombre;
	//creo la ventana emergente con prompt asignandolé entre parentesis el texto que va a aparecer en la ventana emergente
	nombre = prompt ("ingrese su nombre");
	//indico que el dato nombre se envie al document o html, aparecerá el nombre en la casilla "su nombre"
	document.getElementById("elNombre").value = nombre;

}

