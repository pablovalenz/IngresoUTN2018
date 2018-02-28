//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
    var baseTriangulo;
    var perimetro;
    baseTriangulo = parseInt(document.getElementById("lado").value);
    perimetro = baseTriangulo *3;
    
    alert ("El perimetro es " + perimetro);
    
}

