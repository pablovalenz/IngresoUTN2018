function Mostrar()
{

var sumaPos = 0;
var sumaNeg = 0;
var contPos = 0;
var contNeg = 0;
var contCeros = 0;
var contPares = 0;
var promPos;
var promNeg;
var diferencia;
var respuesta;
var numero;

do
{
	numero = parseInt(prompt("Ingrese un numero"));
//analizo el signo del numero ingresado
	if (numero < 0)
	{
		//numero negativo
		sumaNeg = sumaNeg + numero;
		contNeg ++;
	}
	else if (numero > 0)
	{
		//numero positivo
		sumaPos = sumaPos + numero;
		contPos++;
	}
	else 
	{
		//cero
		contCeros++;
	}

	respuesta = prompt ("Desea continuar?:");

}

while (respuesta == 's');

// aca hago los calculos que se realizaran una vez que termine la carga
// promedios y diferencias

promNeg = sumaNeg / contNeg;
promPos = sumaPos / contPos;
diferencia = sumaPos - sumaNeg;

//muestro la informacion

document.write("1-Suma de los negativos: " + sumaNeg + "<br/>");
document.write("2-Suma de los positivos: " + sumaPos + "<br/>");
document.write("3-Cantidad de positivos: " + contPos + "<br/>");
document.write("4-Cantidad de negativos: " + contNeg + "<br/>");
document.write("5-Cantidad de ceros: " + contCeros + "<br/>");
document.write("6-Cantidad de numeros pares: " + promPos + "<br/>");
document.write("7-Promedio de positivos: " + promPos + "<br/>");
document.write("8-Promedio de negativos: " + promNeg + "<br/>");
document.write("9-Diferencia entre positivos y negativos: " + diferencia);





}//FIN DE LA FUNCIÓN