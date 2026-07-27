# Juego de Parejas Encadenadas (HTML)

Juego de memoria (encontrar parejas de cartas) en JavaScript y HTML, con personajes de anime, cronómetro y récord guardado en cookie.

## Características

- Tablero de cartas generado dinámicamente (9 parejas de 10 personajes de anime posibles: Goku, Luffy, Levi, Sakura, etc.), colocadas al azar en cada partida.
- Vista previa de todas las cartas al empezar la partida antes de ocultarlas ("barrido" inicial).
- Lógica de comprobación de pareja: si dos cartas volteadas coinciden se marcan como acertadas, si no, vuelven a ocultarse.
- Botón de ayuda (una vez por partida) que vuelve a mostrar brevemente todas las cartas.
- Avatar/asistente interactivo con mensajes de ayuda y control de la partida mediante atajos de teclado (E: empezar, F: finalizar, R: consultar récord, A: activar ayuda).
- Cronómetro de partida y guardado del mejor tiempo en una cookie, avisando si se ha batido el récord.
- Efectos de sonido para selección de carta, acierto, error y victoria.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla (manipulación del DOM, `setTimeout`/`setInterval`, cookies y `Audio`, sin frameworks)

## Instalación / Cómo ejecutarlo

No requiere instalación ni servidor:

1. Clona el repositorio.
2. Abre `public/index.html` directamente en un navegador (Chrome, Firefox, Edge, etc.).

Ejercicio académico que practica la generación dinámica de elementos del DOM, la gestión de estado de un juego con temporizadores y el uso de cookies para persistir un récord.

## Licencia

GPL versión 3 (ver archivo [LICENSE](LICENSE)).
