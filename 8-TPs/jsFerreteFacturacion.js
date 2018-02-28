/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/




function Sumar () 
{
var precio1;
var precio2;
var precio3;
var total;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PrecioDos").value);
precio3 = parseFloat(document.getElementById("PrecioTres").value);

total = precio1 + precio2 + precio3;
alert("El total es " + total);
}

function Promedio () 
{
var precio1;
var precio2;
var precio3;
var total;
var promedio;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PrecioDos").value);
precio3 = parseFloat(document.getElementById("PrecioTres").value);

total = precio1 + precio2 + precio3;

promedio = total / 3;
alert ("Elpromedio es " + promedio);
}

function PrecioFinal () 
{
var precio1;
var precio2;
var precio3;
var total;
var precioMasIva;

precio1 = parseFloat(document.getElementById("PrecioUno").value);
precio2 = parseFloat(document.getElementById("PrecioDos").value);
precio3 = parseFloat(document.getElementById("PrecioTres").value);

total = precio1 + precio2 + precio3;

precioMasIva = total * 1.21;
alert("El precio mas Iva es " + precioMasIva);
}