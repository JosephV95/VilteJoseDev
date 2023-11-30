const dataJLV = {
  sobreMi: ` <p>💻 ¡Bienvenido! Soy un entusiasta Desarrollador Full Stack, con un mayor enfoque en el stack MERN (MongoDB, Express.js, React.js, Node.js). 
  Mi portafolio presenta proyectos que demuestran mi pasión y dedicación por el desarrollo web. Disfruto afrontar nuevos desafíos y cada línea de código refleja mi compromiso con el crecimiento continuo.</p>
  `,
  educación: [
    { 
      titulo: "DESARROLLADOR WEB FULL STACK MERN",
      fecha: "Julio - Septiembre 2023",
      instituto: "MindHub LA",
      descripcion: "Bootcamp intensivo en el desarrollo e implementación del stack MERN (MongoDB, Express.js, React.js, Node.js), construyendo una base sólida para el desarrollo de aplicaciones web modernas."
    },
    {
      titulo: "DESARROLLADOR WEB FRONTEND",
      fecha: "Enero - Marzo 2023",
      instituto: "MindHub LA",
      descripcion: "Bootcamp centrado en el aprendizaje Frontend mediante la metodología de proyectos reales, evolucionando en dificultad para adquirir las habilidades de un Desarrollador Web."
    },
    { 
      titulo: "DESARROLLADOR WEB FULL STACK",
      fecha: "Diciembre 2021 - Junio 2022",
      instituto: "Argentina Programa 4.0",
      descripcion: "Curso de Desarrollador Web Full-Stack donde se estudian tecnologías de desarrollo Frontend y Backend."
    },
    { 
      titulo: "TÉCNICO UNIVERSITARIO EN MANTENIMIENTO INDUSTRIAL",
      fecha: "2015 - 2018",
      instituto: "ITU - Instituto Tecnológico Universitario (Universidad Nacional de Cuyo)",
      descripcion: "Aptitudes en electricidad, mecánica, automatización, informática, electrónica, entre otras."
    },
  ],
  experiencia: [
    { 
      titulo: "Desarrollador Freelance",
      fecha: "2023 - Presente",
      instituto: "",
      descripcion: `Desarrollador Web Freelance apasionado y especializado en la creación de proyectos dinámicos e innovadores. Destaco por la aplicación práctica de mis conocimientos, demostrando habilidades sólidas en la resolución de problemas y una adaptabilidad proactiva a las tendencias tecnológicas emergentes. `
    },
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
    backend: [
      { name: "Node.js",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg`,
      },
      { name: "Express.js",
        url: `https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png`,
      },
      { name: "MongoDB",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg`,
      },
      { name: "Java",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg`,
      },
      { name: "MySQL",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg`,
      },
      { name: "Postman",
        url: `https://cdn.worldvectorlogo.com/logos/postman.svg`,
      },
    ],
    otras: [
      { name: "Inglés Técnico",
        url: `https://cdn-icons-png.flaticon.com/512/8716/8716483.png`,
      },
      { name: "Git",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg`,
      },
      { name: "Github",
        url: `https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png`,
      },
      { name:"Metodología SCRUM",
        url:"https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png"
      },
    ]
  },
  proyectos: [
    {
      nombre: "MyTinerary",
      descripcion: `Aplicación Web Full Stack con frontend desarrollado en React y JavaScript, haciendo uso de Redux para el manejo de estados. 
        En el backend, se creó una API REST totalmente funcional con operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar la información. Se emplearon Node.js y Express, con MongoDB como base de datos.`,
      img: "assets/img/proyect5.jpg",
      tecnologias: [
        { name: "React",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`,
        },
        { name: "Javascript",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`,
        },
        { name: "Redux",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg`,
        },
        { name: "Bootstrap",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg`,
        },
        { name: "CSS",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`,
        },
        { name: "Node",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg`,
        },
        { name: "Express",
          url: `https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png`,
        },
        { name: "MongoDB",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg`,
        },
      ],
      demo: "https://mytinerarydev.netlify.app/",
      repo: "https://github.com/JosephV95/mytinerary-joseVilte",
    },
    {
      nombre: "Harry Potter Data",
      descripcion: "Proyecto de aplicación web de página única (SPA) que destaca por su enrutamiento integrado con Angular y la integración de una API para obtener datos de personajes. Cuenta con una variedad de filtros, los cuales pueden combinarse para mejorar la experiencia del usuario.",
      img: "assets/img/proyect4.jpg",
      tecnologias: [
        { name: "Angular",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg`,
        },
        { name: "Typescript",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg`,
        },
        { name: "Bootstrap",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg`,
        },
        { name: "HTML5",
        url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`,
        },
        { name: "Sass",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg`,
        },
      ],
      demo: "https://harrypotter-data.web.app/home",
      repo: "https://github.com/JosephV95/Harry-Potter-Data.git",
    },
    {
      nombre: "Mi Portfolio",
      descripcion: `El frontend de mi portfolio actual está creado con HTML y CSS, incorporando funcionalidad e interactividad mediante Javascript Vanilla.`,
      img: "assets/img/proyect6.jpg",
     tecnologias: [
        { name: "HTML5",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`,
        },
        { name: "CSS3",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`,
        },
        { name: "Javascript",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`,
        },
        { name: "Bootstrap",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg`,
        },
     ],
      demo: "https://viltejosedev.netlify.app",
      repo: "https://github.com/JosephV95/VilteJoseDev.git",
    },
    {
      nombre: "Amazing Events",
      descripcion: `Proyecto Frontend implementado con Vue js (<i>en repositorio se encuentra disponible el desarrollo en 
          Javascript Vanilla</i>), la información de los eventos se obtiene de una API. 
          La web cuenta con dos tipos de filtros combinables.`,
      img: "assets/img/proyect3.jpg",
     tecnologias: [
        { name: "Vue.js",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg`,
        },
        { name: "HTML5",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`,
        },
        { name: "CSS3",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`,
        },
        { name: "Javascript",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`,
        },
        { name: "Bootstrap",
          url: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg`,
        },
     ],
      demo: "https://josephv95.github.io/Mindhub-Javascript-Task/",
      repo: "https://github.com/JosephV95/Mindhub-Javascript-Task.git",
    },
  ]
}

