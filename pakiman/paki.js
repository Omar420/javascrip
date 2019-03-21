var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new pakiman("Cauchin", 100, 30));
coleccion.push(new pakiman("Pokacho", 80, 50));
coleccion.push(new pakiman("Tocinauro", 120, 40));

for(freddito of coleccion)
{
	freddito.mostrar();
}

for(var x in imagenes)
{
	console.log(x);
}