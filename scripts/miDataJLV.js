const dataJLV = {
  sobreMi: ` <p>💻 ¡Bienvenido! Soy un entusiasta Desarrollador Full Stack, con un mayor enfoque en el stack MERN (MongoDB, Express.js, React.js, Node.js). 
  Mi portafolio presenta proyectos que demuestran mi pasión y dedicación por el desarrollo web. Disfruto afrontar nuevos desafíos y cada línea de código refleja mi compromiso con el crecimiento continuo.</p>
  `,
  educación: [

  ],
  habilidades: [
    {frontend: []},
    {backend: []},
    {otras: []}
  ],
  proyectos: [
    {
      nombre: "MyTinerary",
      descripcion: "descripcion de mytinerary",
      img: "assets/img/proyect4.jpg",
      tecnologias: ["vue","css"],
      demo: "https://mytinerarydev.netlify.app/",
      repo: "#",
    },
    {
        nombre: "Harry Potter Data",
        descripcion: "Web SPA realizada con Angular v.16, cuenta con enrutamiento propio de Angular, se utilizó una API para lainformación de los personajes y se utilizó un modal para información más detallada de los personajes.",
        img: "assets/img/proyect4.jpg",
        tecnologias: ["Angular", "Typescrypt", "Bootstrap", "SASS", "HTML"],
        demo: "https://harrypotter-data.web.app/home",
        repo: "https://github.com/JosephV95/Harry-Potter-Data.git",
      },
      {
        nombre: "Amazing Events",
        descripcion: `Proyecto Frontend implementado con Vue js (<i>en repositorio se encuentra disponible el desarrollo en 
            Javascript Vanilla</i>), se utilizó una API donde se obtiene la
            información de los eventos. La página cuenta con dos tipos de filtrado, que pueden ser usados de manera
            única como combinada.`,
        img: "assets/img/proyect3.jpg",
        tecnologias: ["Vue.js", "Javascript", "HTML5 & CSS3", "Bootstrap"],
        demo: "https://josephv95.github.io/Mindhub-Javascript-Task/",
        repo: "https://github.com/JosephV95/Mindhub-Javascript-Task.git",
      },
  ]
}

const contenedorSobreMi = document.getElementById("contenedorSobreMi");
const contenedorProyectos = document.getElementById("contenedorProyectos");

function cargarAbout() {
  contenedorSobreMi.innerHTML = dataJLV.sobreMi  
}
cargarAbout()

function cargarProyectos(unArray) {
    let infoProyectos = ""
    unArray.forEach((ev)=>{ infoProyectos +=
      `<div class="col-md-6 col-lg-5">
        <div class="item-proyect">
          <img src=${ev.img} class="img-fluid rounded" alt="proyecto${ev.name}">
          <div class="detailProyect">
            <h5>${ev.nombre}</h5>
            <div class="text-pro">
              <p>${ev.descripcion} </p>
            </div>
            
            <p><b>Tecnologías y librerías utilizadas:</b>
              ${ev.tecnologias.map(tecnologia => `<span >${tecnologia}, </span>`).join('')}
            </p>
          </div>
          <div class="links row">
            <a href=${ev.demo} target="_blank" class="btn btn-outline-info "><i class="bx bx-link"></i> Demo</a>
            <a href=${ev.repo} target="_blank" class="btn btn-outline-info "><i class="bx bxl-github"></i> Repositorio</a>
          </div>
        </div>
      </div>
      `
    })
    contenedorProyectos.innerHTML = infoProyectos
}

cargarProyectos(dataJLV.proyectos)