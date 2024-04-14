// Obtengo la referencia al elemento por su ID
const ele = document.getElementById("ele1");

// Defino la función pintar que acepta un color como argumento (verde por defecto)
function pintar(color = 'green') {
    // Dentro de la función, 'this' se refiere al elemento que ha sido clickeado
    this.style.backgroundColor = color;
}

// Agrego un listener de evento para capturar el clic y cambiar el color de fondo a amarillo
ele.addEventListener("click", function() {
    // Llamo a la función pintar pasando 'amarillo' como color
    pintar.call(this, 'yellow');
});
