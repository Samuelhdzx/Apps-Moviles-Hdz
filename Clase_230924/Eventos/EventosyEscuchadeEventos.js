// Obtener el botón del DOM
const botonColor = document.getElementById('cambiarColor');

botonColor.addEventListener('click', () =>{
    const colorAleatorio =  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = colorAleatorio;
});


// Anadir un listener al botón para manejar el evento click botonColor.addEventListener('click',	(
// Generar un color aleatorio

// Cambiar el color de fondo del body document.body.style.backgroundColor	colorAleatorio;
