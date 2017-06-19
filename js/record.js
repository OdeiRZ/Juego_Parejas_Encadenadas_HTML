function borrarCookie(id){									//Función usada para "borrar" cookie almacenada solo accesible con el modo debug activado
	document.cookie = id+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function crearCookie(id,valor,caducidad){					//Función usada para crear cookie a partir de un id, valor y fecha de caducidad recibidas como parámetros
	var d = new Date();
	d.setTime(d.getTime() + (caducidad*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = id+"=" + valor + "; " + expires;
}
