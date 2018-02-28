//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importeIngresado;
    var precioMasIva;
    
    importeIngresado = parseFloat(prompt ("Ingrese el importe"));
    precioMasIva = importeIngresado * .21;
    document.getElementById ("importe").value = precioMasIva;
    


}

