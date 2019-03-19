var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var d = document.getElementById("dibujito"); //Método para obtener un elemento del documento por su ID
var lienzo = d.getContext("2d"); //Método del canvas para definir el escenario 2d o 3d
var ancho = d.width;
var ancho2 = (d.width)/2;
var gradiente;

boton.addEventListener("click", dibujoPorClick);

//Para dibujar el marco con gradiente de colores
gradiente = lienzo.createLinearGradient(100,100,270,0);
dibujarLineaMarco(1,1,ancho-1,ancho-1);

//Función para dibujar la Figura 1
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth=1;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

//Función para dibujar el marco con gradiente de colores
function dibujarLineaMarco(xinicial, yinicial, xfinal, yfinal){

	gradiente.addColorStop("0", "yellow");
	gradiente.addColorStop("0.1", "blue");
	gradiente.addColorStop("1.0", "red");
	lienzo.lineWidth = 5;
	lienzo.strokeStyle = gradiente;
	lienzo.strokeRect(xinicial,yinicial,xfinal,yfinal)
}

function dibujoPorClick(){

	var lineas=parseInt(texto.value);
	var l;
	var n=1;
	var yi, xf, xi, yf;
	var colorcito;
	var espacio = ancho / lineas;
	var espacio2 = ancho2 / lineas;

	d.width = d.width
	dibujarLineaMarco(1,1,ancho-1,ancho-1);

	if(document.getElementById("figura1").checked){

		for(l=0; l<lineas; l++){
			
			yi = espacio*l;
			xf = espacio*(l+1);
			xi = espacio*l;
			yf = espacio*(l+1);

			if(("color"+n)=="color1"){
				colorcito="yellow";
			}elseif(("color"+n)=="color2"){
				colorcito="blue";
			}else{
				colorcito="red";
			}

			dibujarLinea(colorcito, 0, yi, xf, 300);
			dibujarLinea(colorcito, xi, 0, 300, yf);	
			dibujarLinea(colorcito, 0, 300-xf, yi, 0);
			dibujarLinea(colorcito, 300, xf, 300-yi, 300);

			if(n==3){
				n=1;
			}else{
				n++;
			}

		}

	}elseif(document.getElementById("figura2").checked){

	 	for(l=0; l<lineas;l++){

	 		xi=espacio2*l
	 		yf=150-(espacio2*l);
	 		xi2=300-(espacio2*l);
	 		yf2=150-(espacio2*l);
	 		yf3=150+(espacio2*l);
	 		yf4=150+(espacio2*l);

	 		if(("color"+n)=="color1"){
	 			colorcito="yellow";
	 		}elseif(("color"+n)=="color2"){
	 			colorcito="blue";
	 		}else{
	 			colorcito="red";
	 		}

	 		dibujarLinea(colorcito, xi, 150, 150, yf);
	 		dibujarLinea(colorcito, xi2, 150, 150, yf2);
	 		dibujarLinea(colorcito, xi, 150, 150, yf3);
	 		dibujarLinea(colorcito, xi2, 150, 150, yf4);
	 		
			if(n==3){
				n=1;
			}else{
				n++;
			}
	
	 	}

	}else{
	 	alert("Solo tenemos dos figuras por el momento, debes escoger entre la 1 y la 2.");
	}

}

console.log(lienzo);