const contenedorSobreMi = document.getElementById("contenedorSobreMi");
const contenedorProyectos = document.getElementById("contenedorProyectos");
const contenedorSFront = document.getElementById("contenedorSFront");
const contenedorSBack = document.getElementById("contenedorSBack");
const contenedorSOtras = document.getElementById("contenedorSOtras");
const contenedorEducacion = document.getElementById("contenedorEduc");
const contenedorExperiencia = document.getElementById("contenedorExp");

function cargarAbout() {
  contenedorSobreMi.innerHTML = dataJLV.sobreMi  
}
cargarAbout()

function cargarProyectos(unArray) {
    let infoProyectos = ""
    unArray.forEach((ev)=>{ infoProyectos +=
      `<div class="col-md-6 col-lg-5"  data-aos="zoom-in">
        <div class="item-proyect">
          <img src=${ev.img} class="img-fluid rounded " alt="proyecto${ev.name}" > 
          <div class="detailProyect mt-1">
            <h5>${ev.nombre}</h5>
            <div class="text-pro">
              <p>${ev.descripcion} </p>
            </div>
            
            <p class="d-inline" ><b><i>Tecnologías utilizadas:</i></b></p>
              ${ev.tecnologias.map(tecnologia => `
                <span class="d-inline-block ms-1 tecItem">
                  <img src=${tecnologia.url} height="20px" /> <p class="d-inline pt-2">${tecnologia.name} </p>
                </span>`).join('')}
          </div>
          <div class="links row mt-2">
            <a href=${ev.demo} target="_blank" class="btn btn-outline-warning "><i class="bx bx-link"></i> Demo</a>
            <a href=${ev.repo} target="_blank" class="btn btn-outline-primary "><i class="bx bxl-github"></i> Repo</a>
          </div>
        </div>
      </div>
      `
    })
    contenedorProyectos.innerHTML = infoProyectos
}
cargarProyectos(dataJLV.proyectos)

function cargarSkills(array, unContenedor) {
  let dataSkills = array.map(skill => {
    return `
    <span class="text-center " style="width: 8rem;">
      <span>
        <img src=${skill.url} height="60px" />
      </span>
      <p>${skill.name}</p>
    </span>`;
  });

  // con join('') para convertir el array de strings en una sola cadena de texto
  unContenedor.innerHTML = dataSkills.join('');
}

cargarSkills(dataJLV.habilidades.frontend, contenedorSFront);
cargarSkills(dataJLV.habilidades.backend, contenedorSBack);
cargarSkills(dataJLV.habilidades.otras, contenedorSOtras);

function cargarEducOExp(unArray, unContenedor){
  let infoACargar = unArray.map((item)=>{
    return `
    <div class="resume-item">
      <h4>${item.titulo}</h4>
      <h5>${item.fecha}</h5>
      <p class="mb-1" ><em><b>${item.instituto}</b></em></p>
      <p class="lh-sm fw-light">${item.descripcion}</p>
    </div>`
  });
  unContenedor.innerHTML = infoACargar.join('')
}
cargarEducOExp(dataJLV.educación, contenedorEducacion);
cargarEducOExp(dataJLV.experiencia, contenedorExperiencia)
