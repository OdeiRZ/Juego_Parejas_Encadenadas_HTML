window.onload = function() {
    var numBotones = 9;
    var tiempoPista = 3;
    var botones = cargaEventos(numBotones * 2, "onclick", "button", "comprobarBoton(this.id)", "disabled", "cardBack");
    document.getElementById('formulario').innerHTML = botones + document.getElementById('formulario').innerHTML;
    document.getElementById("avatar").addEventListener("click", function(){asistente();});
    document.getElementById("empezar").addEventListener("click", function(){comienzo();});
    document.getElementById("finalizar").addEventListener("click", function(){finJuego();});
    document.getElementById("ayuda").addEventListener("click", function(){ayuda();});
    document.getElementById("record").addEventListener("click", function(){consultarRecord();});
    inicializar(numBotones, tiempoPista * 1000);
    function cargaEventos(n, evento, tipo, funcion, activa, clase) {
        var aux = "";
        for (var i = 0; i < n; i++) {
            aux += "<input type='"+tipo+"' id='"+i+"' name='"+clase+"' class='"+clase+"' "+evento+"='"+funcion+"' "+activa+">\n";
        }
        return aux;
    }
};

var pjs = ["eduard", "goku", "kenshin", "l", "lucy", "luffy", "misaki", "sakura", "spike", "levi"];
var segundos, minutos, horas, con, tPista, swPar = false;
var repetidor, numBotones, v, cartaAnterior, auxAvatar = 0;

function inicializar(numBtns, t) {
    document.getElementById("empezar").disabled = false;
    document.getElementById("ayuda").disabled = true;
    document.getElementById("finalizar").disabled = true;
    numBotones = numBtns;
    segundos = "00";
    minutos = "00";
    horas = "00";
    tPista = t;
}
function comienzo() {
    var k = 0;
	document.getElementById("avatar").className = "inicioAvatar";
	document.getElementById("vineta").className = "inicioCaja";
    var botones = document.getElementsByName("cardBack");

    v = new Array(numBotones * 2);
    for (var i = 0; i < v.length; i++) {
        v[i] = -1;
    }

    do {
        var n = parseInt(Math.random() * pjs.length);
        if (v.indexOf(n) == -1) {
            var pos1, pos2;
            do {
                pos1 = parseInt(Math.random()* v.length);
                pos2 = parseInt(Math.random()* v.length);
            } while (v[pos1] != -1 || v[pos2] != -1 || pos1 == pos2);
            v[pos1] = n;
            v[pos2] = n;
            k++;
        }
    } while (k < numBotones);

    for (var j = v.length-1; j >= 0; j--) {
        botones[j].name = v[j];
    }

    barrido();
    setTimeout(function(){activaJuego()},tPista + (v.length * 150));
}
function comprobarBoton(id) {
    var carta = document.getElementById(id);
    carta.className = "cardFront";
    carta.style.backgroundImage = "url('img/" + pjs[carta.getAttribute('name')] + ".png')";
    document.getElementById("avatar").className = null;
    reproduceAudio("moguri-seleccion");

    if (swPar) {
        if (carta.getAttribute("name") == cartaAnterior.getAttribute("name")  &&  carta.getAttribute("id") != cartaAnterior.getAttribute("id") ) {
			setTimeout(function(){ocultar(carta)},200);
            swPar = !swPar;
        } else if (carta.getAttribute("id") != cartaAnterior.getAttribute("id")){
			setTimeout(function(){renovar(carta)},200);
            swPar = !swPar;
		}
    } else {
        cartaAnterior = carta;
        swPar = !swPar;
    }
}
function ocultar(carta) {
	carta.className = "ocultaCarta";
	cartaAnterior.className = "ocultaCarta";
	carta.disabled = true;
	cartaAnterior.disabled = true;
	carta.setAttribute("name", "correcto");
	cartaAnterior.setAttribute("name", "correcto");
    reproduceAudio("moguri-pareja");
    document.getElementById("avatar").className = "aciertoAvatar";
    auxAvatar = -1;
    comprobarGanador();
}
function renovar(carta) {
	carta.className = "cardBack";
	cartaAnterior.className = "cardBack";
	carta.style.backgroundImage = "";
	cartaAnterior.style.backgroundImage = "";
    reproduceAudio("moguri-error");
    document.getElementById("avatar").className = "temblarAvatar";
    document.getElementById("textoVineta").innerHTML = "Recuerda que puedes Activar la Ayuda una vez por Partida";
    auxAvatar = 3;
}
function activaJuego() {
    document.getElementById("empezar").disabled = true;
    document.getElementById("finalizar").disabled = false;
    document.getElementById("ayuda").disabled = false;
    repetidor = setInterval('contadorReloj()',1000);

    var cartas = document.getElementsByClassName("cardBack");
    for (var j = 0; j < cartas.length; j++) {
        cartas[j].disabled = false;
        cartas[j].setAttribute("class", "cardBack");
    }
}
function barrido() {
    enlace("cardFront");
    reproduceAudio("bonus");
    setTimeout(function(){enlace("cardBack efectoCarta")}, tPista);
}