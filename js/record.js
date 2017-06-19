function borrarCookie(id){									//Función usada para "borrar" cookie almacenada solo accesible con el modo debug activado
	document.cookie = id+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
