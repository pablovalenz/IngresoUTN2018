/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
	//siempre tiene que estar en este orden, alterar el orden es dar error en el index
    var nombre;
    nombre = document.getElementById("elNombre").value;
    //"document" significa el html y getElementById es la orden de que traiga algo desde el lugar asignado en este caso "document" el html
    //el apartado elNombre debe escribirse exactamente igual a como figura en el html, ej ID="elNombre"
    
    alert (nombre);


}


