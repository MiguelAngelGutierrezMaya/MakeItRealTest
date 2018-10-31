function count(str, char){
	
	var i = 0;
	var index = [];

	while(i < str.length){
		if(str.indexOf(char,i) >= 0){
			index.push(i);
			i += str.indexOf(char,i) + char.length;
		}else{
			i += char.length;
		}
	}
	console.log("Numero de veces que se repite '" + char + "' en '" + str + "'");
	console.log(index.length);
}

//Datos Prueba -> devolver 2
count("hola mundo hola mundo ", "mundo");
//Datos Prueba -> devolver 1
count("mundo hola mund ", "mundo");

function filter(array){

	var index = [];

	if(Array.isArray(array)){
		
		array.forEach( function(valor, indice, array) {
			if(valor > 10){
				index.push(valor);
			}
		});

		console.log("Alementos mayores a 10");

		index.forEach( function(valor) {
			console.log(valor);
		});

	}else{
		console.log("Debe suministrar un arreglo");
	}
}

//Datos Prueba -> devolver 13,17
filter([13,5,17]);
//Datos Prueba -> devolver 12
filter([0,10,12]);

function hypotenuse(a, b){
	console.log("Hipotenusa entre " + a + " y " + b);
	console.log(Math.hypot(a,b));
}

//Datos Prueba -> devolver 5
hypotenuse(3, 4);
//Datos Prueba -> devolver 16.401219466856727
hypotenuse(10, 13);









