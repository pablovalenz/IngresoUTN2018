//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var largoDelTerreno= parseInt(document.getElementById("largo").value);
    var anchoDelTerreno= parseInt(document.getElementById("ancho").value);
    var perimetro = (largoDelTerreno + anchoDelTerreno) *2;
    var alambre = perimetro *6;

    alert ("Se necesitan " + alambre + " mtrs de alambre ");


    //alert ("El perimetro del terreno es " + perimetro);
    




}

