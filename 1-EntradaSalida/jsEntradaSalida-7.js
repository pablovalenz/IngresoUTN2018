/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var suma;    
    num1 = parseInt (document.getElementById ("numeroUno").value);
    num2 = parseInt (document.getElementById ("numeroDos").value);
    suma = num1 + num2;
    alert ("la suma es " + suma);


	
}

function restar()
{
	var num1;
    var num2;
    var restar;
    num1 = parseInt (document.getElementById ("numeroUno").value);
    num2 = parseInt (document.getElementById ("numeroDos").value);
    restar = num1 - num2;
    alert ("la resta es " + restar);

}

function multiplicar()
{ 
    var num1;
    var num2;
    var multiplicar;    
    num1 = parseInt (document.getElementById ("numeroUno").value);
    num2 = parseInt (document.getElementById ("numeroDos").value);
    multiplicar = num1 * num2;
    alert ("la multiplicacion es " + multiplicar);
}

function dividir()
{
	  var num1;
    var num2;
    var dividir;    
    num1 = parseInt (document.getElementById ("numeroUno").value);
    num2 = parseInt (document.getElementById ("numeroDos").value);
    dividir = num1 / num2;
    alert ("la division es " + dividir);
}

