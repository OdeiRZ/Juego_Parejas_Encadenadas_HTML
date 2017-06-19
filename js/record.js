function borrarCookie(id){									//Función usada para "borrar" cookie almacenada solo accesible con el modo debug activado
	document.cookie = id+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function crearCookie(id,valor,caducidad){					//Función usada para crear cookie a partir de un id, valor y fecha de caducidad recibidas como parámetros
	var d = new Date();
	d.setTime(d.getTime() + (caducidad*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = id+"=" + valor + "; " + expires;
}
function devolverDato(id){
	var datoCookie = 0, nombre = id + "=";
	var valor = document.cookie.split(';');
	for (var i=0; i<valor.length; i++){
		if (valor[i].indexOf(nombre) != -1){
			datoCookie=valor[i].substring(nombre.length, valor[i].length);
			break;
		}
	}
	return datoCookie;
}
function leerCookie(id, tiempo){							//Función usada para leer cookie y comparar su valor numérico con el recibido como parámetro, 
	var datoCookie = devolverDato(id);						//devolviendo -1, 0 o 1 (-1 existe)no record, (0 no existe, 1 record)si record
	if (datoCookie != 0) {
		if (datoCookie > tiempo) {
			crearCookie(id, tiempo, 1)
			datoCookie = 1;
		} else {
			datoCookie = -1;
		}
	}
	return datoCookie;
}
