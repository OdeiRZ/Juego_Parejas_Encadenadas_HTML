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