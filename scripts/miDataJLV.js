const dataJLV = {
  sobreMi: ` <p>💻 ¡Bienvenido! Soy un entusiasta Desarrollador Full Stack, con un mayor enfoque en el stack MERN (MongoDB, Express.js, React.js, Node.js). 
  Mi portafolio presenta proyectos que demuestran mi pasión y dedicación por el desarrollo web. Disfruto afrontar nuevos desafíos y cada línea de código refleja mi compromiso con el crecimiento continuo.</p>
  `,
  educación: [

  ],
  habilidades: {
    frontend: [
      { name: "HTML5",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`,
      },
      { name: "CSS3",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`,
      },
      { name: "Javascript",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`,
      },
      { name: "React.js",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`,
      },
      { name: "Angular",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg`,
      },
      { name: "Redux",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg`,
      },
      { name: "Typescript",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg`,
      },
      { name: "Bootstrap",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg`,
      },
      { name: "Sass",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg`,
      },
    ],
    backend: [],
    otras: [
      {name:"Scrum",
       url:"https://w7.pngwing.com/pngs/843/823/png-transparent-agile-faculty-practical-strategies-for-managing-research-service-and-teaching-agile-software-development-scrum-computer-icons-computer-software-values-blue-text-trademark.png"
      },
    ]
  },
  proyectos: [
    {
      nombre: "MyTinerary",
      descripcion: "descripcion de mytinerary",
      img: "assets/img/proyect4.jpg",
      tecnologias: [{ nombre: "Angular",
      svg: `<path fill="#B3B3B3" d="M63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path fill="#A6120D" d="M117.536 25.998L63.672 7.629v112.785l45.141-24.983z"></path><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651V7.627z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934H48.044l-7.347 18.374-13.663.254 36.638-81.508L78.499 67.67zm-1.434-3.491L63.77 37.858 52.864 63.726h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888H63.698l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>`,
    }],
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
const contenedorSFront = document.getElementById("contenedorSFront");

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
              ${ev.tecnologias.map(tecnologia => 
                `<span>
            
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="15px" />
          
           ${tecnologia.nombre}, </span>`).join('')}
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

function cargarSFront(array) {
  let skillsFront = array.map(skill => {
    return `
    <span class="text-center " style="width: 8rem;">
      <span>
        <img src=${skill.url} height="50px" />
      </span>
      <p>${skill.name}</p>
    </span>`;
  });

  // con join('') para convertir el array de strings en una sola cadena de texto
  contenedorSFront.innerHTML = skillsFront.join('');
}

cargarSFront(dataJLV.habilidades.frontend);
