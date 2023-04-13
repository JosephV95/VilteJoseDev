
var typed = new Typed(".typed",{
    strings: ["Full-Stack", "Front-End", "Freelance"],
    typeSpeed: 69,  //Velocidad en milisegundos en poner cada letra
    backSpeed: 69,  // Velocidad en milisegundos para borrrar una letra,
    loop: true,  // Repetir el array de strings
    startDelay: 350,  // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,

    // ! Otras opciones para personalizar
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	// smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	// shuffle: false, // Alterar el orden en el que escribe las palabras.
	// backDelay: 300, // Tiempo de espera despues de que termina de escribir una palabra.
	// loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
})