var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var pollo = {
	url: "pollo.png",
	cargarOK: false
};

var fondo = {
	url: "tile.png",
	cargarOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargarOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

cerdo.objeto = new Image ();
cerdo.objeto.src = cerdo.url;
pollo.objeto.addEventListener("load", cargarCerdo);

function cargarFondo()
{
	fondo.cargarOK = true;
	dibujar();
}

function cargarPollos()
{
	pollo.cargarOK = true;
}

function cargarCerdo()
{
	cerdo.cargarOK = true;
}

function dibujar()
{
	if (fondo.cargarOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}

	if (pollo.cargarOK)
	{
		var cantidad = aleatorio(0, 50);
		console.log(cantidad);
		for (var v = 0; v < cantidad; v++) 
		{
			var x = aleatorio(0, 8);
			var y = aleatorio(0, 8);
			var x = x * 50;
			var y = y * 50;
			papel.drawImage(pollo.objeto, x, y);
		}
	}

	if (cerdo.cargarOK)
	{
		var cantidad = aleatorio(0, 50);
		console.log(cantidad);
		for (var c = 0; c < cantidad; c++) 
		{
			var x = aleatorio(0, 8);
			var y = aleatorio(0, 8);
			var x = x * 50;
			var y = y * 50;
			papel.drawImage(cerdo.objeto, x, y);
		}
	}
}

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}
