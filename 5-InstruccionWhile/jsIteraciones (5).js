function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase ();

while (sexo !=  'f'&& sexo != 'm')
{
    sexso = prompt ("Error. Reigrese sexo");
    sexo = sexo.toLocaleLowerCase ();
}

if (sexo = 'f')
{
    sexo = "femenino";

}
else
{
    sexo = "Masculino";
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN