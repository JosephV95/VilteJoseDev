
//? crea la animación del header  
var typed = new Typed(".typed", {
  strings: ["Front-End", "Full-Stack", "Freelance"],
  typeSpeed: 69, //Velocidad en milisegundos en poner cada letra
  backSpeed: 69, // Velocidad en milisegundos para borrrar una letra,
  loop: true, // Repetir el array de strings
  startDelay: 350, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,

  // ! Otras opciones para personalizar
  //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  // shuffle: false, // Alterar el orden en el que escribe las palabras.
  // backDelay: 300, // Tiempo de espera despues de que termina de escribir una palabra.
  // loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});

//?  Inicia la animación cuando aparece cada section 
AOS.init({
  duration: 600,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});


const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }


  /**
   * Mobile nav toggle 
   */
//?  Con esto se cambiara el icono del boton cuando se le de click (pero luego no ocultara el nav al seleccionar)
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bx-list-ul')
    this.classList.toggle('bx-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */

// ? Aqui se soluciona el problema anterior y ahora el nav se ocultara a la vez que cambiara el icono del menú nav en mobile
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bx-list-ul')
        navbarToggle.classList.toggle('bx-x')
      }
      scrollto(this.hash)
    }
  }, true)


  

  
